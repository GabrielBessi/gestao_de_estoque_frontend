import styled from "styled-components";

export const ContainerSideBar = styled.div`
  background-color: #f9f9f9;
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 300px;
  right: ${(props) => (props.active ? "0" : "-100%")};
  animation: showSidebar 0.4s;

  > svg {
    position: relative;
    color: #ffa24d;
    bottom: 420px;
    left: 250px;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const ContentCodeBar = styled.ul`
  display: flex;
  position: relative;
  bottom: 120px;
  flex-direction: column;
`;
