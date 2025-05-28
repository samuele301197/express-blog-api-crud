function logginMiddleware(req, res, next) {
    console.log("ciao sono middleware");
    next();
    
}

export default logginMiddleware;