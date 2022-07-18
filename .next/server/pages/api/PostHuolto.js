"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/PostHuolto";
exports.ids = ["pages/api/PostHuolto"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/PostHuolto.ts":
/*!*********************************!*\
  !*** ./pages/api/PostHuolto.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../db */ \"(api)/./pages/db.ts\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const huoltoData = JSON.parse(req.body);\n    console.log(\"PostData contact data: \", huoltoData);\n    const savedHuolto = await _db__WEBPACK_IMPORTED_MODULE_0__.prisma.Huolto.create({\n        data: huoltoData\n    });\n    res.json(savedHuolto);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvUG9zdEh1b2x0by50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUM4QjtBQUU5QixpRUFBZSxPQUFNQyxHQUFtQixFQUFFQyxHQUFvQixHQUFHO0lBRTdELElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLE1BQU0sRUFBRTtRQUN2QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBRSxvQkFBb0I7U0FBQyxDQUFDO0tBQy9EO0lBRUQsTUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1IsR0FBRyxDQUFDUyxJQUFJLENBQUM7SUFFdkNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFTCxVQUFVLENBQUM7SUFDbEQsTUFBTU0sV0FBVyxHQUFHLE1BQU1iLHFEQUFvQixDQUFDO1FBQzNDZ0IsSUFBSSxFQUFFVCxVQUFVO0tBQ25CLENBQUM7SUFDRkwsR0FBRyxDQUFDRyxJQUFJLENBQUNRLFdBQVcsQ0FBQztDQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL3R1dG9yLy4vcGFnZXMvYXBpL1Bvc3RIdW9sdG8udHM/MjJhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCJcclxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSAnLi4vZGInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyhyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSk9PntcclxuXHJcbiAgICBpZiAocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHttZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwifSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBodW9sdG9EYXRhID0gSlNPTi5wYXJzZShyZXEuYm9keSlcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coXCJQb3N0RGF0YSBjb250YWN0IGRhdGE6IFwiLCBodW9sdG9EYXRhKVxyXG4gICAgY29uc3Qgc2F2ZWRIdW9sdG8gPSBhd2FpdCBwcmlzbWEuSHVvbHRvLmNyZWF0ZSh7XHJcbiAgICAgICAgZGF0YTogaHVvbHRvRGF0YVxyXG4gICAgfSlcclxuICAgIHJlcy5qc29uKHNhdmVkSHVvbHRvKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJodW9sdG9EYXRhIiwiSlNPTiIsInBhcnNlIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJzYXZlZEh1b2x0byIsIkh1b2x0byIsImNyZWF0ZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/PostHuolto.ts\n");

/***/ }),

/***/ "(api)/./pages/db.ts":
/*!*********************!*\
  !*** ./pages/db.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient({\n    log: [\n        \"query\"\n    ]\n});\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9kYi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMkM7QUFRcEMsTUFBTUMsTUFBTSxHQUNqQkMsTUFBTSxDQUFDRCxNQUFNLElBQ2IsSUFBSUQsd0RBQVksQ0FBQztJQUNmRyxHQUFHLEVBQUU7UUFBQyxPQUFPO0tBQUM7Q0FDZixDQUFDO0FBRUosSUFBSUMsSUFBcUMsRUFBRUYsTUFBTSxDQUFDRCxNQUFNLEdBQUdBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90dXRvci8uL3BhZ2VzL2RiLnRzPzVmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQcmlzbWFDbGllbnR9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIC8vYWxsb3cgZ2xvYmFsIGB2YXJgIGRlY2xhcmF0aW9uc1xyXG4gIC8vZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxyXG4gIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJpc21hID1cclxuICBnbG9iYWwucHJpc21hIHx8XHJcbiAgbmV3IFByaXNtYUNsaWVudCh7XHJcbiAgICBsb2c6IFsncXVlcnknXSxcclxuICB9KVxyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWEiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwibG9nIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/PostHuolto.ts"));
module.exports = __webpack_exports__;

})();