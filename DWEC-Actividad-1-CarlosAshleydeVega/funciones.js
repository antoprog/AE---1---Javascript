//DATOS ARRAYS --------------------------------------
//VALORES
function retornarArray(arr) {
    for (let i = 0; i < arr.length; i++) {
    }
    return arr;
}

//NUEVOARRAY
function retornarNuevoArray(arr) {
    for (let i = 0; i < arr.length; i++) {  
    }
    const mayorCien = arr.filter(function (numeros) {
        return numeros < 100;
    });
    return mayorCien;
}

//FUNCIONES ----------------------------------------

//MEDIA
function retornarMedia(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {  
    }
    const mayorCien = arr.filter(function (numeros) {
        return numeros < 100;
    });
    for (let j = 0; j < mayorCien.length; j++){
        suma += mayorCien[j];
    }
    return suma/mayorCien.length;  
}

//MEDIANA
function retornarMediana(arr) {
    for (let i = 0; i < arr.length; i++) {  
    }

    const mayorCien = arr.filter(function (numeros) {
        return numeros < 100;
    });
    
    var longitud = mayorCien.length,
        m = ~~((longitud - 1) / 2);
        
    mayorCien.sort(function(x, y) {
        return y - x;
    });
    return longitud % 2 ? mayorCien[m] : (mayorCien[m] + mayorCien[m + 1]) / 2
}

//MODA
function retornarModa(arr) {
    for (let i = 0; i < arr.length; i++) {  
    }
    const mayorCien = arr.filter(function (numeros) {
        return numeros < 100;
    });
    var contados = {},
        maxCount = 0,
        numero;
        
    for (let j = 0; j < mayorCien.length; j++) {
        var a = mayorCien[j];
        
        if (!contados[a]) contados[a] = 0;
        contados[a]++;
    }
    for (numero in contados)
        if (contados[numero] > maxCount)
            maxCount = numero;
    return maxCount;
}