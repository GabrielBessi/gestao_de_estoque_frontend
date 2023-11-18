import { FaTimes } from "react-icons/fa";
import { BiHistory, BiSolidExit } from "react-icons/bi";
import { MdUpdate } from "react-icons/md";
import { FaPaste } from "react-icons/fa";
import { HiEye, HiHome } from "react-icons/hi";
import { ContainerSideBar, ContentCodeBar } from "./styles";
import SideBarItem from "../sideBarItem";

const SideBar = ({ active, sideBar }) => {
  return (
    <ContainerSideBar active={`${active}`}>
      <ContentCodeBar>
        <FaTimes onClick={() => active(!sideBar)} />
        <SideBarItem Icon={HiHome} Text={"Home"} link={"/home"} />
        <SideBarItem
          Icon={MdUpdate}
          Text={"Atualizar"}
          link={"/update-storage"}
        />
        <SideBarItem Icon={HiEye} Text={"Estoque"} link={"/view-storage"} />
        <SideBarItem Icon={BiHistory} Text={"Histórico"} />
        <SideBarItem Icon={FaPaste} Text={"Notas fiscais"} />
        <SideBarItem Icon={BiSolidExit} Text={"Sair"} />
      </ContentCodeBar>
    </ContainerSideBar>
  );
};

export default SideBar;
