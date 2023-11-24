const admin = require('firebase-admin');
const productServices = require('../services/productServices');

async function getProduct(req, res) {
    try {
        const produtosRef = admin.database().ref('produto/Descartáveis');

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
        res.status(500).json({ error: error.message }); // Enviar erro como JSON
    }
}

async function createProduct(req, res) {
    try {
        const produto = req.body
        const id = req.params.id
        admin.database().ref("produto/Descartáveis").push(produto)
            .then(() => {
                res.status(200).send('Produto criada com sucesso')
            })
            .catch((err) => {
                res.status(500).send(erro);
            })
    } catch (error) {
        res.status(500).json({ error: error.message }); // Enviar erro como JSON
    }
}


async function updateProduct(req, res) {
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

async function deleteProduct(req, res) {
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


module.exports = { getProduct, createProduct, updateProduct, deleteProduct };
