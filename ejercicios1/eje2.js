"use strict";
class Coche {
    constructor(modelo, marca) {
        this.modelo = modelo;
        this.marca = marca;
    }
    presentar() {
        console.log('se presenta el coche');
    }
    static encender() {
        console.log('El coche se enciende');
    }
}
Coche.precio = 300000;
let miCoche = new Coche(2020, 'Chevrolet');
console.log(miCoche);
miCoche.presentar();
Coche.encender();
//Nueva clase robot
class Robot {
    constructor(nombre, tipo, modelo, precio) {
        this.nom = nombre;
        this.tipo = tipo;
        this.mod = modelo;
        this.prec = precio;
    }
    saludar() {
        console.log('El robot saluda');
    }
    caminar() {
        console.log('El robot camina');
    }
    static parar() {
        console.log('El robot se detiene');
    }
    static despedir() {
        console.log('El robot se despide');
    }
}
let rob = new Robot('odin', 'amigable', 2023, 170000);
console.log(rob.nom);
class PC {
    constructor(modelo, procesador, discoDuro, tarjetaGrafica) {
        this.modelo = modelo;
        this.procesador = procesador;
        this.discoDuro = discoDuro;
        this.tarjetaGrafica = tarjetaGrafica;
    }
    static enciende() {
        console.log('El PC enciende');
    }
    static apaga() {
        console.log('El PC se apaga');
    }
    correrProg() {
        console.log('El PC corre el programa');
    }
    conectar() {
        console.log("El PC se conecta");
    }
}
let pc = new PC(2023, 'ryzen', '1tera', 'RTX3060');
console.log(pc);
