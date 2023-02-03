import styled from "styled-components";

export const AppStyle = styled.div`
  .App {
    text-align: center;
    background-color: #282c3480;
    height: 100vh;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 426px) {
    .App {
    }

    .frontPage__wrapper {
      display: flex;
      flex-direction: row;
      max-width: 1440px;
      width: 100%;
      display: flex;
      align-items: flex-start;
    }
  }
`;
