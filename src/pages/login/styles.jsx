import { styled } from "styled-components";

export const HeaderForm = styled.div`
  display: flex;

  justify-content: center;
  place-items: center;

  min-width: 280px;
  width: 29.28vw;
  height: 40px;

  color: white;
  font-weight: 800;
  font-size: 20px;
  background-color: #ffa24d;

  border-radius: 20px 20px 0px 0px;
`;

export const LoginForm = styled.section`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: space-evenly;

    min-width: 280px;
    width: 29.28vw;
    height: 300px;

    background-color: #f9f9f9;

    border-radius: 0px 0px 20px 20px;

    box-shadow: 12px 12px 10px -3px rgba(0, 0, 0, 0.1);

    div {
      display: flex;
      flex-direction: column;

      align-items: center;

      min-width: 280px;
      width: 29.28vw;
    }

    p {
      color: black;
      font-size: 12px;
    }

    button {
      width: 70%;
      height: 30px;
      border: none;

      margin-top: 20px;

      background-color: #ffa24d;
      border-radius: 50px;

      color: white;

      position: relative;
      transition: all 0.35s;
    }

    span {
      font-weight: 700;
      position: relative;
      z-index: 2;
    }

    button:after {
      position: absolute;
      content: "";
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: #33ff0099;
      transition: all 0.35s;
      border-radius: 50px;
    }

    button:hover {
      color: #fff;
      cursor: pointer;
    }

    button:hover:after {
      width: 100%;
    }
  }
`;
