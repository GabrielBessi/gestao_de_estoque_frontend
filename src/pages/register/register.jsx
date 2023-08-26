import { useForm } from "react-hook-form";
import Input from "../../components/inputs/input";
import { loginStore } from "../../store/loginStore";
import { ButtonLink as Link, RegisterForm as Section } from "./styles";
import { HeaderForm } from "../login/styles";
import { PiKeyReturnFill } from "react-icons/pi";

function RegisterPage() {
  const { register, handleSubmit } = useForm();
  const newRegister = loginStore((state) => state.newRegister);

  function dataRegister(data) {
    newRegister(data);
  }

  return (
    <Section>
      <HeaderForm>
        <span>Cadastrar-se</span>
      </HeaderForm>
      <form onSubmit={handleSubmit(dataRegister)}>
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
  );
}

export default RegisterPage;
