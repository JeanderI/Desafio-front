import styled from "styled-components";

export const ItensTech = styled.li`
  padding: 20px;
  background-color: var(--background);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  color: var(--Grey-0);
  border-radius: 4px;
  align-items: center;
  text-align: center;
  h3 {
    margin: 0;
  }
  div {
    display: flex;
    gap: 30px;
  }

  button {
    background-color: transparent;
    border: none;
    color: var(--Grey-0);
    font-size: 20px;
    cursor: pointer;
  }
`;
