import {v2 as cloudinary} from "cloudinary"
import e from "express";
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET // Click 'View API Keys' above to copy your API secret
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if (!localFilePath) return null
        const responce = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uloaded successfully
        console.log("file is uploaded on cloudinary");
        console.log(responce.url);
        return responce
        
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the localy saved file as the upload operation got failed
        return null
    }

}

export { uploadOnCloudinary }






