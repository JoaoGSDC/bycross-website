import styled from "styled-components";

export const TitleTextContainer = styled.div`
  width: calc(100% - 30px);
  height: 30px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  font-size: 24px;
`;

export const ImgContainer = styled.div`
  position: relative;
  text-align: center;

  img {
    width: 100%;
    opacity: 0.2;
    filter: grayscale(1);
  }

  div {
    flex-wrap: wrap;
    display: flex;
    width: 30%;
    justify-content: center;
    font-size: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (max-width: 800px) {
    div {
      width: calc(100% - 20px);
      font-size: 25px;
      margin-top: 20px;
    }
  }
`;

export const TextByCross = styled.span`
  color: #3efd51;
`;

export const OptionSolutionContainer = styled.div`
  position: relative;
  text-align: center;
  display: flex;
  width: 100%;

  div {
    width: 50%;

    img {
      width: 100%;
      opacity: 0.2;
      filter: grayscale(1);
    }

    @media (max-width: 800px) {
      width: 100% !important;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const MainText = styled.span`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  font-size: 40px;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  color: #3efd51;

  @media (max-width: 800px) {
    font-size: 30px !important;
    top: 25% !important;
    left: 50% !important;
  }
`;

export const DescriptionText = styled.div`
  background-color: #f7f7f7;
  color: #818181;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 40px;
  font-size: 18px;
`;

export const ContactContainer = styled.div`
  background-color: #212121;
  padding: 15px 60px;

  @media (max-width: 800px) {
    padding: 15px 15px !important;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #606060;
`;

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    width: calc(100% - 40px);
    flex-direction: column !important;
  }
`;
