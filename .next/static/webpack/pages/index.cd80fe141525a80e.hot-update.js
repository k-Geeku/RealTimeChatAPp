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

/***/ "./src/components/Chat/ChatHeader.jsx":
/*!********************************************!*\
  !*** ./src/components/Chat/ChatHeader.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/Avatar */ \"./src/components/common/Avatar.jsx\");\n/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/md */ \"./node_modules/react-icons/md/index.esm.js\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/io5 */ \"./node_modules/react-icons/io5/index.esm.js\");\n/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/bi */ \"./node_modules/react-icons/bi/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction ChatHeader() {\n    var _currentChatUser_data, _currentChatUser_data1;\n    _s();\n    const [{ currentChatUser , socket  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider)();\n    const [searchBar, setsearchBar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [search, setsearch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const value = null;\n    console.log(search);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(socket.current);\n    }, [\n        socket\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data);\n    }, [\n        currentChatUser\n    ]);\n    const handlesearchChanga = (e)=>{\n        setsearch(e.target.value);\n    };\n    const handleSearchClick = ()=>{\n        setsearch(\"\");\n        setsearchBar(!searchBar);\n    };\n    const handleClose = ()=>{\n        if (searchBar === true) {\n            setsearch(\"\");\n            setsearchBar(false);\n            dispatch({\n                type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.SEARCH,\n                value\n            });\n        }\n        ;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        dispatch({\n            type: _context_constants__WEBPACK_IMPORTED_MODULE_4__.reducercases.SEARCH,\n            search\n        });\n    }, [\n        search\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-16 relative px-4 py-3 flex justify-between items-center bg-panel-header-background z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-center gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_Avatar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        type: \"sm\",\n                        image: currentChatUser === null || currentChatUser === void 0 ? void 0 : (_currentChatUser_data = currentChatUser.data) === null || _currentChatUser_data === void 0 ? void 0 : _currentChatUser_data.profilePicture\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"text-primary-strong\",\n                                children: currentChatUser === null || currentChatUser === void 0 ? void 0 : (_currentChatUser_data1 = currentChatUser.data) === null || _currentChatUser_data1 === void 0 ? void 0 : _currentChatUser_data1.name\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \" text-secondary text-sm\",\n                                children: \"online\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex gap-6 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdCall, {\n                        className: \" text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_6__.IoVideocam, {\n                        className: \" text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bi__WEBPACK_IMPORTED_MODULE_7__.BiSearchAlt2, {\n                        className: \" text-panel-header-icon cursor-pointer text-xl\",\n                        onClick: handleSearchClick\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 68,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__.BsThreeDotsVertical, {\n                        className: \" text-panel-header-icon cursor-pointer text-xl\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 60,\n                columnNumber: 5\n            }, this),\n            searchBar && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-20 bottom-2 right-20 flex justify-around px-2 items-center w-[90] h-12 rounded-md bg-panel-header-background z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"bg-input-background cursor-text bg-transparent focus:outline-none p-1 text-white caret-transparent\",\n                            type: \"text\",\n                            placeholder: \"Search here\",\n                            value: search,\n                            onChange: (e)=>{\n                                handlesearchChanga(e);\n                            }\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-white cursor-pointer\",\n                        onClick: handleClose,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_9__.FaTimes, {}, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 72\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n                lineNumber: 78,\n                columnNumber: 19\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ChatHeader.jsx\",\n        lineNumber: 49,\n        columnNumber: 10\n    }, this);\n}\n_s(ChatHeader, \"IW4XA34s63q1Xuttdl7DpsRq28o=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_3__.useStateProvider\n    ];\n});\n_c = ChatHeader;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatHeader);\nvar _c;\n$RefreshReg$(_c, \"ChatHeader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eEVTRTs7UUFDd0NILG1FQUFnQkE7OztLQUR4REc7QUEwRVQsK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9DaGF0SGVhZGVyLmpzeD9hYjhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIi4uL2NvbW1vbi9BdmF0YXJcIjtcclxuaW1wb3J0IHsgTWRDYWxsIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCJcclxuaW1wb3J0IHsgSW9WaWRlb2NhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIlxyXG5pbXBvcnQgeyBCaVNlYXJjaEFsdDIgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIlxyXG5pbXBvcnQgeyBCc1RocmVlRG90c1ZlcnRpY2FsIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCJcclxuaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XHJcbmltcG9ydCB7IEZhVGltZXMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgcmVkdWNlcmNhc2VzIH0gZnJvbSBcIkAvY29udGV4dC9jb25zdGFudHNcIjtcclxuXHJcbmZ1bmN0aW9uIENoYXRIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3sgY3VycmVudENoYXRVc2VyLCBzb2NrZXQgfSxkaXNwYXRjaF0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgW3NlYXJjaEJhciwgc2V0c2VhcmNoQmFyXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRzZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgdmFsdWUgPSBudWxsO1xyXG4gXHJcbiAgXHJcbiAgY29uc29sZS5sb2coc2VhcmNoKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc29ja2V0LmN1cnJlbnQpO1xyXG4gIH0sIFtzb2NrZXRdKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50Q2hhdFVzZXI/LmRhdGEpO1xyXG5cclxuICB9LCBbY3VycmVudENoYXRVc2VyXSlcclxuICBjb25zdCBoYW5kbGVzZWFyY2hDaGFuZ2EgPSAoZSk9PntcclxuICAgIHNldHNlYXJjaChlLnRhcmdldC52YWx1ZSk7XHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZVNlYXJjaENsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0c2VhcmNoKFwiXCIpO1xyXG4gICAgc2V0c2VhcmNoQmFyKCFzZWFyY2hCYXIpO1xyXG4gIH1cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIGlmKHNlYXJjaEJhciA9PT0gdHJ1ZSl7XHJcbiAgICAgIHNldHNlYXJjaChcIlwiKTtcclxuICAgICAgc2V0c2VhcmNoQmFyKGZhbHNlKTtcclxuICAgICAgZGlzcGF0Y2goe3R5cGU6cmVkdWNlcmNhc2VzLlNFQVJDSCx2YWx1ZX0pO1xyXG4gICBcclxuXHJcbiAgICB9O1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICBcclxuICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5TRUFSQ0gsc2VhcmNofSk7XHJcblxyXG4gIH0sIFtzZWFyY2hdKVxyXG4gXHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgcmVsYXRpdmUgcHgtNCBweS0zIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy1wYW5lbC1oZWFkZXItYmFja2dyb3VuZCB6LTEwXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC02XCI+XHJcbiAgICAgIDxBdmF0YXIgdHlwZT1cInNtXCIgaW1hZ2U9e2N1cnJlbnRDaGF0VXNlcj8uZGF0YT8ucHJvZmlsZVBpY3R1cmV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeS1zdHJvbmdcIj57Y3VycmVudENoYXRVc2VyPy5kYXRhPy5uYW1lfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCIgdGV4dC1zZWNvbmRhcnkgdGV4dC1zbVwiPlxyXG4gICAgICAgICAgb25saW5lXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtNiBcIj5cclxuICAgICAgPE1kQ2FsbFxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxyXG4gICAgICAvPlxyXG4gICAgICA8SW9WaWRlb2NhbVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxyXG5cclxuICAgICAgLz5cclxuICAgICAgPEJpU2VhcmNoQWx0MlxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxyXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaENsaWNrfVxyXG4gICAgICAvPlxyXG4gICAgICA8QnNUaHJlZURvdHNWZXJ0aWNhbFxyXG4gICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LXBhbmVsLWhlYWRlci1pY29uIGN1cnNvci1wb2ludGVyIHRleHQteGxcIlxyXG5cclxuICAgICAgLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuICAgIHtzZWFyY2hCYXIgJiYgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMjAgYm90dG9tLTIgcmlnaHQtMjAgZmxleCBqdXN0aWZ5LWFyb3VuZCBweC0yIGl0ZW1zLWNlbnRlciB3LVs5MF0gaC0xMiByb3VuZGVkLW1kIGJnLXBhbmVsLWhlYWRlci1iYWNrZ3JvdW5kIHotMTBcIj5cclxuICAgICAgPGRpdj48aW5wdXQgY2xhc3NOYW1lPVwiYmctaW5wdXQtYmFja2dyb3VuZCBjdXJzb3ItdGV4dCBiZy10cmFuc3BhcmVudCBmb2N1czpvdXRsaW5lLW5vbmUgcC0xIHRleHQtd2hpdGUgY2FyZXQtdHJhbnNwYXJlbnRcIiB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGhlcmVcIiB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17KGUpPT57aGFuZGxlc2VhcmNoQ2hhbmdhKGUpfX0gLz48L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGN1cnNvci1wb2ludGVyXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PjxGYVRpbWVzLz48L2Rpdj5cclxuICAgICAgPC9kaXY+fVxyXG4gIDwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEhlYWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBdmF0YXIiLCJNZENhbGwiLCJJb1ZpZGVvY2FtIiwiQmlTZWFyY2hBbHQyIiwiQnNUaHJlZURvdHNWZXJ0aWNhbCIsInVzZVN0YXRlUHJvdmlkZXIiLCJGYVRpbWVzIiwicmVkdWNlcmNhc2VzIiwiQ2hhdEhlYWRlciIsImN1cnJlbnRDaGF0VXNlciIsInNvY2tldCIsImRpc3BhdGNoIiwic2VhcmNoQmFyIiwic2V0c2VhcmNoQmFyIiwic2VhcmNoIiwic2V0c2VhcmNoIiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudCIsImRhdGEiLCJoYW5kbGVzZWFyY2hDaGFuZ2EiLCJlIiwidGFyZ2V0IiwiaGFuZGxlU2VhcmNoQ2xpY2siLCJoYW5kbGVDbG9zZSIsInR5cGUiLCJTRUFSQ0giLCJkaXYiLCJjbGFzc05hbWUiLCJpbWFnZSIsInByb2ZpbGVQaWN0dXJlIiwic3BhbiIsIm5hbWUiLCJvbkNsaWNrIiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/ChatHeader.jsx\n"));

/***/ })

});