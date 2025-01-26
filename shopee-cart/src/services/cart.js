
//adicionar itens no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}


//calcular todos os itens do carrinho
async function calculateTotal(userCart) {
    const result =  userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`\nShopee Cart Total: 💰 ${result}\n`);
}


//deletar itens do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);

    if(index != -1){
        userCart.splice(index, 1);
    }
}

//remover item
async function removeItem(userCart, item) {
    
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    if(indexFound == -1){
        console.log("Item não encontrado");
        return;
    }

    //se a quantidae de item > que 1, diminui um item
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return;
    }

    //se a quantidade for 1, zera o produto
    if(userCart[indexFound].quantity ==1){
        userCart.splice(indexFound, 1);
        return ;
    }
}


//visualizar itens o carrinho
async function displayCart(userCart) {

    console.log("Shopee cart list 📝: \n");

    userCart.forEach((item, index) => {

        console.log(
            `${index + 1}.${item.name} - R$ ${item.price} | unidades = ${item.quantity} | Subtotal = ${item.subtotal()}`
        );

    });
}

export {addItem, calculateTotal, deleteItem, removeItem, displayCart };


