import { InputForm } from "./styles";

function Input({ type, placeholder, label, dataUser, value }) {
  return (
    <InputForm>
      <label style={{ color: "black" }} htmlFor="">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...dataUser}
        value={value}
      />
    </InputForm>
  );
}

export default Input;
