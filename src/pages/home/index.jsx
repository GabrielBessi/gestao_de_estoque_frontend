import ShoppingList from "../../components/boards/shoppingList";
import Header from "../../components/header";
import { loginStore } from "../../store/loginStore";
import { BoardsHomeStyle, HeaderStyle } from "./style";

function HomePage() {
  const dataUser = loginStore((state) => state.user);

  console.log(dataUser);

  return (
    <>
      <HeaderStyle>
        <Header />
      </HeaderStyle>
      <BoardsHomeStyle>
        <div>
          <ShoppingList />
        </div>
      </BoardsHomeStyle>
    </>
  );
}

export default HomePage;
