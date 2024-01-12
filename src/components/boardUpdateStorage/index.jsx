import api from "../../services/api";
import { useForm } from "react-hook-form";
import Input from "../inputs/input";
import { FormBoardUpdate as Form } from "./styles";

function BoardUpdateStorage() {
  const { register, handleSubmit } = useForm();

  async function updateProduct(dataProduct) {

    if (dataProduct.type_action === "new") {
      delete dataProduct.type_action

      await api
      .post(`products/new`, {
        ...dataProduct,
        type: "entrada",
        updatedAt: new Date().toDateString(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
      
    } else {
      delete dataProduct.type_action

      await api
      .patch(`products/${dataProduct.code_product}`, {
        ...dataProduct,
        type: "entrada",
        updatedAt: new Date().toDateString(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    }

    delete dataProduct.type_action

    console.log("state", dataProduct);


  }

  return (
    <Form onSubmit={handleSubmit(updateProduct)}>
      <select name="" id="" {...register("type_action")}>
        <option value="new">Adicionar novo produto</option>
        <option value="updated_product">Atualizar Estoque</option>
      </select>
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
