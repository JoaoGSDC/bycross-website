import React, { useState } from "react";
import { FaLinkedin, FaBars } from "react-icons/fa";
import Sidebar from "../../components/Sidebar";

import {
  NavContainer,
  ButtonLinkedIn,
  OptionsContainer,
  SpaceItem,
  OptionsContainerMobile,
} from "./styles";

import logoImg from "../../assets/img/logo_img.svg";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  function definePosition(type: string = "") {
    let element;
    let offset;
    let bodyRect;
    let elementRect;
    let elementPosition;
    let offsetPosition;

    switch (type) {
      case "service":
        element = document.getElementById("service");
        offset = 80;
        bodyRect = document.body.getBoundingClientRect().top;
        elementRect = element?.getBoundingClientRect().top || 0;
        elementPosition = elementRect - bodyRect;
        offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        break;

      case "contact":
        element = document.getElementById("contact");
        offset = 80;
        bodyRect = document.body.getBoundingClientRect().top;
        elementRect = element?.getBoundingClientRect().top || 0;
        elementPosition = elementRect - bodyRect;
        offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        break;

      default:
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
    }
  }

  return (
    <>
      <Sidebar onOpen={open} onClose={(value: any) => setOpen(value)}>
        <OptionsContainerMobile>
          <span onClick={() => definePosition()}>Home</span>
          <span onClick={() => definePosition("service")}>Serviços</span>
          <span onClick={() => definePosition("contact")}>Contato</span>

          <ButtonLinkedIn
            href="https://www.linkedin.com/company/bycross-software/"
            target="_blank"
          >
            <FaLinkedin style={{ display: "flex" }} />
            <span>LinkedIn</span>
          </ButtonLinkedIn>
        </OptionsContainerMobile>
      </Sidebar>

      <NavContainer>
        <OptionsContainer>
          <span onClick={() => definePosition()}>Home</span>
          <span onClick={() => definePosition("service")}>Serviços</span>
          <span onClick={() => definePosition("contact")}>Contato</span>
        </OptionsContainer>

        <FaBars onClick={() => setOpen(true)} />

        <img src={logoImg} alt="" />

        <SpaceItem />

        <ButtonLinkedIn
          href="https://www.linkedin.com/company/bycross-software/"
          target="_blank"
        >
          <FaLinkedin style={{ display: "flex" }} />
          <span>LinkedIn</span>
        </ButtonLinkedIn>
      </NavContainer>
    </>
  );
};

export default Navbar;
