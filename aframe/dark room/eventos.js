var cielo = document.querySelector("#cielo");

document.addEventListener('keydown', function (e) {
    if (document.querySelector('a-scene').camera.el.object3D.position["z"] <= 0.3)
    {
        document.querySelector("#foco").setAttribute('light', "color: red; intensity: 0.5; type: point;distance: 1.5");
    }
  });

