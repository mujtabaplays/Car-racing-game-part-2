var database;
var playerCount,gameState;
var player,game,form;


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  gameState=0;
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  
   
}

