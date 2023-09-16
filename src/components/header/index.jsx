import { useEffect } from "react";
import { loginStore } from "../../store/loginStore";
import { SectionStyle } from "./style";
import { TfiMenu } from "react-icons/tfi";
import api from "../../services/api";

function Header() {
  const { name } = loginStore((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("estoque:token");

    async function loadUser() {
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const { data } = await api.get("/users");

          console.log("---data--->", data);
        } catch (error) {
          console.log(error);
        }
      }
    }

    loadUser();
  }, []);

  return (
    <SectionStyle>
      <div>
        <img src="" alt="" />
        <span>Bom dia {name}</span>
      </div>
      <div>
        <span>
          <TfiMenu />
        </span>
      </div>
    </SectionStyle>
  );
}

export default Header;
