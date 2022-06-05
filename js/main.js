// const changeView =(view)=>{
//     const res= document.querySelector(".container");
//     for(let i =0; i <res.length;i++){

//         res[i].hidden= true;

//     }
// document.querySelector(".container"+view).hidden=false;

//cambio de pantallas

const saltarPantalla = (change) => {

    let elegirPantalla = change; 

    let arrayScreens = ["pantallaInicial", "pantallaSelecion","pantallaLucha","pantallaVictoria"];

    arrayScreens = arrayScreens.filter(val => !elegirPantalla.includes(val));
    
    document.getElementById(elegirPantalla).style.display = "block";
   
    for (let pantallas of arrayScreens) {
        document.getElementById(pantallas).style.display = "none";
    }

}

//funcion de selecion de luchador

const selectFruit = (fruit) => { 

    let frutaElegida = fruit;

    let frutas=["pepino","sandia"];

    saltarPantalla("pantallaLucha");
    luchaFrutas();

}

// generación un random para los daños
function obtenerNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//atributos luchadores
class fruta {

    constructor(nombre, vida, dano) {
       this.nombre= nombre;
       this.vida=vida;
       this.dano=dano;
       this.ganador=false;
    }

    
    pelea() {
                             
        this.dano=obtenerNumeroRandom(this.dano, this.dano*3);
        this.vida -= this.dano;
        console.log(this.dano, this.vida);
    
    }
};

let fruta1 = new fruta("pepino", 100, 5);
let fruta2 = new fruta("sandia", 100, 5);


//funcion que nos dice quien ha ganado la pelea
const luchaFrutas = () => {
      
    while (fruta1.vida > 0 || fruta2.vida > 0){

        fruta2.pelea();
        fruta1.pelea();
    }
    
    if(fruta1.vida <= 0){

        saltarPantalla("pantallaVictoria");
        fruta1.ganador=true;
        let ganador= document.getElementById("ganador");
        ganador.innerHTML="<center><p>El ganador es el Pepino</p></center>";

    }else if(fruta2.vida <= 0){

        saltarPantalla("pantallaVictoria");
        fruta2.ganador=true;
        let ganador= document.getElementById("ganador");
        ganador.innerHTML="<center><p>El ganador es la Sandia</p></center>";

    }else{

        console.log(fruta1.vida, fruta2.vida);
        saltarPantalla("pantallaVictoria");
        let ganador= document.getElementById("ganador");
        ganador.innerHTML="<p>empate</p>";
        
    }
}