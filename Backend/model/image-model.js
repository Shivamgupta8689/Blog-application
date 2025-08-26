import mongoose from "mongoose";
const imageSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
})

const ImageModel = mongoose.model("images", imageSchema);
export default ImageModel;
// module.exports = {ImageModel};