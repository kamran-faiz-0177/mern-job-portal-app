const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    jobTitle: {
      type: String,
      required: true
    },
    company: {
      type: String,
      required: true
    },
    jobType: {
      type: String,
      required: true
    },
    jobStatus: {
      type: String,
      enum: ["active", "deactive"],
      required: true
    },
    postedBy: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    salary: {
      type: String,
      required: true
    },
    experience: {
      type: String,
      required: true
    },
    skills: {
      type: [String],
      required: true
    },
    jobDescription: {
      type: String,
      required: true
    }
}, { timestamps: true });


const JobModel = mongoose.model("Job", JobSchema);
module.exports = JobModel;
