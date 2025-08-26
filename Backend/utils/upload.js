// <-----------------1----------------------->
// import multer from 'multer';
// import dotenv from 'dotenv';
// import  GridFsStorage  from 'multer-gridfs-storage';

// dotenv.config();


// const storage = new GridFsStorage({
//     url: process.env.MONGO_URI,
//     options: { useNewUrlParser: true, useUnifiedTopology: true },
//     file: (request, file) => {
//         const match = ['image/png', 'image/jpg'];

//         if (!match.includes(file.mimetype)) {
//             return `${Date.now()}-blog-${file.originalname}`;
//         }
//         console.log("File uploaded")
//         return {
//             bucketName: 'photos',
//             filename: `${Date.now()}-blog-${file.originalname}`
//         };
//     }
// });


// export default multer({ storage });


import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now() + '-' + file.originalname)
    }
  })
  
  const upload = multer({storage })
  export default upload;