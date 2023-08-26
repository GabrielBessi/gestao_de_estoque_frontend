import useStore from "../../state/bear";

function ButtonClick() {
  const { logar, deslogar } = useStore();

  return (
    <div>
      <button onClick={logar}>logar</button>
      <button onClick={deslogar}>deslogar</button>
    </div>
  );
}

export default ButtonClick;
