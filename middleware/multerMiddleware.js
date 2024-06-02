const multer = require('multer');
const path = require('path');

// directory destination for upload file
const storage = multer.diskStorage({
    destination : (req,res,cb) => {
        cb(null,path.join(__dirname,'../uploads'));
    },
    filename : (req,file,cb) => {
        const randomName = file.fieldname + "-" + Date.now() + path.extname(file.originalname);
        cb(null,randomName);
    }
});

const upload = multer({storage : storage}).single('image');

module.exports = upload;
