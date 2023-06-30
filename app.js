const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
res.send("BIENVENIDO!");
});

app.listen(port, function () {
console.log(` PUERTO  ${port}!`);
});

//conecion de  base de datos 

var connection = require('tedious').Connection;
var config = {
server: 'JOEL-RAMIREZ\SQLEXPRESS',
Authentication: {
     type: 'default',
    options: {   
            userName:'usap',
            password:'usap1$'
    }
},
options: { 

    encrypt: true,
    database:'academics'
}

};

var connection = new connection(config);
connection.on('connect', function(err) {
    
    console.log("Ingreso Correctamente  a  SQL");
});

 connection.connect();
