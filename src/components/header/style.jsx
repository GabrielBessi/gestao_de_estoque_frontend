import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;

  /* width: 100vw; */
  height: 6.615vh;
  width: 100vw;

  align-items: center;
  justify-content: center;

  background-color: var(--color-primary-orange);
  box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.3);
`;

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

      border: 2px solid var(--color-font-white);

      border-radius: 50px;
    }
  }
  span {
    cursor: pointer;
  }
`;
