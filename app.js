import express from "express";
import birRouter from "./routers/birre.js";
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("fin qui tutto bene");    
});

app.use(express.static("public"));
app.use("/posts", birRouter);

app.get("/", (req, res) =>{
    res.json({
        data: "prima rotta"
    });
});