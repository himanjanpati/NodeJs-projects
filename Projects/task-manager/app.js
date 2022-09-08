const express = require('express')
const app = express()
const task  = require('./routes/task')

app.get("/", (req, res)=>{
    res.send("list of all tasks!!")
})

app.use('/api/v1/tasks', task)


port = 3000

app.listen(port, console.log(`app listening in port ${port}...`))

module.exports = app;