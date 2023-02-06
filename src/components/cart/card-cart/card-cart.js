import styled from "styled-components";

export const StyledCartList = styled.ul`
  margin: 0 1rem;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .imgDiv {
      display: flex;

      width: 33.33%;
    }
    .imgDiv img {
    }

    .middleDiv {
      display: flex;
      flex-direction: column;
      width: 33.33%;

      small {
        opacity: 0.5;
      }
    }

    .lastDiv {
      width: 33.33%;

      button {
        border: none;
        border-radius: 10px;
        padding: 5px 9px;
      }
    }
  }

  html {
    font-family: "Inter", sans-serif;
  }

  @media (min-width: 426px) {
  }
`;
