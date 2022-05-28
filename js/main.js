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

    let arrayScreens = ["pantallaInicial", "pantallaSelecion","pantallaLucha"];

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

}

class fruta {

    constructor(nombre, vida, daño) {
       this.nombre= nombre;
       this.vida=vida;
       this.daño=daño;
    }

    atack() {
       
        this.life -= this.daño;

        this.daño=functions.random(5,15);
    
    }
};
