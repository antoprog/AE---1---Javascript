var array = [12,50,76,77,76,100,9,230,11,42];


//Código para la media
function media(){
	var sum = 0;
	var conteo = 0;
	console.log("Numeros a tener en cuenta en la media");
	for(let numero of array){
		//Si el numero está comprenido entre 0 y 100 se cuenta en la operación
		if(numero>=0 && numero <=100){
			sum += numero;
			conteo++;
			console.log(numero);
		}
	}
	//Resultado de la media
	console.log("Resultado de la media = "+sum/conteo);	
}

//Código para ordenar de mayor a menor
function ordenar(){
	//Usando la función sort() adaptada a orden numerico
	array.sort(function(a, b){return a - b});
	for(let numero of array){
		console.log(numero);
	}
}

//Código para la mediana
function mediana(){
	//Una vez ordenado de menos a mayor se dividen la suma de los puestos del medio entre dos
	console.log("Resultado de la mediana = "+(array[4]+array[5])/2);
}

//Código para la moda

//Cuenta el numero de veces que un determinado "numero" existe en el "array"
function contar(numero, array){
    var num_veces=0
    for (var pos in array) {
    	//Compara el numero introducido con todos los del array
        if (array[pos]==numero) {
            num_veces++
        }
    }
    //Devuelve el numero de veces que se repite el numero
    return num_veces
}

//Detecta la posicion del numero mas repetido
function mayor(array){
    var posMayor=0
    var numMayor=array[0]
    for (var pos in array){
    	//Se introduce tanto el valor como la posicion del numero mas repetido
        if (array[pos]>numMayor) {
            numMayor=array[pos]
            posMayor=pos
        }
    }
    //Retorna la posicion del numero mas repetido
    return posMayor
}

function moda(array){
	//Array en el que almacenar cuantas veces se repite cada numero
    var frecuencias=new Array(array.length)
    for (var pos in array){
         var numero=array[pos]
         //Se cuenta las veces que se repiten los numeros en el array
         frecuencias[pos]=contar(numero, array)
    }
    /*Se introduce el array y selecciona la posicion en la que el numero
    se repite un "mayor"numero de veces*/
    var posModa=mayor(frecuencias)
    /*Muestra el numero del array que esta en la misma posicion que el 
    mayor numero del array frecuencias*/
    console.log("Resultado de la moda = "+array[posModa]) 
}

//Inicializacion de metodos
media();
ordenar();
mediana();
moda(array);