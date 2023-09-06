import { SectionStyle } from "./style";
import { TfiMenu } from "react-icons/tfi";

function Header() {
  return (
    <SectionStyle>
      <div>
        <img src="" alt="" />
        <span>Bom dia macho</span>
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
