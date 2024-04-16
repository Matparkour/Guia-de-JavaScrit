//Practica numero 1

dineroCofla = prompt("¿cuanto dinero tiene cofla?")
dineroRoberto = prompt("¿cuanto dinero tiene roberto?")
dineroPedro = prompt("¿cuanto dinero tiene pedro?")
dineroCofla = parseInt(dineroCofla)

if (dineroCofla>=0,6 && dineroCofla < 1){
    alert("cofla comprate el helado de agua")
    alert("y te sobran"+ (dineroCofla - 0.6))

}
else if(dineroCofla>=1 && dineroCofla < 1.6 ){
alert ("cofla comprate el helado de crema")
alert("y te sobran"+ (dineroCofla - 1))
}
else if (dineroCofla>=1.6 && dineroCofla < 1.7){
    alert("cofla comprate el bonbon helado marca heladix")
    alert("y te sobran"+ (dineroCofla - 1.6))

}
else if(dineroCofla>= 1.7 && dineroCofla < 1.8 ){
alert (" cofla comprate el bombon helado marca heladovich")
alert("y te sobran"+ (dineroCofla - 1.7))
}
else if (dineroCofla>= 1.8 && dineroCofla < 2.9){
    alert("cofla comprate el bonbon helado marca helardo")
    alert("y te sobran"+ (dineroCofla - 1.8))

}
else if(dineroCofla>= 2.9  ){
alert ("cofla comprate el helado con confites o el pote de 1/4kg")
alert("y te sobran"+ (dineroCofla-2.9))
}


else{
    alert(" lo siento, pobre de mierda, no te alcanza para ningun helado")
}


if (dineroRoberto>=0,6 && dineroRoberto< 1){
    alert("Roberto comprate el helado de agua")
   

}
else if(dineroRoberto>=1 && dineroRoberto < 1.6 ){
alert ("Roberto comprate el helado de crema")

}
else if (dineroRoberto>=1.6 && dineroRoberto < 1.7){
    alert("Roberto comprate el bonbon helado marca heladix")


}
else if(dineroRoberto>= 1.7 && dineroRoberto < 1.8 ){
alert ("Roberto comprate el bombon helado marca heladovich")

}
else if (dineroRoberto>= 1.8 && dineroRoberto < 2.9){
    alert("Roberto comprate el bonbon helado marca helardo")
    
}
else if(dineroRoberto>= 2.9){
alert ("roberto comprate el helado con confites o el pote de 1/4kg")
alert("y te sobran"+ dineroRoberto-2.9)
} 
else{
    alert(" lo siento, pobre de mierda, no te alcanza para ningun helado")
   
}



if (dineroPedro>=0,6 && dineroPedro < 1){
    alert("Pedro comprate el helado de agua")

}
else if(dineroPedro >=1 && dineroPedro < 1.6 ){
alert ("Pedro comprate el helado de crema")
}
else if (dineroPedro >=1.6 && dineroPedro < 1.7){
    alert("Pedro comprate el bonbon helado marca heladix")

}
else if(dineroPedro>= 1.7 && dineroPedro < 1.8 ){
alert ("Pedro comprate el bombon helado marca heladovich")
}
else if (dineroPedro>= 1.8 && dineroPedro < 2.9){
    alert("Pedro comprate el bonbon helado marca helardo")

}
else if(dineroPedro>= 2.9){
alert ("Pedro comprate el helado con confites o el pote de 1/4kg")
alert("y te sobran"+ dineroCofla-2.9)
}
else{
    alert(" lo siento, pobre de mierda, no te alcanza para ningun helado")
}
//Condicionales
   //nombre="pedro"
    //if (nombre=="lucas"){ //los condicionales sirven para que cuando la condicion se cumple el bloque se ejecute, a lo contrario no se ejecuta  
    //alert("tu nombre es " + nombre)// if es solo uno 
    //}   esto es un bloque{} 
    //else if (nombre=="dalto"){  // si no es el anterior entonces que de este resultado, se pueden hacer muchos else if 
     //alert("tu nombre es " + nombre)
   //}
    //else {
    //alert("tu nombre es otro") // si no se cumple ninguna condicion se usa else 
   //}

//Camel Case
   //palabra1Palabra2  parseInt(convertir en entero)   la primera palabra con minuscula las demas palabar con mayuscula, eso es Camel Case
//operadores de comparacion
   //let numero1=3
  // let numero2=5//tipo number
   //let texto1="3"// tipo string
  //let texto2="texto 2"
   //document.write(texto1===numero1)// nos da como resultado false ya que el operador (===) nos dice si tiene el mismo tipo de datos y ademas el mismo valor, 
// tenemos tambien el operador de identidad que se representa asi (===) nos dice si son iguales en tipo de variable y en valor 
  // let num3 = 25;
  // let num4 = 21;
   //document.write(num3!=num4)
//tambien podemos usar el operador de inigualdad (n1!=n2) para preguntarle a la maquina si son distintos y que nos responda con (true or false)
    //let num1 = 23;
   // let num2 = 20;
    //document.write( num1==num2)// dos iguales (==)es un oprador de igualdad, siempre nos va a dar un resultado voleano (true or false)
//para escribir codigo html hay que usar los back ticks de otra forma no funciona 
   //a = `<div> 
  // <h1>Hola</h1> 
    //</div>`
    //document.write(a)
//tercer tipo de concatenacion
    //nombre = "lucas dalto";
   //frase = `soy ${nombre} y estoy caminando`// utilizamos ${variable} para concatenar sin tener que sumar.
   //document.write(frase);//para que funcione usar en vez de "" usar de principio a fin ``  para que funcione este tipo de concatenacion. back ticks
//metodo de cadena

    //numero1 ="53" // las "" nos dice que son tipo string
    //numero2=8// tipo number
    //resultado = numero1.concat(numero2)// concat es un metodo que nos sirve para concatenar(siempre debe tener una variable string sino no funciona)
    //document.write(resultado)

//concatenacion es unir dos cadenas de texto o strings

       //saludo = "¡hola pedro! "
       //pregunta ="¿Como estas?"
       //frase= saludo + pregunta  // se puede forzar un string haciendo =""+ num 1 + num 2 (en caso de operaciones aritmeticas)
       //document.write(frase)

// operador de asignacion
             //numero1= 10
            //numero1-- con esto le restamos uno a 10 entonces pasa a valer 9
//documento.write(variable) sirve para mostrar en pagina
//operadores de asignacion
    //adiccion x += y
    //sustraccion x -= y
    // y asi con la multiplicacion y division
//let nombre = prompt("Hola, ¿cual es tu nombre?")// utilizo prompt para guardar informacion otorgada a una variable en este caso let nombre
//alert ("Bienvenido "+ nombre) mostrar contenido en pantalla con la variable agregada

//operaciones aritmeticas
        //let numero = 5;
       //let numero2= 7;
      //alert (numero + numero2 )

//let numero = null = sin valor
//se puede declarar variables juntas
//otra opciones declarar y definir en la misma linea
    //let numero1 = 23, nuemero2=39
      //let numero, numero2, numero3;
         //nuemero=3;
         //nuemero2=5;
         //nuemero3=13;
//tipo de variable nombre de la variable = "elije un nombre para llamar la variable"
//usamos alert(variable) para mostrar en pantalla
     //const nombre = "dalto"
     //alert(nombre)
     //las variables let y var si se pueden modificar, const no 
     //let numero = 29
     //numero =23    (cambia de valor)
     //alert(numero)
//tipos de datos 
//string = "cadena de texto"
//number = 19
//booleano = true or false
//tres formas de declarar una variable
// var tiene alcance global, let tiene menos alcance, const no cambia su valor es siempre el mismo valor