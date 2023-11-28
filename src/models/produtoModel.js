const admin = require("firebase-admin");

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


module.exports = {
	getProducts
	
};