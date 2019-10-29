import multer from 'multer';
import path from 'path';
import imageRepository from './repository';

const storageEngine = multer.diskStorage({
    destination: './public/images',
    filename: function(req, file, fn) {
        fn(null, new Date().getTime().toString() + '-' + file.fieldname + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storageEngine,
    limits: { fileSize:300000 },
    fileFilter: (req, file, cb) => {
        
        validatefile(file, cb);
    }
}).single('image');

function  validatefile( file, cb) {
    
    const allowedFileTypes = /jpeg|jpg|png|gif/;
    const extension = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType  = allowedFileTypes.test(file.mimetype);
    if(extension && mimeType){
      return cb(null, true);
    }else{
      cb("Invalid file type. Only JPEG, PNG and GIF file are allowed.")
    }
}

 
export default {
    upload,
}