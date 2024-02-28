const mongoose=require("mongoose");


const tarjetaSchema=new mongoose.Schema({
    nombreCuenta:String,
    categoria:String,
    saldo:Number,
    total:Boolean
})

const Tarjeta=mongoose.model("Tarjeta",tarjetaSchema);

module.exports=Tarjeta