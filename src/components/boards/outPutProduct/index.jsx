import { useForm } from "react-hook-form";
import Input from "../../inputs/input";
import { BoardOutPutStyles, FormOutPutProduct } from "./styles";
import api from "../../../services/api";
import { productStore } from "../../../store/products/productStore";

function OutPutProduct() {
  const { register, handleSubmit } = useForm();
  const product = productStore((state) => state.getProduct);
  const dataProduct = productStore((state) => state.product);

  function getProduct({ idProduct }) {
    api.get(`/products/${idProduct}`).then((response) => {
      product(response.data);
    });
  }

  return (
    <BoardOutPutStyles>
      <div>
        <p style={{ color: "black" }}>SAÍDA PRODUTO</p>
      </div>
      <div>
        <form onSubmit={handleSubmit(getProduct)}>
          <Input
            type={"text"}
            placeholder={"Código Produto"}
            display={"none"}
            dataUser={register("idProduct")}
          />
          <button type="submit">ok</button>
        </form>
      </div>

      <FormOutPutProduct>
        <Input
          type={"text"}
          placeholder={"Nome do produto"}
          className="nameProduct"
          display={"none"}
          value={dataProduct.name_product}
          readOnly
        />
        <div className="inputs_second">
          <Input
            type={"text"}
            placeholder={"Marca"}
            display={"none"}
            className={"inputs_second_brand"}
            value={dataProduct.brand}
            readOnly
          />
          <Input
            type={"number"}
            placeholder={"Quantidade disponível"}
            display={"none"}
            className={"inputs_second_amountAvailable"}
            value={dataProduct.quantity}
            readOnly
          />
        </div>
        <div className="input_third">
          <Input
            type={"number"}
            placeholder={"Quantidade retirada"}
            display={"none"}
            className={"input_third_amountOut"}
            readOnly
          />
          <button type="submit">Retirar</button>
        </div>
      </FormOutPutProduct>
    </BoardOutPutStyles>
  );
}

export default OutPutProduct;
