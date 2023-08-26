import { useForm } from "react-hook-form";
import { HeaderForm, LoginForm } from "./styles";
import { loginStore } from "../../store/loginStore";
import Input from "../../components/inputs/input";
import { Link } from "react-router-dom";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  const login = loginStore((state) => state.login);

  function dataLogin(data) {
    login(data);
  }

  return (
    <LoginForm>
      <HeaderForm>
        <span>Login</span>
      </HeaderForm>
      <form onSubmit={handleSubmit(dataLogin)}>
        <div>
          <Input
            type="email"
            label="Email"
            placeholder="Digite seu email"
            dataUser={register("email")}
          />
          <Input
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            dataUser={register("password")}
          />
          <button type="submit">
            <span>Acessar</span>
          </button>
        </div>
        <p>
          Não possui conta? <Link to={"register"}>Clique aqui</Link> e
          cadastra-se
        </p>
      </form>
    </LoginForm>
  );
}

export default LoginPage;
