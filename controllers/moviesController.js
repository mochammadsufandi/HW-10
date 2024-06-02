const moviesServices = require('../services/moviesServices.js');

const getAllMovies = async(req,res,next) => {
    try {
        const{page,limit} = req.query;
        const allMovies = await moviesServices.getAllMovies({
            page : page,
            limit : limit
        });

        return res.status(200).json({
            message : 'Access Accepted',
            movies : allMovies
        })

    } catch(err) {
        next(err);
    }
}

const getMoviesById = async(req,res,next) => {
    try {
        const id = req.params.id;

        const movieById = await moviesServices.getMoviesById(id);

        res.status(200).json({
            message : 'Access is Accepted',
            movie : movieById
        })

    } catch(err) {
        next(err);
    }
}

const addMovie = async(req,res,next) => {
    try {
        const{title,genres,year} = req.body;
        const movieAdd = await moviesServices.addMovie({
            title,genres,year
        });
        res.status(200).json({
            message : 'Movie is succesfully added',
            movie : movieAdd
        })

    } catch(err) {
        next(err);
    }
}

const updateMovieById = async(req,res,next) => {
    try {
        const id = req.params.id;
        const {title,genres,year,photo} = req.body;

        const ObjForUpdate = {id,title,genres,year,photo};
        const updatedMovie = await moviesServices.updateMovieById(ObjForUpdate);

        return res.status(200).json({
            message : 'Update Success',
            movie : updatedMovie
        })

    } catch(err) {
        next(err)
    }
}

const deleteMovieById = async(req,res,next) => {
    try {
        const id = req.params.id;
        const movieDelete = await moviesServices.deleteMovieById(id);

        res.status(200).json({
            message : 'Delete movies is success',
            movie : movieDelete
        })

    } catch(err) {
        next(err)
    }
}

const uploadImage = async(req,res,next) => {
    try {
        const imageUrl = await moviesServices.uploadImage({file : req.file});
        res.status(200).json({
            message : 'Upload Success',
            imageUrl : imageUrl
        });

    } catch(err) {
        next(err);
    }
}

module.exports = {getAllMovies,getMoviesById,updateMovieById, addMovie, deleteMovieById, uploadImage};