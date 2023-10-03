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

/***/ "./src/components/Main.jsx":
/*!*********************************!*\
  !*** ./src/components/Main.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Chatlist/ChatList */ \"./src/components/Chatlist/ChatList.jsx\");\n/* harmony import */ var _Empty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Empty */ \"./src/components/Empty.jsx\");\n/* harmony import */ var _Chat_Chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Chat/Chat */ \"./src/components/Chat/Chat.jsx\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! socket.io-client */ \"./node_modules/socket.io-client/build/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Main() {\n    _s();\n    const [{ userInfo , currentChatUser  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_5__.useStateProvider)();\n    const [socketEvent, setsocketEvent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const socket = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (userInfo) {\n            socket.current = (0,socket_io_client__WEBPACK_IMPORTED_MODULE_8__.io)(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.HOST);\n            socket.current.emit(\"add-user\", userInfo.id);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_7__.reducercases.SET_SOCKET,\n                socket\n            });\n        }\n    }, [\n        userInfo\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (socket.current && !socketEvent) {\n            socket.current.on(\"msg-recieve\", (data)=>{\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_7__.reducercases.ADD_MESSAGE,\n                    newMessage: {\n                        ...data.message\n                    }\n                });\n            });\n            setsocketEvent(true);\n        }\n    }, [\n        socket.current\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getMessages = async ()=>{\n            const { data: { messages  }  } = await axios__WEBPACK_IMPORTED_MODULE_9__[\"default\"].get(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_6__.GET_ALL_MESSAGES, \"/\").concat(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id, \"/\").concat(currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id));\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_7__.reducercases.SET_MESSAGES,\n                messages\n            });\n        };\n        if (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.id) {\n            getMessages();\n            console.log(\"hi\");\n        }\n    }, [\n        currentChatUser\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-main h-screen w-screen max-h-screen max-w-full overflow-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chatlist_ChatList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this),\n                currentChatUser ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Chat_Chat__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 25\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Empty__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Main.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 35\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Main.jsx\",\n            lineNumber: 52,\n            columnNumber: 3\n        }, this)\n    }, void 0, false);\n}\n_s(Main, \"xJrRi5yPVLAehvQVFwkJM5s7sos=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_5__.useStateProvider\n    ];\n});\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYWluLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDaEI7QUFDZjtBQUNHO0FBQzJCO0FBQ2hDO0FBQ2lDO0FBQ1I7QUFDYjtBQUV0QyxTQUFTYSxPQUFPOztJQUNkLE1BQU0sQ0FBQyxFQUFDQyxTQUFRLEVBQUNDLGdCQUFlLEVBQUMsRUFBQ0MsU0FBUyxHQUFHVCx1RUFBZ0JBO0lBQzlELE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3BELE1BQU1nQixTQUFTakIsNkNBQU1BO0lBQ3JCRCxnREFBU0EsQ0FBQyxJQUFNO1FBRWhCLElBQUdhLFVBQVM7WUFDVkssT0FBT0MsT0FBTyxHQUFHUixvREFBRUEsQ0FBQ0Ysa0RBQUlBO1lBQ3hCUyxPQUFPQyxPQUFPLENBQUNDLElBQUksQ0FBQyxZQUFXUCxTQUFTUSxFQUFFO1lBQzFDTixTQUFTO2dCQUFDTyxNQUFLWix1RUFBdUI7Z0JBQUNRO1lBQU07UUFDL0MsQ0FBQztJQUVELEdBQUc7UUFBQ0w7S0FBUztJQUViYixnREFBU0EsQ0FBQyxJQUFJO1FBQ1osSUFBR2tCLE9BQU9DLE9BQU8sSUFBRSxDQUFDSCxhQUFZO1lBQzlCRSxPQUFPQyxPQUFPLENBQUNLLEVBQUUsQ0FBQyxlQUFjLENBQUNDLE9BQU87Z0JBQ3RDVixTQUFTO29CQUFDTyxNQUFLWix3RUFBd0I7b0JBQ3ZDaUIsWUFBVzt3QkFDVCxHQUFHRixLQUFLRyxPQUFPO29CQUNqQjtnQkFDQTtZQUNGO1lBQ0FYLGVBQWUsSUFBSTtRQUNyQixDQUFDO0lBQ0gsR0FBRTtRQUFDQyxPQUFPQyxPQUFPO0tBQUM7SUFFbEJuQixnREFBU0EsQ0FBQyxJQUFJO1FBQ1osTUFBTTZCLGNBQWMsVUFBVTtZQUM1QixNQUFNLEVBQUNKLE1BQUssRUFBQ0ssU0FBUSxFQUFDLEdBQUMsR0FBRyxNQUFNdkIsaURBQVMsQ0FBQyxHQUF1Qk0sT0FBcEJMLDhEQUFnQkEsRUFBQyxZQUFHSyxxQkFBQUEsc0JBQUFBLEtBQUFBLElBQUFBLFNBQVVRLEVBQUUsRUFBQyxLQUE0QixPQUF6QlAsNEJBQUFBLDZCQUFBQSxLQUFBQSxJQUFBQSxnQkFBaUJXLElBQUksQ0FBQ0osRUFBRTtZQUV6R04sU0FBUztnQkFBQ08sTUFBS1oseUVBQXlCO2dCQUFDb0I7WUFBUTtRQUNuRDtRQUNBLElBQUloQiw0QkFBQUEsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFpQk8sRUFBRSxFQUFFO1lBQ3ZCUTtZQUNBSSxRQUFRQyxHQUFHLENBQUM7UUFDZCxDQUFDO0lBQ0gsR0FBRTtRQUFDcEI7S0FBZ0I7SUFFbkIscUJBQU87a0JBRVAsNEVBQUNxQjtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ2pDLDBEQUFRQTs7Ozs7Z0JBRVRXLGdDQUFrQiw4REFBQ1Qsa0RBQUlBOzs7O3lDQUFLLDhEQUFDRCw4Q0FBS0E7Ozs7d0JBQUU7Ozs7Ozs7O0FBTTFDO0dBbERTUTs7UUFDdUNOLG1FQUFnQkE7OztLQUR2RE07QUFvRFQsK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWFpbi5qc3g/MmE4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDaGF0TGlzdCBmcm9tIFwiLi9DaGF0bGlzdC9DaGF0TGlzdFwiO1xyXG5pbXBvcnQgRW1wdHkgZnJvbSBcIi4vRW1wdHlcIjtcclxuaW1wb3J0IENoYXQgZnJvbSBcIi4vQ2hhdC9DaGF0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlUHJvdmlkZXIgfSBmcm9tIFwiQC9jb250ZXh0L1N0YXRlQ29udGV4dFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IEdFVF9BTExfTUVTU0FHRVMsIEhPU1QgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcclxuaW1wb3J0IHsgcmVkdWNlcmNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgaW8gfSBmcm9tIFwic29ja2V0LmlvLWNsaWVudFwiO1xyXG5cclxuZnVuY3Rpb24gTWFpbigpIHtcclxuICBjb25zdCBbe3VzZXJJbmZvLGN1cnJlbnRDaGF0VXNlcn0sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xyXG4gIGNvbnN0IFtzb2NrZXRFdmVudCwgc2V0c29ja2V0RXZlbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNvY2tldCA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBcclxuICBpZih1c2VySW5mbyl7XHJcbiAgICBzb2NrZXQuY3VycmVudCA9IGlvKEhPU1QpO1xyXG4gICAgc29ja2V0LmN1cnJlbnQuZW1pdChcImFkZC11c2VyXCIsdXNlckluZm8uaWQpO1xyXG4gICAgZGlzcGF0Y2goe3R5cGU6cmVkdWNlcmNhc2VzLlNFVF9TT0NLRVQsc29ja2V0fSk7XHJcbiAgfVxyXG4gICAgXHJcbiAgfSwgW3VzZXJJbmZvXSlcclxuICBcclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKHNvY2tldC5jdXJyZW50JiYhc29ja2V0RXZlbnQpe1xyXG4gICAgICBzb2NrZXQuY3VycmVudC5vbihcIm1zZy1yZWNpZXZlXCIsKGRhdGEpPT57XHJcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6cmVkdWNlcmNhc2VzLkFERF9NRVNTQUdFLFxyXG4gICAgICAgIG5ld01lc3NhZ2U6e1xyXG4gICAgICAgICAgLi4uZGF0YS5tZXNzYWdlLFxyXG4gICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgICBzZXRzb2NrZXRFdmVudCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sW3NvY2tldC5jdXJyZW50XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgY29uc3QgZ2V0TWVzc2FnZXMgPSBhc3luYyAoKT0+e1xyXG4gICAgICBjb25zdCB7ZGF0YTp7bWVzc2FnZXN9fSA9IGF3YWl0IGF4aW9zLmdldChgJHtHRVRfQUxMX01FU1NBR0VTfS8ke3VzZXJJbmZvPy5pZH0vJHtjdXJyZW50Q2hhdFVzZXI/LmRhdGEuaWR9YCk7XHJcbiAgICAgXHJcbiAgICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5TRVRfTUVTU0FHRVMsbWVzc2FnZXN9KTtcclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50Q2hhdFVzZXI/LmlkKSB7XHJcbiAgICAgIGdldE1lc3NhZ2VzKCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiaGlcIik7XHJcbiAgICB9XHJcbiAgfSxbY3VycmVudENoYXRVc2VyXSk7XHJcblxyXG4gIHJldHVybiA8PlxyXG4gIFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtbWFpbiBoLXNjcmVlbiB3LXNjcmVlbiBtYXgtaC1zY3JlZW4gbWF4LXctZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cclxuICAgICAgPENoYXRMaXN0IC8+XHJcbiAgICB7XHJcbiAgICAgIGN1cnJlbnRDaGF0VXNlciA/IDxDaGF0Lz4gOiA8RW1wdHkvPlxyXG4gICAgfVxyXG5cclxuICA8L2Rpdj5cclxuICBcclxuICA8Lz47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW47XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiQ2hhdExpc3QiLCJFbXB0eSIsIkNoYXQiLCJ1c2VTdGF0ZVByb3ZpZGVyIiwiYXhpb3MiLCJHRVRfQUxMX01FU1NBR0VTIiwiSE9TVCIsInJlZHVjZXJjYXNlcyIsImlvIiwiTWFpbiIsInVzZXJJbmZvIiwiY3VycmVudENoYXRVc2VyIiwiZGlzcGF0Y2giLCJzb2NrZXRFdmVudCIsInNldHNvY2tldEV2ZW50Iiwic29ja2V0IiwiY3VycmVudCIsImVtaXQiLCJpZCIsInR5cGUiLCJTRVRfU09DS0VUIiwib24iLCJkYXRhIiwiQUREX01FU1NBR0UiLCJuZXdNZXNzYWdlIiwibWVzc2FnZSIsImdldE1lc3NhZ2VzIiwibWVzc2FnZXMiLCJnZXQiLCJTRVRfTUVTU0FHRVMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Main.jsx\n"));

/***/ })

});