var dog,happydDog;
var database;
var foodStock,foodS;

function preload(){
 
  dogimg = loadImage("dogImg.png");
  dogimg2 = loadImage("dogImg1.png");
}

function setup() {
  var canvas = createCanvas(500,500);
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogimg);
  dog.scale = 0.2;
 
}

function draw() {  
background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogimg2);
}

  drawSprites();

  fill("red");
  textSize(20);
  stroke(5);
  text("Press Up Arrow Key To Feed the milk to Lucy",50,50);
  text("Remaining Food: " + foodS, 150, 100);

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

database.ref('/').update({
  Food:x
  })
}
