import { updateBookList } from "./updateBookList";
import { updateShoppingCart } from "./updateShoppingCart";

export const reducer = (state, action) => {
  return {
    shoppingCart: updateShoppingCart(state, action),
    bookList: updateBookList(state, action),
  }
}



