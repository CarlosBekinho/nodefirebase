const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const app = express()
app.use(bodyParser.json());

const multer = require('multer'); // Middleware para lidar com o upload de arquivos
const cors = require('cors');

app.use(cors());

const  controllerProduto = require("./controllers/controllerProduto")


const serviceAccount = require('../chave.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://teste-908b8-default-rtdb.firebaseio.com",
    storageBucket: "teste-908b8.appspot.com"
});

app.get("/produtos/descartaveis", controllerProduto.getProduct);
app.post("/produto/descartaveis",controllerProduto.createProduct);
app.post("/atualizar/descartaveis/:id", controllerProduto.updateProduct);
app.delete("/delete/descartaveis/:id", controllerProduto.deleteProduct);





app.listen(3000, () => {
	console.log("Server is running on port 3000");
});