const tarjetaRouter=require("express").Router();

const Tarjeta= require("../model/tarjeta")

tarjetaRouter.post("/",async(request,response)=>{
    console.log(request.body,"req")
    const {nombreCuenta,categoria,saldo,total}=request.body;
    const body=request.body
    //console.log(body,"body")

    if(!nombreCuenta||!categoria||!saldo){
        return response.status(400).json({error:'Todos los campos son requeridos'})
    }else{
        try {
            const tarjetaDB=new Tarjeta(body)
            await tarjetaDB.save();
        } catch (error) {
            console.log(error)
        }
        return response.status(200).json({msg:'se ha creado el nuevo usuario'});
    }
})

module.exports=tarjetaRouter;

