import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;

  /* width: 100vw; */
  height: 6.615vh;

  align-items: center;
  justify-content: center;

  background-color: #ffa24d;
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.3);
`;

export const BoardsHomeStyle = styled.main`
  display: flex;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  margin-top: 110px;

  div {
    display: flex;

    width: 90vw;

    margin-left: 60px;
  }
`;
