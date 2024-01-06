/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Tile.ts":
/*!*****************!*\
  !*** ./Tile.ts ***!
  \*****************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tile = void 0;
class Tile {
    constructor(tilePath) {
        this._tilePath = tilePath;
    }
    get tilePath() {
        return this._tilePath;
    }
}
exports.Tile = Tile;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Tile_1 = __webpack_require__(/*! ./Tile */ "./Tile.ts");
const DIM = 6;
const BLANK = 0;
const UP = 1;
const LEFT = 2;
const RIGHT = 3;
const DOWN = 4;
let imagesInfos = [];
let canvas;
let ctx;
let grid = [];
function setup() {
    canvas = document.getElementById("canvas");
    canvas.height = window.innerHeight * 0.9;
    canvas.width = canvas.height;
    ctx = canvas.getContext("2d");
    grid = Array.from({ length: DIM }, () => new Array(DIM).fill(0));
    loadImagesInfos();
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            grid[i][j] = {
                colapsed: false,
                options: [BLANK, UP, LEFT, RIGHT, DOWN]
            };
        }
    }
}
function loadImagesInfos() {
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/blank.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/up.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/left.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/down.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/right.png"));
}
function loadImage(img, x, y, width, height) {
    const image = new Image();
    image.src = img.tilePath;
    image.onload = () => {
        ctx.drawImage(image, x, y, width, height);
    };
}
function getMinRandomEntropy() {
    let res = [];
    let minEntropy = Math.min(...grid.flat().map(tile => tile.options.length));
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j].options.length == minEntropy) {
                res.push([i, j]);
            }
        }
    }
    return res[Math.floor(Math.random() * res.length)];
}
function draw() {
    const w = canvas.width / DIM;
    const h = canvas.height / DIM;
    ctx.fillStyle = "grey";
    for (let i = 0; i < DIM; i++) {
        for (let j = 0; j < DIM; j++) {
            if (grid[i][j].colapsed) {
                const tile_index = grid[i][j].options[0];
                loadImage(imagesInfos[tile_index], i * w, j * h, w, h);
            }
            else {
                ctx.rect(i * w, j * h, w, h);
                ctx.fill();
                ctx.stroke();
            }
        }
    }
}
function collapse(i, j) {
    const cell = grid[i][j];
    const selectedOption = cell.options[Math.floor(Math.random() * cell.options.length)];
    cell.options = [selectedOption];
    cell.colapsed = true;
}
function main() {
    console.log("Main");
    setup();
    let [i, j] = getMinRandomEntropy();
    collapse(i, j);
    draw();
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7VUNYWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsbUJBQU8sQ0FBQyx5QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0Isd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dhdmVjb2xsYXBzZS8uL1RpbGUudHMiLCJ3ZWJwYWNrOi8vd2F2ZWNvbGxhcHNlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dhdmVjb2xsYXBzZS8uL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UaWxlID0gdm9pZCAwO1xuY2xhc3MgVGlsZSB7XG4gICAgY29uc3RydWN0b3IodGlsZVBhdGgpIHtcbiAgICAgICAgdGhpcy5fdGlsZVBhdGggPSB0aWxlUGF0aDtcbiAgICB9XG4gICAgZ2V0IHRpbGVQYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGlsZVBhdGg7XG4gICAgfVxufVxuZXhwb3J0cy5UaWxlID0gVGlsZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IFRpbGVfMSA9IHJlcXVpcmUoXCIuL1RpbGVcIik7XG5jb25zdCBESU0gPSA2O1xuY29uc3QgQkxBTksgPSAwO1xuY29uc3QgVVAgPSAxO1xuY29uc3QgTEVGVCA9IDI7XG5jb25zdCBSSUdIVCA9IDM7XG5jb25zdCBET1dOID0gNDtcbmxldCBpbWFnZXNJbmZvcyA9IFtdO1xubGV0IGNhbnZhcztcbmxldCBjdHg7XG5sZXQgZ3JpZCA9IFtdO1xuZnVuY3Rpb24gc2V0dXAoKSB7XG4gICAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOTtcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXMuaGVpZ2h0O1xuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgZ3JpZCA9IEFycmF5LmZyb20oeyBsZW5ndGg6IERJTSB9LCAoKSA9PiBuZXcgQXJyYXkoRElNKS5maWxsKDApKTtcbiAgICBsb2FkSW1hZ2VzSW5mb3MoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IERJTTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgRElNOyBqKyspIHtcbiAgICAgICAgICAgIGdyaWRbaV1bal0gPSB7XG4gICAgICAgICAgICAgICAgY29sYXBzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtCTEFOSywgVVAsIExFRlQsIFJJR0hULCBET1dOXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRJbWFnZXNJbmZvcygpIHtcbiAgICBpbWFnZXNJbmZvcy5wdXNoKG5ldyBUaWxlXzEuVGlsZShcIi4vdGlsZXMvdHJhY2tzL2JsYW5rLnBuZ1wiKSk7XG4gICAgaW1hZ2VzSW5mb3MucHVzaChuZXcgVGlsZV8xLlRpbGUoXCIuL3RpbGVzL3RyYWNrcy91cC5wbmdcIikpO1xuICAgIGltYWdlc0luZm9zLnB1c2gobmV3IFRpbGVfMS5UaWxlKFwiLi90aWxlcy90cmFja3MvbGVmdC5wbmdcIikpO1xuICAgIGltYWdlc0luZm9zLnB1c2gobmV3IFRpbGVfMS5UaWxlKFwiLi90aWxlcy90cmFja3MvZG93bi5wbmdcIikpO1xuICAgIGltYWdlc0luZm9zLnB1c2gobmV3IFRpbGVfMS5UaWxlKFwiLi90aWxlcy90cmFja3MvcmlnaHQucG5nXCIpKTtcbn1cbmZ1bmN0aW9uIGxvYWRJbWFnZShpbWcsIHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGltZy50aWxlUGF0aDtcbiAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1hZ2UsIHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIH07XG59XG5mdW5jdGlvbiBnZXRNaW5SYW5kb21FbnRyb3B5KCkge1xuICAgIGxldCByZXMgPSBbXTtcbiAgICBsZXQgbWluRW50cm9weSA9IE1hdGgubWluKC4uLmdyaWQuZmxhdCgpLm1hcCh0aWxlID0+IHRpbGUub3B0aW9ucy5sZW5ndGgpKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBncmlkW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZFtpXVtqXS5vcHRpb25zLmxlbmd0aCA9PSBtaW5FbnRyb3B5KSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2goW2ksIGpdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJlcy5sZW5ndGgpXTtcbn1cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgY29uc3QgdyA9IGNhbnZhcy53aWR0aCAvIERJTTtcbiAgICBjb25zdCBoID0gY2FudmFzLmhlaWdodCAvIERJTTtcbiAgICBjdHguZmlsbFN0eWxlID0gXCJncmV5XCI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBESU07IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IERJTTsgaisrKSB7XG4gICAgICAgICAgICBpZiAoZ3JpZFtpXVtqXS5jb2xhcHNlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpbGVfaW5kZXggPSBncmlkW2ldW2pdLm9wdGlvbnNbMF07XG4gICAgICAgICAgICAgICAgbG9hZEltYWdlKGltYWdlc0luZm9zW3RpbGVfaW5kZXhdLCBpICogdywgaiAqIGgsIHcsIGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3R4LnJlY3QoaSAqIHcsIGogKiBoLCB3LCBoKTtcbiAgICAgICAgICAgICAgICBjdHguZmlsbCgpO1xuICAgICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGNvbGxhcHNlKGksIGopIHtcbiAgICBjb25zdCBjZWxsID0gZ3JpZFtpXVtqXTtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGNlbGwub3B0aW9uc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjZWxsLm9wdGlvbnMubGVuZ3RoKV07XG4gICAgY2VsbC5vcHRpb25zID0gW3NlbGVjdGVkT3B0aW9uXTtcbiAgICBjZWxsLmNvbGFwc2VkID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc29sZS5sb2coXCJNYWluXCIpO1xuICAgIHNldHVwKCk7XG4gICAgbGV0IFtpLCBqXSA9IGdldE1pblJhbmRvbUVudHJvcHkoKTtcbiAgICBjb2xsYXBzZShpLCBqKTtcbiAgICBkcmF3KCk7XG59XG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=