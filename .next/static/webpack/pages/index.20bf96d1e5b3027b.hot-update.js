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

/***/ "./src/components/Chat/ImageMessage.jsx":
/*!**********************************************!*\
  !*** ./src/components/Chat/ImageMessage.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction ImageMessage(param) {\n    let { message  } = param;\n    _s();\n    const [{ currentChatUser , userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const handleDownloadClick = ()=>{\n        // Create an anchor element to trigger the download\n        const link = document.createElement(\"a\");\n        link.href = \"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__.HOST, \"/\").concat(message.message);\n        link.download = \"downloaded_image.jpg\";\n        link.target = \"\" // Set the desired filename\n        ;\n        // Simulate a click on the anchor element to start the download\n        link.click();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" p-1 rounded-lg \".concat((message === null || message === void 0 ? void 0 : message.senderId) === (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id) ? \" bg-incoming-background\" : \"bg-outgoing-background\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__.HOST, \"/\").concat(message.message),\n                    className: \"rounded-lg\",\n                    alt: \"asset\",\n                    onClick: handleDownloadClick,\n                    height: 300,\n                    width: 300\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute bottom-1 right-1 flex items-end gap-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" text-bubble-meta text-[11px] pt-1 min-w-fit\",\n                            children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_3__.calculateTime)(message.createdAt)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" text-bubble-meta\",\n                            children: (message === null || message === void 0 ? void 0 : message.senderId) === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                messageStatus: message.messageStatus\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 51\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n            lineNumber: 21,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n        lineNumber: 20,\n        columnNumber: 10\n    }, this);\n}\n_s(ImageMessage, \"BjKX+ZiY1kpMlmXsp61jsrcoD1c=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = ImageMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageMessage);\nvar _c;\n$RefreshReg$(_c, \"ImageMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0ltYWdlTWVzc2FnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNqQjtBQUNhO0FBQ3ZCO0FBQ0w7QUFDMEI7QUFFcEQsU0FBU00sYUFBYSxLQUFXLEVBQUU7UUFBYixFQUFFQyxRQUFPLEVBQUUsR0FBWDs7SUFDcEIsTUFBTSxDQUFDLEVBQUVDLGdCQUFlLEVBQUVDLFNBQVEsRUFBRSxDQUFDLEdBQUdULHVFQUFnQkE7SUFDeEQsTUFBTVUsc0JBQXNCLElBQU07UUFDaEMsbURBQW1EO1FBQ25ELE1BQU1DLE9BQU9DLFNBQVNDLGFBQWEsQ0FBQztRQUNwQ0YsS0FBS0csSUFBSSxHQUFHLEdBQVdQLE9BQVJOLGtEQUFJQSxFQUFDLEtBQW1CLE9BQWhCTSxRQUFRQSxPQUFPO1FBQ3RDSSxLQUFLSSxRQUFRLEdBQUc7UUFDaEJKLEtBQUtLLE1BQU0sR0FBRyxHQUFHLDJCQUEyQjs7UUFFNUMsK0RBQStEO1FBQy9ETCxLQUFLTSxLQUFLO0lBQ1o7SUFDQSxxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVyxtQkFBeUgsT0FBdEdaLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU2EsUUFBUSxPQUFLWiw0QkFBQUEsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFpQmEsSUFBSSxDQUFDQyxFQUFFLElBQUcsNEJBQTRCLHdCQUF3QjtrQkFDN0ksNEVBQUNKO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDSTtvQkFBSUMsS0FBSyxHQUFXakIsT0FBUk4sa0RBQUlBLEVBQUMsS0FBbUIsT0FBaEJNLFFBQVFBLE9BQU87b0JBQUlZLFdBQVU7b0JBQWFNLEtBQUk7b0JBQVNDLFNBQVNoQjtvQkFBcUJpQixRQUFRO29CQUFLQyxPQUFPOzs7Ozs7OEJBQzlILDhEQUFDVjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNVOzRCQUFLVixXQUFVO3NDQUVaakIsbUVBQWFBLENBQUNLLFFBQVF1QixTQUFTOzs7Ozs7c0NBR25DLDhEQUFDRDs0QkFBS1YsV0FBVTtzQ0FFWlosQ0FBQUEsb0JBQUFBLHFCQUFBQSxLQUFBQSxJQUFBQSxRQUFTYSxRQUFRLE1BQUtYLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWEsRUFBRSxtQkFBSSw4REFBQ2pCLDZEQUFhQTtnQ0FBQzBCLGVBQWV4QixRQUFRd0IsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRztHQTdCU3pCOztRQUNpQ04sbUVBQWdCQTs7O0tBRGpETTtBQStCVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0L0ltYWdlTWVzc2FnZS5qc3g/YzEzYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZVByb3ZpZGVyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgSE9TVCB9IGZyb20gXCJAL3V0aWxzL0FwaVJvdXRlc1wiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVUaW1lIH0gZnJvbSBcIkAvdXRpbHMvQ2FsY3VsYXRlVGltZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTWVzc2FnZVN0YXR1cyBmcm9tIFwiLi4vY29tbW9uL01lc3NhZ2VTdGF0dXNcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlTWVzc2FnZSh7IG1lc3NhZ2UgfSkge1xyXG4gIGNvbnN0IFt7IGN1cnJlbnRDaGF0VXNlciwgdXNlckluZm8gfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlRG93bmxvYWRDbGljayA9ICgpID0+IHtcclxuICAgIC8vIENyZWF0ZSBhbiBhbmNob3IgZWxlbWVudCB0byB0cmlnZ2VyIHRoZSBkb3dubG9hZFxyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuaHJlZiA9IGAke0hPU1R9LyR7bWVzc2FnZS5tZXNzYWdlfWA7XHJcbiAgICBsaW5rLmRvd25sb2FkID0gJ2Rvd25sb2FkZWRfaW1hZ2UuanBnJztcclxuICAgIGxpbmsudGFyZ2V0ID0gJycgLy8gU2V0IHRoZSBkZXNpcmVkIGZpbGVuYW1lXHJcblxyXG4gICAgLy8gU2ltdWxhdGUgYSBjbGljayBvbiB0aGUgYW5jaG9yIGVsZW1lbnQgdG8gc3RhcnQgdGhlIGRvd25sb2FkXHJcbiAgICBsaW5rLmNsaWNrKCk7XHJcbiAgfTtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2AgcC0xIHJvdW5kZWQtbGcgJHttZXNzYWdlPy5zZW5kZXJJZCA9PT0gY3VycmVudENoYXRVc2VyPy5kYXRhLmlkID8gXCIgYmctaW5jb21pbmctYmFja2dyb3VuZFwiIDogXCJiZy1vdXRnb2luZy1iYWNrZ3JvdW5kXCJ9YH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxpbWcgc3JjPXtgJHtIT1NUfS8ke21lc3NhZ2UubWVzc2FnZX1gfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCIgYWx0PVwiYXNzZXRcIiAgb25DbGljaz17aGFuZGxlRG93bmxvYWRDbGlja30gaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEgcmlnaHQtMSBmbGV4IGl0ZW1zLWVuZCBnYXAtMVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LWJ1YmJsZS1tZXRhIHRleHQtWzExcHhdIHB0LTEgbWluLXctZml0XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWUobWVzc2FnZS5jcmVhdGVkQXQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LWJ1YmJsZS1tZXRhXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U/LnNlbmRlcklkID09PSB1c2VySW5mbz8uaWQgJiYgPE1lc3NhZ2VTdGF0dXMgbWVzc2FnZVN0YXR1cz17bWVzc2FnZS5tZXNzYWdlU3RhdHVzfSAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTWVzc2FnZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJIT1NUIiwiY2FsY3VsYXRlVGltZSIsIkltYWdlIiwiUmVhY3QiLCJNZXNzYWdlU3RhdHVzIiwiSW1hZ2VNZXNzYWdlIiwibWVzc2FnZSIsImN1cnJlbnRDaGF0VXNlciIsInVzZXJJbmZvIiwiaGFuZGxlRG93bmxvYWRDbGljayIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJjbGljayIsImRpdiIsImNsYXNzTmFtZSIsInNlbmRlcklkIiwiZGF0YSIsImlkIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsImhlaWdodCIsIndpZHRoIiwic3BhbiIsImNyZWF0ZWRBdCIsIm1lc3NhZ2VTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chat/ImageMessage.jsx\n"));

/***/ })

});