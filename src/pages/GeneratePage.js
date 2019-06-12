import React from "react";
import "../style/GeneratePage/GeneratePage.scss";
import html2canvas from "html2canvas";
import * as jsPDF from "jspdf";

import Theme1 from "../components/GeneratePage/Theme1";
import Theme2 from "../components/GeneratePage/Theme2";
import Theme3 from "../components/GeneratePage/Theme3";
import ChooseTheme from "../components/GeneratePage/ChooseTheme";

class GeneratePage extends React.Component {
  state = {};

  createPDF = () => {
    let cv = document.querySelector(".pdfFileContainer"); // container with all informations

    let pageSize = window.getComputedStyle(cv, null).getPropertyValue("height"); // checking height of container with files
    pageSize = pageSize.replace("px", "");
    pageSize = parseFloat(pageSize);

    // elongation container with informations
    if (pageSize > 1122 && pageSize < 2257) {
      pageSize = 1128.5 * 2 + "px";
      cv.style.height = pageSize;
    } else if (pageSize > 2257 && pageSize < 3390) {
      pageSize = 1130 * 3 + "px";
      cv.style.height = pageSize;
    } else if (pageSize > 3390 && pageSize < 4520) {
      pageSize = 1130 * 4 + "px";
      cv.style.height = pageSize;
    } else if (pageSize > 4520 && pageSize < 5650) {
      pageSize = 1133 * 5 + "px";
      cv.style.height = pageSize;
    }

    html2canvas(cv).then(canvas => {
      const imgData = canvas.toDataURL("image/png");

      var imgWidth = 210; // container width - pdf
      var pageHeight = 300; // container height - pdf
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;

      var doc = new jsPDF();
      var position = 0;

      doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();

        doc.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      doc.save("Cv_file.pdf");
    });
  };

  render() {
    return (
      <>
        <section className="generatePage_section">
          <div className="generatePage_section_container">
            {this.props.activeTemplate === "1" ? (
              <Theme1
                experience={this.props.experience} // info about user experience - can't be changed
                education={this.props.education}
                skills={this.props.skills}
                hobby={this.props.hobby}
                lang={this.props.lang}
              />
            ) : this.props.activeTemplate === "2" ? (
              <Theme2
                experience={this.props.experience} // info about user experience - can't be changed
                education={this.props.education} // info about user education
                skills={this.props.skills} // info about user skills
                hobby={this.props.hobby} // info about user hooby
                lang={this.props.lang} //info about active language
              />
            ) : this.props.activeTemplate === "3" ? (
              <Theme3
                experience={this.props.experience} // info about user experience - can't be changed
                education={this.props.education} // info about user education
                skills={this.props.skills} // info about user skills
                hobby={this.props.hobby} // info about user hooby
                lang={this.props.lang} //info about active language
              />
            ) : (
              <ChooseTheme lang={this.props.lang} />
            )}

            {this.props.activeTemplate === "" ? null : (
              <div className="saveFile_button" onClick={this.createPDF}>
                {this.props.lang === "Polski"
                  ? "Zapisz jako PDF"
                  : "Save as PDF"}
              </div>
            )}
          </div>
        </section>
      </>
    );
  }
}

export default GeneratePage;
