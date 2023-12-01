const admin = require('firebase-admin');

async function getProducts(req, res) {
    try {

        const produtosRef = admin.database().ref("produto/Descartáveis");

        produtosRef.once('value')
            .then((snapshot) => {
                const produtos = [];

                snapshot.forEach((childSnapshot) => {
                    const produto = childSnapshot.val();
                    produto.id = childSnapshot.key;
                    produtos.push(produto);
                });



                res.json(produtos); // Enviar a resposta como JSON
                console.log(produtos);
            })
            .catch((erro) => {
                res.status(500).json({ error: erro.message }); // Enviar erro como JSON
            });


    } catch (error) {
        throw error;
    }
}

async function createProducts(req, res) {
    try {
        const produto = req.body
        const id = req.params.id
        admin.database().ref("produto/Descartáveis").push(produto)
            .then(() => {
                res.status(200).send('Produto criada com sucesso')
            })
            .catch((err) => {
                res.status(500).send(err);
            })
    } catch (error) {
        throw error;
    }
}

async function updateProducts(req, res) {
    try {
        const produto = req.body
        const id = req.params.id

        admin.database().ref(`produto/Descartáveis/${id}`).update(produto)
            .then(() => {
                res.send("O produto foi atualizado com sucesso")
            })
            .catch((erro) => {
                res.status(500).send(erro)
            })
    } catch (error) {
        res.status(500).json({ error: error.message }); // Enviar erro como JSON
    }
}

async function deleteProducts(req, res) {
    try {
        const id = req.params.id

        admin.database().ref(`produto/Descartáveis/${id}`).remove()
            .then(() => {
                res.send("O produto foi removido com sucesso")
            })
            .catch((error) => {
                res.status(500).send(erro);
            })

    } catch (error) {
        res.status(500).json({ error: error.message }); // Enviar erro como JSON
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
    getProducts, createProducts, updateProducts, deleteProducts
};