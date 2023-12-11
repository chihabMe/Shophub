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
exports.id = "pages/api/trpc/[trpc]";
exports.ids = ["pages/api/trpc/[trpc]"];
exports.modules = {

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "@trpc/server":
/*!*******************************!*\
  !*** external "@trpc/server" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("@trpc/server");;

/***/ }),

/***/ "@trpc/server/adapters/next":
/*!*********************************************!*\
  !*** external "@trpc/server/adapters/next" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = import("@trpc/server/adapters/next");;

/***/ }),

/***/ "zod":
/*!**********************!*\
  !*** external "zod" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ "(api)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftrpc%2F%5Btrpc%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Ftrpc%2F%5Btrpc%5D.ts&middlewareConfigBase64=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftrpc%2F%5Btrpc%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Ftrpc%2F%5Btrpc%5D.ts&middlewareConfigBase64=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _src_pages_api_trpc_trpc_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pages/api/trpc/[trpc].ts */ \"(api)/./src/pages/api/trpc/[trpc].ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_pages_api_trpc_trpc_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_src_pages_api_trpc_trpc_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_trpc_trpc_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_src_pages_api_trpc_trpc_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/trpc/[trpc]\",\n        pathname: \"/api/trpc/[trpc]\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _src_pages_api_trpc_trpc_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxMy41LjRfcmVhY3QtZG9tQDE4LjIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaW5kZXguanM/a2luZD1QQUdFU19BUEkmcGFnZT0lMkZhcGklMkZ0cnBjJTJGJTVCdHJwYyU1RCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnNyYyUyRnBhZ2VzJTJGYXBpJTJGdHJwYyUyRiU1QnRycGMlNUQudHMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEY7QUFDM0I7QUFDTDtBQUMxRCw0QkFBNEIsZ0hBQTBCO0FBQ3REO0FBQ0E7QUFDMkQ7QUFDM0Q7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHdEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyx3REFBUTtBQUNwQztBQUNPO0FBQ1A7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQscUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lYy8/OWUyNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAdHMtaWdub3JlIHRoaXMgbmVlZCB0byBiZSBpbXBvcnRlZCBmcm9tIG5leHQvZGlzdCB0byBiZSBleHRlcm5hbFxuaW1wb3J0ICogYXMgbW9kdWxlIGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbmNvbnN0IFBhZ2VzQVBJUm91dGVNb2R1bGUgPSBtb2R1bGUuUGFnZXNBUElSb3V0ZU1vZHVsZTtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSByZXBsYWNlZCBieSB3ZWJwYWNrL3R1cmJvcGFjayBsb2FkZXJcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3NyYy9wYWdlcy9hcGkvdHJwYy9bdHJwY10udHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90cnBjL1t0cnBjXVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RycGMvW3RycGNdXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogXCJcIixcbiAgICAgICAgZmlsZW5hbWU6IFwiXCJcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftrpc%2F%5Btrpc%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Ftrpc%2F%5Btrpc%5D.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./src/pages/api/trpc/[trpc].ts":
/*!**************************************!*\
  !*** ./src/pages/api/trpc/[trpc].ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server/adapters/next */ \"@trpc/server/adapters/next\");\n/* harmony import */ var _src_server_routes_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/server/routes/app */ \"(api)/./src/server/routes/app.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _src_server_routes_app__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__, _src_server_routes_app__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler({\n    router: _src_server_routes_app__WEBPACK_IMPORTED_MODULE_1__.appRouter,\n    createContext: ()=>({})\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF1RDtBQUNIO0FBR3BELGlFQUFlQSw0RUFBNkIsQ0FBQztJQUMzQ0csUUFBT0YsNkRBQVNBO0lBQ2hCRyxlQUFjLElBQUssRUFBQztBQUN0QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWMvLi9zcmMvcGFnZXMvYXBpL3RycGMvW3RycGNdLnRzP2NlNTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgdHJwY05leHQgZnJvbSAnQHRycGMvc2VydmVyL2FkYXB0ZXJzL25leHQnO1xuaW1wb3J0IHsgYXBwUm91dGVyIH0gZnJvbSAnQC9zcmMvc2VydmVyL3JvdXRlcy9hcHAnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IHRycGNOZXh0LmNyZWF0ZU5leHRBcGlIYW5kbGVyKHtcbiAgcm91dGVyOmFwcFJvdXRlcixcbiAgY3JlYXRlQ29udGV4dDooKT0+KHt9KSxcbn0pXG4iXSwibmFtZXMiOlsidHJwY05leHQiLCJhcHBSb3V0ZXIiLCJjcmVhdGVOZXh0QXBpSGFuZGxlciIsInJvdXRlciIsImNyZWF0ZUNvbnRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/trpc/[trpc].ts\n");

/***/ }),

/***/ "(api)/./src/server/routes/app.ts":
/*!**********************************!*\
  !*** ./src/server/routes/app.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appRouter: () => (/* binding */ appRouter)\n/* harmony export */ });\n/* harmony import */ var _trpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../trpc */ \"(api)/./src/server/trpc.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! zod */ \"zod\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__]);\n([_trpc__WEBPACK_IMPORTED_MODULE_0__, zod__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst appRouter = (0,_trpc__WEBPACK_IMPORTED_MODULE_0__.router)({\n    hello: _trpc__WEBPACK_IMPORTED_MODULE_0__.publicProcedure.query(()=>{\n        return \"hello world\";\n    }),\n    sayHello: _trpc__WEBPACK_IMPORTED_MODULE_0__.publicProcedure.input(zod__WEBPACK_IMPORTED_MODULE_1__.object({\n        name: zod__WEBPACK_IMPORTED_MODULE_1__.string()\n    })).query(({ input })=>{\n        return \"hello \" + input.name;\n    })\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL3JvdXRlcy9hcHAudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ3pCO0FBRWxCLE1BQU1HLFlBQVlGLDZDQUFNQSxDQUFDO0lBQzlCRyxPQUFPSixrREFBZUEsQ0FBQ0ssS0FBSyxDQUFDO1FBQzNCLE9BQU87SUFDVDtJQUNBQyxVQUFVTixrREFBZUEsQ0FDdEJPLEtBQUssQ0FDSkwsdUNBQVEsQ0FBQztRQUNQTyxNQUFNUCx1Q0FBUTtJQUNoQixJQUVERyxLQUFLLENBQUMsQ0FBQyxFQUFFRSxLQUFLLEVBQUU7UUFDZixPQUFPLFdBQVdBLE1BQU1FLElBQUk7SUFDOUI7QUFDSixHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWMvLi9zcmMvc2VydmVyL3JvdXRlcy9hcHAudHM/OTM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJsaWNQcm9jZWR1cmUsIHJvdXRlciB9IGZyb20gXCIuLi90cnBjXCI7XG5pbXBvcnQgKiBhcyB6IGZyb20gXCJ6b2RcIjtcblxuZXhwb3J0IGNvbnN0IGFwcFJvdXRlciA9IHJvdXRlcih7XG4gIGhlbGxvOiBwdWJsaWNQcm9jZWR1cmUucXVlcnkoKCkgPT4ge1xuICAgIHJldHVybiBcImhlbGxvIHdvcmxkXCI7XG4gIH0pLFxuICBzYXlIZWxsbzogcHVibGljUHJvY2VkdXJlXG4gICAgLmlucHV0KFxuICAgICAgei5vYmplY3Qoe1xuICAgICAgICBuYW1lOiB6LnN0cmluZygpLFxuICAgICAgfSksXG4gICAgKVxuICAgIC5xdWVyeSgoeyBpbnB1dCB9KSA9PiB7XG4gICAgICByZXR1cm4gXCJoZWxsbyBcIiArIGlucHV0Lm5hbWU7XG4gICAgfSksXG59KTtcblxuZXhwb3J0IHR5cGUgQXBwUm91dGVyID0gdHlwZW9mIGFwcFJvdXRlcjtcbiJdLCJuYW1lcyI6WyJwdWJsaWNQcm9jZWR1cmUiLCJyb3V0ZXIiLCJ6IiwiYXBwUm91dGVyIiwiaGVsbG8iLCJxdWVyeSIsInNheUhlbGxvIiwiaW5wdXQiLCJvYmplY3QiLCJuYW1lIiwic3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/server/routes/app.ts\n");

/***/ }),

/***/ "(api)/./src/server/trpc.ts":
/*!****************************!*\
  !*** ./src/server/trpc.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   publicProcedure: () => (/* binding */ publicProcedure),\n/* harmony export */   router: () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @trpc/server */ \"@trpc/server\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_trpc_server__WEBPACK_IMPORTED_MODULE_0__]);\n_trpc_server__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst t = _trpc_server__WEBPACK_IMPORTED_MODULE_0__.initTRPC.create();\nconst router = t.router;\nconst publicProcedure = t.procedure;\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvc2VydmVyL3RycGMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXFDO0FBRXJDLE1BQU1DLElBQUlELGtEQUFRQSxDQUFDRSxNQUFNO0FBRWxCLE1BQU1DLFNBQVNGLEVBQUVFLE1BQU0sQ0FBQztBQUN4QixNQUFNQyxrQkFBa0JILEVBQUVJLFNBQVMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VjLy4vc3JjL3NlcnZlci90cnBjLnRzPzQ1N2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbml0VFJQQ30gZnJvbSBcIkB0cnBjL3NlcnZlclwiXG5cbmNvbnN0IHQgPSBpbml0VFJQQy5jcmVhdGUoKTtcblxuZXhwb3J0IGNvbnN0IHJvdXRlciA9IHQucm91dGVyO1xuZXhwb3J0IGNvbnN0IHB1YmxpY1Byb2NlZHVyZSA9IHQucHJvY2VkdXJlO1xuIl0sIm5hbWVzIjpbImluaXRUUlBDIiwidCIsImNyZWF0ZSIsInJvdXRlciIsInB1YmxpY1Byb2NlZHVyZSIsInByb2NlZHVyZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/server/trpc.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@13.5.4_react-dom@18.2.0_react@18.2.0"], () => (__webpack_exec__("(api)/./node_modules/.pnpm/next@13.5.4_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftrpc%2F%5Btrpc%5D&preferredRegion=&absolutePagePath=.%2Fsrc%2Fpages%2Fapi%2Ftrpc%2F%5Btrpc%5D.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();