//Metodos de repeticion

/*

//filter() crea un nuevo array con todos los elementos que cumplan la condicion.
//ej 1

let nombres = ["juan","santiago","amira","tobias"];
nombres.filter(nombre => document.write(nombre + "<br>")); // nombre pasa a ser igual a numero, es un bucle. me los devuelve uno encima del otro

*/

//ej 2

let nombres = ["juanse","santiago","amira","tobias"];

resultado = nombres.filter( nombre => nombre.length > 4); // length en un array sirve para determinar cuantos elementos tiene 
document.write(resultado);  //si tiene mas de 4 elementos

//forEach() ejecuta la funcion indicada una vez por cada elemento del array


//map()

//Metodos Accesores de un array

// join() une todos los elementos de una matriz (u objeto similar) en una cadena y lo devuelve.
//1 ej
/*
let nombres = ["juan","santiago","amira","tobias"];
document.write(nombres + "<br>");
let resultado = nombres.join(" - ");// agrega el - en el medio de cada nombre
document.write(resultado); //juan-santiago ....


//2 ej

let nombres = ["juan","santiago","amira","tobias"];
document.write(nombres + "<br>");
let resultado = nombres.join("<br>elemento: "); // para agregar elemento en cada espacio uno arriba del otro, es una cadena de texto solo que tiene el <br>
document.write("elemento: "+ resultado);// se pone el elemento al principio ya que en el primero no aparece 



//slice() devuelve una parte del array dentro de un nuevo array empezando por inicio hasta fin(fin no incluido)

let nombres = ["juan","santiago","amira","tobias"];
document.write(nombres + "<br>");
let resultado = nombres.slice(0,2); // el 2 no esta incluido, el array pasa a ser juan, santiago
document.write( resultado);

*/

//metodos ya vistos en cadena: toString(), indexOf(), lastindex(), includes()

//Metodos de Array Transformadores

//Pop() elimina el ultimo elemento de un array y lo devuelve.

/*

let nombres = ["Pedro", "maria","jorge"];
let resultado= nombres.pop()// me muestra el ultimo elemento que saco en este caso "jorge"
document.write(resultado)  
document.write(`, ${nombres} <br>`)//  esto me va a mostrar solo Pedro y Maria, jorge no ya que fue sacado con el metodo pop por eso ya no forma parte del array



// shift() elimina el primer elemento de un array y lo devuelve 

let nombres = ["juan", "maria","jorge"];
let resultado= nombres.shift();
document.write(`${resultado}  <br>`);  // en este caso el metodo shift saco al primero osea "juan"
document.write(`, ${nombres} <br>`); // caundo lo llamo de vuelta al array  me muestra solo dos nombres ya que el primero fue sacado



//push() agrega un elemento al array al final de la lista

let nombres = ["jorge", "maria","jorge"];
let resultado= nombres.push("juan"); // me agrego al final del array el nombre que puse entre parentesis osea ("juan")
document.write(`${resultado}  <br>`);  
document.write(`, ${nombres} <br>`);


//reverse() invierte el orden de los elementos del array.

let nombres = ["juan", "maria","jorge"];// el primero paso a estar ultimo y viceversa 
let resultado= nombres.reverse(); //reverse invierte la pociscion 
document.write(`${resultado}  <br>`);  



//unshift() agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array

let nombres = ["juan", "maria","jorge"];
let resultado= nombres.unshift("peter", "amira", "alberto"); 
document.write(`${resultado}  <br>`); // me devolvio la cantidad de nombres osea 6
document.write(nombres); // le agrego mas nombres al array, y devolvio la cantidad cuando llame a la variable resultado.



// sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado

let nombres = ["juan", "maria","jorge","amira","bauti"]; // el resultaado de ordena segun el abecedario
let resultado= nombres.sort(); // sort ordena el array dependiendo el abecedadrio, como amira comienza con a y a es la primera palabra del abc entoces va a ir primera
document.write(`${resultado}  <br>`);   // sort hace lo mismo con numeros, los ordena segun su pocision real 1 2 3 4 5 ....



//splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

let nombres = ["juan", "maria","jorge","amira","bauti"];// este es el array completo
document.write(`${nombres}  <br>`)
 nombres.splice(1,3,"pato","gato","chato");// de la pociscion 1 a la 3 me elimino(maria,jorge,amira) y los cambie por (Pato gato chato)
document.write(`${nombres}  <br>`); // aca me muestra los nombres que elimino del array y que cambie 

// si se puede usar numeros negativos 

*/

//Metodos de cadena

//1 concat() junta dos o mas cadenas y retorna una nueva
/*

let cadena = ("cadena de prueba");
let cadena2 = ("cadena 2")
resultado = cadena.concat(cadena2);// o("hola mundo")

document.write(resultado)




//2 startWith() si una cadena comienza con los carcteres de otra cadena, devuelve true, sino devuelve false.
let cadena = ("cadena de prueba");
let cadena2 = ("cadena")
resultado = cadena.startsWith(cadena2);// como cadena 2 tiene escrito cadena igual que cadena 1 entonces es true si no fueran iguales seria false 
// lo mismo con resultado = cadena.endsWith(cadena2);// no terminan igual por eso va a ser false
document.write(resultado)


//includes() si una cadena puede encontrarse dentro de otra cadena, devuelve true, sino devuelve false.

let cadena = ("cadena de prueba");// y aca tambien
let cadena2 = ("cadena")// aca esta cadena 
resultado = cadena.includes(cadena2);//nos pone true porque la palabra cadena de cadena2 se encuentra en la frase de cadena 1
document.write(resultado)



//indexOf() devuelve e⁡⁢⁢l indice del primer caracter de la cadena, si no existe, devuelve -1 ⁡

let cadena = ("cadena de prueba");
let cadena2 = ("cadena");  // si esta palabra no se encuentra nos devuelve -1
resultado = cadena.indexOf(cadena2);// nos muestra la posicion de la palabra cadena en la variable cadena1, en este caso esta en la pocision 0
document.write(resultado)



//lastIndexOf() devuelve el ultimo indicedel primer caracter de la cadena, si no existe, devuelve -1 

let cadena = ("pedro es un tarado tarado tarado tarado tarado"); // lastindexof toma al ultimo tarado de todos 
let cadena2 = ("tarado")// si contamos desde el primer tarado nos va dar en total 40 
resultado = cadena.lastIndexOf(cadena2);// responde que esta en la pociocion 40
document.write(cadena[40] + cadena[41] )// si pongo la posicion 40 nos va a dar la t de tarado
//si hacemos una suma de la posicion 40 y la 41 nos va a dar Ta de tarado, si ponemos  + cadena[42] nos va a dar tar

//Propuesta de ECMA o de estandar

//padStart() [Propuesta estandar] Rellenar cadena al principio con los caracteres deseados.
let cadena = "abc";
let cadena2 = ""; 
resultado = cadena.padStart(6,"a");// el numero 6 son la cantidad de caracteres que quiero que tenga y la "a" es lo que quiero que use para llenar los caracteres
document.write(resultado) // quedaria "aaaabc" 6 caracteres y lo relleno con a




//padEnd()[Propuesta de ECMA] Rellenar cadena al final con los caracteres deseados.

let cadena = "abc";
let cadena2 = " "; 
resultado = cadena.padEnd(6,"a"); //Lo unico que cambia es que en vez  de que las a esten al principio, estan al final
document.write(resultado)// el resultado seria "abcaaa"


//repeat() Devuelve la misma cadena pero repetida la cantidad que le indica


let cadena = "abc";
let cadena2 = " "; // si hago el espacio dentro de las commillas queda separado cada texto repetido
resultado = cadena.repeat(6); // el numero que ponemos en el parentesis va a ser la cantidad de veces que se repita el texto de cadena
document.write(resultado) // el resultado seria"abcabcabcabcabcabc"



//split()  Divide la cadena como le pidamos 
let cadena = "Hola como estas";
resultado = cadena.split("como")  // si pongo como el resultado es "Hola, estas", me separa de un lado y del otro y elimina el como
document.write(resultado[0]) //depende la posicion que ponga me va a marcar una el texto en esa posicion, en este caso Hola esta en la posicion 0 




//substring()  Nos retorna un pedazo de la cena que seleccionamos  

let cadena = "ABCDEFG";
resultado = cadena.substring(0,2); // el 0 es de donde quiero que comience y el 2 es donde quiero que termine 
document.write(resultado)  // el resultado seria AB porque a la posicion 2 no la cuenta 



//tolowercase()  Convierte una cadena a minúscula

let cadena = "ABCDEFG";
resultado = cadena.toLowerCase(); //convierte a minuscula 
document.write(resultado) // el resultado es "abcdefg"


//toUpperCase()  Convierte una cadena a mayúscula             // lenghth es una propiedad de la cadena de texto que me dice cuantos caracteres tiene un texto
                                         
let cadena = "abcdefg";
resultado = cadena.toUpperCase(); //convierte a mayuscula
document.write(resultado) // el resultado es "ABCDEFG"



//tostring()  método devuelve una cadena que representa al objeto especificado. 

let cadena = 50;
 let resultado = cadena.toString();// to string transforma en cadena de texto al numero por eso no se suma 
document.write(2+resultado); // es igual a 250



//trim()  elimina los espacios en blanco al principio y al final de una cadena. 

let cadena = "   pedro   ";
 let resultado = cadena.trim(); // trim muestra la palabra sin espacios, por eso da de resultado 5, ya que remueve los espacios 
document.write(resultado.length); // la cadena original tiene 11 caracteres



//trimEnd()  elimina los espacios en blanco al final de una cadena. 

let cadena = "   pedro   ";
 let resultado = cadena.trimEnd(); // trim en borra los espacios del final, osea "   pedro" 8 caracteres es el resultado
document.write(resultado.length) 



//trinstart()  elimina los espacios en blanco al comienzo de una cadena. 

let cadena = "   pedro   ";
 let resultado = cadena.trimStart(); // trimStart hace lo mismo elimina los del principio osea quedaria "pedro   "
document.write(resultado.length) // el rsultado es 8 por los 8 caracteres que teine la palabra pedro sin los espacios del comienzo

*/

//valueOf()  retorna el valor primitivo de un objeto string




