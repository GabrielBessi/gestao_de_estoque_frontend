import { useEffect, useState } from "react";
import { loginStore } from "../../store/loginStore";
import { HeaderStyle, SectionStyle } from "./style";
import { TfiMenu } from "react-icons/tfi";
import api from "../../services/api";
import SideBar from "../sideBar";

function Header() {
  const user = loginStore((state) => state.login);
  const dataUser = loginStore((state) => state.user);
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("estoque:token");

    async function loadUser() {
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/users");

          user(data[0]);
        } catch (error) {
          console.log(error);
        }
      }
    }

    loadUser();
  }, [user]);

  return (
    <>
      <HeaderStyle>
        <SectionStyle>
          <div>
            <img src="" alt="Foto de perfil" />
            <span>Bom dia {dataUser.name}</span>
          </div>
          <div>
            <span>
              <TfiMenu onClick={() => setSideBar(!sideBar)} />
              {sideBar && <SideBar active={setSideBar} sideBar={sideBar} />}
            </span>
          </div>
        </SectionStyle>
      </HeaderStyle>
    </>
  );
}

export default Header;
