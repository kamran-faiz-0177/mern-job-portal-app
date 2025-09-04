const express = require("express");
const app = express();
const cors = require("cors");
const UserRouter = require("./Routes/UserRouter.js");
const JobRouter = require("./Routes/JobRouter.js");

require("dotenv").config();
require("./Models/db.js");

const PORT = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());

app.use("/api/user",UserRouter);
app.use("/api/job",JobRouter);


app.get("/", () => {
    console.log("hello from backend :)");
})

app.listen(PORT, () => {
    console.log(`app is running at this PORT  = `, PORT);
})