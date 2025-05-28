function notfoundMiddleware(req, res, next){
    res.status(404);
    res.json({
        error: "rotta non trovata",
    });
}

export default notfoundMiddleware;