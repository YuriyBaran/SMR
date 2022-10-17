var cielo = document.querySelector("#cielo");
var foco = false;
let Lpasos = ["pasos1.mp3", "pasos2.mp3", "pasos3.mp3"];
let Upasos = [3,-3]
let XZpasos = ["x","z"]

//PASOS
setInterval(pasos, 13000)

function pasos() {
    //sonido aleatorio
    var Naudio = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    document.querySelector("#pasos").setAttribute("src","sonidos/"+Lpasos[Naudio]);

    //ubicación aleatoria
    var XZaleatorio = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
    var Naleatorio = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
    var xactual = document.querySelector('a-scene').camera.el.object3D.position["x"];
    var zactual = document.querySelector('a-scene').camera.el.object3D.position["z"];
    if (XZpasos[XZaleatorio] == "x"){
        document.querySelector("#pasos").setAttribute("position",(xactual + Upasos[Naleatorio]) + " 1.5 "+ zactual);
        console.log((xactual + Upasos[Naleatorio]) + " 1.5 "+ zactual);
    }
    else{
        document.querySelector("#pasos").setAttribute("position",xactual + " 1.5 "+ (zactual + Upasos[Naleatorio]));
        console.log(xactual + " 1.5 "+ (zactual + Upasos[Naleatorio]));
    }

    document.querySelector("#pasos").components.sound.playSound();

}   

//EVENTO FOCO
document.addEventListener('keydown', function (e) {
    if (document.querySelector('a-scene').camera.el.object3D.position["z"] <= 0.3)
        if(foco == false){
            document.querySelector("#foco").setAttribute('light', "color: red; intensity: 0.5; type: point;distance: 1.5");
            document.querySelector("#sonido_foco").components.sound.playSound();
            foco = true;
        }
  });

