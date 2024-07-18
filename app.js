const express = require('express');
const mongoose = require('mongoose');
const req = require('express/lib/request');

require("./models/Artigo");
const Artigo = mongoose.model('artigo');

/** crio e inicializo constante APP */
const app = express();

app.use(express.json());


/** criando uma conecção com o banco */
mongoose.connect('mongodb://localhost/baseApi', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("conexão com MongoDB realizada com sucesso!");
}).catch((erro) => {
    console.log("Erro: conexão com MongoDB Não realizada com sucesso!");
});

// -------------------------------------------------------------
/** ROTAS */
// -------------------------------------------------------------

/** ROTA LISTAR */

app.get("/", async (req, res) => {
 
    const artigo = await Artigo.find();
    res.send(artigo)

})

/** ROTA DELETAR */
app.delete("/:id", async (req, res) => {
    const artigo = await Artigo.findByIdAndDelete(req.params.id)
})

/** ROTA ATUALIZAR */
app.put("/:id", async (req, res) => {
    const artigo = await Artigo.findByIdAndUpdate(req.params.id, {
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
    },{
        new: true
    })

    return res.send(artigo)
})

/** ROTA CRIAR  */
app.post("/artigo", async (req, res) => {
    
    const artigo = new Artigo({
       titulo: req.body.titulo,
       conteudo: req.body.conteudo,
    })

    await artigo.save()
    res.send(artigo)
})

/** cria uma funcao para rodar o servidor*/
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080/")
})

