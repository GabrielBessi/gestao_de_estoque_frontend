import styled from "styled-components";

export const SectionStorage = styled.section`
  display: flex;

  width: 100%;
  background-color: blanchedalmond;
  height: 45vh;

  align-items: center;
  justify-content: center;
`;

export const TableStorage = styled.table`
  background-color: var(--color-second-grey1);
  border-collapse: collapse;

  width: 80%;

  align-items: center;

  thead {
    background-color: var(--color-primary-orange);
    height: 45px;
    tr {
      .storage_code_product {
        border-radius: 10px 0 0 0;
      }
      .storage_details_product {
        border-radius: 0 10px 0 0;
      }
      th {
      }
    }
  }

  tbody {
    background-color: var(--color-second-grey1);

    tr {
      height: 35px;
      th {
        color: var(--color-font-black1);
        > svg {
          cursor: pointer;
        }
      }
    }
  }
`;
