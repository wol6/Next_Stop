import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/router.js'



const PORT = 8080
const app = express()

app.use(express.json())

app.use('/',routes)

mongoose.connect('mongodb://localhost:27017/nextstop_db').then(()=>{
    app.listen(PORT,()=>{
        console.log(`database connected successfully at port ${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})