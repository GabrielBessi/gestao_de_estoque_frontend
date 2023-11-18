import styled from "styled-components";

export const FormBoardUpdate = styled.form`
  width: 700px;
  height: 400px;
  margin-top: 10vh;

  background-color: var(--color-second-grey1);

  border-radius: 20px 20px 20px 20px;

  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    margin-top: 3%;
    width: 700px;
    justify-content: center;

    span {
      color: var(--color-font-black1);
      font-weight: 800;
      font-size: 18px;
    }

    /* select {
      border: 1px solid var(--color-second-grey2);
      width: 200px;
      height: 25px;
    } */
  }
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input {
    display: flex;
    border: 1px solid var(--color-second-grey2);
    flex-direction: row;
    padding: 1%;
  }

  .columnInput {
    display: flex;
    margin-top: 2vh;
  }

  .columnInput_1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .columnInput_2 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  textarea {
    border: 1px solid var(--color-second-grey2);
  }

  button {
    background-color: var(--color-success-button);
    color: var(--color-font-white);
    font-weight: 700;
    width: 300px;
    height: 30px;

    border-radius: 50px;
    cursor: pointer;
  }
  button:hover {
    filter: brightness(1.1);
    transition: all 0.5s;
  }
`;
