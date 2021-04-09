const adicionar = async (modelo, dados)=>{

    const user = await new modelo(dados)
    
    user.save().then(()=>{
        console.log("Novo Usuario!");
        return true;
    }).catch((e)=>{
        console.log("erro ao salvar o novo usuário");
        return false;
    })
}

module.exports = adicionar;