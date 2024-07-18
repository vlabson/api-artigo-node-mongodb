const mongoose = require('mongoose');

mongoose.model('artigo', {
    titulo: String,
    conteudo: String,
});