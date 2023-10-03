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

/***/ "./src/components/Chatlist/ChatLIstItem.jsx":
/*!**************************************************!*\
  !*** ./src/components/Chatlist/ChatLIstItem.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data , isContactPage =false  } = param;\n    _s();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleContactclick = ()=>{\n        console.log(data);\n        if (!isContactPage) {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n                user: {\n                    name: data.name,\n                    about: data.about,\n                    profilePicture: data.profilePicture,\n                    email: data.email,\n                    id: userInfo.id === data.senderId ? data.recieverId : data.senderId\n                }\n            });\n        } else {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n                user: {\n                    data\n                }\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.SET_ALL_CONTACT_PAGE\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover\",\n        onClick: handleContactclick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" min-w-fit px-5 pt-3 pb-1 rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: data === null || data === void 0 ? void 0 : data.profilePicture\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 30,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: data === null || data === void 0 ? void 0 : data.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary line-clamp-1 text-sm\",\n                                children: (data === null || data === void 0 ? void 0 : data.about) || \"\\xa0\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 41,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 33,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n        lineNumber: 29,\n        columnNumber: 10\n    }, this);\n}\n_s(ChatLIstItem, \"m1Gnjqhyl4AjP9swSTYzY8YiZX8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDa0I7QUFDTDtBQUNEO0FBQ2xELFNBQVNLLGFBQWEsS0FBNEIsRUFBRTtRQUE5QixFQUFDQyxLQUFJLEVBQUNDLGVBQWdCLEtBQUssR0FBQyxHQUE1Qjs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLFNBQVEsRUFBQ0MsZ0JBQWUsRUFBQyxFQUFDQyxTQUFTLEdBQUdSLHVFQUFnQkE7SUFFOUQsTUFBTVMscUJBQW9CLElBQUk7UUFDNUJDLFFBQVFDLEdBQUcsQ0FBQ1A7UUFDWixJQUFHLENBQUNDLGVBQWM7WUFDaEJHLFNBQVM7Z0JBQUNJLE1BQU1YLGdGQUFnQztnQkFDaERhLE1BQUs7b0JBQ0hDLE1BQUtYLEtBQUtXLElBQUk7b0JBQ2RDLE9BQU1aLEtBQUtZLEtBQUs7b0JBQ2hCQyxnQkFBZWIsS0FBS2EsY0FBYztvQkFDbENDLE9BQU1kLEtBQUtjLEtBQUs7b0JBQ2hCQyxJQUFHYixTQUFTYSxFQUFFLEtBQUtmLEtBQUtnQixRQUFRLEdBQUdoQixLQUFLaUIsVUFBVSxHQUFHakIsS0FBS2dCLFFBQVE7Z0JBQ3BFO1lBQUM7UUFFSCxPQUFLO1lBQ0haLFNBQVM7Z0JBQUNJLE1BQUtYLGdGQUFnQztnQkFBQ2EsTUFBSztvQkFBQ1Y7Z0JBQUk7WUFBQztZQUMzREksU0FBUztnQkFBQ0ksTUFBS1gsaUZBQWlDO1lBQUE7UUFDbEQsQ0FBQztJQUlIO0lBQ0EscUJBQU8sOERBQUNzQjtRQUFJQyxXQUFZO1FBQXFFQyxTQUFTaEI7OzBCQUNwRyw4REFBQ2M7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUN6QixzREFBTUE7b0JBQUNhLE1BQUs7b0JBQUtjLE9BQU90QixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1hLGNBQWM7Ozs7Ozs7Ozs7OzBCQUUvQyw4REFBQ007Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7c0NBQ0MsNEVBQUNJO2dDQUFLSCxXQUFVOzBDQUFjcEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUc1Qyw4REFBQ1E7d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FBS0gsV0FBVTswQ0FBdUNwQixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1ZLEtBQUssS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RTtHQXhDU2I7O1FBQ3VDSCxtRUFBZ0JBOzs7S0FEdkRHO0FBMENULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRsaXN0L0NoYXRMSXN0SXRlbS5qc3g/Y2Y5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL2NvbW1vbi9BdmF0YXJcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZVByb3ZpZGVyfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyY2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZVJlZHVjZXJzXCI7XHJcbmZ1bmN0aW9uIENoYXRMSXN0SXRlbSh7ZGF0YSxpc0NvbnRhY3RQYWdlID0gZmFsc2V9KSB7XHJcbiAgY29uc3QgW3t1c2VySW5mbyxjdXJyZW50Q2hhdFVzZXJ9LGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDb250YWN0Y2xpY2sgPSgpPT57XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGlmKCFpc0NvbnRhY3RQYWdlKXtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6IHJlZHVjZXJjYXNlcy5DSEFOR0VfQ1VSUkVOVF9VU0VSLFxyXG4gICAgICB1c2VyOntcclxuICAgICAgICBuYW1lOmRhdGEubmFtZSxcclxuICAgICAgICBhYm91dDpkYXRhLmFib3V0LFxyXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOmRhdGEucHJvZmlsZVBpY3R1cmUsXHJcbiAgICAgICAgZW1haWw6ZGF0YS5lbWFpbCxcclxuICAgICAgICBpZDp1c2VySW5mby5pZCA9PT0gZGF0YS5zZW5kZXJJZCA/IGRhdGEucmVjaWV2ZXJJZCA6IGRhdGEuc2VuZGVySWQsXHJcbiAgICAgIH19KVxyXG5cclxuICAgIH1lbHNle1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTpyZWR1Y2VyY2FzZXMuQ0hBTkdFX0NVUlJFTlRfVVNFUix1c2VyOntkYXRhfX0pO1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTpyZWR1Y2VyY2FzZXMuU0VUX0FMTF9DT05UQUNUX1BBR0V9KVxyXG4gICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcbiAgICBcclxuICB9O1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17YGZsZXggY3Vyc29yLXBvaW50ZXIgaXRlbXMtY2VudGVyIGhvdmVyOmJnLWJhY2tncm91bmQtZGVmYXVsdC1ob3ZlcmB9IG9uQ2xpY2s9e2hhbmRsZUNvbnRhY3RjbGlja30+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBtaW4tdy1maXQgcHgtNSBwdC0zIHBiLTEgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgIDxBdmF0YXIgdHlwZT1cImxnXCIgaW1hZ2U9e2RhdGE/LnByb2ZpbGVQaWN0dXJlfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbi1oLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBtdC0zIHByLTIgdy1mdWxsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntkYXRhPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBib3JkZXItYiBib3JkZXItY29udmVyc2F0aW9uLWJvcmRlciBwYi0yIHB0LTEgcHItMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5IGxpbmUtY2xhbXAtMSB0ZXh0LXNtXCI+e2RhdGE/LmFib3V0IHx8IFwiXFx1MDBBMFwifTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0TElzdEl0ZW07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkF2YXRhciIsInVzZVN0YXRlUHJvdmlkZXIiLCJyZWR1Y2VyY2FzZXMiLCJyZWR1Y2VyIiwiQ2hhdExJc3RJdGVtIiwiZGF0YSIsImlzQ29udGFjdFBhZ2UiLCJ1c2VySW5mbyIsImN1cnJlbnRDaGF0VXNlciIsImRpc3BhdGNoIiwiaGFuZGxlQ29udGFjdGNsaWNrIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJDSEFOR0VfQ1VSUkVOVF9VU0VSIiwidXNlciIsIm5hbWUiLCJhYm91dCIsInByb2ZpbGVQaWN0dXJlIiwiZW1haWwiLCJpZCIsInNlbmRlcklkIiwicmVjaWV2ZXJJZCIsIlNFVF9BTExfQ09OVEFDVF9QQUdFIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImltYWdlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});