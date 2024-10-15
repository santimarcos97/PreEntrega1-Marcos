function sinIva(discriminarIva, impuesto) {
    return discriminarIva / impuesto;
}

function conIva(agregarIva, impuesto) {
    return agregarIva * impuesto;
}

const formatearDecimal = numero =>{return numero.toLocaleString('es-AR', {minimunFractionDigits: 2, maximumFractionDigits: 2});}

function calcular() {
    let impuesto = 1.21;

    let option = prompt('¿Deseas calcular \n1. Monto sin IVA o \n2. Monto con IVA? \nIngrese 1 o 2 para continuar.');
    if(option === '1') {
        let discriminarIva = parseFloat(prompt('Ingrese el monto a discriminar IVA:'));

        if(isNaN(discriminarIva) || discriminarIva <= 0) {
            alert('Por favor ingrese un monto valido para continuar.');
        } else {
            let agregarIva = sinIva(discriminarIva, impuesto);
            alert(`El monto sin IVA de $${discriminarIva} es de: $${formatearDecimal(agregarIva)}`);
        }
    } else if(option === '2') {
        let agregarIva = parseFloat(prompt('Ingrese el monto a agregar IVA:'));

        if(isNaN(agregarIva) || agregarIva <= 0) {
            alert('Por favor ingrese un monto valido para continuar.');
        } else {
            let discriminarIva = conIva(agregarIva, impuesto);
            alert(`El monto con IVA de $${agregarIva} es de: $${formatearDecimal(discriminarIva)}`);
        }
    } else {
        alert('Opcion no valida, indique 1 o 2 para avanzar.');
    }
}

calcular();