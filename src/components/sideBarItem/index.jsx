import { ContainerSideBarItem } from "./styles";

const SideBarItem = ({ Icon, Text, link }) => {
  return (
    <ContainerSideBarItem to={link}>
      <Icon />
      {Text}
    </ContainerSideBarItem>
  );
};

export default SideBarItem;
