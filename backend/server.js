const express=require("express")
const mysql=require("mysql")
const cors=require("cors")

const app=express()

app.use(cors())


const db=mysql.createConnection({
  host:"bpwl86ld3fty6hkrton8-mysql.services.clever-cloud.com",
  user:"uh1mjrnywq0ctbwz",
  password:"jSRmnUhlbhi2pwlpLl72",
  database:"bpwl86ld3fty6hkrton8"
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