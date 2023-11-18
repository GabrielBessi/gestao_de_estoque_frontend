import api from "../../services/api";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";
import { FormBoardUpdate as Form } from "./styles";

function BoardUpdateStorage() {
  const { register, handleSubmit } = useForm();

  function updateProduct(dataProduct) {
    api
      .post("products/new", { ...dataProduct, type: "entrada" })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }

  return (
    <Form onSubmit={handleSubmit(updateProduct)}>
      <div>
        <span>ATUALIZAR ESTOQUE</span>
      </div>
      <div className="columnInput">
        <div className="columnInput_1">
          <Input
            type={"number"}
            placeholder={"Código do produto"}
            display={"none"}
            dataUser={register("code_product")}
          />
          <Input
            type={"text"}
            placeholder={"Nome do produto"}
            display={"none"}
            dataUser={register("name_product")}
          />
          <Input
            type={"number"}
            placeholder={"Preço unitário"}
            display={"none"}
            dataUser={register("price")}
          />
        </div>
        <div className="columnInput_2">
          <Input
            type={"number"}
            placeholder={"Quantidade"}
            display={"none"}
            dataUser={register("quantity")}
          />
          <Input
            type={"text"}
            placeholder={"Marca"}
            display={"none"}
            dataUser={register("brand")}
          />
          <Input
            type={"text"}
            placeholder={"Modelo"}
            display={"none"}
            dataUser={register("model")}
          />
        </div>
      </div>
      <div>
        <textarea
          name="informationProduct"
          id="informationProduct"
          cols="80"
          rows="4"
          placeholder="Observações sobre o produto"
          {...register("description")}
        />
      </div>
      <div>
        <button type="submit">Adicionar</button>
      </div>
    </Form>
  );
}

export default BoardUpdateStorage;
