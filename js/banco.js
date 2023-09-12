function calcularBilletes(){
    let cantidad = parseInt(document.getElementById("cantidad").value)
    let nomb = (document.getElementById("nombre").value)

    if ( isNaN(cantidad) || nomb == ""){
        alert("Ingresa todos los datos correctamente")
        return;
    }


    let resultadoElement = document.getElementById("Resultado")
    resultadoElement.innerHTML = `Hola, ${nomb} y su retiro es de ${cantidad}`;

    let c100 = 0
    let c50 = 0
    let c20 = 0
    let c10 = 0
    let c5 = 0 
    let Elementc100 = document.getElementById("c100")
    let Elementc50 = document.getElementById("c50")
    let Elementc20 = document.getElementById("c20")
    let Elementc10 = document.getElementById("c10")
    let Elementc5 = document.getElementById("c5")
    let Elementc1 = document.getElementById("c1")

    if(cantidad >=100){
        c100 = parseInt(cantidad / 100)
        cantidad = cantidad -(c100 * 100)
     }
     if(cantidad >=50){
        c50 = parseInt(cantidad/50)
        cantidad = cantidad - (c50 *50)
     }
     if(cantidad >=20){
        c20 = parseInt(cantidad/20)
        cantidad = cantidad -(c20 * 20)
     }
     if(cantidad >=10){
        c10 = parseInt(cantidad/10)
        cantidad = cantidad - (c10 * 10)
     }
     if(cantidad >= 5){
        c5 = parseInt(cantidad/5)
        cantidad = cantidad - (c5 *5)
     }

     Elementc100.innerHTML = c100
     Elementc50.innerHTML = c50
     Elementc20.innerHTML = c20
     Elementc10.innerHTML = c10
     Elementc5.innerHTML = c5
     Elementc1.innerHTML = c100
}

document.getElementById("calcularBtn").addEventListener("click", calcularBilletes)