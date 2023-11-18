import BoardUpdateStorage from "../../components/boardUpdateStorage";
import Header from "../../components/header";
import { ContainerUpdateBoard as Div } from "./styles";

function UpdateStorage() {
  return (
    <Div>
      <Header />
      <BoardUpdateStorage />
    </Div>
  );
}

export default UpdateStorage;
