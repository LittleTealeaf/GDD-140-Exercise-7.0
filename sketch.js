/// <reference path="./node_modules/@types/p5/global.d.ts" />

const DICE_IMGS = []

var rolls = []

function preload() {
    for(var i = 0; i < 6; i++) {
        DICE_IMGS.push(loadImage(`./assets/die-${i}.png`));
    }
}


function setup() {
    createCanvas(windowWidth - 20,windowHeight - 20);
    
}

function draw() {
    background(255);
    var last_height = -100;
    rolls.forEach((item,index) => {
        last_height = 100 * int((100 * index) / width);
        image(DICE_IMGS[item],(100 * index)%width,last_height);
    });

    textSize(30);
    text("Click for Random Dice Roll",0,last_height + 200);
}

function mouseClicked() {

    rolls = []
    for(var i = 0; i < 6; i++) {
        rolls.push(int(random(6)));
    }
}