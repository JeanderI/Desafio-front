import styled from "styled-components";

export const AddTec = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  h2 {
    color: var(--Grey-0);
  }
  button {
    display: flex;
    align-items: center;
    background-color: var(--Grey-3);
    color: var(--Grey-0);
    padding: 7px 14px;
    border-radius: 4px;
    font-size: 20px;
    cursor: pointer;
    border: none;

    &:hover {
      background-color: var(--Grey-2);
    }
  }
`;
