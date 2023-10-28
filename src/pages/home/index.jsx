import OutPutProduct from "../../components/boards/outPutProduct";
import ShoppingList from "../../components/boards/shoppingList";
import Header from "../../components/header";
import { loginStore } from "../../store/loginStore";
import { BoardsHomeStyle } from "./style";

function HomePage() {
  const dataUser = loginStore((state) => state.user);

  console.log(dataUser);

  return (
    <>
      <Header />
      <BoardsHomeStyle>
        <div>
          <ShoppingList />
          <OutPutProduct />
        </div>
      </BoardsHomeStyle>
    </>
  );
}

export default HomePage;
