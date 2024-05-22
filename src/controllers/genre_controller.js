var Genre = require('../model/genres');
const controller = {}
controller.genreCreate = genreCreate;
controller.genreList = genreList;
controller.genreGet = genreGet;
controller.genreDelete = genreDelete;
controller.genreUpdate = genreUpdate;

async function genreCreate(req, res){
    const { description } = req.body;
    const data = await Genre.create({
        description: description
    })
    .then(
        res.status(200).json({
            success: true,
            message: "Género Criado",
            data: data
        })
    )
    .catch(
        res.status(500).json({
            success: false,
            message: "Erro a criar o género",
            error: error.message
        })
    )
}


async function genreList(req, res){
    const data = await Genre.findAll()
    .then(function(data) {
        res.status(200).json({
            success: true,
            data: data
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Erro a listar os géneros",
            error: error.message
        });
    });
}

async function genreGet(req, res){
    const { id } = req.params;
    const data = await Genre.findAll({
        where: { id: id }
    })
    .then(function(data) {
        res.status(200).json({
            success: true,
            data: data
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Erro a encontrar o género",
            error: error
        });
    })
}

async function genreDelete(req, res){
    const { id } = req.params;
    const data = await Genre.destroy({
        where: {id: id}
    })
    .then(function() {
        res.status(200).json({
            success: true,
            message: "Género Apagado"
        })
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Erro a apagar o género",
            error: error.message
        });
    })
}

async function genreUpdate(req, res){
    const { id } = req.params;
    const { description } = req.body;
    const data = await Genre.update({
        description: description
    },{ where: { id: id}})
    .then(function(data) {
        res.status(200).json
        ({
            success: true,
            data: data,
            message: "Género atualizado com sucesso!"
        });
    })
    .catch(function(error) {
        res.status(500).json({
            success: false,
            message: "Erro a atualizar o género",
            error: error.message
        });
    })
}

module.exports = controller;