const express = require('express');
const userControllers = require('../controllers/usersControllers.js');

const router = express.Router();


router.get('/test2/:id',(req,res,next) => {
    try {
        if(+req.params.id === 1) return res.status(200).json({message : 'Berhasil Connect'});
        throw({name : 'Not Found'});

    } catch (err) {
        next(err);
    }
})

router.post('/users/register',userControllers.register);

router.post('/users/login',userControllers.login);

router.get('/user',userControllers.getAllUsers);



module.exports = router;