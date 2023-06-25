require('dotenv').config()

const token=require('./routes/tokenRoutes')
const meter=require('./routes/meterNumberRoutes')

const connection=require('./utils/db')

const bodyParser=require('body-parser')
const express=require('express')
const app=express()

connection()

const cors=require('cors')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())

app.use('/', token)
app.use('/meter', meter)



const port=process.env.port
app.listen(port, ()=> console.log(`listening on port ${port}`))



