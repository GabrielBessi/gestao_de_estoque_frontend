import { useForm } from "react-hook-form";
import { HeaderForm, LoginForm, PositionForm } from "./styles";
import Input from "../../components/inputs/input";
import { Link, useNavigate } from "react-router-dom";
import api from "../../services/api";
// import { loginStore } from "../../store/loginStore";

function LoginPage() {
  const { register, handleSubmit } = useForm();
  // const user = loginStore((state) => state.login);
  const navigate = useNavigate();

  function loginUser(dataUser) {
    api
      .post("/users/login", dataUser)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.token);
        const { token } = response.data;
        // user(response.data.user);

        localStorage.setItem("estoque:token", token);

        api.defaults.headers.authorization = `Bearer ${token}`;

        navigate("home");
      })
      .catch((error) => console.log(error.response.data.message));
  }

  return (
    <PositionForm>
      <LoginForm>
        <HeaderForm>
          <span>Login</span>
        </HeaderForm>
        <form onSubmit={handleSubmit(loginUser)}>
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
    </PositionForm>
  );
}

export default LoginPage;
