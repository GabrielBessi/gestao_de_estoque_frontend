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
    <>
      <label style={{ color: "black", display: display }} htmlFor="">
        {label}
      </label>
      <InputForm
        type={type}
        placeholder={placeholder}
        {...dataUser}
        value={value}
        className={className}
        readOnly={readOnly}
      />
    </>
  );
}
{
  /* <input /> */
}

export default Input;
