const express = require('express');
const moviesControllers = require('../controllers/moviesController.js');
const {authentication,authorization} = require('../middleware/authMiddleware.js');
const errorHandler = require('../middleware/errorHandler.js');
const multerMiddleware = require('../middleware/multerMiddleware.js');

const router = express.Router();


router.get('/test1/:id',(req,res,next) => {
    try {
        if(+req.params.id === 1) return res.status(200).json({message : 'Berhasil Connect'});
        throw({name : 'Not Found'});

    } catch (err) {
        next(err);
    }
    
})


router.get('/movies',authentication,errorHandler,moviesControllers.getAllMovies);
router.get('/movies/id/:id',authentication,errorHandler,moviesControllers.getMoviesById);

router.post('/movies/add',authorization,errorHandler,moviesControllers.addMovie);
router.post('/movies/uploadImage',multerMiddleware,moviesControllers.uploadImage);

router.put('/movies/update/id/:id',authorization,errorHandler,moviesControllers.updateMovieById);

router.delete('/movies/delete/:id',authorization,errorHandler,moviesControllers.deleteMovieById);




module.exports = router;