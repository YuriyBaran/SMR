var cielo = document.querySelector("#cielo");
var foco = false;
let Lpasos = ["#pasos1", "#pasos2", "#pasos3"];
let Upasos = [3,-3,0]
let XZpasos = ["x","z"]
var contador_luces = 3
var luces_3 = true
var luces_3_OK = true

//PASOS
setInterval(pasos, 10000)

function pasos() {

    //sonido aleatorio
    var Naudio = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    document.querySelector("#pasos").setAttribute("src",Lpasos[Naudio]);

    //posicion aleatoria
    var XZaleatorio = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    var Naleatorio = Math.floor(Math.random() * (2 - 0 + 1) ) + 0;
    var xactual = document.querySelector('a-scene').camera.el.object3D.position["x"];
    var zactual = document.querySelector('a-scene').camera.el.object3D.position["z"];
    if (XZaleatorio!=Naleatorio){
       document.querySelector("#pasos").setAttribute("position",(xactual + Upasos[Naleatorio]) + " 1.5 "+ (zactual + Upasos[XZaleatorio]));
       console.log((xactual + Upasos[Naleatorio]) + " 1.5 "+ (zactual + Upasos[XZaleatorio]));
    }
    else{
        pasos()
    }

    document.querySelector("#pasos").components.sound.playSound();

}   

//EVENTO FOCO
document.addEventListener('keydown', function (e) {
    if (document.querySelector('a-scene').camera.el.object3D.position["z"] <= 0.3)
        if(foco == false){
            document.querySelector("#foco").setAttribute('light', "color: red; intensity: 0.5; type: spot;distance: 1.5;angle:180");
            document.querySelector("#sonido_foco").components.sound.playSound();
            foco = true;
        }
  });

//EVENTO LUCES OFF

function lucesOFF() {

    if (contador_luces == 3){
    contador_luces = 2;
    document.querySelector("#l3").setAttribute('light', "color: white; intensity: 0; type: spot;distance: 1.5;angle:180");
    }
    else if (contador_luces == 2){
        contador_luces = 1;
        document.querySelector("#l2").setAttribute('light', "color: white; intensity: 0; type: spot;distance: 1.5;angle:180");
    }
    else if (contador_luces == 1){
        contador_luces = 0;
        document.querySelector("#l1").setAttribute('light', "color: white; intensity: 0; type: spot;distance: 1.5;angle:180");
        luces_3 = false
    }
    
};

document.addEventListener('keydown', function (e) {
    if (document.querySelector('a-scene').camera.el.object3D.position["z"] <= 4.5 && luces_3_OK == true){
        luces_3_OK = false
        document.querySelector("#sonido_bombillas").setAttribute('src', "#bombillas");
        document.querySelector("#sonido_bombillas").components.sound.playSound();
        setInterval(lucesOFF, 300)
    }
  });
