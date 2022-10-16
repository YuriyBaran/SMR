var cielo = document.querySelector("#cielo");
var foco = false;

//EVENTO FOCO
document.addEventListener('keydown', function (e) {
    if (document.querySelector('a-scene').camera.el.object3D.position["z"] <= 0.3)
        if(foco == false){
            document.querySelector("#foco").setAttribute('light', "color: red; intensity: 0.5; type: point;distance: 1.5");
            document.querySelector("#sonido_foco").components.sound.playSound();
            foco = true;
        }
  });

