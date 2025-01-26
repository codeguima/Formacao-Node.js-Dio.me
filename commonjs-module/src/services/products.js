//todas as funções que lidam com produto
const productType ={
    version: "digital",
    tax: "x1"
}
async function getFullName(codeId, productName) {
    console.log('product: ' + codeId + "--" + productName);
    await doBreakLine();
}

//hidden function
async function doBreakLine(){
    console.log('\n');
}

async function getProductLabel(productName){
    console.log('product: ' + productName);
}

module.exports = { 
    getFullName, 
    getProductLabel, 
    productType 
};