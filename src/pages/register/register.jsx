import { useForm } from "react-hook-form";
import Input from "../../components/inputs/input";
import { ButtonLink as Link, RegisterForm as Section } from "./styles";
import { HeaderForm, PositionForm } from "../login/styles";
import { PiKeyReturnFill } from "react-icons/pi";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  function registerUser(dataUser) {
    console.log(dataUser);
    api
      .post("users", dataUser)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.response.data.error);
      });
  }

  return (
    <PositionForm>
      <Section>
        <HeaderForm>
          <span>Cadastrar-se</span>
        </HeaderForm>
        <form onSubmit={handleSubmit(registerUser)}>
          <Link to={"/"}>
            <PiKeyReturnFill />
          </Link>
          <div>
            <Input
              type="text"
              label="nome"
              placeholder="Digite seu nome"
              dataUser={register("name")}
            />
            <Input
              type="email"
              label="email"
              placeholder="Digite seu email"
              dataUser={register("email")}
            />
            <Input
              type="text"
              label="CNPJ"
              placeholder="Digite o cnpj do seu negócio"
              dataUser={register("cnpj")}
            />
            <Input
              type="password"
              label="Senha"
              placeholder="Digite sua senha"
              dataUser={register("password")}
            />
            <Input
              type="password"
              label="Confirme sua senha"
              placeholder="Confirme sua senha"
              dataUser={register("checkPassword")}
            />
          </div>
          <button type="submit">Finalizar</button>
        </form>
      </Section>
    </PositionForm>
  );
}

export default RegisterPage;
