import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  input {
    padding: 20px 190px 20px 10px;
    border-radius: 10px;
    border: solid 1px rgba(168, 168, 168, 0.9);
    position: relative;
    right: -2rem;
  }
  button {
    background-color: var(--color-1);
    padding: 10px 30px;
    border-radius: 10px;
    border: none;
    color: white;
    font-weight: bold;
    position: relative;
    right: 5.8rem;
  }

  @media (min-width: 426px) {
    button {
      cursor: pointer;
    }
  }
`;
