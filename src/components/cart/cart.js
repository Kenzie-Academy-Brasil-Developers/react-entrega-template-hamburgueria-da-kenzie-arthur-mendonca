import styled from "styled-components";

export const StyledCart = styled.section`
  background-color: lightgrey;
  min-height: 50vh;
  margin: 1rem 1rem;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  align-items: center;

  header {
    background-color: var(--color-1);
    height: max-content;
    padding: 1.5rem 0;
    width: 100%;
    border-radius: 10px 10px 0 0;
    display: flex;

    h2 {
      padding-left: 2rem;
      color: white;
      font-weight: bold;
    }
  }
  .emptyCart {
    font-weight: bold;
    margin-top: 4rem;
  }

  html {
    font-family: "Inter", sans-serif;
  }
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");
  @media (min-width: 426px) {
    width: 50%;
  }
`;
