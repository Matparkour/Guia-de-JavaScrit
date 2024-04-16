// las clases crean objetos, el atributo son las caracteristicas de nuestro objeto,metodo es lo que hace nuestro objeto, y el constructor nos crea las propiedades del objeto, al finalizar la clase esta instanciada
//Programacion orientada a objetos

//ejercicio2
class app{
    constructor(Nombre,Descargas,Puntuacion,Peso){
        this.Nombre = Nombre;
        this.Descargas = Descargas;
        this.Puntuacion = Puntuacion;
        this.Peso = Peso;
        this.Instalada = false;
        this.iniciada = false;
    }
   Instalar(){
    alert(`Instalando ${this.Nombre} `)
    alert(`${this.Nombre} Instalado`)
   }

   Abrir(){
     alert(`Abriendo ${this.Nombre}, espero unos segundos....`)
   }
   Cerrar(){
    alert(`Cerrando ${this.Nombre}, espere unos segundos....`)
   }
   Desinstalar(){
    alert(`Desinstalando ${this.Nombre}`)
   }
   Recomendacion(){
    document.write(`Nombre: <b>${this.Nombre}</b><br>
Cantidad De Descargas: <b>${this.Descargas}</b> de Descargas<br>
Calificacion: <b>${this.Puntuacion}</b><br>
Peso de ${this.Nombre}: <b>${this.Peso}</b><br>
<br>  
    `)
   }
}
const Facebook = new app ("Facebook","1.000.000","4/5","10Mb");
const Instagram = new app ("Instagram","2.000.000","3/5","20Mb");
const Whatsapp  = new app ("Whatsapp","3.000.000","5/5","30Mb");

//Facebook.Instalar();
//Facebook.Abrir();
//Facebook.Cerrar();
//Facebook.Desinstalar();
Facebook.Recomendacion();
Instagram.Recomendacion();
Whatsapp.Recomendacion();






//ejercicio1

/*
class TiendaCelulares {
    constructor(Nombre, Color, Peso, Repantalla, Camara, Meram) {
        this.Nombre = Nombre;
        this.Color = Color;
        this.Peso = Peso;
        this.Repantalla = Repantalla;
        this.Camara = Camara;
        this.Meram = Meram;
        this.encendido = false
    }
    presionarBotonEncendido(){
        if(this.encendido ==false){
            alert("Celular Prendido");
            this.encendido = true;
        }else{
            alert("Celular Apagado");
            this.encendido = false;
        }

    }   
    
    reinciar(){
        if (this.encendido == true){
            alert("reinciando celular")
        }else{
            alert(" el celular esta apagado")
        }
    }
    tomarFotos(){
        alert(`foto tomada en una resolucion de ${this.Camara}`);
    }
    grabarVideo(){
        alert(`Grabar video en ${this.Repantalla}`)
    }
    mostrarInfo(){
       return`
       Nombre: <b>${this.Nombre}</b><br>
       color: <b>${this.Color}</b><br>
       Peso: <b>${this.Peso}</b><br>
       Resolucion de Camara: <b>${this.Camara}</b><br>
       Resolucion de Pantalla: <b>${this.Repantalla}</b><br>
       MemoriA ram: <b>${this.Meram}</b><br>
       <br>
       `;
    }
}   
class CelularAltaGama extends TiendaCelulares {
constructor(Nombre,Color,Peso,Repantalla,Camara,Meram,ResolucionCamaraExtra){
    super(Nombre,Color,Peso,Repantalla,Camara,Meram,ResolucionCamaraExtra);// super es para llamar funciones del padre de un objeto
    this.ResolucionCamaraExtra = ResolucionCamaraExtra
}
mostrarInfo2(){
    return this.mostrarInfo() + `Resolucion de Camara Trasera: <b>${this.ResolucionCamaraExtra}</b>`
}
GrabarVideoLento(){
    alert("Estas grabando en camara lenta")
}
ReconocimientoFacial(){
    alert("Vamos a iniciar un reconocimiento facial")
}
}
const celularAG = new CelularAltaGama("Iphone15","negro","7kg","1460x3600 pixeles","Calidad Ultra","12Gb","Resolucion multiplicada")

const celular1 = new TiendaCelulares("iPhone 10", "rojo", "2kg", "720×1280 píxeles", "calidad buena", "4Gb");
const celular2 = new TiendaCelulares("iPhone 11", "blanco","3kg", "1080×1920 píxeles", "calidad muy buena", "6Gb");
const celular3 = new TiendaCelulares("iPhone 12", "negro", "4kg", "1280×2560 píxeles", "calidad buenisima", "8Gb");
//celular1.presionarBotonEncendido();
//celular1.reinciar();   esto uso para mostrar las acciones de cada celular
//celular1.grabarVideo();
//celular1.tomarFotos();
//celular1.presionarBotonEncendido⁡

document.write`
${celular1.mostrarInfo()}<br>
${celular2.mostrarInfo()}<br>
${celular3.mostrarInfo()}<br>
${celularAG.mostrarInfo2()}<br>

`     */



// otros conceptos de Poo

//metodos estaticos

/*
class Animal{
    constructor(especie, edad, color){  
     this.especie = especie;  
     this.edad = edad;          
    this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
    }
      verinfo(){   
        document.write(this.info + "<br>")
    }     
}
class Perro extends Animal{   
      constructor(especie,edad,color,raza){ 
        super(especie,edad,color)
        this.raza = raza;
      }
      static ladrar (){  // el metodo estatico no necesita que la clase se defina para ser creado
        alert("¡Waw!")
      }
        
    
}


let gato = new Animal("Gato","2","blanco") 
let pajaro = new Animal("Pajaro","8","Negro");

Perro.ladrar();
gato.verinfo();
pajaro.verinfo();
*/


//metodos (getters y setters) getters: obtener un valor, setters: son para modificarlos y definirlos

/*
class Animal{
    constructor(especie, edad, color){  
     this.especie = especie;  
     this.edad = edad;          
    this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
    }
      verinfo(){   
        document.write(this.info + "<br>")
    }     
}
class Perro extends Animal{   
      constructor(especie,edad,color,raza){ 
        super(especie,edad,color)
        this.raza = null;
      }
    set setRaza(newName){    //setter, los setters funcionan como propiedades, es un metodo que se transforma en una propiedad
        this.raza = "pedro"//de esta lo modificamos
    }
    get getRaza(){  // getter
        return this.raza;// de esta forma obtenemos un valor
    }
    
}

const perro = new Perro("Perro","5","marron","doberman ")  // los objetos se definen con const
const gato = new Animal("Gato","2","blanco") 
const pajaro = new Animal("Pajaro","8","Negro");

perro.setRaza = "pedro"; // tenemos que usar = porque setRaza ya no es un metodo ahora es una propiedad 
document.write(perro.getRaza);

Perro.ladrar();
gato.verinfo();
pajaro.verinfo();

*/

/*

//Caracteristicas

//polimorfismo: conciste en ver como un objeto se comporta de manera distinta ante el mismo metodo
// o es la capacidad que tiene un objeto a comportarse apartir de sus propiedades
//abstraccion: sirve para reducir lo mas posible el objeto, hecerlo lo menos complejo que se pueda.

class Animal{
    constructor(especie, edad, color){  
     this.especie = especie;  
     this.edad = edad;          
    this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
    }
      verinfo(){   
        document.write(this.info + "<br>")
    }     
}
class Perro extends Animal{   // extend es para que la clase herede los atributos der la clase animal osea el constructor, asi no repetir los this.especie,etc
      constructor(especie,edad,color,raza){ // el constructor es para dar caracteristicas a nuestro objeto
        super(especie,edad,color)
        this.raza = raza
      }
      ladrar (){
        alert("¡Waw!")
      }
        
    
}
// no se puede tener un objeto con el mismo nombre que la clase
let perro = new Perro("Perro","12","Marron","doberman"); // le pongo la clase perro que cree anteriormente, y le agrego la raza
let gato = new Animal("Gato","2","blanco") 
let pajaro = new Animal("Pajaro","8","Negro");

perro.ladrar();
gato.verinfo();
pajaro.verinfo();

*/

//encapsulamiento: que los datos esten privados, y que no se acceda de forma senccilla

//conceptos basicos 
//usar un metodo
//ej
/*class animal{
    constructor(especie, edad, color){  // los parametros son caracteristicas de el animal
     this.especie = especie;  // cuando digo this estoy diciendo que el objeto va a tener una propiedad 
     this.edad = edad;          // lo que esta alado del this es un objeto osea especie edad color
    this.color = color;
    this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`;
    }
      verinfo(){   // metodo 
        document.write(this.info + "<br>")
    }
}
let perro = new animal("Perro","12","Marron",); // perro es un objeto de la clase animal, digo new para crear un objeto que se ubique en la clase animal
let gato = new animal("Gato","5","Blanco");
let pajaro = new animal("Pajaro","8","Negro");

perro.verinfo()
gato.verinfo() // aca llama el metodo: verinfo()
pajaro.verinfo()
*/

/*
class animal{
    constructor(especie, edad, color){  // los parametros son caracteristicas de el animal
     this.especie = especie;  // cuando digo this estoy diciendo que el objeto va a tener una propiedad 
     this.edad = edad;          // lo que esta alado del this es un objeto osea especie edad color
    this.color = color;
    this.info = `Soy un ${this.especie}, tengo ${this.edad} años, y soy de color ${this.color}`
    }
}
const perro = new animal("Perro","12","Marron",); // perro es un objeto de la clase animal, digo new para crear un objeto que se ubique en la clase animal
const gato = new animal("Gato","5","Blanco");
const pajaro = new animal("Pajaro","8","Negro");

document.write(perro.info + "<br>") // pongo el objeto perro.y pongo una de sus propiedades
document.write(gato.info + "<br>")
document.write(pajaro.info + "<br>")

/*
//console.log(perro)// aparece en console apretando en inspeccionar las caracteristicas del perro */