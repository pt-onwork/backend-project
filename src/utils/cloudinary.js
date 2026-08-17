import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        // console.log(localFilePath,"file uploaded on cloudinary")

        //file has been uploaded succesfully 
        // console.log("file is uploaded on cloudinary", response.url);
        return response ;
    } catch (error) {
        console.log("error in catch")
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation failed
        console.log("error is", error)
        return null;
    }
}
export {uploadOnCloudinary}