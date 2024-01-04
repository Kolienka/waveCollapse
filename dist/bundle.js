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
let imagesInfos = [];
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
function loadImagesInfos() {
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/blank.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/down.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/left.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/right.png"));
    imagesInfos.push(new Tile_1.Tile("./tiles/tracks/up.png"));
}
function loadImage(img, x, y) {
    const image = new Image();
    image.src = img.tilePath;
    image.onload = function () {
        ctx.drawImage(image, x, y, 100, 100);
    };
}
function draw() {
    for (let i = 0; i < imagesInfos.length; i++) {
        loadImage(imagesInfos[i], i * 100, 0);
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

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7Ozs7Ozs7VUNYWjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7O0FDdEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsbUJBQU8sQ0FBQyx5QkFBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93YXZlY29sbGFwc2UvLi9UaWxlLnRzIiwid2VicGFjazovL3dhdmVjb2xsYXBzZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93YXZlY29sbGFwc2UvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVGlsZSA9IHZvaWQgMDtcbmNsYXNzIFRpbGUge1xuICAgIGNvbnN0cnVjdG9yKHRpbGVQYXRoKSB7XG4gICAgICAgIHRoaXMuX3RpbGVQYXRoID0gdGlsZVBhdGg7XG4gICAgfVxuICAgIGdldCB0aWxlUGF0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpbGVQYXRoO1xuICAgIH1cbn1cbmV4cG9ydHMuVGlsZSA9IFRpbGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBUaWxlXzEgPSByZXF1aXJlKFwiLi9UaWxlXCIpO1xubGV0IGltYWdlc0luZm9zID0gW107XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTtcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5mdW5jdGlvbiBsb2FkSW1hZ2VzSW5mb3MoKSB7XG4gICAgaW1hZ2VzSW5mb3MucHVzaChuZXcgVGlsZV8xLlRpbGUoXCIuL3RpbGVzL3RyYWNrcy9ibGFuay5wbmdcIikpO1xuICAgIGltYWdlc0luZm9zLnB1c2gobmV3IFRpbGVfMS5UaWxlKFwiLi90aWxlcy90cmFja3MvZG93bi5wbmdcIikpO1xuICAgIGltYWdlc0luZm9zLnB1c2gobmV3IFRpbGVfMS5UaWxlKFwiLi90aWxlcy90cmFja3MvbGVmdC5wbmdcIikpO1xuICAgIGltYWdlc0luZm9zLnB1c2gobmV3IFRpbGVfMS5UaWxlKFwiLi90aWxlcy90cmFja3MvcmlnaHQucG5nXCIpKTtcbiAgICBpbWFnZXNJbmZvcy5wdXNoKG5ldyBUaWxlXzEuVGlsZShcIi4vdGlsZXMvdHJhY2tzL3VwLnBuZ1wiKSk7XG59XG5mdW5jdGlvbiBsb2FkSW1hZ2UoaW1nLCB4LCB5KSB7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBpbWcudGlsZVBhdGg7XG4gICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjdHguZHJhd0ltYWdlKGltYWdlLCB4LCB5LCAxMDAsIDEwMCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXNJbmZvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsb2FkSW1hZ2UoaW1hZ2VzSW5mb3NbaV0sIGkgKiAxMDAsIDApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG1haW4oKSB7XG4gICAgY29uc29sZS5sb2coXCJNYWluXCIpO1xuICAgIGxvYWRJbWFnZXNJbmZvcygpO1xuICAgIGNhbnZhcy53aWR0aCA9IDgwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gODAwO1xuICAgIGRyYXcoKTtcbn1cbm1haW4oKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==