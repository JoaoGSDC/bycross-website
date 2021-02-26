import React from "react";
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
} from "./styles";

const Home = () => {
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

        <TitleTextContainer>Serviços</TitleTextContainer>

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
              <div>
                <span>
                  Nosso principal objetivo é de colaborar tanto com a falta de
                  demanda de profissionais desenvolvedores para as empresas,
                  como também a criação das suas ideias tecnológicas para seu
                  negócio!
                </span>
              </div>
            </DescriptionText>
          </OptionSolutionContainer>

          <OptionSolutionContainer style={{ flexDirection: "row-reverse" }}>
            <div>
              <img src={designImg} alt="dev" />
              <MainText style={{ left: "75%" }}>{"<DESIGN />"}</MainText>
            </div>

            <DescriptionText>
              <div>
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

        <TitleTextContainer>Contato</TitleTextContainer>

        <ContactContainer>
          <form>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="E-mail" />
            </div>

            <textarea placeholder="Digite sua mensagem aqui" />

            <button>ENVIAR</button>
          </form>
        </ContactContainer>

        <footer>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={logoImg} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                color: "#606060",
              }}
            >
              <span>© ByCross Software - Limeira(SP)</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;
