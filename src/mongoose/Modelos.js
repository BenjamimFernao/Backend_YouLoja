const mongoose = require("./conexao");

const esquema = mongoose.Schema({
    nome:{
        type:String,
        trim:true,
    },
    conta:{
        type:Number,
        trim:true,
    }
})


const Usuario = mongoose.model("Usuario", esquema);

module.exports = Usuario;