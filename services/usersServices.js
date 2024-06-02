const usersRepo = require('../repository/usersRepo.js');
const {hashPassword,comparePassword} = require('../lib/bcrypt.js');
const {generateToken,verifyToken} = require('../lib/jwt.js');


const register = async (params) => {
        const {email,gender,password,role} = params;
        console.log(email,gender,password,role);

        if(!email || !gender || !password || !role) {throw({name : 'InvalidInput'});}
  
        const hashedPassword = hashPassword(password);
    
        const userRegistered = await usersRepo.register({
            email : email,
            gender : gender,
            password : hashedPassword,
            role : role
        });

        return userRegistered;
};

const login = async (params) => {
    const {email,password} = params;
    console.log(email,password);

    if(!email || !password) throw({name : 'InvalidInput'});

    const userLogin = await usersRepo.login({
        email : email,
        password : password
    });

    if(!userLogin) throw({name : 'InvalidCredentials'});

    const validhashPassword = comparePassword(password,userLogin.password);
    const validcommonPassword = (pass,text) => {
        if(pass === text) {
            return true;
        } return false
    };

    if(!validhashPassword) {
        if(!validcommonPassword(userLogin.password,password)) {
            throw({message : 'InvalidCredentials'});
        }
    };

    const token = generateToken({
        email : userLogin.email,
        gender : userLogin.gender,
        role : userLogin.role
    });

    return {userLogin,token};
}

const getAllUsers = async(params) => {
    if(!params.page || !params.limit) throw({name:'InvalidInput'});

    const allUser = await usersRepo.getAllUsers(params);

    return allUser;
}

module.exports = {register,login, getAllUsers};