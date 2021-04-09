const mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true}).then(()=>{
    console.log("Servidor Conectado")
}).catch((e)=>{
    console.log(`Erro ao conectar ao banco de dados, para mais detalhes : ${e}`);
    
})


module.exports = mongoose;