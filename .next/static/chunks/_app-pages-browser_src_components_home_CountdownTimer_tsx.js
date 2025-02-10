"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["_app-pages-browser_src_components_home_CountdownTimer_tsx"],{

/***/ "(app-pages-browser)/./src/components/home/CountdownTimer.tsx":
/*!************************************************!*\
  !*** ./src/components/home/CountdownTimer.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst CountdownTimer = ()=>{\n    _s();\n    const [timeLeft, setTimeLeft] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(12 * 60); // 12 minutos em segundos\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (timeLeft <= 0) return;\n        const timer = setInterval(()=>{\n            setTimeLeft((prevTime)=>prevTime - 1);\n        }, 1000);\n        return ()=>clearInterval(timer);\n    }, [\n        timeLeft\n    ]);\n    const minutes = Math.floor(timeLeft / 60);\n    const seconds = timeLeft % 60;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-lg text-red-500 mb-2\",\n                children: \"Oferta expira em:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-4 text-4xl font-bold\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"glass p-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: String(minutes).padStart(2, \"0\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm block text-gray-400\",\n                                children: \"minutos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-4xl font-bold flex items-start pt-4\",\n                        children: \":\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"glass p-4 rounded-lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: String(seconds).padStart(2, \"0\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-sm block text-gray-400\",\n                                children: \"segundos\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Eduar\\\\Desktop\\\\Planilhas\\\\planilhas-profissionais\\\\src\\\\components\\\\home\\\\CountdownTimer.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CountdownTimer, \"Mawq91ljLMJZi89PPY9WuIjDpTo=\");\n_c = CountdownTimer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CountdownTimer);\nvar _c;\n$RefreshReg$(_c, \"CountdownTimer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2hvbWUvQ291bnRkb3duVGltZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtRDtBQUVuRCxNQUFNRyxpQkFBaUI7O0lBQ3JCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQyxLQUFLLEtBQUsseUJBQXlCO0lBRTVFQyxnREFBU0EsQ0FBQztRQUNSLElBQUlFLFlBQVksR0FBRztRQUVuQixNQUFNRSxRQUFRQyxZQUFZO1lBQ3hCRixZQUFZRyxDQUFBQSxXQUFZQSxXQUFXO1FBQ3JDLEdBQUc7UUFFSCxPQUFPLElBQU1DLGNBQWNIO0lBQzdCLEdBQUc7UUFBQ0Y7S0FBUztJQUViLE1BQU1NLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ1IsV0FBVztJQUN0QyxNQUFNUyxVQUFVVCxXQUFXO0lBRTNCLHFCQUNFLDhEQUFDVTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUVELFdBQVU7MEJBQTRCOzs7Ozs7MEJBQ3pDLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUtGLFdBQVU7MENBQWNHLE9BQU9SLFNBQVNTLFFBQVEsQ0FBQyxHQUFHOzs7Ozs7MENBQzFELDhEQUFDRjtnQ0FBS0YsV0FBVTswQ0FBOEI7Ozs7Ozs7Ozs7OztrQ0FFaEQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUEyQzs7Ozs7O2tDQUMxRCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRTtnQ0FBS0YsV0FBVTswQ0FBY0csT0FBT0wsU0FBU00sUUFBUSxDQUFDLEdBQUc7Ozs7OzswQ0FDMUQsOERBQUNGO2dDQUFLRixXQUFVOzBDQUE4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hEO0dBaENNWjtLQUFBQTtBQWtDTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ob21lL0NvdW50ZG93blRpbWVyLnRzeD8xY2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ291bnRkb3duVGltZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3RpbWVMZWZ0LCBzZXRUaW1lTGVmdF0gPSB1c2VTdGF0ZSgxMiAqIDYwKTsgLy8gMTIgbWludXRvcyBlbSBzZWd1bmRvc1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRpbWVMZWZ0IDw9IDApIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgc2V0VGltZUxlZnQocHJldlRpbWUgPT4gcHJldlRpbWUgLSAxKTtcclxuICAgIH0sIDEwMDApO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKHRpbWVyKTtcclxuICB9LCBbdGltZUxlZnRdKTtcclxuXHJcbiAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IodGltZUxlZnQgLyA2MCk7XHJcbiAgY29uc3Qgc2Vjb25kcyA9IHRpbWVMZWZ0ICUgNjA7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1iLThcIj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyB0ZXh0LXJlZC01MDAgbWItMlwiPk9mZXJ0YSBleHBpcmEgZW06PC9wPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTQgdGV4dC00eGwgZm9udC1ib2xkXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJnbGFzcyBwLTQgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntTdHJpbmcobWludXRlcykucGFkU3RhcnQoMiwgJzAnKX08L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGJsb2NrIHRleHQtZ3JheS00MDBcIj5taW51dG9zPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIGZsZXggaXRlbXMtc3RhcnQgcHQtNFwiPjo8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsYXNzIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e1N0cmluZyhzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpfTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gYmxvY2sgdGV4dC1ncmF5LTQwMFwiPnNlZ3VuZG9zPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb3VudGRvd25UaW1lcjsgIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb3VudGRvd25UaW1lciIsInRpbWVMZWZ0Iiwic2V0VGltZUxlZnQiLCJ0aW1lciIsInNldEludGVydmFsIiwicHJldlRpbWUiLCJjbGVhckludGVydmFsIiwibWludXRlcyIsIk1hdGgiLCJmbG9vciIsInNlY29uZHMiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwic3BhbiIsIlN0cmluZyIsInBhZFN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/home/CountdownTimer.tsx\n"));

/***/ })

}]);