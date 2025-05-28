function errorMiddleware(err, req, res, next){
    console.log("errore del server", err);
    
    res.status(500);
    res.json({
        error: "Errore del server",
    });
}

export default errorMiddleware;