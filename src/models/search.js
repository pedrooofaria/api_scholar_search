const mongoose = require('mongoose');


const Search = mongoose.model('Search', {
    titulo: String,
    link: String,
    descricao: String,
});


module.exports = Search;