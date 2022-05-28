// const changeView =(view)=>{
//     const res= document.querySelector(".container");
//     for(let i =0; i <res.length;i++){

//         res[i].hidden= true;


//     }
// document.querySelector(".container"+view).hidden=false;

// }

// changeView(2);

//cambio de sections en el html


const saltarPantalla = (change) => {

    let elegirPantalla = change; //pantallas2

    let arrayScreens = ["pantallaInicial", "pantallaSelecion","pantallaLucha","pantallaVictoria"];

    //Le decimos a filter que si encuentra el valor que le pasamos en el array, no lo incluya
    arrayScreens = arrayScreens.filter(val => !elegirPantalla.includes(val));
    //Le ponemos display "block" a la pantalla deseada
    document.getElementById(elegirPantalla).style.display = "block";
    //Recorremos el arrayPantallas para poner el display:none
    for (let pantallas of arrayScreens) {
        document.getElementById(pantallas).style.display = "none";
    }

}


const selectFruit = (fruit) => { 

    let frutaElegida = fruit;

    let frutas=["pepino","sandia"];

    saltarPantalla("pantallaLucha");
    luchaFrutas();

}

function obtenerNumeroRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


class fruta {

    constructor(nombre, vida, daño) {
       this.nombre= nombre;
       this.vida=vida;
       this.daño=daño;
       this.ganador=false;
    }

    pelea() {
       
        this.daño=obtenerNumeroRandom(this.daño, this.daño*3);
        this.vida -= this.daño;
        console.log(this.daño, this.vida);
    
    }
};

let fruta1 = new fruta("pepino", 250, 5);
let fruta2 = new fruta("sandia", 250, 250);

const luchaFrutas =() => {
    
    
    while (fruta1.vida > 0 || fruta2.vida > 0)
    {
        fruta1.pelea();
        fruta2.pelea();
    }

    if(fruta1.vida <= 0){

        saltarPantalla("pantallaVictoria");
        fruta1.ganador=true;
        let ganador= document.getElementById("ganador");
        ganador.innerHTML="<p>El ganador es el Pepino</p>";

   }else if(fruta2.vida <= 0){

        saltarPantalla("pantallaVictoria");
        fruta2.ganador=true;
        let ganador= document.getElementById("ganador");
        ganador.innerHTML="<p>El ganador es la Sandia</p>";

    }else{
        console.log(fruta1.vida, fruta2.vida);
        saltarPantalla("pantallaVictoria");
        let ganador= document.getElementById("ganador");
        ganador.innerHTML="<p>empate</p>";
        
    }
}