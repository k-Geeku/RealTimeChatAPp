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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data , isContactPage =false  } = param;\n    _s();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleContactclick = ()=>{\n        // if(!isContactPage){\n        //   dispatch({\n        //     type:reducercases.CHANGE_CURRENT_USER,\n        //     user:{\n        //     },\n        //   })\n        // }else{\n        // }\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n            user: {\n                data\n            }\n        });\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.SET_ALL_CONTACT_PAGE\n        });\n        console.log(data.name, data.about, data.profilePicture, data.email, userInfo.id === data.senderId ? data.recieverId : data.senderId);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover\",\n        onClick: handleContactclick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" min-w-fit px-5 pt-3 pb-1 rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: data === null || data === void 0 ? void 0 : data.profilePicture\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 34,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: data === null || data === void 0 ? void 0 : data.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary line-clamp-1 text-sm\",\n                                children: (data === null || data === void 0 ? void 0 : data.about) || \"\\xa0\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 37,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n        lineNumber: 33,\n        columnNumber: 10\n    }, this);\n}\n_s(ChatLIstItem, \"m1Gnjqhyl4AjP9swSTYzY8YiZX8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDa0I7QUFDTDtBQUNEO0FBQ2xELFNBQVNLLGFBQWEsS0FBNEIsRUFBRTtRQUE5QixFQUFDQyxLQUFJLEVBQUNDLGVBQWdCLEtBQUssR0FBQyxHQUE1Qjs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLFNBQVEsRUFBQ0MsZ0JBQWUsRUFBQyxFQUFDQyxTQUFTLEdBQUdSLHVFQUFnQkE7SUFFOUQsTUFBTVMscUJBQW9CLElBQUk7UUFDNUIsc0JBQXNCO1FBQ3RCLGVBQWU7UUFDZiw2Q0FBNkM7UUFDN0MsYUFBYTtRQUViLFNBQVM7UUFDVCxPQUFPO1FBRVAsU0FBUztRQUVULElBQUk7UUFDSkQsU0FBUztZQUFDRSxNQUFLVCxnRkFBZ0M7WUFBQ1csTUFBSztnQkFBQ1I7WUFBSTtRQUFDO1FBQzNESSxTQUFTO1lBQUNFLE1BQUtULGlGQUFpQztRQUFBO1FBRzlDYSxRQUFRQyxHQUFHLENBQUNYLEtBQUtZLElBQUksRUFDbkJaLEtBQUthLEtBQUssRUFDVmIsS0FBS2MsY0FBYyxFQUNuQmQsS0FBS2UsS0FBSyxFQUNWYixTQUFTYyxFQUFFLEtBQUtoQixLQUFLaUIsUUFBUSxHQUFHakIsS0FBS2tCLFVBQVUsR0FBR2xCLEtBQUtpQixRQUFRO0lBR3JFO0lBQ0EscUJBQU8sOERBQUNFO1FBQUlDLFdBQVk7UUFBcUVDLFNBQVNoQjs7MEJBQ3BHLDhEQUFDYztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ3pCLHNEQUFNQTtvQkFBQ1csTUFBSztvQkFBS2dCLE9BQU90QixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1jLGNBQWM7Ozs7Ozs7Ozs7OzBCQUUvQyw4REFBQ0s7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7c0NBQ0MsNEVBQUNJO2dDQUFLSCxXQUFVOzBDQUFjcEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNWSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7O2tDQUc1Qyw4REFBQ087d0JBQUlDLFdBQVU7a0NBQ2YsNEVBQUNEOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRztnQ0FBS0gsV0FBVTswQ0FBdUNwQixDQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1hLEtBQUssS0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs5RTtHQTVDU2Q7O1FBQ3VDSCxtRUFBZ0JBOzs7S0FEdkRHO0FBOENULCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRsaXN0L0NoYXRMSXN0SXRlbS5qc3g/Y2Y5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL2NvbW1vbi9BdmF0YXJcIjtcclxuaW1wb3J0IHt1c2VTdGF0ZVByb3ZpZGVyfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xyXG5pbXBvcnQgeyByZWR1Y2VyY2FzZXMgfSBmcm9tIFwiQC9jb250ZXh0L2NvbnN0YW50c1wiO1xyXG5pbXBvcnQgeyByZWR1Y2VyIH0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZVJlZHVjZXJzXCI7XHJcbmZ1bmN0aW9uIENoYXRMSXN0SXRlbSh7ZGF0YSxpc0NvbnRhY3RQYWdlID0gZmFsc2V9KSB7XHJcbiAgY29uc3QgW3t1c2VySW5mbyxjdXJyZW50Q2hhdFVzZXJ9LGRpc3BhdGNoXSA9IHVzZVN0YXRlUHJvdmlkZXIoKTtcclxuICBcclxuICBjb25zdCBoYW5kbGVDb250YWN0Y2xpY2sgPSgpPT57XHJcbiAgICAvLyBpZighaXNDb250YWN0UGFnZSl7XHJcbiAgICAvLyAgIGRpc3BhdGNoKHtcclxuICAgIC8vICAgICB0eXBlOnJlZHVjZXJjYXNlcy5DSEFOR0VfQ1VSUkVOVF9VU0VSLFxyXG4gICAgLy8gICAgIHVzZXI6e1xyXG4gICAgICAgICAgXHJcbiAgICAvLyAgICAgfSxcclxuICAgIC8vICAgfSlcclxuXHJcbiAgICAvLyB9ZWxzZXtcclxuICAgIFxyXG4gICAgLy8gfVxyXG4gICAgZGlzcGF0Y2goe3R5cGU6cmVkdWNlcmNhc2VzLkNIQU5HRV9DVVJSRU5UX1VTRVIsdXNlcjp7ZGF0YX19KTtcclxuICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5TRVRfQUxMX0NPTlRBQ1RfUEFHRX0pXHJcblxyXG4gICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEubmFtZSxcclxuICAgICAgICBkYXRhLmFib3V0LFxyXG4gICAgICAgIGRhdGEucHJvZmlsZVBpY3R1cmUsXHJcbiAgICAgICAgZGF0YS5lbWFpbCxcclxuICAgICAgICB1c2VySW5mby5pZCA9PT0gZGF0YS5zZW5kZXJJZCA/IGRhdGEucmVjaWV2ZXJJZCA6IGRhdGEuc2VuZGVySWQsKVxyXG4gICAgICBcclxuICAgIFxyXG4gIH07XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctYmFja2dyb3VuZC1kZWZhdWx0LWhvdmVyYH0gb25DbGljaz17aGFuZGxlQ29udGFjdGNsaWNrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1pbi13LWZpdCBweC01IHB0LTMgcGItMSByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgPEF2YXRhciB0eXBlPVwibGdcIiBpbWFnZT17ZGF0YT8ucHJvZmlsZVBpY3R1cmV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG10LTMgcHItMiB3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2RhdGE/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGJvcmRlci1jb252ZXJzYXRpb24tYm9yZGVyIHBiLTIgcHQtMSBwci0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgbGluZS1jbGFtcC0xIHRleHQtc21cIj57ZGF0YT8uYWJvdXQgfHwgXCJcXHUwMEEwXCJ9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRMSXN0SXRlbTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJjYXNlcyIsInJlZHVjZXIiLCJDaGF0TElzdEl0ZW0iLCJkYXRhIiwiaXNDb250YWN0UGFnZSIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJoYW5kbGVDb250YWN0Y2xpY2siLCJ0eXBlIiwiQ0hBTkdFX0NVUlJFTlRfVVNFUiIsInVzZXIiLCJTRVRfQUxMX0NPTlRBQ1RfUEFHRSIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiYWJvdXQiLCJwcm9maWxlUGljdHVyZSIsImVtYWlsIiwiaWQiLCJzZW5kZXJJZCIsInJlY2lldmVySWQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1hZ2UiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});