$(document).ready(function() {
        var music = new EightBit();
        music.setTimeSignature(4,4);
        music.setTempo(120);
        var piano = music.createInstrument();
        var bass = music.createInstrument('square');
        var drum = music.createInstrument('triangle');
        drum.setVolume(20);
        drum.repeatStart()
          .note('A3', 'whole', true)
          .note('E3', 'whole', true)
          .repeat(2)
          .note('D3', 'whole', true)
          .note('E3', 'whole', true);

        bass.setVolume(2);
        piano.repeatStart()
          .note('C4', 'quarter')
          .note('D4', 'eighth')
          .note('E4', 'quarter')
          .note('F4', 'eighth')
          .note('F4', 'eighth')
          .note('F4', 'eighth')
          .repeat(2);

        piano.repeatStart()
          .note('C4', 'quarter')
          .note('D4', 'eighth')
          .note('E4', 'quarter')
          .note('F#4', 'eighth')
          .note('F#4', 'eighth')
          .note('F#4', 'eighth');

        bass.repeatStart()
          .note('C4', 'eighth')
          .note('C4', 'eighth')
          .note('A4', 'quarter')
          .note('E4', 'eighth')
          .note('E4', 'eighth')
          .rest('quarter')
          .repeat(4);

        piano.finish();
        bass.finish();
        drum.finish();

        music.end();
        music.play();
        music.loop(true);


        var renderer = new THREE.WebGLRenderer();
        var container = document.getElementById('container');
        renderer.setSize( window.innerWidth, window.innerHeight   );

        // Set up scene
        var scene = new THREE.Scene();

        // Set up camera
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0,0,9);
        camera.position.z = 20;
        // Set up the camera position.
        container.appendChild(renderer.domElement);

        var light = new THREE.DirectionalLight(0xffffff, 1.5);
        light.position.set(0,0,1);
        // console.log(light);

        // Create a cube.
        // base, width, height
        // var geometry = new THREE.CubeGeometry(1,1,3);
        var geometry2 = new THREE.CubeGeometry(2,2,2);
        var material = new THREE.MeshPhongMaterial( { color: 0x00ff00, wireframe: false, transparent: true, opacity: 0.50}   );
        var material2 = new THREE.MeshPhongMaterial( { color: 0x00ffff, ambient: 0xff0000, wireframe: false,transparent: true, opacity: 0.50}   );
        cubes = [];
        boxes = [];
        for (var i = 0; i < 50; i++) {
          var geometry = new THREE.CubeGeometry(1,1,Math.random(10) * 10 + 3);
          cubes[i] = new THREE.Mesh(geometry, material);
          cubes[i].position.x = Math.floor((Math.random(100) * 20) + 1) * 4 - 30;//* ( (Math.floor(Math.random(2)) % 2) * -1);
          cubes[i].position.y = Math.floor((Math.random(100) * 20) + 1) - 9;
          cubes[i].position.z = Math.floor((Math.random(100) * 20) + 1) - 9;
          scene.add(cubes[i]);

          boxes[i] = new THREE.Mesh(geometry2, material2);
          boxes[i].position.x = Math.floor((Math.random(100) * 20) + 1) * 4 - 30;//* ( (Math.floor(Math.random(2)) % 2) * -1);
          boxes[i].position.y = Math.floor((Math.random(100) * 20) + 1) - 9;
          boxes[i].position.z = Math.floor((Math.random(100) * 20) + 1) - 9;
          scene.add(boxes[i]);
        }
        var cube2 = new THREE.Mesh(geometry2, material2);
        scene.add(cube2);
        scene.add(light);

        var render = function () {
          requestAnimationFrame(render);
          var goUp = 0;
          for (var i = 0; i < cubes.length; i++) {
            if (cubes[i].position.x > 20){
              // console.log('yo');
              cubes[i].position.x = -30;
            }
            else {
              cubes[i].position.x += Math.PI / 10;
            }
            if (boxes[i].position.y < -20){
              // console.log('yo');
              boxes[i].position.y = 20;
            }
            else {
              boxes[i].position.y -= Math.PI / 30;
            }
            cubes[i].rotation.x += Math.PI / 46;
            cubes[i].rotation.y += Math.PI / 46;
            boxes[i].rotation.y += Math.PI / 46;
            // cubes[i].color.r += Math.PI / 55;
            // cubes[i].rotation.y += Math.PI / 55;
            // cubes[i].rotation.y += Math.PI / 55;
          }
          // camera.rotation.z += 5;
          // cube.rotation.x += Math.PI / 55;
          cube2.rotation.x += Math.PI / 95;
          // cube.position.x += Math.PI / 55;
          // cube.rotation.y += Math.PI / 55;
          // console.log(camera.position.z);

          renderer.render(scene, camera);
        }

        render();

});
