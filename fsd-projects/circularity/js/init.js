var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle; // variable is created
        var circles = []; //stores the circles and prepares for animation.

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){ // declaring a function
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);
            physikz.addRandomVelocity(circle, canvas, 5, 5);
            view.addChild(circle);  
            circles.push(circle); // calling circle with the push method
        }
        

        // TODO 3 : Call the drawCircle() function
        drawCircle(); // calling function [0]
        drawCircle(); // calling function [1]
        drawCircle(); // calling function [2]
        drawCircle(); // calling function [3]
        drawCircle(); // calling function [4]

        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 100; i++) { // this will add 100 circles to the array
            drawCircle(100); // will create the 100 circles

        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            physikz.updatePosition(circles[0]);// using the function we will update the position of circle [0]
            physikz.updatePosition(circles[1]);// using the function we will update the position of circle [1]
            physikz.updatePosition(circles[2]);// using the function we will update the position of circle [2]
            physikz.updatePosition(circles[3]);// using the function we will update the position of circle [3]
            physikz.updatePosition(circles[4]);// using the function we will update the position of circle [4]
            // TODO 5 : Call game.checkCirclePosition() on your circles
           game.checkCirclePosition(circles[0]); // by calling this function circle[0] will reapper on the other side 
           game.checkCirclePosition(circles[1]); // by calling this function circle[1] will reapper on the other side
           game.checkCirclePosition(circles[2]); // by calling this function circle[2] will reapper on the other side
           game.checkCirclePosition(circles[3]); // by calling this function circle[3] will reapper on the other side
           game.checkCirclePosition(circles[4]); // by calling this function circle[4] will reapper on the other side

            // TODO 8 / TODO 9 : Iterate over the array
           for(var i = 0; i < circles.length; i++){
            physikz.updatePosition(circles[i]) // updates the position of each circle
             game.checkCirclePosition(circles[i]) // calls the position of the circles
           }
             
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if(circle.x < 0){
               circle.x = canvas.width; // the horizontal position of a circle on the canvas
            }
              if(circle.y > canvas.height){
                 circle.y = 0; // the vertical position of a circle on the canvas.
            }
              if(circle.x > canvas.width){
                 circle.x < 0; // the horizontal position of a circle on the canvas
              }
                if(circle.y < 0){
                   circle.y = canvas.height; // the vertical position of a circle on the canvas.
                }
              


            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
       
        }


        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
