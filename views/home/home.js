var plusBtn=document.getElementById("plus-btn");
var imputNombre=document.getElementById("input-uno");
var imputSaldo=document.getElementById("input-dos");
var imputDivisa=document.getElementById("divisa");
var divRaiz=document.getElementById("div-raiz")


plusBtn.addEventListener("click",()=>{
    window.location.href="/test"
   

    
})

function crearTarjeta(){
    const workSpace=document.getElementById("work-space");

    const div=document.createElement("div");
    div.classList.add("ml-5" ,"w-64" ,"h-72", "bg-white" ,"border-gray-500" ,"border-2" ,"rounded-lg", "mt-5")
    div.innerHTML=`
    <div class="ml-5 w-64 h-72 bg-white border-gray-500 border-2 rounded-lg mt-5">
        <div class="ml-6">
            <p class="text-gray-500 text-sm">${imputNombre.value}</p>
            <h2 class="text-2xl">${imputDivisa.value}-${imputSaldo.value}</h2>
        </div>
        <div class="border-gray-500 border-2 w-11/12 rounded-lg h-1/2 py-1 pl-2 pr-3 grid grid-rows-3 mx-auto mt-5">
            <div class="grid grid-cols-2">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-green-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                    </svg>
                    <p>Ingresos</p>
                </div>
                <div class="grid justify-items-stretch">
                    <p class="justify-self-end text-green-500">$0.00</p>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                    <p>Gastos</p>
                </div>
                <div class="grid justify-items-stretch">
                    <p class="justify-self-end text-red-500">$0.00</p>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-slate-700">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                    </svg>
                    <p>Balance</p>
                </div>
                <div class="grid justify-items-stretch">
                    <p class="justify-self-end">$0.00</p>
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-5">
            <button class="bg-red-500 rounded-full w-4/5 py-1">
                Gastos
            </button>
            <button class="bg-green-500 rounded-full w-4/5 py-1">
                Ingreso
            </button>
        </div>        
    </div>
    `
    workSpace.appendChild(div)
}