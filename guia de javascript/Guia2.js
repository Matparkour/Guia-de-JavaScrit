//ejercicio1
// entrada al boliche para mayores de 18 
let free = false;
const validarCliente =(time)=>{  // time es el tiempo que vamos a tener que definir al llamar a la funcion
    let edad = prompt("¿Cuántos años tienes?"); //declaro edad 
    if(edad > 18) {  // condicional para dejar pasar solo si tiene mas de 18
        if(time >= 2 && time < 7 && free == false ){// si el parametro time es >= a 2 y <7 no pasas gratis
         alert("podes pasar gratis porque sos la primer persona despues de las 2 AM") 
         free = true// free va a ser true para que solo la primera persona pase gratis
        }
        else{  // sino que diga que podes pasar pero pagando 
            alert(`son las ${time}:00Hs y podes pasar pero tenes que pagar la entrada`)           
        }
    }else{  // y en el caso de ser menor que alerte sos menor de edad
        alert(" mira papu sos menor no podes pasar")
    }

}

validarCliente(23)  // son horas distintas en la que la gente entra
validarCliente(24)// al llamar la funcion se activa con la hora dentro del parentesis
validarCliente(0.2)
validarCliente(0.6)
validarCliente(1)
validarCliente(2,4)
validarCliente(3)


// ejercicio 2
//asistencia de alumnos

let cantidad = prompt("¿cuantos alumnos son?")
let alumnosTotales = [];
for (i = 0;i < cantidad; i++){
    alumnosTotales[i] = [prompt("Nombre del alumno" + (i + 1)),0];
}
const tomarAsistencia = (nombre, p)=>{
    let precencia = prompt(nombre);
    if(precencia == "p" || precencia == "P"){
        alumnosTotales[p][1]++;
    }    
}

for (i = 0; i < 30; i++){
    for (alumno in alumnosTotales) {  // in nos pasa la poscion
        tomarAsistencia(alumnosTotales[alumno][0],alumno);// poniendo el 0 digo que quiero acceder a la primera pocicion osea al nombre del alumno
    }                // la posicion es solamente alumno 
}

for (alumno in alumnosTotales){// abajo llamop al nombre llamando al array alumnos totales
    let resultado = `${alumnosTotales[alumno][0]}:<br>   
    _________Presentes: <b>${alumnosTotales[alumno][1]} </b><br>
    _________Ausencias: <b>${30 - parseInt(alumnosTotales[alumno][1])}</b> `;
    if(30- alumnosTotales[alumno][1] > 18) {
     resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
    }else{
        resultado+= "<br><br>"
    }document.write(resultado)
    // linea 51 es 30 - la cantidad de dias que no asistio
}  // en la linea 50 llamo en la segunda posicion osea el 1 al la cantidad de asistencias



//ejercicios3
// calculadora


const sumar = (num1,num2)=>{
    return parseInt(num1) + parseInt (num2)
}
const restar = (num1,num2)=>{
    return parseInt(num1) - parseInt (num2)
}
const dividir = (num1,num2)=>{
    return parseInt(num1) / parseInt (num2)
}
const multiplicar = (num1,num2)=>{
    return parseInt(num1) * parseInt (num2)
}
alert("¿Que operacion deseas realizar?")
operacion = prompt("1: suma, 2: resta, 3: division, 4: multiplicacion")
if(operacion == 1){
   let numero1 = prompt("Primer Numero para sumar")
   let numero2 = prompt("Segundo Numero para sumar")
   resultado = sumar(numero1,numero2)
   alert(`tu resultado es ${resultado}`)
}
if(operacion == 2){
    let numero1 = prompt("Primer Numero para restar")
    let numero2 = prompt("Segundo Numero para restar")
    resultado = restar(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
}
if(operacion == 3){
    let numero1 = prompt("Primer Numero para dividir")
    let numero2 = prompt("Segundo Numero para dividir")
    resultado = dividir(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
}
if(operacion == 4){
    let numero1 = prompt("Primer Numero para multiplicar")
    let numero2 = prompt("Segundo Numero para multiplicar")
    resultado = multiplicar(numero1,numero2)
    alert(`tu resultado es ${resultado}`)
}
    

//Funciones
// parametros 
//ej3

// tercer forma funciones flecha

/*const saludar = nombre =>{ // como solo usamos un parametro no hace falta ponerle parentesis
    let frase = `Hola ${nombre}  ¿como estas?`
    document.write(frase)
}
saludar("pedro")   
*/

// segunda forma de crear una funcion

/*function saludar(nombre){  
    let frase = `Hola ${nombre}  ¿como estas?` 
    document.write(frase)
}*/
//dos tipos de forma
 /*const saludar = function(nombre){// control + } para comentar todo lo selecionado
    let frase = `Hola ${nombre}  ¿como estas?`
    document.write(frase) 
}  */
 //saludar ("pedro")

// primera forma para crear una funcion
/*function saludar(nombre){  // creamos el parametro nombre
    let frase = `Hola ${nombre}  ¿como estas?` //es importante poner el let asi la variable frase solo pertenezca a la funcion
    document.write(frase)
}
saludar("santiago")// llamo la funcion y le defino el parametro
*/
//ej2

/*function suma (num1,num2){  // cada vez que llamamso a esta funcion nos crea dos parametros (num1 y num2)
  
    let res = num1 + num2;// los dos parametros se guardan en la variable res
    return res
}
let resultado = suma(23,45)//creamos una variable para mostrarlo, que sea igual a la funcion y le agregamos dos valores (20, 30)
document.write(resultado) // nos muetra la suma  */
//ej1

/*

function suma (num1,num2){  // ponemos dos variables en el parentesis para que al llamar a la funcion nosotros le demos el valor 
  
    let res = num1 + num2;
    document.write(res);
    document.write("<br>")
}
suma(12,32) // al llamar a la funcion entr parentesis le damos un valos a num1 y num2
suma(34,54)// es mas dinamico


*/

//ej3   return

/*
function saludar(){
   alert ("hola") // el return finaliza la funcion y le da un valor
   return "la funcion se ejecuto correctamente"// esto es lo que la funcion retorna
}

let saludo = saludar() // saludar es igual a lo que la funcion retorna
document.write(saludo) // saludo es igual a saludar y saludar va a tener como valor lo que se retorna osea (return)
/*


//ej 2
/*function saludar(){   // ava creamos la funcion

}
saludar() // aca llamamos la funcion
/*

//ej 1
// otra forma de crear una funcion seria, saludar = function (){ y el codigo }

/* function saludar(){    // se crea una funcion para no repetir el codigo
    respuesta = prompt ("¡Hola Lucas! ¿Como fue tu dia?")
if (respuesta == "bien"){
    alert("me alegra saberlo")
} else {  
        alert("que pena")
}
}
saludar()
saludar()  // podemos llamar a la funcion con el nombre otorgado las veces que quieramos, de esta forma no repetimos codigo.
 */



//bucles e interacion

//For, For in y For of

//ej5

/*array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1,"josefina"];

forRancio: // sentencia label
for (let array in array2 ){// recorremos el primer array
    if (array == 2){ // si array 2 esta en la poscion 2 (marcelo)--
       
        for(let array of array1)// -- recorremos otro array 
            document.write(array + "<br>")// mientras lo recorremos lo mostramos en pantalla
            break forRancio; // para terminar el for entero usamos un label

    }else{
        document.write(array2[array] + "<br>" )
    }
}
*/



//ej4  for in y for of

/*
let  animales = ["gato","perro","tiranosaurio rex"];
for (animal in animales){     // for in me muestra las posciones 
    document.write(animal + "<br>")// para mostrar el elemento usamos (animales[animal] + "<br>")
}                              // el of y el in recorren el array solo que tienen distinta funcion
for (animal of animales){  // for off me muestra  el valor de los  elementos 
    document.write(animal + "<br>")
} 
  */


//ej 3
   //continue
/*for (let i = 0; i <20; i++){    
    if(i==12){   // si le cambio el numero del i desaparece el nuemro que ponga, no lo cuenta  
        continue;   // no termina el bucle, todo lo que le sigue no lo ejecuta pero pasa a la siguiente 
    }
    document.write(i+"<br>")
}
*/
//ej2

 /*for (let i = 0; i <20; i++){    
    document.write(i+"<br>")
    if(i==12){    // uso este condicional para causar el breack si se cumple la condicion
        break    // utilizando este break termino el for 
    }
}

*/

//ej

//i=20; // variable definida por fuera del for

//for (let i = 0; i <6; i++){    // for( let declaracion = 0; condicion; aumento o decremento;)
//document.write(i+"<br>")
//}    

//document.write(i)  // solo detecta las variables fuera del for


     //partes de un bucle

//declaracion e inicializacion
//condicion
//aumento - decremento

    //Break

    //ej
//let numero = 0;
//while(numero<1000){
    //numero++
    //document.write(numero);
    //if(numero == 10){    // si numero no es igual a 10 se ejecuta
    //break;// break es una sentencia que sirve para finalizar el while 
    //}
//}

//document.write(" fin")

       //while y do!!!!!!!!!!!!!!
//let numero= 0;
//do{
   // el do while  primero ejecuta el codigo y despues pregunta  
  // document.write(numero+"<br>")
   //numero++;
//}
//while (numero<=6)// mientras numero sea menor o igual a 6 el bucle va a continuar

           //Arrays
// es un conjunto de datos los cuales podemos llamar apartir de su posicion 

//ej

//let frutas = ["banana", "manzana", "pera"];
                //0      //1       //2     posicion de cada elemento
//document.write(frutas[0]);  //dentro de los corchetes coloca el numero del elementoq ue quieres que aparezca en pantalla.
          //Arrays Asociativos
//let pc1 = {
    //nombre: "DaltoPC",
    //procesador: "intel core I7",
    //ram:"16GB",
    //espacio:"1TB"
//};
   //let nombre = pc1["nombre"];
   //let procesador = pc1["procesador"];
   //let ram = pc1["ram"];
   //let espacio = pc1["espacio"];

//frase = `el nombre de mi computadora es: <b>${nombre}</b> <br>
         //el nombre de mi procesador es: <b>${procesador}</b><br>
         //la cantidad de ram que tengo es:<b> ${ram}</b></br>
         //mi compu tiene de espacio: <b>${espacio}</b>`
         //document.write(frase)
