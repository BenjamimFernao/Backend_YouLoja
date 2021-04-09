const express = require("express");
const rotas = express.Router();

const bancoDados = require("../mongoose/Modelos")

const adicionar = require("../mongoose/functions/adicionar")

rotas.get("/new", (req, res)=>{

    const nome = req.query.nome;
    const conta = Math.random()

    if(!nome){
        res.send("insira o seu nome por favor")

    }else{
        
        const result = adicionar(bancoDados, {nome, conta});
        if(!result){
            res.send("Erro ao salvar no banco de Dados")
        }else{
            res.send("Dados Salvos!")
        }
        }
})

rotas.get("/minhaConta/:id", async (req, res)=>{
    const _id = req.params.id;

    if(!_id){
        res.send("req sem id da conta");
        console.log("Não exite")
    }else{
        console.log("Existe")
        const Dados = await bancoDados.findById(_id);
        
        if(Dados){
            res.send(Dados)
        }else{
            res.send("Essa conta não existe");
        }
    }
})

rotas.get("/contas", async (req, res)=>{
    
    const Dados = await bancoDados.find({});
    if(Dados){
        res.send(Dados);
    }else{
        res.send("Banco de dados vazia, crie uma nova conta")
    }
})

module.exports = rotas;