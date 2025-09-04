const { CreateJob, FetchJob, DeleteJob, UpdateJob } = require("../Controllers/JobController");
const router = require("express").Router();

router.post("/create",CreateJob);
router.get("/fetch",FetchJob);
router.delete("/delete/:id",DeleteJob);
router.put("/update/:id",UpdateJob);

module.exports = router;

