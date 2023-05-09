function calcularPrecioFinalConInteres(cantidadCuotas,precioProducto){
    switch(cantidadCuotas){
        case 1: 
            return precioProducto
        case 3:
            return precioProducto*1.12
        case 6:
            return precioProducto*1.25
        case 12:
            return precioProducto*1.56
        case 18:
            return precioProducto*1.94
        case 24:
            return precioProducto*2.4
        default:
            return console.log("ERROR")
    }
}
function calcularPrecioFinalSinInteres(cantidadCuotas,precioProducto){
    return precioProducto/cantidadCuotas
}

alert("Simulador de cuotas")
function main(){
    let cantidadProductos=Number(prompt("Ingrese cuantos productos sacaste en cuotas"))
    console.log(cantidadProductos)
    for(let i=0;i<cantidadProductos;i++){
        let precioProducto=Number(prompt("Ingrese el precio total del producto"))
        let cantidadCuotas=Number(prompt("Ingrese en cuantas cuotas\n Opciones:\n 1, 3, 6, 12, 18, 24"))
        if(cantidadCuotas!==1&&cantidadCuotas!==3&&cantidadCuotas!==6&&cantidadCuotas!==12&&cantidadCuotas!==18&&cantidadCuotas!==24){
            console.log("cantidad de cuotas no valida")
            return
        }
        let tieneInteres=prompt("¿Con interes?\n SI\n NO")
        if (tieneInteres==="NO"){
            const cuotaSinInteres=calcularPrecioFinalSinInteres(cantidadCuotas,precioProducto)
            console.log("te quedan ",cantidadCuotas," cuotas sin interes de ",cuotaSinInteres)

        }
        else if (tieneInteres==="SI"){
            const preciofinal=calcularPrecioFinalConInteres(cantidadCuotas,precioProducto)
            const precioCuota=preciofinal/cantidadCuotas
            console.log("Te quedarian ",cantidadCuotas," cuotas de ",precioCuota)
        }
    }
}
main()