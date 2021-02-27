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

  return (
    <>
      <Sidebar onOpen={open} onClose={(value: any) => setOpen(value)}>
        <OptionsContainerMobile>
          <span>Home</span>
          <span>Serviços</span>
          <span>Contato</span>

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
          <span>Home</span>
          <span>Serviços</span>
          <span>Contato</span>
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
