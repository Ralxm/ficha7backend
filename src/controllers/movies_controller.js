var Movie = require('../model/movies');
var Genre = require('../model/genres');
const controller = {};
controller.movieCreate = movieCreate;
controller.movieList = movieList;
controller.movieGet = movieGet;
controller.movieDelete = movieDelete;
controller.movieUpdate = movieUpdate;

async function movieCreate(req, res){
    const { description, title, photo, genreid } = req.body;
    const data = await Movie.create({
        title: title,
        photo: photo,
        description: description,
        genreid: genreid
    })
    .then(function(data) {
        res.status(200).json({
            success: true,
            message: "Filme adicionado",
            data: data
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Erro a criar o filme",
            error: error.message
        });
    })
}

async function movieList(req, res){
    const data = await Movie.findAll({ include: [Genre] })
    .then(function(data) {
        res.status(200).json({
            success: true,
            data: data
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Erro a listar os filmes",
            error: error.message
        });
    });
}

async function movieGet(req, res){
    const { id } = req.params;
    const data = await Movie.findAll({
        include: [Genre],
        where: {id: id}
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
            message: "Erro a encontrar o filme",
            error: error
        });
    });
}

async function movieDelete(req, res){
    const { id } = req.params;
    const data = await Movie.destroy({
        where: {id: id}
    })
    .then(function() {
        res.status(200).json({
            success: true,
            message: "Filme apagado com sucesso"
        })
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            message: "Erro a apagar o filme",
            error: error
        })
    })
    
    res.json({success: act, message: "Movie deleted!"});
}

async function movieUpdate(req, res){
    const { id } = req.params;
    const { title, photo, description, genreid } = req.body;
    const data = await Movie.update({
            title: title,
            photo: photo,
            description: description,
            genreid: genreid
        }, {where:  { id: id}})
    .then(function(data) {
        res.status(200).json({
            success: true,
            data: data,
            message: "Filme atualizado com sucesso"
        });
    })
    .catch(error => {
        res.status(500).json({
            success: false,
            error: error,
            message: "Erro a atualizar o filme"
        });
    });
}

module.exports = controller;