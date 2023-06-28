class Coche{
    public  modelo: number;
    public marca: string;
    private static precio :number = 300000;

    constructor(modelo: number, marca:string){
        this.modelo = modelo;
        this.marca = marca;
    }

    presentar(){
        console.log('se presenta el coche');
    }

    static encender(){
        console.log('El coche se enciende');
    }

}

let miCoche = new Coche(2020, 'Chevrolet');
console.log(miCoche);

miCoche.presentar();
Coche.encender();


//Nueva clase robot
class Robot{
    public  nom: String; 
    public  tipo: string;
    private mod: number;
    private prec: number;

    constructor(nombre:string, tipo:string, modelo: number, precio:number){
        this.nom=nombre;
        this.tipo=tipo;
        this.mod=modelo;
        this.prec=precio;
    }

    saludar(){
        console.log('El robot saluda');
    }

    caminar(){
        console.log('El robot camina');
    }

    static parar(){
        console.log('El robot se detiene');
    }

    static despedir(){
        console.log('El robot se despide');
    }
}

let rob = new Robot('odin', 'amigable', 2023, 170000)
console.log(rob.nom);


class PC{
    public modelo: number;
    public procesador: string;
    private discoDuro: string;
    private tarjetaGrafica: String;

    constructor(modelo: number, procesador:string, discoDuro: string, tarjetaGrafica:string){
        this.modelo=modelo;
        this.procesador=procesador;
        this.discoDuro=discoDuro;
        this.tarjetaGrafica= tarjetaGrafica;
    }

    static enciende(){
        console.log('El PC enciende');
    }

    static apaga(){
        console.log('El PC se apaga');
    }

    correrProg(){
        console.log('El PC corre el programa');
    }

    conectar(){
        console.log("El PC se conecta");
    }
}

let pc = new PC(2023,'ryzen','1tera','RTX3060');
console.log(pc);