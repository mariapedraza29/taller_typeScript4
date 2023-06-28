"use strict";
class Persona {
    constructor(peso, nombre) {
        this.peso = peso;
        this.nombre = nombre;
    }
    saludar() {
        console.log("Hola ADSI 2021");
    }
    static despedirse() {
        console.log("Hasta el miercoles ADSI 2021");
    }
}
//propiedad de la clase(estatica)
Persona.edad = 20;
let instanciaPersona = new Persona(65, "Pepe");
console.log(instanciaPersona.nombre);
console.log(instanciaPersona.peso);
instanciaPersona.saludar();
console.log(Persona.edad);
Persona.despedirse();
