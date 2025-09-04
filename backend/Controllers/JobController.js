const JobModel = require("../Models/JobModel");

const CreateJob = async (req, res) => {
    try {
        const { jobTitle, company, jobType, jobStatus, postedBy, location, salary, experience, skills, jobDescription } = req.body;
        const newJob = new JobModel({ jobTitle, company, jobType, jobStatus, postedBy, location, salary, experience, skills, jobDescription });
        await newJob.save();

        res.status(200).json({
            message: "job created successfully",
            success: true,
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error faile to create job created",
            error: error.message,
        })
    }
};

const FetchJob = async (req, res) => {
    try {
        const jobList = await JobModel.find();

        res.status(200).json({
            message: "job fetch successfully",
            success: true,
            jobList,
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to fetch job",
            error: error.message,
        })
    }
};

const DeleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        await JobModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "job delete successfully",
            success: true,
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error faile to delete job",
            error: error.message,
        })
    }
};

const UpdateJob = async (req, res) => {
    try {
        const { id } = req.params;
        await JobModel.findByIdAndUpdate(id,req.body);

        res.status(200).json({
            message: "job updated successfully",
            success: true,
        })

    } catch (error) {
        res.status(500).json({
            message: "internal server error failed to update job",
            error: error.message,
        })
    }
};

module.exports = {
    CreateJob,
    FetchJob,
    DeleteJob,
    UpdateJob
}