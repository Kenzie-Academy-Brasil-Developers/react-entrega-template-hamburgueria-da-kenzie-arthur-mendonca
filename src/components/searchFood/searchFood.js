import styled from "styled-components";

export const StyledSectionSearch = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: auto;

  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-left: 1rem;

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
      font-size: 19px;
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

    button:hover {
      filter: brightness(1.1);
    }

    html {
      font-family: "Inter", sans-serif;
    }
  }

  @media (min-width: 426px) {
    overflow: unset;
    flex-wrap: wrap;
    flex-direction: row;

    li {
      width: 12vw;
      padding: 10px 34px;
      .img__div {
        img {
          min-width: 10vw;
        }
      }
    }
  }
`;
