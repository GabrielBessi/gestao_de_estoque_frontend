import styled from "styled-components";

export const BoardOutPutStyles = styled.section`
  display: flex;
  align-items: start;
  justify-content: flex-start;

  flex-direction: column;

  background-color: #f9f9f9;

  border-radius: 20px 20px 20px 20px;

  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.1);

  height: 250px;
  width: 500px;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 0px;
    width: 400px;

    p {
      color: black;
      font-weight: 500;
    }

    form {
      display: flex;
      flex-direction: row;
      align-items: center;
      input {
        width: 250px;
      }
    }
  }
`;

export const FormOutPutProduct = styled.form`
  display: grid;
  justify-content: center;

  margin: 0 auto;

  width: 450px;
  height: 250px;

  .nameProduct {
    display: flex;
    width: 450px;
  }

  .inputs_second {
    display: flex;
    gap: 5px;
  }
  .inputs_second_brand {
    width: 100px;
  }
  .inputs_second_amountAvailable {
    width: 250px;
  }

  .input_third {
    width: 400px;
    justify-content: space-between;
    gap: 100px;
  }

  .input_third_amountOut {
    width: 210px;
  }
`;
