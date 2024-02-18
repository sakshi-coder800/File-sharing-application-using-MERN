import mongoose from "mongoose";

const fileScheme = new mongoose.Schema({
    path: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    downloadContnet: {

        type: Number,
        require: true,
        default: 0
    },
    path: {
        type: String,
        require: true
    },
})

const File = mongoose.model('file', fileScheme)
export default File;