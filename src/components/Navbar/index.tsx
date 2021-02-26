import React from "react";
import { NavContainer, ButtonLinkedIn, OptionsContainer } from "./styles";

import logoImg from "../../assets/img/logo_img.svg";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <OptionsContainer>
          <span>Home</span>
          <span>Serviços</span>
          <span>Contato</span>
        </OptionsContainer>

        <img src={logoImg} alt="" />

        <ButtonLinkedIn
          href="https://www.linkedin.com/company/bycross-software/"
          target="_blank"
        >
          LinkedIn
        </ButtonLinkedIn>
      </NavContainer>
    </>
  );
};

export default Navbar;
