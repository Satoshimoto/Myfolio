import React from "react";
import "../../style/GeneratePage/Theme2.scss";
import woman from "../../image/woman.png";

import home from "../../image/home_icon2.png";
import email from "../../image/email_icon2.png";
import phone from "../../image/phone_icon2.png";

const Theme2 = props => {
  return (
    <>
      <div className="generatePage_theme2_section pdfFileContainer">
        <div className="theme2_imgContainer">
          <div>
            <img src={woman} alt="woman" />
            <p>{props.lang === "Polski" ? "Imię Nazwisko" : "Name Surname"}</p>
          </div>
        </div>
        <div className="theme2_contactContainer">
          <div className="contact phone">
            <div className="circle_contactIcon">
              {/* <i className="fas fa-phone" /> */}
              <img src={phone} alt="phone icon" />
            </div>
          </div>

          <div className="contact email">
            <div className="circle_contactIcon">
              {/* <i className="fas fa-envelope" /> */}
              <img src={email} alt="email icon" />
            </div>
          </div>

          <div className="contact address">
            <div className="circle_contactIcon">
              {/* <i className="fas fa-home" /> */}
              <img src={home} alt="home icon" />
            </div>
          </div>
        </div>

        {/* Experience header */}
        <div className="experience_header">
          {props.experience.length > 0 ? (
            <h3 className="headers">
              {props.lang === "Polski" ? "Doświadczenie" : "Experience"}
            </h3>
          ) : null}
          <ul className="ul_experience">
            {props.experience.map(item => (
              <li key={item.id} className="borderBottom">
                {props.lang === "Polski" ? "Rok: " : "Data: "}
                <span className="experience_spanDate">{item.date}</span>
                <p className="experience_span">
                  <span>
                    {props.lang === "Polski"
                      ? "Nazwa firmy: "
                      : "Company name: "}
                  </span>
                  {item.company}
                </p>
                <p className="experience_span">
                  <span>
                    {props.lang === "Polski" ? "Stanowisko: " : "Position: "}
                  </span>
                  {item.position}
                </p>
              </li>
            ))}
          </ul>

          {/* Education header */}
          {props.education.length > 0 ? (
            <h3 className="headers">
              {props.lang === "Polski" ? "Edukacja" : "Education"}
            </h3>
          ) : null}
          <ul className="ul_experience">
            {props.education.map(item => (
              <li key={item.id}>
                {props.lang === "Polski" ? "Rok: " : "Data: "}
                <span className="experience_spanDate">{item.date}</span>
                <p className="experience_span">
                  <span>
                    {props.lang === "Polski"
                      ? "Nazwa szkoły: "
                      : "School name: "}
                  </span>
                  {item.school}
                </p>
                <p className="experience_span">
                  <span>
                    {props.lang === "Polski" ? "Kierunek: " : "Way: "}
                  </span>
                  {item.way}
                </p>
                <p className="experience_span">
                  <span>{props.lang === "Polski" ? "Tytuł: " : "Title: "}</span>{" "}
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

          {/* Skills header */}
          {props.skills.length > 0 ? (
            <h3 className="headers">
              {props.lang === "Polski" ? "Umiejętności" : "Skills"}
            </h3>
          ) : null}
          <ul className="ul_experience half_with_elements">
            {props.skills.map(item => (
              <li key={item.id} className="half_element ">
                <p className="experience_span">
                  {item.skillName} - {item.level}
                </p>
              </li>
            ))}
          </ul>

          {/* Hobby header */}
          {props.hobby.length > 0 ? <h3 className="headers">Hobby</h3> : null}
          <ul className="ul_experience half_with_elements">
            {props.hobby.map(item => (
              <li key={item.id} className="half_element ">
                <p className="experience_span">{item.hobby}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="clausule">
          <p>
            Privacy policy - Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Voluptatibus fuga, minus totam quis ipsa optio. Perspiciatis
            minus sed blanditiis laborum error eligendi. Porro, consequatur
            nihil rem quos commodi praesentium numquam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Theme2;
