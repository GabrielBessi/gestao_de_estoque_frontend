import styled from "styled-components";

export const BoardOutPutStyles = styled.section`
  display: flex;
  flex-direction: column;

  align-content: flex-start;
  margin: 0 auto;

  height: 250px;
  width: 30.603vw;
  min-width: 320px;

  background-color: var(--color-second-grey1);
  border-radius: 20px 20px 20px 20px;
  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.1);

  #titleBoardOutPutProducts {
    display: flex;

    width: 30.603vw;
    min-width: 320px;

    align-items: center;
    justify-content: flex-start;
  }
`;

export const InputSearchProduct = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 0 auto;
  width: 35.603vw;
  max-width: 220px;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.464vw;

    width: 21.961vw;
    max-width: 450px;
    input {
      display: flex;
      width: 19.301vw;
      min-width: 210px;
      max-width: 210px;
    }

    button {
      margin-top: 10px;
      width: 30px;
      height: 30px;
      border-radius: 50px;
      cursor: pointer;

      background-color: var(--color-primary-orange);
      color: var(--color-font-white);
    }
  }
`;

export const FormOutPutProduct = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;

  width: 30.603vw;

  min-width: 320px;
  height: 250px;

  .nameProduct {
    position: relative;
    bottom: 25px;
    left: 20px;
    width: 25.942vw;
    min-width: 265px;
  }

  .inputs_second {
    display: flex;
    align-content: center;
    justify-content: center;

    position: relative;
    bottom: 23px;
    left: -38px;
    gap: 5px;

    width: 27.5vw;
    min-width: 220px;

    @media screen and (max-width: 1020px) {
      width: 18.942vw;
      left: -5px;
    }
  }
  .inputs_second_brand {
    display: flex;
    width: 5.942vw;
    min-width: 60px;
  }
  .inputs_second_amountAvailable {
    display: flex;
    width: 20vw;
    min-width: 177px;
  }

  .input_third {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 1.464vw;
    right: 30px;

    width: 15.5vw;
    min-width: 250px;

    button {
      width: 300px;
      height: 30px;
      cursor: pointer;
      border-radius: 50px;
      background-color: var(--color-hover-button);
      color: white;
    }
  }

  .input_third_amountOut {
    display: flex;
    position: relative;
    width: 30vw;

    bottom: 4px;
  }
`;
