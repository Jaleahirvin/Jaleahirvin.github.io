var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10, image: "img/witchhat(1).png", offsetX: -50, offsetY: -50, scale: 0.2, rotation:0 },//will create the 1st image which is the witch hat
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10, image: "img/witch hat(2).png", offsetX: -50, offsetY: -50, scale: 0.1, rotation:0},// creates the 2nd image of the witch hat
          { type: "sawblade", x: 800, y: groundY - 125, damage: 15, image: "img/witchhat(1).png", offsetX: -50, offsetY: -50, scale: 0.2, rotation:0},// makes the 1st image witch hat appear
          { type: "enemy", x: 600, y: groundY - 30, speed: -3, image: "img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// creates the image which is the spell book
          { type: "enemy", x: 900, y: groundY - 30, speed: -2, image: "img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// also creates the image which is the spell book
          { type: "enemy", x: 1150, y: groundY - 30, speed: -2, image:"img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// makes the image spell book
          { type: "reward", x: 1000, y: groundY - 75, speed: -3,image: "img/wandreward.png", offsetX: -50, offsetY: -50, scale: 0.3},// makes the image reward wand 
          { type: "marker", x: 1500, y: groundY - 75, speed: -3, image: "img/blackcat.png", offsetX: -50, offsetY: -70, scale: 0.3 },// makes the image marker black cat

        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10, image: "img/witch hat(2).png", offsetX: -50, offsetY: -50, scale: 0.1, rotation:0 }, //will create the 2nd image which is the witch hat
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10, image: "img/witchhat(1).png", offsetX: -50, offsetY: -50, scale: 0.2, rotation:0 },// creates the 1st image of the witch hat
          { type: "sawblade", x: 900, y: groundY - 125, damage: 10, image: "img/witchhat(1).png", offsetX: -50, offsetY: -50, scale: 0.2, rotation:0 },// makes the 1st image witch hat appear
          { type: "enemy", x: 600, y: groundY - 30, speed: -3, image: "img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// creates the image which is the spell book
          { type: "enemy", x: 900, y: groundY - 30, speed: -2, image: "img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// also creates the image which is the spell book
          { type: "enemy", x: 1150, y: groundY - 30, speed: -2, image:"img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// makes the image spell book
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/witch wand (2).png", offsetX: -50, offsetY: -50, scale: 0.1},// makes the 2nd reward wand image
          { type: "marker", x: 1500, y: groundY - 80, speed: -3, image: "img/blackcat.png", offsetX: -50, offsetY: -70, scale: 0.3},// makes the image marker black cat
        ],
      },
      {
        name: "Robot Rampage",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 125, damage: 10, image: "img/witchhat(1).png", offsetX: -50, offsetY: -50, scale: 0.2, rotation:0 },//will create the image which is the witch hat
          { type: "sawblade", x: 600, y: groundY - 125, damage: 10, image: "img/witchhat(1).png", offsetX: -50, offsetY: -50, scale: 0.2, rotation:0},// creates the image of the witch hat
          { type: "sawblade", x: 900, y: groundY - 125, damage: 10, image: "img/witch hat(2).png", offsetX: -50, offsetY: -50, scale: 0.1, rotation:0},// makes the 2nd image witch hat appear
          { type: "enemy", x: 600, y: groundY - 30, speed: -3, image: "img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// creates the image which is the spell book
          { type: "enemy", x: 900, y: groundY - 30, speed: -2, image: "img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// also creates the image which is the spell book
          { type: "enemy", x: 1150, y: groundY - 30, speed: -2, image:"img/witchspellbook.png", offsetX: -50, offsetY: -50, scale: 0.1},// makes the image spell book
          { type: "reward", x: 1000, y: groundY - 75, speed: -3, image: "img/wandreward.png", offsetX: -50, offsetY: -50, scale: 0.3},// makes the image reward wand
          { type: "marker", x: 1500, y: groundY - 80, speed: -3, image: "img/blackcat.png", offsetX: -50, offsetY: -70, scale: 0.3},// makes the image marker black cat
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
