import { Tile } from "./Tile";

const DIM : number = 6;

const BLANK : number = 0;
const UP : number = 1;
const LEFT : number = 2;
const RIGHT : number = 3;
const DOWN : number = 4;

let imagesInfos: Tile[] = [];
let canvas : HTMLCanvasElement;
let ctx : CanvasRenderingContext2D;
let grid : {colapsed: boolean, options: number[]}[][] = [];

function setup(){
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    canvas.height = window.innerHeight * 0.9;
    canvas.width = canvas.height;
    ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    grid = Array.from({ length: DIM }, () => new Array(DIM).fill(0));
    loadImagesInfos();
    for(let i=0; i < DIM; i++){
        for(let j=0; j < DIM; j++){
            grid[i][j] = {
                colapsed: false,
                options: [BLANK, UP, LEFT, RIGHT, DOWN]
            };
        }
    }
}

function loadImagesInfos(){
    imagesInfos.push(new Tile("./tiles/tracks/blank.png"));
    imagesInfos.push(new Tile("./tiles/tracks/up.png"));
    imagesInfos.push(new Tile("./tiles/tracks/left.png"));
    imagesInfos.push(new Tile("./tiles/tracks/down.png"));
    imagesInfos.push(new Tile("./tiles/tracks/right.png"));
}

function loadImage(img: Tile, x: number, y: number, width: number, height: number){
    const image = new Image();
    image.src = img.tilePath;
    image.onload = () => {
        ctx.drawImage(image, x, y, width, height);
    }
}

function getMinRandomEntropy(){
    let res = [];
    let minEntropy = Math.min(...grid.flat().map(tile => tile.options.length));
    for(let i=0; i < grid.length; i++){
        for(let j=0; j < grid[i].length; j++){
            if(grid[i][j].options.length == minEntropy){
                res.push([i, j]);
            }
        }
    }
    return res[Math.floor(Math.random() * res.length)];
}

function draw(){

    const w = canvas.width / DIM;
    const h = canvas.height / DIM;
    ctx.fillStyle = "grey";

    for(let i=0; i < DIM; i++){
        for(let j=0; j < DIM; j++){
            if(grid[i][j].colapsed){
                const tile_index = grid[i][j].options[0];
                loadImage(imagesInfos[tile_index], i*w, j*h, w, h);
            }else{
                ctx.rect(i*w, j*h, w, h);
                ctx.fill();
                ctx.stroke();
            }
        }
    }
}

function collapse(i: number, j: number){
    const cell = grid[i][j];
    const selectedOption = cell.options[Math.floor(Math.random() * cell.options.length)];
    cell.options = [selectedOption];
    cell.colapsed = true;

}

function main() {
    console.log("Main");
    setup();
    let [i,j] = getMinRandomEntropy();
    collapse(i,j);
    draw();
}


main();