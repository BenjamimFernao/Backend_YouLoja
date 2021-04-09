const express = require("express");
const app = express();

const rotasProdutos = require("./rotas/rotasProdutos")

app.use(rotasProdutos);


const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Servidor aberto na porta ${port}`)});