const errorHandler = (err,req,res,next) => {

    console.log(err);

    if(err.name === 'InvalidCredentials') {
        res.status(400).json({message : 'Invalid Email or Password'})

    } else if(err.name === 'Unauthorized') {
        res.status(401).json({message : 'User is Unauthorized'});

    } else if(err.name === 'Unauthenticated') {
        res.status(401).json({message : 'User is Unauthenticated'});

    } else if(err.name === 'Not Found') {
        res.status(404).json({message : 'Request is Not Found'});

    } else if(err.name === 'Bad Request') {
        res.status(400).json({message : 'Bad Request'});

    } else if(err.name === 'InvalidExtension') {
        res.status(400).json({message : 'Invalid Extension File'});

    } else if(err.name === 'InvalidInput') {
        res.status(400).json({message : 'Invalid Input'});

    } else {
        res.status(500).json({message : 'Internal Server Error'});
    }
}

module.exports = errorHandler;