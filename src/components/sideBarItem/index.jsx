import { ContainerSideBarItem } from "./styles";

const SideBarItem = ({ Icon, Text }) => {
  return (
    <ContainerSideBarItem>
      <Icon />
      {Text}
    </ContainerSideBarItem>
  );
};

export default SideBarItem;
