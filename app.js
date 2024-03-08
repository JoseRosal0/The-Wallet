require("dotenv").config();
const express=require("express");
const app=express();
const moongoose=require("mongoose");
const path=require("path");
const tarjetaRouter = require("./controller/tarjetas");

(async ()=>{
    try {
        await moongoose.connect(process.env.MONGO_WALLET);
        console.log("te has conectado a mongo db")
    } catch (error) {
        console.log(error)
    }
})();
//rutas de frontend
app.use("/",express.static(path.resolve("views", "work")));
app.use("/form",express.static(path.resolve("views", "form")));
app.use("/home",express.static(path.resolve("views", "home")));
app.use("/imagen",express.static(path.resolve("img")));
app.use("/output",express.static(path.resolve("views")));
//importante
app.use(express.json());
//rutas de backend
app.use("/ruta/tarjeta",tarjetaRouter);


module.exports=app;