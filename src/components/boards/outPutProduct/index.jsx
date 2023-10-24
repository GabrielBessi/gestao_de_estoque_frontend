import { useForm } from "react-hook-form";
import Input from "../../inputs/input";
import {
  BoardOutPutStyles,
  FormOutPutProduct,
  InputSearchProduct,
} from "./styles";
import api from "../../../services/api";
import { productStore } from "../../../store/products/productStore";
import { FaSearch } from "react-icons/fa";

function OutPutProduct() {
  const { register, handleSubmit } = useForm();
  const product = productStore((state) => state.getProduct);
  const dataProduct = productStore((state) => state.product);

  function getProduct({ idProduct }) {
    api
      .get(`/products/${idProduct}`)
      .then((response) => {
        console.log(response.data);
        product(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  function outProduct({ quantity }) {
    let productData = {
      code_product: dataProduct.code_product,
      quantity: parseInt(quantity),
    };

    api
      .patch(`/products/exit-of-products`, productData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  }

  return (
    <BoardOutPutStyles>
      <div id="titleBoardOutPutProducts">
        <span style={{ color: "black" }}>SAÍDA PRODUTO</span>
      </div>
      <InputSearchProduct>
        <form onSubmit={handleSubmit(getProduct)}>
          <Input
            type={"text"}
            placeholder={"Código Produto"}
            display={"none"}
            dataUser={register("idProduct")}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
      </InputSearchProduct>

      <FormOutPutProduct onSubmit={handleSubmit(outProduct)}>
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
            dataUser={register("quantity")}
          />
          <button type="submit">Retirar</button>
        </div>
      </FormOutPutProduct>
    </BoardOutPutStyles>
  );
}

export default OutPutProduct;
