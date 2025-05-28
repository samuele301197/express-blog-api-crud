import express from "express";
import birRouter from "./routers/birre.js";
import logginMiddleware from "./middleware/logging-middleware.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import notfoundMiddleware from "./middleware/routeNotFoundMiddleware.js";
const app = express();
const port = 3000;


app.use(express.static("public"));

app.use(express.json());

app.use(logginMiddleware);

app.get("/", (req, res) =>{
    res.json({
        data: "prima rotta",
    });
});


app.use("/posts", birRouter);

app.use(notfoundMiddleware);

app.use(errorMiddleware);


app.listen(port, () => {
    console.log("fin qui tutto bene");    
});