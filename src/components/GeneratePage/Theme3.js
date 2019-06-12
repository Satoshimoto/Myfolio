import React from "react";
import "../../style/GeneratePage/Theme3.scss";
import man from "../../image/man.jpg";

const Theme3 = props => {
  return (
    <div className="generatePage_theme3_section pdfFileContainer">
      <div className="theme3_headerContainer">
        <div className="darkGreen_container">
          <h1>{props.lang === "Polski" ? "Imię Nazwisko" : "Name Surname"}</h1>
          <p>{props.lang === "Polski" ? "Stanowisko" : "Position"}</p>
        </div>

        <div className="orange_container" />

        <img src={man} alt="man" />
      </div>

      {/* Information */}
      <div className="theme3_context">
        <div className="theme3_contactHobby">
          <h2>{props.lang === "Polski" ? "Kontakt" : "Contact"}</h2>

          <div className="contact">
            <div className="circle_contactIcon">
              <i className="fas fa-phone" />
            </div>
          </div>

          <div className="contact">
            <div className="circle_contactIcon">
              <i className="fas fa-envelope" />
            </div>
          </div>

          <div className="contact phone">
            <div className="circle_contactIcon">
              <i className="fas fa-home" />
            </div>
          </div>

          {/* Hobby header */}
          <h2 className="hobby_header">Hobby</h2>
          <ul className="hobby_ul">
            {props.hobby.map(item => (
              <li key={item.id}>{item.hobby}</li>
            ))}
          </ul>
        </div>

        {/* Experience header */}
        <div className="theme3_experience">
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
                      {props.lang === "Polski" ? "Firma" : "Company: "}
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
                    {item.title.length > 0 ? (
                      <span>
                        {props.lang === "Polski" ? "Tytuł: " : "Title: "}
                      </span>
                    ) : null}
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
            <ul className="ul_experience">
              {props.skills.map(item => (
                <li key={item.id} className="half_element ">
                  <p className="experience_span">
                    {item.skillName} - {item.level}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="calusele">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit saepe
        nesciunt id quod maiores fugit consequatur expedita corporis ratione?
        Itaque suscipit inventore veritatis sed laudantium perspiciatis eius
        aliquid eum ea.
      </div>
    </div>
  );
};

export default Theme3;
