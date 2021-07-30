const express = require('express')
const cors = require('cors')
const app = express()
const Router = require('./src/routes/index')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(cors())
app.use(Router)

app.listen(3000, ()=>{
    console.log('server app funfs')
})
