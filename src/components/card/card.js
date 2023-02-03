import styled from "styled-components";
import "../../global/global.css";
import "../../global/reset.css";

export const StyledSection = styled.section`
  width: 100%;
  height: 100%;

  @media (min-width: 426px) {
    max-width: 1440px;
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const StyledCard = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;

  gap: 2rem;
  padding-top: 1.8rem;
  padding-bottom: 1rem;
  padding-left: 1rem;

  /* background-color: darkcyan; */

  li {
    display: flex;
    flex-direction: column;
    border: solid rgba(245, 245, 245, 1) 5px;
    width: 30vw;
    border-radius: 10px;
    justify-content: space-between;
    box-shadow: 0px 0px 10px lightgray;
    padding: 10px 50px;
  }

  .img__div {
  }

  img {
    min-width: 30vw;
    object-fit: cover;
    /* background-color: #f5f5f5; */
  }

  .product__info-wrapper {
    display: flex;
    flex-direction: column;
    gap: 15px;

    h5 {
      font-weight: bold;
      font-size: 22px;
    }

    span {
      font-weight: light;
      color: grey;
    }

    p {
      color: var(--color-1);
      font-weight: bold;
    }

    button {
      background-color: var(--color-1);
      border: none;
      padding: 10px 10px;
      border-radius: 10px;
      color: white;
      font-weight: bold;
    }
  }
`;
