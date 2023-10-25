import { styled } from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  width: 80%;
  height: 45px;

  div {
    display: flex;
    flex-direction: row;
    gap: 20px;

    align-items: center;

    img {
      display: flex;

      width: 40px;
      height: 40px;

      border: 2px solid white;

      border-radius: 50px;
    }
  }
  span {
    cursor: pointer;
  }
`;
