"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Insight.js":
/*!***********************************!*\
  !*** ./src/components/Insight.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Insight_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Insight.module.css */ \"./src/styles/Insight.module.css\");\n/* harmony import */ var _styles_Insight_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Insight_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ \"./src/components/Card.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Insight = (param)=>{\n    let { data  } = param;\n    _s();\n    const [articles, setArticles] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const assignFeaturedArticles = (arrayData)=>{\n        console.log(arrayData);\n        let newData = [];\n        arrayData.map((article)=>article.is_featured === true && newData.push(article));\n        setArticles(newData);\n        console.log(newData);\n    };\n    const selectedArticles = ()=>{\n        return articles.sort(()=>Math.random() - Math.random()).slice(0, 3);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        assignFeaturedArticles(data);\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Insight_module_css__WEBPACK_IMPORTED_MODULE_3___default().insight),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"Empowering Minds\"\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/lifestyle-blog/src/components/Insight.js\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Insights and Strategies for Personal and Professional Growth\"\n                }, void 0, false, {\n                    fileName: \"/Users/ditarahma/Repositories/lifestyle-blog/src/components/Insight.js\",\n                    lineNumber: 28,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ditarahma/Repositories/lifestyle-blog/src/components/Insight.js\",\n            lineNumber: 26,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ditarahma/Repositories/lifestyle-blog/src/components/Insight.js\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Insight, \"XsOpLvUbTkfx79dw07TVNsBviNQ=\");\n_c = Insight;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Insight);\nvar _c;\n$RefreshReg$(_c, \"Insight\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9JbnNpZ2h0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0Q7QUFDdkI7QUFDa0I7QUFFM0MsTUFBTUksVUFBVSxTQUFjO1FBQWIsRUFBRUMsS0FBSSxFQUFFOztJQUN4QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUUzQyxNQUFNTSx5QkFBeUIsQ0FBQ0MsWUFBYztRQUM3Q0MsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLElBQUlHLFVBQVUsRUFBRTtRQUNoQkgsVUFBVUksR0FBRyxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLFdBQVcsS0FBSyxJQUFJLElBQUlILFFBQVFJLElBQUksQ0FBQ0Y7UUFDeEVQLFlBQVlLO1FBQ1pGLFFBQVFDLEdBQUcsQ0FBQ0M7SUFDYjtJQUVBLE1BQU1LLG1CQUFtQixJQUFNO1FBQzlCLE9BQU9YLFNBQVNZLElBQUksQ0FBQyxJQUFNQyxLQUFLQyxNQUFNLEtBQUtELEtBQUtDLE1BQU0sSUFBSUMsS0FBSyxDQUFDLEdBQUc7SUFDcEU7SUFFQWxCLGdEQUFTQSxDQUFDLElBQU07UUFDZkssdUJBQXVCSDtJQUN4QixHQUFHO1FBQUNBO0tBQUs7SUFFVCxxQkFDQyw4REFBQ2lCO1FBQUlDLFdBQVd2QiwyRUFBYztrQkFDN0IsNEVBQUNzQjs7OEJBQ0EsOERBQUNHOzhCQUFHOzs7Ozs7OEJBQ0osOERBQUNDOzhCQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVFQO0dBL0JNdEI7S0FBQUE7QUFpQ04sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSW5zaWdodC5qcz9hOTJhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSW5zaWdodC5tb2R1bGUuY3NzJ1xuaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBJbnNpZ2h0ID0gKHsgZGF0YSB9KSA9PiB7XG5cdGNvbnN0IFthcnRpY2xlcywgc2V0QXJ0aWNsZXNdID0gdXNlU3RhdGUoW10pXG5cblx0Y29uc3QgYXNzaWduRmVhdHVyZWRBcnRpY2xlcyA9IChhcnJheURhdGEpID0+IHtcblx0XHRjb25zb2xlLmxvZyhhcnJheURhdGEpXG5cdFx0bGV0IG5ld0RhdGEgPSBbXVxuXHRcdGFycmF5RGF0YS5tYXAoKGFydGljbGUpID0+IGFydGljbGUuaXNfZmVhdHVyZWQgPT09IHRydWUgJiYgbmV3RGF0YS5wdXNoKGFydGljbGUpIClcblx0XHRzZXRBcnRpY2xlcyhuZXdEYXRhKVxuXHRcdGNvbnNvbGUubG9nKG5ld0RhdGEpXG5cdH1cblxuXHRjb25zdCBzZWxlY3RlZEFydGljbGVzID0gKCkgPT4ge1xuXHRcdHJldHVybiBhcnRpY2xlcy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSBNYXRoLnJhbmRvbSgpKS5zbGljZSgwLCAzKVxuXHR9XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRhc3NpZ25GZWF0dXJlZEFydGljbGVzKGRhdGEpXG5cdH0sIFtkYXRhXSlcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5zaWdodH0+XG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8aDE+RW1wb3dlcmluZyBNaW5kczwvaDE+XG5cdFx0XHRcdDxwPkluc2lnaHRzIGFuZCBTdHJhdGVnaWVzIGZvciBQZXJzb25hbCBhbmQgUHJvZmVzc2lvbmFsIEdyb3d0aDwvcD5cblx0XHRcdDwvZGl2PlxuXG57LypcdFx0XHR7c2VsZWN0ZWRBcnRpY2xlcy5tYXAoKGFydGljbGUsIGluZGV4KSA9PiAgJiYgKFxuXHRcdFx0XHQ8Q2FyZCBkYXRhPXthcnRpY2xlfSBrZXk9e2luZGV4fSAvPlxuXHRcdFx0KSl9Ki99XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5zaWdodCJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDYXJkIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbnNpZ2h0IiwiZGF0YSIsImFydGljbGVzIiwic2V0QXJ0aWNsZXMiLCJhc3NpZ25GZWF0dXJlZEFydGljbGVzIiwiYXJyYXlEYXRhIiwiY29uc29sZSIsImxvZyIsIm5ld0RhdGEiLCJtYXAiLCJhcnRpY2xlIiwiaXNfZmVhdHVyZWQiLCJwdXNoIiwic2VsZWN0ZWRBcnRpY2xlcyIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwic2xpY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpbnNpZ2h0IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Insight.js\n"));

/***/ })

});