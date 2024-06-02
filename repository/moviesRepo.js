const { where } = require('sequelize');
const {movies} = require('../models');


const getAllMovies = async(params) => {
    const allMovies = await movies.findAll({
        offset : (params.page-1)*params.limit,
        limit : params.limit
    })
    // console.log(allMovies[0]);
    return allMovies;
}

const getMoviesById = async(params) => {
    const movieById = await movies.findOne({
        where : {
            id : params
        }
    })

    return movieById;
}

const getMoviesByTitle = async(params) => {
    const movieByTitle = await movies.findOne({
        where : {
            title : params.title
        }
    });
    return movieByTitle;
}

const addMovie = async(params) => {
    const movieAdd = await movies.create({
        title : params.title,
        genres : params.genres,
        year : params.year
    });
    return movieAdd;
}

const updateMovieById = async(params) => {
    const updatedMovie = await movies.findByPk(params.id);
    
    updatedMovie.set({
        title : params.title,
        genres : params.genres,
        year : params.year,
        photo : params.photo
    });

    await updatedMovie.save();

    return updatedMovie;
}

const deleteMovieById = async(params) => {
    const movieDelete = await movies.findByPk(params);
    movieDelete.destroy();
    return movieDelete;
}


module.exports = {getAllMovies,getMoviesById,getMoviesByTitle,updateMovieById, addMovie, deleteMovieById};