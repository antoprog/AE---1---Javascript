/*Daniel Ortega Jimenez*/


let numeros = [-3,6,4,-43,562,87,422,21,21,34]; /*varaible que va a contener el array de numeros*/



    function calcularMedia(){
        var suma = 0; /*esta variable es la que va almacenar la suma de todos los numeros*/
        var contador = 0;
        var media; /*esta variable va almacenar el resultado de la media*/

        /*Mediante un ForEach recorro cada uno de los numeros del array. El numero correspondiente a la vuelta que se este dando, se almacena en el iterador "numero"*/
        numeros.forEach(numero => {
                if (numero>0 && numero<100){        /*si el numero es mayor que cero Y menor que 100*/
                    suma += numero                  /*se procede a sumar el numero*/
                    contador++;
                }
        });
            
            if (suma!=0){ /*se comprueba que la suma no sea 0. Si no es igual a 0 se divide la cantidad de numeros que contiene el array con la suma de todos ellos calculada anteriormente*/
                media = suma/contador; 
                console.log('La media de los numeros "' + numeros + '" es = ' + media); /*finalmente se muestra un mensaje con el resultado*/
            } else { 
                console.log('Por algún motivo no se ha podido calcular la media'); /*en el caso de que sea 0 se muestra el siguiente mensaje*/
            }
    }



    function calcularModa(){
        var repeticiones = 0; /*almacena el numero de repeticiones del numero correspondiente*/
        var repeticionMaxima = 0; /*almacena el numero de repeticiones maximo*/
        var numeroMasRepetido; /*almacena el numero que tiene más repeticiones*/

        numeros.forEach(numero => { /*mediante un bucle "forEach" recorro cada numero del array*/

            numeros.forEach(comparacion => { /*mediante este bucle "forEach" comparo el numero del bucle "padre" con todos los numeros que contiene el array*/
                if(numero==comparacion) { 
                repeticiones++;
                }
            });

            if ( repeticiones > repeticionMaxima ){ /*una vez calculado las repeticiones del numero corresponidente, se comprueba*/
                repeticionMaxima = repeticiones           /*si el maximo de repeticiones anterior es menor al que se ha calculado ahora.*/
                numeroMasRepetido = numero                /* En el caso de que sea así, se sustituye ese valor maximo de repeticiones anterior*/
            }                                            /*por un nuevo valor maximo de repeticiones*/
            
            repeticiones = 0; /*reiniciamos la variable repeticiones para la siguiente vuelta*/
        });

        console.log('La moda de los numeros "' +  numeros + '" es = ' + numeroMasRepetido); /*se imprime el resultado*/
    }




    function calcularMediana(){
    
        var mediana; /*varaible que va a contener la mediana de los numeros*/

        numeros.sort(); /*mediante el metodo sort() ordeno los numeros del array de menor a mayor*/

        mediana = (numeros[4] + numeros[5])/2;

        console.log('La mediana de los numeros "' +  numeros + '" es = ' + mediana); /*se imprime el resultado*/
    }

    calcularMedia();
    calcularMediana();
    calcularModa();
