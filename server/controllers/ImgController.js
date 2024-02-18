import File from '../models/file.js';
import bcrypt from 'bcrypt';

export const uploadImage = async (request, response) => {
    // return response.status(200).json({msg : "Hello"}) // use only for testing 
    const fileObj = { //  in this fileObject we want path of the file and name of the file
        path: request.file.path,
        name: request.file.originalname,
    }

    try {
        const file = await File.create(fileObj); // here we are
        // console.log(file);  // y apka dbme save hone k baad bala obj h  
        response.status(200).json({ path: `http://localhost:${process.env.PORT}/file/${file._id}` }); //here u are using path of backend file
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
}


export const getImage = async (request, response) => {

    try {
        // if any file is present
        const file = await File.findById(request.params.fileId);

        file.downloadCount++; // how may times it was downloaded 

        await file.save();
        // download file
        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ msg: error.message });
    }
}