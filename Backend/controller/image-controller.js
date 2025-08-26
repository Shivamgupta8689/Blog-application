import ImageModel from '../model/image-model.js';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const url = 'http://localhost:8000'

export const uploadImage = async (req, res)=>{
    // try{
    // const url = 'http://localhost:8000'
    // console.log("📥 File received:", req.file);
    // if(!req.file){
    //     console.error("❌ Upload error:", error);
    //     return res.status(400).json({msg:"File not found"});
    // }
    // const imageUrl  = `${url}/file/${req.file.filename}`;
    // return res.status(200).json({imageUrl});
    // }
    // catch (error) {
    //     console.error("❌ Upload error:", error);
    //     return res.status(500).json({ msg: 'File upload failed', error });
    // }
    
    try {
        const {path,filename} = req.file;
        const image = await ImageModel({path,filename});
        await image.save();
        console.log("Ho gaya upload");
        const imageUrl = `http://localhost:8000/uploads/${filename}`;
        return res.status(200).json({ msg: "Image uploaded successfully", imageUrl, image });
    } catch (error) {
        return res.status(500).json({ msg: 'File upload failed', error });
    }
}

export const getImage = async (req, res) => {
    const { filename } = req.params;

    try {
        const image = await ImageModel.findOne({filename});

        if (!image) {
            return res.status(404).json({ msg: "Image not found" });
        }

        // const imagePath = join(__dirname, '../uploads', image.filename);
        const imageUrl = `http://localhost:8000/uploads/${image.filename}`;
        return res.status(200).json({ imageUrl });
    } catch (error) {
        console.error("❌ Failed to retrieve image:", error);
        return res.status(500).json({ msg: 'Failed to retrieve image', error: error.message });
    }
};