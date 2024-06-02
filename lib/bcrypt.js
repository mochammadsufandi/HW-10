const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

// For Registering User
const hashPassword = (plainTextPassword) => { 
    return bcrypt.hashSync(plainTextPassword,salt);
}


// For Logining User
const comparePassword = (plainTextPassword,hashedPassword) => {
    return bcrypt.compareSync(plainTextPassword,hashedPassword);
}

module.exports = {hashPassword,comparePassword};
