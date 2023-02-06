import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f5f5f5;
  padding-bottom: 2rem;

  .img__div {
    justify-content: center;
    display: flex;

    img {
      width: 60%;
    }
  }

  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

  html {
    font-family: "Inter", sans-serif;
  }

  @media (min-width: 426px) {
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 2rem 10rem;
    max-width: 1440px;
    width: 100%;
    margin: 0;

    .img__div {
      width: 45%;
    }
    .inputSearch {
    }
  }
`;
