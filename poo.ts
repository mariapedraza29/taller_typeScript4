class Persona {
    //propiedad de la clase(estatica)
    public static edad: number = 20;
    //propiedades de los objetos
    public peso: number;
    public nombre: string;

    constructor(peso: number, nombre: string){
        this.peso = peso;
        this.nombre = nombre;
    }

    saludar(){
        console.log("Hola ADSI 2021");
    }

    static despedirse(){
        console.log("Hasta el miercoles ADSI 2021");
    }
}

let instanciaPersona = new Persona(65, "Pepe");
console.log(instanciaPersona.nombre);
console.log(instanciaPersona.peso);
instanciaPersona.saludar();


console.log(Persona.edad);
Persona.despedirse();


