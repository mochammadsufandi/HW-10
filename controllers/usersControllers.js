const usersServices = require('../services/usersServices.js');

const register= async(req,res,next) => {
    try {
        const userRegistered = await usersServices.register(req.body);

        return res.status(200).json({
            message : 'Register Success',
            user : {
                email : userRegistered.email,
                gender : userRegistered.gender,
                role : userRegistered.role
            }
        });

    } catch(err) {
        next(err);
    }  
};

const login = async(req,res,next) => {
    try {
        const userLogin = await usersServices.login(req.body);
        return res.status(200).json({
            message : 'Masuk,OK',
            user : {
                email : userLogin.userLogin.email,
                gender : userLogin.userLogin.gender,
                role : userLogin.userLogin.role
            },
            token : userLogin.token
        });

    } catch(err) {
        next(err);
    }
}

const getAllUsers = async(req,res,next) => {
    try {
        const{page,limit} = req.query;
        const allUser = await usersServices.getAllUsers({page,limit});
        const allUserShow = allUser.map((user)=>{
            return {
                email : user.email,
                gender : user.gender,
                role : user.role
            }
        })
        res.status(200).json({
            message : 'Access is Accepted',
            users : allUserShow
        });

    } catch(err) {
        next(err);
    }
}



module.exports = {register,login, getAllUsers};