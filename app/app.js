const express = require('express')
const path = require("path");
const helmet = require('helmet');
const logger = require('./middleware/logger');

const app = express()

// configurations
app.disable('x-powered-by')


// middlewares
app.use(helmet());
app.use(express.static(path.join(__dirname, "public")));
app.use(logger)



const port = 5000

app.get('/about',  (req, res) =>{

    res.send('hello world')
})
app.listen(5000, ()=>{
    console.log(`Server is running on port ${port}`)
})