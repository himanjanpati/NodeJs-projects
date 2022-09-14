import http from 'http';
import chalk from 'chalk';
import {data} from './data.js'

http.createServer((req, res) =>{
    res.writeHead(200, {"content-type":"application\json"})
    res.write(JSON.stringify(data))
    res.end()
    console.log(chalk.gray("Hello Node"))
}).listen(5000)