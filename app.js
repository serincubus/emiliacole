const express = require("express");
const app = express();
const path = require("path");



app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"));
})

app.get("/contact", (req,res)=>{
    res.sendFile(path.join(__dirname, "views/contact.html"))
})

app.get("/about", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/about.html"))
})

app.get("/music", (req,res)=>{
    res.sendFile(path.join(__dirname, "/views/music.html"));
})
app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log("servidor funcionando en el puerto 3000")
});
