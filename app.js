const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const cors=require("cors");
const { METHODS } = require("http");
require("dotenv").config()
const PORT=process.env.PORT||3000

const corsOptions={
    origin:`http://localhost${PORT}`,
    methods:"POST,GET,PUT"
}
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors(corsOptions))


app.get("/",(req,res)=>{
res.send("<h1>Hello ,welcome to Home</h1>")
})


app.listen(PORT,()=>{
    console.log((`server running in ${PORT}`))
})