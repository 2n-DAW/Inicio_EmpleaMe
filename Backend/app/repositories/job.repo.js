// REPOSITORIES: operaciones con la base de datos
const jobModel = require('../models/job.model.js');

const createJob = async (data) => {
    const job = await new jobModel(data); //creamos un nuevo objeto de tipo jobModel
    return await job.save(); //guardamos el objeto en la base de datos
};

const findOneJob = async (params) => {
    return await jobModel.findOne(params);
};

const findAllJobs = async () => {
    return await jobModel.find();
};

const getJobsByCategory = async (jobId) => {
    return await jobModel.findById(jobId);
};

const updateJob = async (params, updateData) => {
    const job = await jobModel.findOne(params); //buscamos el objeto en la base de datos

    if (job) {
        const { name, salary, description, img, images } = updateData;

        job.name = name || job.name;
        job.salary = salary || job.salary;
        job.description = description || job.description;
        job.img = img || job.img;
        job.images = images || job.images;
    
        return await job.save();
    }

    return null;
};

const deleteOneJob = async (params) => {
    return await jobModel.deleteOne(params);
}

module.exports = {
    createJob,
    findOneJob,
    findAllJobs,
    updateJob,
    getJobsByCategory,
    deleteOneJob
}