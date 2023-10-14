import { InputForm } from "./styles";

function Input({
  type,
  placeholder,
  label,
  dataUser,
  value,
  className,
  display,
  readOnly,
}) {
  return (
    <InputForm>
      <label style={{ color: "black", display: display }} htmlFor="">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        {...dataUser}
        value={value}
        className={className}
        readOnly={readOnly}
      />
    </InputForm>
  );
}

export default Input;
