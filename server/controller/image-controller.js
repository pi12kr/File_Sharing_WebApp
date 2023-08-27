import File from "../models/file.js";

export const uploadImage = async (request,response) => {
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }
    try{
       const file = await  File.create(fileObj);
       response.status(200).json({path: `http://localhost:8000/file/${file._id}`});
    } catch(error){
        console.log(error.message);
        response.status(500).json({error: error.message});
    }
}

// call back function give 2 things one is request and other is response  
// jo bhi api request aati h front se wo request me and backend se kuch bhi bhejenge frontend me wo response ke andaar 

export const downloadImage = async (request, response) => {
    try{
        const file = await File.findById(request.params.fileId);
        file.downloadContent++;
        await file.save();

        response.download(file.path, file.name);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({error: error.message});
    }
}