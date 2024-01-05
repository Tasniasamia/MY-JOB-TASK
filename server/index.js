const express = require('express')
const useRoute=require('./routes/userRoute')
const app = express()
const PORT=3000
require('dotenv').config()
const mongoose=require('mongoose')
mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("mongoose is connected");
});
var cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(useRoute)
app.get('/',(req,res)=>{
    return res.send("This is my Server")
})
app.use((req, res, next) => {
    res.status(404).json({
        message: "resource is not found"
    });
    next();
});

app.listen(PORT,()=>{
    console.log(`The server port is http://localhost:${PORT}`)
})