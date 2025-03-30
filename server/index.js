const express = require("express");
const app = express();
const cors = require("cors")
const dbconnect = require("./Db/connection");
require('dotenv').config({path:"./store.env"});



app.use(cors());

app.use(express.json());
dbconnect();


// admin Routes
const adminRouter = require("./Routes/admin/adminRoutes");
app.use("/admin/api",adminRouter);


// userRoutes

const userRouter = require("./Routes/user/userRoutes");
app.use("/user/api",userRouter);


// product Routes
const productRouter = require("./Routes/product/productRoutes");
app.use("/product/api",productRouter);




app.get("/",(req,res)=>{
 res.send("server is start")
})

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log("server is listening");
})