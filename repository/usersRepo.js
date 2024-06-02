const {Sequelize,DataTypes, where} = require('sequelize');
const {user} = require('../models');


const  register = async(params) => {
    // cross check wheather the user is already exist or not
    const existedUser = await user.findOne({
        where : {
            email : params.email
        }
    });

    if(existedUser) throw({name : 'Bad Request'});

    const userRegistered = await user.create(params,{returning : true});
    return userRegistered;
};

const login = async(params) => {
    const userLogin = await user.findOne({
        where : {
            email : params.email
        }
    });
    
    return userLogin;
}

const getAllUsers = async(params) => {
    const allUser = await user.findAll({
        offset : (params.page-1)*params.limit,
        limit : params.limit
    });
    return allUser;
}



module.exports = {register,login,getAllUsers};