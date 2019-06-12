import React from "react";
import "../../style/GeneratePage/Theme1.scss";
import woman from "../../image/woman.png";

import email from "../../image/email_icon1.png";
import phone from "../../image/phone_icon1.png";
import user from "../../image/user_icon1.png";
import home from "../../image/home_icon1.png";

const Theme1 = props => {
  return (
    <div className="generatePage_theme1_section pdfFileContainer">
      <div className="blueElement">
        <div className="box_whiteBorder" />
        <div className="imageElement">
          <img src={woman} alt="portair" />
        </div>

        <h3 className="name_surname">
          {props.lang === "Polski" ? "Imię Nazwisko" : "Name Surname"}
        </h3>
        <h4 className="position">
          {props.lang === "Polski" ? "Stanowisko" : "Position"}
        </h4>

        <div className="personal_Info">
          <h3>{props.lang === "Polski" ? "INFOMRACJE" : "INFO"}</h3>

          <div className="personal_container">
            <div>
              {/* <i className="fas fa-user" data-html2canvas-ignore="true" /> */}
              <img src={user} alt="user icon" />
            </div>
          </div>

          <div className="personal_container">
            <div className="home_circle">
              {/* <i className="fas fa-home" data-html2canvas-ignore="true" /> */}
              <img src={home} alt="home icon" />
            </div>
          </div>
        </div>

        <div className="hobby_Info">
          <h3>HOBBY</h3>
          <ul>
            {props.hobby.map(item => (
              <li key={item.id}>{item.hobby}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* contact information */}
      <div className="contentElement">
        <div className="phone_email_container">
          <div className="phone">
            <div className="circle_phoneIcon">
              {/* <i className="fas fa-phone" data-html2canvas-ignore="true" /> */}
              <img src={phone} alt="phone icon" />
            </div>
          </div>

          <div className="email">
            <div className="circle_emailIcon">
              {/* <i className="fas fa-envelope" /> */}
              <img src={email} alt="email icon" />
            </div>
          </div>
        </div>

        {/* experience header */}
        <div className="experience_header">
          {props.experience.length > 0 ? (
            <h3 className="headers">
              {props.lang === "Polski" ? "Doświadczenie" : "Experience"}
            </h3>
          ) : null}
          <ul className="ul_experience">
            {props.experience.map(item => (
              <li key={item.id}>
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

          {/* education header */}
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
                  <span>{props.lang === "Polski" ? "Tytuł: " : "Title: "}</span>
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

          {/* skills header */}

          {props.skills.length > 0 ? (
            <h3 className="headers">
              {props.lang === "Polski" ? "Umiejętności" : "Skills"}
            </h3>
          ) : null}
          <ul className="ul_experience skills">
            {props.skills.map(item => (
              <li key={item.id}>
                <p className="experience_span">
                  {item.skillName} - {item.level}
                </p>
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
    </div>
  );
};

export default Theme1;
