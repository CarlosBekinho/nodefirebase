const productModel = require("../models/produtoModel");



async function getProduct() { 
	const res = await productModel.getProducts();
	return res;
}

async function createProductServices(){
    return "Tudo funcionado";
}

async function updateProductServices(){
    return "Tudo funcionado";
}

async function deleteProductServices(){
    return "Tudo funcionado";
}
module.exports = {
	getProduct,	createProductServices, updateProductServices, deleteProductServices 
};