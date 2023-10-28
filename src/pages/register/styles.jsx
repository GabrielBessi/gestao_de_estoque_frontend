import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const ButtonLink = styled(Link)`
  display: flex;

  width: 70%;
  font-size: 20px;

  color: var(--color-primary-orange);

  :hover {
    color: var(--color-hover-button);
    transition: all 0.35s;
  }
`;

export const RegisterForm = styled.section`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-evenly;

    max-height: 450px;
    min-width: 280px;
    width: 29.28vw;
    height: 65vh;

    background-color: var(--color-second-grey);

    border-radius: 0px 0px 20px 20px;

    box-shadow: 12px 12px 10px -3px rgba(0, 0, 0, 0.1);

    div {
      display: flex;
      flex-direction: column;

      align-items: center;

      min-width: 280px;
      width: 29.28vw;
      height: 70%;
    }

    button {
      width: 72%;
      height: 30px;
      border: none;

      margin-top: -10px;

      background-color: var(--color-primary-orange);
      border-radius: 50px;

      color: var(--color-font-black1);

      position: relative;
      transition: all 0.35s;
    }

    button:hover {
      filter: brightness(1.1);
      transition: all 0.35s;

      cursor: pointer;
    }
  }
`;
