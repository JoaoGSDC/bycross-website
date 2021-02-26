import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    color: #ffffff;
    background-color: #212121;
    font-family: 'Roboto', sans-serif;
  }

  #root {
    height: 100%;
  }

  input {
    height: 50px;
    background-color: #181818;
    color: #c7c7c7;
    border: 1px solid #272727;
    padding: 0px 10px;
    width: 100%;
    font-size: 16px;
    margin: 0px 10px;
  }

  textarea {
    height: 150px;
    background-color: #181818;
    color: #c7c7c7;
    border: 1px solid #272727;
    padding: 10px 10px;
    width: calc(100% - 40px);
    font-size: 16px;
    margin: 10px 10px;
    font-family: 'Roboto', sans-serif;
    resize: none;
  }

  button {
    background-color: #3efd51;
    height: 50px;
    border: 1px solid #272727;
    width: calc(100% - 20px);
    font-size: 16px;
    font-weight: 700;
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  footer {
    height: 140px;
    background-color: #181818;
    padding: 60px;

    img {
      width: 200px;
      margin-bottom: 30px;
    }
  }
`;
