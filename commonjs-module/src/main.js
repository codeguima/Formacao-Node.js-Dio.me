const product = require('./services/products');
const config = require('./services/config');
const database = require('./services/database');

async function main() {
    console.log("ola meu nome é system \n");
    product.getFullName('408', 'mousepad');
    product.getFullName('508', 'teclado');
    product.getProductLabel("mousepad");


    console.log(config.client);
    console.log(config.devArea);
    database.connectToDatabase('sql')
}


main();