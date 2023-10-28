import styled from "styled-components";

export const SectionStorage = styled.section`
  display: flex;

  width: 100%;
  background-color: blanchedalmond;

  align-items: center;
  justify-content: center;
`;

export const TableStorage = styled.table`
  background-color: #f9f9f9;

  width: 80%;

  align-items: center;

  thead {
    background-color: #ffa24d;
  }

  tbody {
    background-color: black;

    tr {
      th {
        > svg {
          cursor: pointer;
        }
      }
    }
  }
`;
