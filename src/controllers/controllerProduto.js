const productServices = require('../services/productServices');

async function getProduct(req, res) {
	try {
		const response = await productServices.getProduct();
		res.status(200).json(response);
	} catch (err) {
		console.error(err);
		res.status(500).send("Error");
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
