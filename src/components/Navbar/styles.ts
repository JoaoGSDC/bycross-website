import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 60px;
  background-color: rgba(25, 25, 25, 0.85);
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: calc(100% - 60px);
  z-index: 1;

  svg {
    width: 25px;
    height: 25px;
    display: none;

    @media (max-width: 800px) {
      display: flex !important;
    }
  }

  img {
    width: 125px;
    margin-right: 90px;

    @media (max-width: 800px) {
      margin-right: 0px !important;
    }
  }
`;

export const ButtonLinkedIn = styled.a`
  background-color: #3efd51;
  padding: 10px 20px;
  border-radius: 100px;
  color: #212121;
  cursor: pointer;
  font-weight: 700;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin-top: 3px;
    display: flex !important;
  }

  @media (max-width: 800px) {
    display: none !important;
  }
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 250px;
  justify-content: space-between;

  @media (max-width: 800px) {
    display: none !important;
  }
`;

export const SpaceItem = styled.span`
  display: none;

  @media (max-width: 800px) {
    display: flex !important;
  }
`;

export const OptionsContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 10px;
  font-size: 25px;
  padding-top: 30px;

  span {
    margin: 20px 0px;
  }

  a {
    display: flex !important;
    height: 30px !important;
    position: absolute;
    bottom: 35px;
    font-size: 20px;
    width: calc(100% - 40px);
  }
`;
