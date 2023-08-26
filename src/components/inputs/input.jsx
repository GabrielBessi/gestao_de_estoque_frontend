import { InputForm } from "./styles";

function Input({ type, placeholder, label, dataUser }) {
  return (
    <InputForm>
      <label style={{ color: "black" }} htmlFor="">
        {label}
      </label>
      <input type={type} placeholder={placeholder} {...dataUser} />
    </InputForm>
  );
}

export default Input;
