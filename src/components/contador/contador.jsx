import useStore from "../../state/bear";

function Contador() {
  const { boolean, message } = useStore();

  return (
    <div>
      <h1>
        {boolean} ------ {message}
      </h1>
      <h2>{boolean === "true" ? "Seja bem-vindo" : null}</h2>
    </div>
  );
}

export default Contador;
