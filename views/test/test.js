const form=document.getElementById("form");
const boton=document.querySelector(".btn")
var check=document.getElementById("checkbox-form");
var check=document.getElementById("checkbox-form");
var inputNombre=document.getElementById("name");
var inputCategoria=document.getElementById("categoria");
var inputNumber=document.getElementById("saldo");
console.log(axios);


boton.addEventListener("click",async e=>{
    e.preventDefault();
    if(!inputNombre.value||!inputCategoria.value||!inputNumber.value){
        console.log("campo vacio");
        

    }else{
        console.log("campo lleno");
        try {
            const tarjetaObj={
                nombreCuenta:inputNombre.value,
                categoria:inputCategoria.value,
                saldo:inputNumber.value,
                total:check.checked
            }
            console.log(tarjetaObj);
           form.reset();

           //mandar a el router
          const response= await axios.post("/ruta/tarjeta",tarjetaObj)
           console.log(response,"response");
        
        } catch (error) {
            console.log(error);
        }
    }
    
    
   

})



check.addEventListener("change",e=>{
    if(check.checked){
        //console.log("checked");
    }else{
        //console.log("no-checked");
    }
})

