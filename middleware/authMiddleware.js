const {user} = require('../models');
const {verifyToken} = require('../lib/jwt.js');



const authentication = async(req,res,next) => {
    try {
        if(!req.headers.authorization) throw({name : 'Unauthenticated'});

        const accessToken = req.headers.authorization.split(" ")[1];
        const decodeToken = verifyToken(accessToken);
        const userBasedToken = await user.findOne({
            where : {
                email : decodeToken.email
            }

        });

        if(!userBasedToken) throw({name : 'Not Found'});

        next();

    } catch(err) {
        next(err);
    }
   
}

const authorization = async(req,res,next) => {
    try {
        if(!req.headers.authorization) throw({name : 'Unauthorized'});

        const accessToken = req.headers.authorization.split(" ")[1];
        const decodeToken = verifyToken(accessToken);

        const userBasedToken = await user.findOne({
            where : {
                email : decodeToken.email
            }
        });

        if(!userBasedToken) throw({name : 'Not Found'});

        if(userBasedToken.role.toLowerCase() !== 'admin') throw({name:'Unauthorized'});
        
        next();

    } catch(err) {
        next(err);
    }

}

module.exports = {authentication,authorization};