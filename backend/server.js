const express=require("express")
const mysql=require("mysql")
const cors=require("cors")

const app=express()

app.use(cors())


const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"ecommerce"
})

app.get("/",(req,res)=>{
    const sql="SELECT*FROM product"
    db.query(sql,[],(err,data)=>{
        if (err) {
           console.log(err) 
        } else {
            res.json(data)
        }
    })
})

app.listen(3001,()=>{
    console.log("server listen")
})