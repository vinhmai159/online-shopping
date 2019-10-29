import imageModel from './model'

async function check(reqName) {
    return imageModel.find({name: reqName}).limit(1).exec();
}

async function create(reqName, imagePath) {
    const model = new imageModel({
        name: reqName,
        image_path: imagePath,
        time_stamp: new Date(),
    });

    return model.save();
}

async function get(reqName) {
   return await imageModel.find({name: reqName});
}

export default  {
    check,
    create,
    get,
};