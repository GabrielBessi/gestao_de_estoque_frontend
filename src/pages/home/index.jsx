import Header from "../../components/header";
import { loginStore } from "../../store/loginStore";
import { HeaderStyle } from "./style";

function HomePage() {
  const dataUser = loginStore((state) => state.user);

  console.log(dataUser);

  return (
    <HeaderStyle>
      <Header />
    </HeaderStyle>
  );
}

export default HomePage;
