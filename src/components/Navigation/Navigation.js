import React from "react";
import "../../style//Navigation/Navigation.scss";
import LogoMenu from "./LogoMenu";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import Hamburger from "./Hamburger";

const Navigation = props => {
  function handleOpenMobileMenu() {
    let mobileMenu = document.querySelector(".navigation_section_mobileMenu");
    let ulInMenu = document.querySelector(".navigation_section_mobileMenu ul");
    let liInUl = document.querySelectorAll(
      ".navigation_section_mobileMenu ul li"
    );
    // Hamburger lines
    let lineOne = document.querySelector(".hamburgerSection_first");
    let lineTwo = document.querySelector(".hamburgerSection_second");
    let lineThree = document.querySelector(".hamburgerSection_third");
    //
    let hamburger = document.querySelector(
      ".navigation_section_hamburgerSection"
    );
    //checking that mobile menu is open or not
    if (hamburger.classList.contains("open")) {
      hamburger.classList.remove("open");
      mobileMenu.style.animation = "0.7s ease-in-out closeMobileMenu forwards";
      ulInMenu.style.animation = "0.7s ease-in-out ulAnimationClose forwards";
      lineOne.style.animation = "0.4s ease-in-out firstLineClose forwards";
      lineTwo.style.animation = "0.1s ease-in-out secondLineClose forwards";
      lineThree.style.animation = "0.4s ease-in-out thirdLineClose forwards";
      document.documentElement.scrollTop = 0;
      [...liInUl].forEach(item => {
        item.style.animation = "0.2s ease-in-out hideElements forwards";
        item.style.display = "none";
      });
    } else {
      hamburger.classList.add("open");
      mobileMenu.style.animation = "1s ease-in-out openMobileMenu forwards";
      ulInMenu.style.display = "block";
      ulInMenu.style.animation = "0.6s ease-in-out ulAnimationOpen forwards";
      lineOne.style.animation = "0.4s ease-in-out firstLineOpen forwards";
      lineTwo.style.animation = "0.4s ease-in-out secondLineOpen forwards";
      lineThree.style.animation = "0.4s ease-in-out thirdLineOpen forwards";
      [...liInUl].forEach(item => {
        item.style.animation = "0.1s 0.5s ease-in-out showElements forwards";
        item.style.display = "block";
      });
    }
  }

  return (
    <>
      <nav className="navigation_section">
        <div className="menu">
          {/* logo - link to home page */} <LogoMenu />
          {/* desktop menu */}
          <MenuDesktop
            lang={props.lang}
            changeLanguage={props.changeLanguage}
          />
          {/* mobile  - hamburger */}
          <Hamburger onClick={handleOpenMobileMenu} />
        </div>
        {/* mobile menu */}
        <MenuMobile
          closeMenu={handleOpenMobileMenu}
          lang={props.lang}
          changeLanguage={props.changeLanguage}
        />

        {/* select language section */}
        <div className="lang">
          <p> {props.lang === "Polski" ? "Język" : " Language:"}</p>
          <select
            className="select_lang_mobile"
            onChange={e => props.changeLanguage(e)}
            //change language
          >
            <option value="Polski">Polski</option>
            <option value="English">English</option>
          </select>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
