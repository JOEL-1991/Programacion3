
const http- require("http");

const hostname="127.0.0.1";
const port= 8000;

const server- http.createServer(function(req,res){

    res.writehead(200, {"content-Type":"text/plain"});
    res.end("programacion3");
})
