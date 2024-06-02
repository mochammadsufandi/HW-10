const express = require('express');
const usersRoutes = require('./usersRoutes.js');
const moviesRoutes = require('./moviesRoutes.js');
const path = require('path');


const router = express.Router();

router.use('/movies/images', express.static(path.join(__dirname, '../uploads')));
router.use(usersRoutes);
router.use(moviesRoutes);




module.exports = router;