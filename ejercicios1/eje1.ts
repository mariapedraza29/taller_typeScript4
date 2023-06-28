function retornandoConPromesa(a:number) {
    return new Promise((resolve, reject)=>{
        function resolver() {
            resolve(a**2)
        }
        setTimeout(resolver,3000)
    })
}

let asincrono = async ()=>{
    let valorPromesa = await retornandoConPromesa(25)
    console.log(valorPromesa);    
}

asincrono();

function resultado()  {
    return new Promise((resolve,reject)=>{
        function pendiente () {
            resolve(8**2)
        }
        setTimeout(pendiente,6000)
    })
}

let cuadradoAsincrono= async () => {
    let valorPromesa = await resultado()
    console.log(valorPromesa);
}

cuadradoAsincrono();

//a. 
//b.la clausula que usamos para obtener el valor de una promesa es sync/await
//c. la condicion para poder usar la clausula await es que se debe de usar async, de lo contrario generará un error.