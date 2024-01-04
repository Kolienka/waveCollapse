import { Tile } from "./Tile";

let imagesInfos: Tile[] = [];

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

function loadImagesInfos(){
    imagesInfos.push(new Tile("./tiles/tracks/blank.png"));
    imagesInfos.push(new Tile("./tiles/tracks/down.png"));
    imagesInfos.push(new Tile("./tiles/tracks/left.png"));
    imagesInfos.push(new Tile("./tiles/tracks/right.png"));
    imagesInfos.push(new Tile("./tiles/tracks/up.png"));
}

function loadImage(img: Tile, x: number, y: number){
    const image = new Image();
    image.src = img.tilePath;
    image.onload = function(){
        ctx.drawImage(image, x, y, 100, 100);
    }
}

function draw(){
    for(let i = 0; i < imagesInfos.length; i++){
        loadImage(imagesInfos[i], i*100, 0);
    }
}

function main() {
    console.log("Main");
    loadImagesInfos();
    canvas.width = 800;
    canvas.height = 800;
    draw();
}


main();