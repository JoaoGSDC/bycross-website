import styled from "styled-components";

export const NavContainer = styled.nav`
  height: 60px;
  background-color: rgba(33, 33, 33, 0.85);
  padding: 10px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  width: calc(100% - 60px);
  z-index: 1;

  img {
    width: 125px;
    margin-right: 90px;
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
`;

export const OptionsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;

  width: 250px;
  justify-content: space-between;
`;
