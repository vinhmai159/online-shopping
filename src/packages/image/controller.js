//import fileType from 'file-type';
// import multer from 'multer';
// import fs from 'fs';
import path from "path";
import imageService from "./service";
import imageRepository from "./repository";
import imageModel from './model';
import { EROFS } from "constants";

async function upload(req, res) {
    //const imagePath = path.join("image/", req.flie.filename);
   
    await imageService.upload(req, res, async ( err)=> {
        if (err) {
            console.log(err);
            res.json(err);
        } else {
            if (req.file == undefined) {
                res.json({
                    status: 200,
                    message: "File invalid!",
                })
            } else {
                const reqName = req.body.image_name;
                const imagePath = "image/"+req.file.filename; 

                try {
                    let data = await imageRepository.create(reqName, imagePath)
                    res.json({
                        status: 200,
                        message: `Uploaded image "${reqName}" successfully!`,
                        data: data,
                    })
                } catch (error) {
                    console.log(error);
                    res.json(error)
                }
            }
        }
    })
}

async function getImage(req, res) {
    const reqName = req.body.image_name;
    try {
        const data = await imageRepository.get(reqName);
        res.json({
            status: 200,
            message: `Get Image '${reqName}' is successfully`,
            data: data,
        })
    } catch (error) {
        res.json({
            status: 500,
            message: 'ERRORs',
            error: error,
        });
    }
}

export default {
  upload,
  getImage,
};
