import cors from 'cors';
import express from 'express';
import { connectToDB,db } from "./db.js";

const app = express()
app.use(cors())
app.use(express.json())


app.post('/signin', async(req, res) => {
   const userdata= await db.collection("ast").findOne({email:req.body.email})
   if(!userdata){
    return res.json({
        status:"fail",
        message:"user unsucessfully sign"
    })}
   if(req.body.password!==userdata.password){
    return res.json({
        status:"fail",
        message:"password missmatch"
        })
   }
   else(
   res.json({
    status:"success",
    message:"successfully login"
   }))

   
   
})
app.post('/signup',async(req,res)=>{
    await db.collection("ast").insertOne({email:req.body.email,mobile:req.body.mobile,password:req.body.password,name:req.body.name})
    .then((result)=>{
        res.json(result)
    })
    .catch((e)=>console.log(e))
})

connectToDB(() => {
    app.listen(9000, () => {
        console.log("server running at 9000");
    })
})

