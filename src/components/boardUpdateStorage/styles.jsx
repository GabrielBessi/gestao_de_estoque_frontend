import styled from "styled-components";

export const FormBoardUpdate = styled.form`
  display: flex;
  flex-direction: column;
  width: 54.6875vw;
  min-width: 310px;
  height: 400px;
  margin-top: 10vh;
  align-items: center;
  justify-content: center;

  background-color: var(--color-second-grey1);

  border-radius: 20px 20px 20px 20px;

  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    margin-top: 3%;
    width: 54.6875vw;
    justify-content: center;

    span {
      color: var(--color-primary-orange);
      font-weight: 800;
      font-size: 18px;

      @media screen and (max-width: 356px) {
        font-size: 15px;
      }
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
    width: 19.84vw;
    min-width: 120px;
    border: 1px solid var(--color-second-grey2);
    flex-direction: row;
    padding: 1%;
  }

  .columnInput {
    display: flex;
    margin-top: 2vh;
    gap: 20px;
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
    width: 48.4375vw;
    min-width: 265px;
  }

  button {
    background-color: var(--color-primary-orange);
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
