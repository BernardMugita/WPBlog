const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
// const multer = require("multer");



app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
    })
    .then(console.log("Connected to Database"))
    .catch((err) => console.log(err)); 

    // const storage = multer.diskStorage({
    //     destination:(req, file,cb) => {
    //         cb(null, "images")
    //     }, filename:(req,file,cb) => {
    //         cb(null,req.body.name)
    //     }
    // })

    // const upload = multer({storage:storage});
    // app.post("/api/upload", upload.single("file"), (req, res) => {
    //     res.status(200).json("File has been uploaded");
    // })
        app.use("/server/auth", authRoute);
        app.use("/server/users", userRoute);
        app.use("/server/posts", postRoute);
        app.use("/server/categories", categoryRoute);

app.listen("5001", () => {
    console.log("Backend is running")
});