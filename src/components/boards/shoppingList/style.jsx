import styled from "styled-components";

export const ShoppingStyle = styled.section`
  display: flex;
  flex-direction: column;
  color: black;

  align-items: center;

  /* border: 1px solid black; */
  background-color: #f9f9f9;

  border-radius: 20px 20px 20px 20px;

  box-shadow: 0px 0px 4px 5px rgba(0, 0, 0, 0.1);

  height: 60.076vh;
  width: 22.531vw;
`;

export const ListProductsStyle = styled.ul`
  display: flex;

  /* background-color: beige; */
  justify-content: center;

  height: 60.076vh;
  width: 19vw;

  li {
    display: flex;
    align-items: center;

    margin-left: -40px;
    padding: 0px 5px 0px 5px;

    height: 40px;
    width: 110%;

    justify-content: space-between;
    background-color: #ffa24d;

    border-radius: 10px;

    span {
      color: white;
    }
  }
`;
