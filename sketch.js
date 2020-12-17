var redb, blueb, greenb, pinkb, bow, arrow, bg;
var score = 0;

function preload() {
  //load your images here

  red = loadImage("red.png");
  pink = loadImage("pink.png");
  blue = loadImage("blue.png");
  green = loadImage("green.png");
  arr = loadImage("arrow0.png");
  bo = loadImage("bow0.png");
  bac = loadImage("bg.png");
  cloudImage = loadImage("cloud.png");
}

function setup() {
  createCanvas(600, 600);

  bg = createSprite(300, 300, 600, 600);
  bg.addImage("bgr", bac);
  bg.velocityX = -5;

  bow = createSprite(500, 300, 20, 20);

  bow.addImage("bo", bo);

  bow.scale = 1.5;

  redGroup = new Group();
  blueGroup = new Group();
  greenGroup = new Group();
  pinkGroup = new Group();
  arrowGroup = new Group();
  cloudsGroup = new Group();

  arrower();
}

function draw() {
  background("255");
  spawnClouds();
  reder();

  bluer();
  greener();
  pinker();

  for (var i = 0; i < redGroup.length; i++) {
    if (redGroup.get(i).isTouching(arrow)) {
      redGroup.get(i).destroy();
      score++;
    }
  }

  for (var i = 0; i < blueGroup.length; i++) {
    if (blueGroup.get(i).isTouching(arrow)) {
      blueGroup.get(i).destroy();
      score++;
    }
  }

  for (var i = 0; i < greenGroup.length; i++) {
    if (greenGroup.get(i).isTouching(arrow)) {
      greenGroup.get(i).destroy();
      score++;
    }
  }

  for (var i = 0; i < pinkGroup.length; i++) {
    if (pinkGroup.get(i).isTouching(arrow)) {
      pinkGroup.get(i).destroy();
      score++;
    }
  }

  if (bg.x === 0) {
    bg.x = 600;
  }
  if (keyDown("UP_ARROW")) {
    bow.velocityY = -2;
    arrow.velocityY = -2;
  }

  if (keyDown("DOWN_ARROW")) {
    bow.velocityY = 2;
    arrow.velocityY = 2;
  }
  ////////////////////////////////

  if (keyWentUp("UP_ARROW")) {
    bow.velocityY = 0;
    arrow.velocityY = 0;
  }

  if (keyWentUp("DOWN_ARROW")) {
    bow.velocityY = 0;
    arrow.velocityY = 0;
  }

  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  if (keyDown("space")) {
    ///////////////////////////////////
    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    arrow.velocityX = -6; //////////////////////////////////
  } ////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////

  if (keyDown("LEFT_ARROW")) {
    arrow.x = bow.x;
    arrow.y = bow.y;
    arrow.velocityY = 0;
    arrow.velocityX = 0;
  }
 
  drawSprites();
  fill("black");
  textSize(25);
  text("SCORE: " + score, 300, 300);

  console.log("SCORE: " + score);

}

function reder() {
  if (frameCount % 80 == 0) {
    (redb = createSprite(20, Math.round(random(100, 500)))), 20, 20;
    redb.addImage("r", red);
    redb.scale = 0.1;
    redGroup.add(redb);
    redb.lifetime = 200;
    redb.velocityX = 1;
  }
}

function bluer() {
  if (frameCount % 80 == 0) {
    (blueb = createSprite(320, Math.round(random(250, 300)))), 20, 20;
    blueb.addImage("b", blue);
    blueb.scale = 0.1;
    blueGroup.add(blueb);
    blueb.lifetime = 200;
    blueb.velocityX = 1;
  }
}

function greener() {
  if (frameCount % 80 == 0) {
    (greenb = createSprite(220, Math.round(random(200, 400)))), 20, 20;
    greenb.addImage("g", green);
    greenb.scale = 0.1;
    greenGroup.add(greenb);
    greenb.lifetime = 200;
    greenb.velocityX = 1;
  }
}

function pinker() {
  if (frameCount % 80 == 0) {
    (pinkb = createSprite(120, Math.round(random(150, 400)))), 20, 20;
    pinkb.addImage("p", pink);
    pinkb.scale = 1.2;
    pinkGroup.add(pinkb);
    pinkb.lifetime = 200;
    pinkb.velocityX = 1;
  }
}

function arrower() {
  arrow = createSprite(bow.x, bow.y, 20, 20);
  arrow.addImage("a", arr);

  arrow.scale = 0.5;
  arrow.debug = true;
  arrow.setCollider("rectangle", 0, -5, 400, 40);
  arrowGroup.add(arrow);
  ///////////////////////////////////////////////
  //
  ////////////////////////////////////////
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600, 120, 40, 10);
    cloud.y = Math.round(random(80, 120));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    cloud.scale = 1.5;
    //assign lifetime to the variable
    cloud.lifetime = 200;
    //adjust the depth

    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
}
