const botonHam=document.getElementById("boton_ham");
const divMenu=document.getElementById("div__menu");
const btnX=document.getElementById("btn-x");

botonHam.addEventListener("click",()=>{
    divMenu.classList.toggle("hidden")
})

btnX.addEventListener("click",()=>{
    divMenu.classList.add("hidden")
})