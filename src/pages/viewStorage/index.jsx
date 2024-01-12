import Header from "../../components/header";
import { loginStore } from "../../store/loginStore";
import { SectionStorage, TableStorage as Table } from "./styles";
import { BsGearFill } from "react-icons/bs";

function ViewStorage() {
  const productsStorage = loginStore((state) => state.user.products);

  console.log(productsStorage)

  return (
    <>
      <Header />
      <SectionStorage>
        <Table>
          <div className="table-wrapper">
            <thead>
              <tr>
                <th className="storage_code_product">Código</th>
                <th>Produto</th>
                <th>Marca</th>
                <th>Modelo</th>
                <th>Quantidade</th>

                <th>Atualização</th>
                <th className="storage_details_product">Detalhes</th>
              </tr>
            </thead>
            <tbody>
              {productsStorage?.map(
                ({
                  _id,
                  code_product,
                  name_product,
                  brand,
                  model,
                  quantity,
                }) => (
                  <tr key={_id}>
                    <th>{code_product}</th>
                    <th>{name_product}</th>
                    <th>{brand}</th>
                    <th>{model}</th>
                    <th>{quantity}</th>
                    <th>10:10:10</th>
                    <th>
                      <BsGearFill />
                    </th>
                  </tr>
                )
              )}
            </tbody>
          </div>
        </Table>
      </SectionStorage>
    </>
  );
}

export default ViewStorage;
