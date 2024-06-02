const moviesRepo = require('../repository/moviesRepo.js');

const getAllMovies = async(params) => {
    if(!params.page || !params.limit) throw({name : 'InvalidInput'});

    const allMovies = await moviesRepo.getAllMovies(params);

    if(!allMovies) throw({name : 'Not Found'});

    return allMovies;
};

const getMoviesById = async(params) => {

    if(!params) throw({name :'InvalidInput' });

    const moviesById = await moviesRepo.getMoviesById(params);

    return moviesById;
}

const addMovie = async(params) => {
    if(!params.title || !params.genres || !params.year) throw({name:'InvalidCredentials'});

    const existingMovie = await moviesRepo.getMoviesByTitle(params);

    if(existingMovie) throw({name:'InvalidInput'});

    const movieAdd = await moviesRepo.addMovie(params);

    return movieAdd;
}

const updateMovieById = async(params) => {
    if(!params.id || !params.title || !params.genres || !params.year) throw({name : 'InvalidInput'});

    const updatedMovie = await moviesRepo.updateMovieById(params);
    return updatedMovie;
}

const deleteMovieById = async(params) => {
    if(!params) throw({name:'InvalidInput'});

    const existingMovie = await moviesRepo.getMoviesById(params);

    if(!existingMovie) throw({name:'Bad Request'});

    const movieDelete = await moviesRepo.deleteMovieById(params);

    return movieDelete;
    
}

const uploadImage = async(params) => {
    const {file} = params;
    
    if(!file) throw({name:'InvalidInput'});
    const allowedExt = ['image/png','image/jpg','image/jpeg','image/webp'];

    if(allowedExt.includes(file.mimetype)) {
        const imageUrl = `http://localhost:3000/API/movies/images/${file.filename}`;
        console.log(imageUrl);
        return imageUrl;
    } else {
        throw({name:'InvalidExt'});
    }
}

module.exports = {getAllMovies, getMoviesById, updateMovieById, addMovie, deleteMovieById, uploadImage};