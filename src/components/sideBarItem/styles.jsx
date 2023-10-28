import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerSideBarItem = styled(Link)`
  display: flex;
  align-items: center;
  background-color: var(--color-primary-orange);
  font-size: 18px;
  width: 200px;
  color: var(--color-font-white);
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 0 20px;

  > svg {
    margin: 0 20px;
  }

  &:hover {
    background-color: var(--color-font-black1);
  }
`;
