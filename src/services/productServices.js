const admin = require('firebase-admin');

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

async function createProducts() {
    try {
        const ref = admin.database().ref("produto/Descartáveis");
        await ref.push(product);
        return 'Produto criado com sucesso';
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
	getProducts, createProducts 
};