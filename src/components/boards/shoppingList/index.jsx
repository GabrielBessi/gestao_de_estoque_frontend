import { ListProductsStyle, ShoppingStyle } from "./style";

function ShoppingList() {
  return (
    <ShoppingStyle>
      <p>Alertas</p>
      <ListProductsStyle>
        <li>
          <span>PRODUTOS</span>
          <span>10</span>
        </li>
      </ListProductsStyle>
    </ShoppingStyle>
  );
}

export default ShoppingList;
