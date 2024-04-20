const express = require("express");
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('view engine', 'ejs')

app.get("/",(req,res)=>{
    res.render("<h1>Hello world</h1>");

})

app.listen(3000,()=>{
    console.log("its running at 3000");
})