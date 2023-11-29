const productModel = require("../models/produtoModel");



async function getProducts() {
	try {
		const produtosRef = admin.database().ref('produto/Descartáveis');

		const snapshot = await produtosRef.once('value');

		const produtos = [];

		snapshot.forEach((childSnapshot) => {
			const produto = childSnapshot.val();
			produto.id = childSnapshot.key;
			produtos.push(produto);
		});

		return produtos;
	} catch (error) {
		throw error;
	}
}

// async function createProductServices(){
//     return "Tudo funcionado";
// }

// async function updateProductServices(){
//     return "Tudo funcionado";
// }

// async function deleteProductServices(){
//     return "Tudo funcionado";
// }
module.exports = {
	getProducts,	createProductServices, updateProductServices, deleteProductServices 
};