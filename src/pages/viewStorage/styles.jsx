import styled from "styled-components";

export const SectionStorage = styled.section`
  display: flex;

  position: absolute;
  top: 120px;

  width: 100%;
  /* background-color: blanchedalmond; */
  height: 45vh;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1228px) {
    .table-wrapper {
      max-height: 300px;
      overflow-y: scroll;
    }

    ::-webkit-scrollbar {
      width: 10px;
      border-radius: 10px 0 0 10px;
    }

    ::-webkit-scrollbar-thumb {
      width: 10px;
      background-color: var(--color-primary-orange);
    }
  }
`;

export const TableStorage = styled.table`
  background-color: var(--color-second-grey1);
  border-collapse: collapse;

  align-items: center;

  thead {
    background-color: var(--color-primary-orange);

    height: 45px;
    position: sticky;
    top: 0px;
    tr {
      .storage_code_product {
        border-radius: 10px 0 0 0;
      }
      .storage_details_product {
        border-radius: 0 10px 0 0;
      }
      th {
        position: sticky;
        width: 9.375vw;
        top: 0px;
      }
    }
  }

  tbody {
    background-color: var(--color-second-grey1);
    width: 500px;

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
