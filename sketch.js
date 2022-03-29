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
    rolls.forEach((item,index) => {
        image(DICE_IMGS[item],(100 * index)%width,100 * int((100 * index) / width));
    })
}

function mouseClicked() {

    rolls = []
    for(var i = 0; i < 6; i++) {
        rolls.push(int(random(6)));
    }
}