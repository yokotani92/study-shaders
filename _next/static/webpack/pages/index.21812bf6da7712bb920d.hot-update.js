webpackHotUpdate_N_E("pages/index",{

/***/ "./shaders/Image002/fragment.glsl":
/*!****************************************!*\
  !*** ./shaders/Image002/fragment.glsl ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__[\"default\"] = (\"#ifdef GL_ES\\nprecision mediump float;\\n#endif\\n\\nuniform vec2 uResolution;\\nuniform vec2 uMouse;\\nuniform float uTime;\\n\\nvoid main() {\\n\\tvec2 st = gl_FragCoord.xy/uResolution;\\n\\tgl_FragColor = vec4(st.x,st.y,0.0,1.0);\\n}\\n\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2hhZGVycy9JbWFnZTAwMi9mcmFnbWVudC5nbHNsPzRiZjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSw4Q0FBZSxtU0FBZiIsImZpbGUiOiIuL3NoYWRlcnMvSW1hZ2UwMDIvZnJhZ21lbnQuZ2xzbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiI2lmZGVmIEdMX0VTXFxucHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuI2VuZGlmXFxuXFxudW5pZm9ybSB2ZWMyIHVSZXNvbHV0aW9uO1xcbnVuaWZvcm0gdmVjMiB1TW91c2U7XFxudW5pZm9ybSBmbG9hdCB1VGltZTtcXG5cXG52b2lkIG1haW4oKSB7XFxuXFx0dmVjMiBzdCA9IGdsX0ZyYWdDb29yZC54eS91UmVzb2x1dGlvbjtcXG5cXHRnbF9GcmFnQ29sb3IgPSB2ZWM0KHN0Lngsc3QueSwwLjAsMS4wKTtcXG59XFxuXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./shaders/Image002/fragment.glsl\n");

/***/ })

})