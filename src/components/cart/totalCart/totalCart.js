import styled from "styled-components";

export const StyledTotalCart = styled.div`
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;

  .upper__div {
    padding-top: 1rem;
    border-top: 1px solid #a6a6a6;
    display: flex;
    justify-content: space-between;
  }
  div {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .totalNumber,
  .totalWord {
    color: var(--grey3);
  }
`;
