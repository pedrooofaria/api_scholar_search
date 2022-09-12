const router = require('express').Router();

const Search = require('../models/search');


// Create - Criação de dados
router.post('/', async (req, res) => {
    
    const { titulo, link, descricao } = req.body;

    if(!titulo) {
        res.status(422).json({error: 'O titulo é obrigatório!'});
        return;
    }

    const search = {titulo, link, descricao};

    try {
        await Search.create(search);
        res.status(201).json({menssage: 'Pesquisa inserida com sucesso!'});
    } catch (error) {
        res.status(500).json({error: error})
    }
});

// Read - Ler dados
// get todos os dados
router.get('/', async (req, res) => {
    try {
        const result = await Search.find()
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error})
    }
});

//get por id
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Search.findOne({_id: id})
        if(!result){
            res.status(422).json({message: 'Pesquisa não econtrada!'})
            return;
        }
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({error: error})
    }
});




module.exports = router;