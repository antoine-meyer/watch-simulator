
function setup()
{
  //taille de l'application
  createCanvas(windowWidth, windowHeight);
  //gestion des angles en degrés
  angleMode(DEGREES);
  //couleurFond du fond de l'application
  couleurFond = 0
  couleurAiguille = 255
  // je créé un bouton qui contient le texte Appuyer ici
  mon_bouton=createButton('Mode jour/nuit');
  // la position du bouton en x , y
  mon_bouton.position(10,10);
  mon_bouton.mousePressed(mon_action);
}

function mon_action()
{
  if (couleurFond == 0){
    couleurFond = 255;
    couleurAiguille = 0;
  }else{
    couleurFond = 0;
    couleurAiguille = 255;
  }
}

function draw()
{
  background(couleurFond);
  //variables de temps
  let heures = hour();
  let minutes = minute();
  let secondes = second();
  //variable de taille
  let p = 0;
  if(windowWidth < windowHeight){
    p = windowWidth;
  }else{
    p = windowHeight;
  }
  let d = p-2*5;
  //variables d'angles
  let angleS = map(secondes, 0, 60, 0, 360);
  let angleM = map(minutes, 0, 60, 0, 360);
  let angleH = map(heures % 12, 0, 12, 0, 360);
  //partie centrée
  push();
    translate(windowWidth/2, windowHeight/2);  
    //les aiguilles dans le bon axe
    rotate(-90);
    //couleurFond 
    stroke(couleurAiguille);
    //épaisseur des traits
    strokeWeight(8);
    //cadran
    push();
      noFill();
      arc(0, 0, d/2, d/2, 0, 360);
    pop();
    //secondes
    push()
      rotate(angleS);
      strokeWeight(2);
      line(0, 0, d/5, 0);
    pop();
    //minutes
    push();
      rotate(angleM);
      //text(minutes, d/6, -d/200);
      line(0, 0, d/5, 0);
    pop();
    //heures
    push();
      rotate(angleH);
      //text(heures, d/6, -d/200);
      line(0, 0, d/7, 0);
    pop();
    //point au centre
    push();
      stroke(150, 150, 150);
      strokeWeight(15);
      point(0, 0);
    pop();
  pop();
  //partie centrée en horizontal
  push();
    translate(windowWidth/2, 0); 
    textAlign(CENTER);
    textSize(50);
    fill(couleurAiguille);
    //gestion particulières
    let hPlus = '';
    let mPlus = '';
    let sPlus = '';
    if(heures <= 9){
      hPlus = '0';
    }
    if(minutes <= 9){
      mPlus = '0';
    }
    if(secondes <= 9){
      sPlus = '0';
    }
    //affichage 
    text(hPlus + heures + ' : ' + mPlus + minutes + ' : ' + sPlus + secondes, 0, p/5);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}