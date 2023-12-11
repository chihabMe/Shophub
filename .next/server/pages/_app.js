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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/trpc */ \"./src/utils/trpc.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_trpc__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_trpc__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst MyApp = ({ Component, pageProps })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/user/Documents/projects/ecommerce/src/pages/_app.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utils_trpc__WEBPACK_IMPORTED_MODULE_1__.trpc.withTRPC(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUM7QUFFckMsTUFBTUMsUUFBaUIsQ0FBQyxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUM5QyxxQkFBTyw4REFBQ0Q7UUFBVyxHQUFHQyxTQUFTOzs7Ozs7QUFDakM7QUFDQSxpRUFBZUgsNkNBQUlBLENBQUNJLFFBQVEsQ0FBQ0gsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VjLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBcHBUeXBlIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgeyB0cnBjIH0gZnJvbSBcIi4uL3V0aWxzL3RycGNcIjtcblxuY29uc3QgTXlBcHA6IEFwcFR5cGUgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIHJldHVybiA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+O1xufTtcbmV4cG9ydCBkZWZhdWx0IHRycGMud2l0aFRSUEMoTXlBcHApO1xuIl0sIm5hbWVzIjpbInRycGMiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndpdGhUUlBDIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/utils/trpc.ts":
/*!***************************!*\
  !*** ./src/utils/trpc.ts ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   trpc: () => (/* binding */ trpc)\n/* harmony export */ });\n/* harmony import */ var _trpc_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/client */ \"@trpc/client\");\n/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @trpc/next */ \"@trpc/next\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_client__WEBPACK_IMPORTED_MODULE_0__, _trpc_next__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nfunction getBaseUrl() {\n    if (false) // browser should use relative path\n    {}\n    if (process.env.VERCEL_URL) // reference for vercel.com\n    return `https://${process.env.VERCEL_URL}`;\n    if (process.env.RENDER_INTERNAL_HOSTNAME) // reference for render.com\n    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;\n    // assume localhost\n    return `http://localhost:${process.env.PORT ?? 3000}`;\n}\nconst trpc = (0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.createTRPCNext)({\n    config (opts) {\n        return {\n            links: [\n                (0,_trpc_client__WEBPACK_IMPORTED_MODULE_0__.httpBatchLink)({\n                    /**\n           * If you want to use SSR, you need to use the server's full URL\n           * @link https://trpc.io/docs/ssr\n           **/ url: `${getBaseUrl()}/api/trpc`,\n                    // You can pass any HTTP headers you wish here\n                    async headers () {\n                        return {\n                        };\n                    }\n                })\n            ]\n        };\n    },\n    /**\n   * @link https://trpc.io/docs/ssr\n   **/ ssr: false\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdHJwYy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkM7QUFDRDtBQUc1QyxTQUFTRTtJQUNQLElBQUksS0FBNkIsRUFDL0IsbUNBQW1DO0lBQ25DLEVBQVU7SUFFWixJQUFJQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsRUFDeEIsMkJBQTJCO0lBQzNCLE9BQU8sQ0FBQyxRQUFRLEVBQUVGLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUM7SUFFNUMsSUFBSUYsUUFBUUMsR0FBRyxDQUFDRSx3QkFBd0IsRUFDdEMsMkJBQTJCO0lBQzNCLE9BQU8sQ0FBQyxPQUFPLEVBQUVILFFBQVFDLEdBQUcsQ0FBQ0Usd0JBQXdCLENBQUMsQ0FBQyxFQUFFSCxRQUFRQyxHQUFHLENBQUNHLElBQUksQ0FBQyxDQUFDO0lBRTdFLG1CQUFtQjtJQUNuQixPQUFPLENBQUMsaUJBQWlCLEVBQUVKLFFBQVFDLEdBQUcsQ0FBQ0csSUFBSSxJQUFJLEtBQUssQ0FBQztBQUN2RDtBQUVPLE1BQU1DLE9BQU9QLDBEQUFjQSxDQUFZO0lBQzVDUSxRQUFPQyxJQUFJO1FBQ1QsT0FBTztZQUNMQyxPQUFPO2dCQUNMWCwyREFBYUEsQ0FBQztvQkFDWjs7O1lBR0UsR0FDRlksS0FBSyxDQUFDLEVBQUVWLGFBQWEsU0FBUyxDQUFDO29CQUUvQiw4Q0FBOEM7b0JBQzlDLE1BQU1XO3dCQUNKLE9BQU87d0JBRVA7b0JBQ0Y7Z0JBQ0Y7YUFDRDtRQUNIO0lBQ0Y7SUFDQTs7SUFFRSxHQUNGQyxLQUFLO0FBQ1AsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2VjLy4vc3JjL3V0aWxzL3RycGMudHM/MTFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBodHRwQmF0Y2hMaW5rIH0gZnJvbSBcIkB0cnBjL2NsaWVudFwiO1xuaW1wb3J0IHsgY3JlYXRlVFJQQ05leHQgfSBmcm9tIFwiQHRycGMvbmV4dFwiO1xuaW1wb3J0IHR5cGUgeyBBcHBSb3V0ZXIgfSBmcm9tIFwiLi4vc2VydmVyL3JvdXRlcy9hcHBcIjtcblxuZnVuY3Rpb24gZ2V0QmFzZVVybCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpXG4gICAgLy8gYnJvd3NlciBzaG91bGQgdXNlIHJlbGF0aXZlIHBhdGhcbiAgICByZXR1cm4gXCJcIjtcblxuICBpZiAocHJvY2Vzcy5lbnYuVkVSQ0VMX1VSTClcbiAgICAvLyByZWZlcmVuY2UgZm9yIHZlcmNlbC5jb21cbiAgICByZXR1cm4gYGh0dHBzOi8vJHtwcm9jZXNzLmVudi5WRVJDRUxfVVJMfWA7XG5cbiAgaWYgKHByb2Nlc3MuZW52LlJFTkRFUl9JTlRFUk5BTF9IT1NUTkFNRSlcbiAgICAvLyByZWZlcmVuY2UgZm9yIHJlbmRlci5jb21cbiAgICByZXR1cm4gYGh0dHA6Ly8ke3Byb2Nlc3MuZW52LlJFTkRFUl9JTlRFUk5BTF9IT1NUTkFNRX06JHtwcm9jZXNzLmVudi5QT1JUfWA7XG5cbiAgLy8gYXNzdW1lIGxvY2FsaG9zdFxuICByZXR1cm4gYGh0dHA6Ly9sb2NhbGhvc3Q6JHtwcm9jZXNzLmVudi5QT1JUID8/IDMwMDB9YDtcbn1cblxuZXhwb3J0IGNvbnN0IHRycGMgPSBjcmVhdGVUUlBDTmV4dDxBcHBSb3V0ZXI+KHtcbiAgY29uZmlnKG9wdHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlua3M6IFtcbiAgICAgICAgaHR0cEJhdGNoTGluayh7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogSWYgeW91IHdhbnQgdG8gdXNlIFNTUiwgeW91IG5lZWQgdG8gdXNlIHRoZSBzZXJ2ZXIncyBmdWxsIFVSTFxuICAgICAgICAgICAqIEBsaW5rIGh0dHBzOi8vdHJwYy5pby9kb2NzL3NzclxuICAgICAgICAgICAqKi9cbiAgICAgICAgICB1cmw6IGAke2dldEJhc2VVcmwoKX0vYXBpL3RycGNgLFxuXG4gICAgICAgICAgLy8gWW91IGNhbiBwYXNzIGFueSBIVFRQIGhlYWRlcnMgeW91IHdpc2ggaGVyZVxuICAgICAgICAgIGFzeW5jIGhlYWRlcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAvLyBhdXRob3JpemF0aW9uOiBnZXRBdXRoQ29va2llKCksXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9O1xuICB9LFxuICAvKipcbiAgICogQGxpbmsgaHR0cHM6Ly90cnBjLmlvL2RvY3Mvc3NyXG4gICAqKi9cbiAgc3NyOiBmYWxzZSxcbn0pO1xuIl0sIm5hbWVzIjpbImh0dHBCYXRjaExpbmsiLCJjcmVhdGVUUlBDTmV4dCIsImdldEJhc2VVcmwiLCJwcm9jZXNzIiwiZW52IiwiVkVSQ0VMX1VSTCIsIlJFTkRFUl9JTlRFUk5BTF9IT1NUTkFNRSIsIlBPUlQiLCJ0cnBjIiwiY29uZmlnIiwib3B0cyIsImxpbmtzIiwidXJsIiwiaGVhZGVycyIsInNzciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/trpc.ts\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@trpc/client":
/*!*******************************!*\
  !*** external "@trpc/client" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/client");;

/***/ }),

/***/ "@trpc/next":
/*!*****************************!*\
  !*** external "@trpc/next" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("@trpc/next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();