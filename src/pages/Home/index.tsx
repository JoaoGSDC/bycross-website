import React from "react";
import emailjs from "emailjs-com";

import Navbar from "../../components/Navbar";

import logoImg from "../../assets/img/logo_img.svg";
import homeImg from "../../assets/img/home_img.jpg";
import devImg from "../../assets/img/dev_img.jpg";
import designImg from "../../assets/img/design_img.jpg";

import {
  TitleTextContainer,
  ImgContainer,
  TextByCross,
  OptionSolutionContainer,
  MainText,
  DescriptionText,
  ContactContainer,
  FooterContainer,
  FooterTextContainer,
  FieldsContainer,
} from "./styles";

const Home = () => {
  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ky6o0l7",
        "template_namn23r",
        e.target,
        "user_g1HsrgYq2zH8TrHsPWEEY"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <div>
        <Navbar />

        <ImgContainer>
          <img src={homeImg} alt="home" />
          <div>
            <span>Seja bem-vindo a</span>
            <TextByCross>ByCross Software</TextByCross>
          </div>
        </ImgContainer>

        <TitleTextContainer id="service">Serviços</TitleTextContainer>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <OptionSolutionContainer>
            <div>
              <img src={devImg} alt="dev" />
              <MainText>{"<DEV />"}</MainText>
            </div>

            <DescriptionText>
              <div style={{ padding: 25 }}>
                <span>
                  Nosso principal objetivo é de colaborar tanto com a falta de
                  demanda de profissionais desenvolvedores para as empresas,
                  como também a criação das suas ideias tecnológicas para seu
                  negócio!
                </span>
              </div>
            </DescriptionText>
          </OptionSolutionContainer>

          <OptionSolutionContainer
            style={{
              flexDirection: window.innerWidth > 800 ? "row-reverse" : "column",
            }}
          >
            <div>
              <img src={designImg} alt="dev" />
              <MainText style={{ left: "75%" }}>{"<DESIGN />"}</MainText>
            </div>

            <DescriptionText>
              <div style={{ padding: 25 }}>
                <span>
                  Nosso principal objetivo é de colaborar tanto com a falta de
                  demanda de profissionais desenvolvedores para as empresas,
                  como também a criação das suas ideias tecnológicas para seu
                  negócio!
                </span>
              </div>
            </DescriptionText>
          </OptionSolutionContainer>
        </div>

        <TitleTextContainer id="contact">Contato</TitleTextContainer>

        <ContactContainer>
          <form className="contact-form" onSubmit={sendEmail}>
            <FieldsContainer>
              <input type="text" placeholder="Nome" name="from_name" />
              <input type="text" placeholder="E-mail" name="reply_to" />
            </FieldsContainer>

            <textarea placeholder="Digite sua mensagem aqui" name="message" />

            <button type="submit" value="Send">
              ENVIAR
            </button>
          </form>
        </ContactContainer>

        <footer>
          <FooterContainer>
            <img src={logoImg} alt="" />
            <FooterTextContainer>
              <span>© ByCross Software - Limeira(SP)</span>
            </FooterTextContainer>
          </FooterContainer>
        </footer>
      </div>
    </>
  );
};

export default Home;
