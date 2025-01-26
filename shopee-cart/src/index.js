import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

//carrinho
const myCart = [];

//favoritos
const myWhishList = [];

console.log("\nWelcome to the your Shopee Cart 🛒\n");

//criando dois itens
const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem("hotwheels lamborghini", 39.99, 3);


//adicionei dois itens
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//removendo um item
await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);
//await cartService.removeItem(myCart, item2);

//mostar carrinho
await cartService.displayCart(myCart);

//exclui dois itens
//await cartService.deleteItem(myCart, item2.name);
//await cartService.deleteItem(myCart, item1.name);


//total carrinho

await cartService.calculateTotal(myCart);