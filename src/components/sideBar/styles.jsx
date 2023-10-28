import styled from "styled-components";

export const ContainerSideBar = styled.div`
  background-color: #f9f9f9;
  z-index: 99999;
  position: fixed;
  height: 120vh;
  top: 0px;
  right: 0px;
  right: ${(props) => (props.active ? "0" : "-100%")};
  animation: showSidebar 0.4s;

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
  bottom: 08em;
  right: 1em;
  flex-direction: column;

  > svg {
    position: relative;
    color: #ffa24d;
    left: 200px;
    bottom: 30px;
    cursor: pointer;
  }
`;
