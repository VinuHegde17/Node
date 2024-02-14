const express=require('express')
const app=express();
 app.get('/',function (req,res) {
     res.send("Hello world")   
 })

app.get('/ailen',function (req,res) {
    res.send("Hello ailen welcome back ")  

})
 
app.get('/ailen/:id',function (req,res) {
    const id=req.params.id
    res.send("Hello JS "+id)   
})

app.listen(9000, function (req,res) {
  console.log("Running")  
})