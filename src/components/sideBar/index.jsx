import { FaTimes } from "react-icons/fa";
import { BiSolidCabinet, BiHistory, BiSolidExit } from "react-icons/bi";
import { FaPaste } from "react-icons/fa";
import { HiEye } from "react-icons/hi";
import { ContainerSideBar, ContentCodeBar } from "./styles";
import SideBarItem from "../sideBarItem";

const SideBar = ({ active, sideBar }) => {
  return (
    <ContainerSideBar active={`${active}`}>
      <ContentCodeBar>
        <FaTimes onClick={() => active(!sideBar)} />
        <SideBarItem Icon={BiSolidCabinet} Text={"Atualizar"} />
        <SideBarItem Icon={HiEye} Text={"Estoque"} />
        <SideBarItem Icon={BiHistory} Text={"Histórico"} />
        <SideBarItem Icon={FaPaste} Text={"Notas fiscais"} />
        <SideBarItem Icon={BiSolidExit} Text={"Sair"} />
      </ContentCodeBar>
    </ContainerSideBar>
  );
};

export default SideBar;
