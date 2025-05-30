$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(300, 700, 200, 20);
    createPlatform(500, 600, 150, 20);
    createPlatform(300, 500, 80, 20);
    createPlatform(500, 400, 150, 20);
    createPlatform(200, 300, 200, 20);
    createPlatform(700, 700, 200, 20);
    createPlatform(550, 200, 150, 20);
    createPlatform(820, 300, 150, 20);
    createPlatform(1100, 250, 150, 20);


    // TODO 3 - Create Collectables
    createCollectable("diamond", 360, 650, 0.5, 1);
    createCollectable("grace", 700, 650, 0.5, 1);
    createCollectable("grace", 800, 650, 0.5, 1)
    createCollectable("steve", 300, 250, 0.5, 1);
    createCollectable("kennedi", 900, 250, 0.5, 1);
    createCollectable("max", 1150, 180, 0.5, 1);



    // TODO 4 - Create Cannons
    createCannon("left", 575, 2000);
    createCannon("top", 180, 1100);
    createCannon("bottom", 950, 700);
      
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
