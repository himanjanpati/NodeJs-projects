const http = require('http')
const chalk = require("chalk");
const data = require("./data")

http.createServer((req, res) =>{
    res.writeHead(200,{"content-type":"application\json"})
    res.write(JSON.stringify(data))
    console.log(chalk.blue("Hello Node!!"))
    res.end()
    
}).listen(4500)

