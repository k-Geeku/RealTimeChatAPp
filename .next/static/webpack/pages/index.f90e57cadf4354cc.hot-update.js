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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _context_StateReducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/StateReducers */ \"./src/context/StateReducers.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ChatLIstItem(param) {\n    let { data , isContactPage =false  } = param;\n    _s();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const handleContactclick = ()=>{\n        if (!isContactPage) {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n                user: {\n                    name: data.name,\n                    about: data.about,\n                    profilePicture: data.profilePicture,\n                    email: data.email,\n                    id: userInfo.id === data.senderId ? data.recieverId : data.senderId\n                }\n            });\n        } else {\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.CHANGE_CURRENT_USER,\n                user: {\n                    data\n                }\n            });\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.SET_ALL_CONTACT_PAGE\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex cursor-pointer items-center hover:bg-background-default-hover\",\n        onClick: handleContactclick,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" min-w-fit px-5 pt-3 pb-1 rounded-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    type: \"lg\",\n                    image: data === null || data === void 0 ? void 0 : data.profilePicture\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 29,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-full flex flex-col justify-center mt-3 pr-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-white\",\n                                children: data === null || data === void 0 ? void 0 : data.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 9\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex border-b border-conversation-border pb-2 pt-1 pr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-between w-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-secondary line-clamp-1 text-sm\",\n                                children: (data === null || data === void 0 ? void 0 : data.about) || \"\\xa0\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n                lineNumber: 32,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\ChatLIstItem.jsx\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n_s(ChatLIstItem, \"m1Gnjqhyl4AjP9swSTYzY8YiZX8=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatLIstItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatLIstItem);\nvar _c;\n$RefreshReg$(_c, \"ChatLIstItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDa0I7QUFDTDtBQUNEO0FBQ2xELFNBQVNLLGFBQWEsS0FBNEIsRUFBRTtRQUE5QixFQUFDQyxLQUFJLEVBQUNDLGVBQWdCLEtBQUssR0FBQyxHQUE1Qjs7SUFDcEIsTUFBTSxDQUFDLEVBQUNDLFNBQVEsRUFBQ0MsZ0JBQWUsRUFBQyxFQUFDQyxTQUFTLEdBQUdSLHVFQUFnQkE7SUFFOUQsTUFBTVMscUJBQW9CLElBQUk7UUFDNUIsSUFBRyxDQUFDSixlQUFjO1lBQ2hCRyxTQUFTO2dCQUFDRSxNQUFNVCxnRkFBZ0M7Z0JBQ2hEVyxNQUFLO29CQUNIQyxNQUFLVCxLQUFLUyxJQUFJO29CQUNkQyxPQUFNVixLQUFLVSxLQUFLO29CQUNoQkMsZ0JBQWVYLEtBQUtXLGNBQWM7b0JBQ2xDQyxPQUFNWixLQUFLWSxLQUFLO29CQUNoQkMsSUFBR1gsU0FBU1csRUFBRSxLQUFLYixLQUFLYyxRQUFRLEdBQUdkLEtBQUtlLFVBQVUsR0FBR2YsS0FBS2MsUUFBUTtnQkFDcEU7WUFBQztRQUVILE9BQUs7WUFDSFYsU0FBUztnQkFBQ0UsTUFBS1QsZ0ZBQWdDO2dCQUFDVyxNQUFLO29CQUFDUjtnQkFBSTtZQUFDO1lBQzNESSxTQUFTO2dCQUFDRSxNQUFLVCxpRkFBaUM7WUFBQTtRQUNsRCxDQUFDO0lBSUg7SUFDQSxxQkFBTyw4REFBQ29CO1FBQUlDLFdBQVk7UUFBcUVDLFNBQVNkOzswQkFDcEcsOERBQUNZO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDdkIsc0RBQU1BO29CQUFDVyxNQUFLO29CQUFLYyxPQUFPcEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVyxjQUFjOzs7Ozs7Ozs7OzswQkFFL0MsOERBQUNNO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNEO3NDQUNDLDRFQUFDSTtnQ0FBS0gsV0FBVTswQ0FBY2xCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHNUMsOERBQUNRO3dCQUFJQyxXQUFVO2tDQUNmLDRFQUFDRDs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0c7Z0NBQUtILFdBQVU7MENBQXVDbEIsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVSxLQUFLLEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUU7R0F2Q1NYOztRQUN1Q0gsbUVBQWdCQTs7O0tBRHZERztBQXlDVCwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9DaGF0TElzdEl0ZW0uanN4P2NmOTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCIuLi9jb21tb24vQXZhdGFyXCI7XHJcbmltcG9ydCB7dXNlU3RhdGVQcm92aWRlcn0gZnJvbSBcIkAvY29udGV4dC9TdGF0ZUNvbnRleHRcIjtcclxuaW1wb3J0IHsgcmVkdWNlcmNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgcmVkdWNlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVSZWR1Y2Vyc1wiO1xyXG5mdW5jdGlvbiBDaGF0TElzdEl0ZW0oe2RhdGEsaXNDb250YWN0UGFnZSA9IGZhbHNlfSkge1xyXG4gIGNvbnN0IFt7dXNlckluZm8sY3VycmVudENoYXRVc2VyfSxkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlQ29udGFjdGNsaWNrID0oKT0+e1xyXG4gICAgaWYoIWlzQ29udGFjdFBhZ2Upe1xyXG4gICAgICBkaXNwYXRjaCh7dHlwZTogcmVkdWNlcmNhc2VzLkNIQU5HRV9DVVJSRU5UX1VTRVIsXHJcbiAgICAgIHVzZXI6e1xyXG4gICAgICAgIG5hbWU6ZGF0YS5uYW1lLFxyXG4gICAgICAgIGFib3V0OmRhdGEuYWJvdXQsXHJcbiAgICAgICAgcHJvZmlsZVBpY3R1cmU6ZGF0YS5wcm9maWxlUGljdHVyZSxcclxuICAgICAgICBlbWFpbDpkYXRhLmVtYWlsLFxyXG4gICAgICAgIGlkOnVzZXJJbmZvLmlkID09PSBkYXRhLnNlbmRlcklkID8gZGF0YS5yZWNpZXZlcklkIDogZGF0YS5zZW5kZXJJZCxcclxuICAgICAgfX0pXHJcblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5DSEFOR0VfQ1VSUkVOVF9VU0VSLHVzZXI6e2RhdGF9fSk7XHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5TRVRfQUxMX0NPTlRBQ1RfUEFHRX0pXHJcbiAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgIFxyXG4gIH07XHJcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtgZmxleCBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgaG92ZXI6YmctYmFja2dyb3VuZC1kZWZhdWx0LWhvdmVyYH0gb25DbGljaz17aGFuZGxlQ29udGFjdGNsaWNrfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1pbi13LWZpdCBweC01IHB0LTMgcGItMSByb3VuZGVkLWZ1bGxcIj5cclxuICAgICAgPEF2YXRhciB0eXBlPVwibGdcIiBpbWFnZT17ZGF0YT8ucHJvZmlsZVBpY3R1cmV9IC8+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG10LTMgcHItMiB3LWZ1bGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+e2RhdGE/Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGJvcmRlci1iIGJvcmRlci1jb252ZXJzYXRpb24tYm9yZGVyIHBiLTIgcHQtMSBwci0yXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gdy1mdWxsXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnkgbGluZS1jbGFtcC0xIHRleHQtc21cIj57ZGF0YT8uYWJvdXQgfHwgXCJcXHUwMEEwXCJ9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRMSXN0SXRlbTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXZhdGFyIiwidXNlU3RhdGVQcm92aWRlciIsInJlZHVjZXJjYXNlcyIsInJlZHVjZXIiLCJDaGF0TElzdEl0ZW0iLCJkYXRhIiwiaXNDb250YWN0UGFnZSIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJoYW5kbGVDb250YWN0Y2xpY2siLCJ0eXBlIiwiQ0hBTkdFX0NVUlJFTlRfVVNFUiIsInVzZXIiLCJuYW1lIiwiYWJvdXQiLCJwcm9maWxlUGljdHVyZSIsImVtYWlsIiwiaWQiLCJzZW5kZXJJZCIsInJlY2lldmVySWQiLCJTRVRfQUxMX0NPTlRBQ1RfUEFHRSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJpbWFnZSIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Chatlist/ChatLIstItem.jsx\n"));

/***/ })

});