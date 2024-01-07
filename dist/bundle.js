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
const RULES_MAP = {
    BLANK: {
        UP: [BLANK, UP],
        LEFT: [BLANK, RIGHT],
        DOWN: [BLANK, DOWN],
        RIGHT: [BLANK, LEFT]
    },
    LEFT: {
        UP: [LEFT, DOWN, RIGHT],
        LEFT: [UP, DOWN, RIGHT],
        DOWN: [UP, LEFT, RIGHT],
        RIGHT: [BLANK, RIGHT]
    },
    DOWN: {
        UP: [BLANK, UP],
        LEFT: [DOWN, RIGHT, UP],
        DOWN: [LEFT, RIGHT, UP],
        RIGHT: [BLANK, RIGHT]
    },
    RIGHT: {
        UP: [DOWN, LEFT, RIGHT],
        LEFT: [BLANK, LEFT],
        DOWN: [DOWN, LEFT, RIGHT],
        RIGHT: [DOWN, LEFT, UP]
    },
};
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
    const entropies = grid.flat()
        .map(tile => tile.options.length)
        .filter(val => val != 1);
    const minEntropy = Math.min(...entropies);
    let res = [];
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
function collapseCell(cell) {
    const selectedOption = cell.options[Math.floor(Math.random() * cell.options.length)];
    cell.options = [selectedOption];
    cell.colapsed = true;
}
function main() {
    console.log("Main");
    setup();
    let collapsed_count = 0;
    while (collapsed_count < DIM * DIM) {
        const cell_coordinates = getMinRandomEntropy();
        const cell = grid[cell_coordinates[0]][cell_coordinates[1]];
        collapseCell(cell);
        collapsed_count++;
        draw();
    }
    console.log("end of main");
}
main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7VUNYWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsbUJBQU8sQ0FBQyx5QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsYUFBYTtBQUNyQztBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHdCQUF3QixTQUFTO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckMsd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0Isd0JBQXdCLFNBQVM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXZlY29sbGFwc2UvLi9UaWxlLnRzIiwid2VicGFjazovL3dhdmVjb2xsYXBzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YXZlY29sbGFwc2UvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZSA9IHZvaWQgMDtcbmNsYXNzIFRpbGUge1xuICAgIGNvbnN0cnVjdG9yKHRpbGVQYXRoKSB7XG4gICAgICAgIHRoaXMuX3RpbGVQYXRoID0gdGlsZVBhdGg7XG4gICAgfVxuICAgIGdldCB0aWxlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbGVQYXRoO1xuICAgIH1cbn1cbmV4cG9ydHMuVGlsZSA9IFRpbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUaWxlXzEgPSByZXF1aXJlKFwiLi9UaWxlXCIpO1xuY29uc3QgRElNID0gNjtcbmNvbnN0IEJMQU5LID0gMDtcbmNvbnN0IFVQID0gMTtcbmNvbnN0IExFRlQgPSAyO1xuY29uc3QgUklHSFQgPSAzO1xuY29uc3QgRE9XTiA9IDQ7XG5jb25zdCBSVUxFU19NQVAgPSB7XG4gICAgQkxBTks6IHtcbiAgICAgICAgVVA6IFtCTEFOSywgVVBdLFxuICAgICAgICBMRUZUOiBbQkxBTkssIFJJR0hUXSxcbiAgICAgICAgRE9XTjogW0JMQU5LLCBET1dOXSxcbiAgICAgICAgUklHSFQ6IFtCTEFOSywgTEVGVF1cbiAgICB9LFxuICAgIExFRlQ6IHtcbiAgICAgICAgVVA6IFtMRUZULCBET1dOLCBSSUdIVF0sXG4gICAgICAgIExFRlQ6IFtVUCwgRE9XTiwgUklHSFRdLFxuICAgICAgICBET1dOOiBbVVAsIExFRlQsIFJJR0hUXSxcbiAgICAgICAgUklHSFQ6IFtCTEFOSywgUklHSFRdXG4gICAgfSxcbiAgICBET1dOOiB7XG4gICAgICAgIFVQOiBbQkxBTkssIFVQXSxcbiAgICAgICAgTEVGVDogW0RPV04sIFJJR0hULCBVUF0sXG4gICAgICAgIERPV046IFtMRUZULCBSSUdIVCwgVVBdLFxuICAgICAgICBSSUdIVDogW0JMQU5LLCBSSUdIVF1cbiAgICB9LFxuICAgIFJJR0hUOiB7XG4gICAgICAgIFVQOiBbRE9XTiwgTEVGVCwgUklHSFRdLFxuICAgICAgICBMRUZUOiBbQkxBTkssIExFRlRdLFxuICAgICAgICBET1dOOiBbRE9XTiwgTEVGVCwgUklHSFRdLFxuICAgICAgICBSSUdIVDogW0RPV04sIExFRlQsIFVQXVxuICAgIH0sXG59O1xubGV0IGltYWdlc0luZm9zID0gW107XG5sZXQgY2FudmFzO1xubGV0IGN0eDtcbmxldCBncmlkID0gW107XG5mdW5jdGlvbiBzZXR1cCgpIHtcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45O1xuICAgIGNhbnZhcy53aWR0aCA9IGNhbnZhcy5oZWlnaHQ7XG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBncmlkID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogRElNIH0sICgpID0+IG5ldyBBcnJheShESU0pLmZpbGwoMCkpO1xuICAgIGxvYWRJbWFnZXNJbmZvcygpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRElNOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBESU07IGorKykge1xuICAgICAgICAgICAgZ3JpZFtpXVtqXSA9IHtcbiAgICAgICAgICAgICAgICBjb2xhcHNlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogW0JMQU5LLCBVUCwgTEVGVCwgUklHSFQsIERPV05dXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbG9hZEltYWdlc0luZm9zKCkge1xuICAgIGltYWdlc0luZm9zLnB1c2gobmV3IFRpbGVfMS5UaWxlKFwiLi90aWxlcy90cmFja3MvYmxhbmsucG5nXCIpKTtcbiAgICBpbWFnZXNJbmZvcy5wdXNoKG5ldyBUaWxlXzEuVGlsZShcIi4vdGlsZXMvdHJhY2tzL3VwLnBuZ1wiKSk7XG4gICAgaW1hZ2VzSW5mb3MucHVzaChuZXcgVGlsZV8xLlRpbGUoXCIuL3RpbGVzL3RyYWNrcy9sZWZ0LnBuZ1wiKSk7XG4gICAgaW1hZ2VzSW5mb3MucHVzaChuZXcgVGlsZV8xLlRpbGUoXCIuL3RpbGVzL3RyYWNrcy9kb3duLnBuZ1wiKSk7XG4gICAgaW1hZ2VzSW5mb3MucHVzaChuZXcgVGlsZV8xLlRpbGUoXCIuL3RpbGVzL3RyYWNrcy9yaWdodC5wbmdcIikpO1xufVxuZnVuY3Rpb24gbG9hZEltYWdlKGltZywgeCwgeSwgd2lkdGgsIGhlaWdodCkge1xuICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gaW1nLnRpbGVQYXRoO1xuICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldE1pblJhbmRvbUVudHJvcHkoKSB7XG4gICAgY29uc3QgZW50cm9waWVzID0gZ3JpZC5mbGF0KClcbiAgICAgICAgLm1hcCh0aWxlID0+IHRpbGUub3B0aW9ucy5sZW5ndGgpXG4gICAgICAgIC5maWx0ZXIodmFsID0+IHZhbCAhPSAxKTtcbiAgICBjb25zdCBtaW5FbnRyb3B5ID0gTWF0aC5taW4oLi4uZW50cm9waWVzKTtcbiAgICBsZXQgcmVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncmlkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ3JpZFtpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgaWYgKGdyaWRbaV1bal0ub3B0aW9ucy5sZW5ndGggPT0gbWluRW50cm9weSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKFtpLCBqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZXMubGVuZ3RoKV07XG59XG5mdW5jdGlvbiBkcmF3KCkge1xuICAgIGNvbnN0IHcgPSBjYW52YXMud2lkdGggLyBESU07XG4gICAgY29uc3QgaCA9IGNhbnZhcy5oZWlnaHQgLyBESU07XG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiZ3JleVwiO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRElNOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBESU07IGorKykge1xuICAgICAgICAgICAgaWYgKGdyaWRbaV1bal0uY29sYXBzZWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlX2luZGV4ID0gZ3JpZFtpXVtqXS5vcHRpb25zWzBdO1xuICAgICAgICAgICAgICAgIGxvYWRJbWFnZShpbWFnZXNJbmZvc1t0aWxlX2luZGV4XSwgaSAqIHcsIGogKiBoLCB3LCBoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGN0eC5yZWN0KGkgKiB3LCBqICogaCwgdywgaCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBjb2xsYXBzZUNlbGwoY2VsbCkge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gY2VsbC5vcHRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNlbGwub3B0aW9ucy5sZW5ndGgpXTtcbiAgICBjZWxsLm9wdGlvbnMgPSBbc2VsZWN0ZWRPcHRpb25dO1xuICAgIGNlbGwuY29sYXBzZWQgPSB0cnVlO1xufVxuZnVuY3Rpb24gbWFpbigpIHtcbiAgICBjb25zb2xlLmxvZyhcIk1haW5cIik7XG4gICAgc2V0dXAoKTtcbiAgICBsZXQgY29sbGFwc2VkX2NvdW50ID0gMDtcbiAgICB3aGlsZSAoY29sbGFwc2VkX2NvdW50IDwgRElNICogRElNKSB7XG4gICAgICAgIGNvbnN0IGNlbGxfY29vcmRpbmF0ZXMgPSBnZXRNaW5SYW5kb21FbnRyb3B5KCk7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBncmlkW2NlbGxfY29vcmRpbmF0ZXNbMF1dW2NlbGxfY29vcmRpbmF0ZXNbMV1dO1xuICAgICAgICBjb2xsYXBzZUNlbGwoY2VsbCk7XG4gICAgICAgIGNvbGxhcHNlZF9jb3VudCsrO1xuICAgICAgICBkcmF3KCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiZW5kIG9mIG1haW5cIik7XG59XG5tYWluKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=