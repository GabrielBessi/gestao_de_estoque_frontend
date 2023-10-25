import styled from "styled-components";

export const ContainerSideBarItem = styled.li`
  display: flex;
  align-items: center;
  background-color: #ffa24d;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 0 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: black;
  }
`;
