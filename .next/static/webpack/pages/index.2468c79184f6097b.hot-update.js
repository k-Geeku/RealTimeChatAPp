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

/***/ "./src/components/Chatlist/List.jsx":
/*!******************************************!*\
  !*** ./src/components/Chatlist/List.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _context_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/constants */ \"./src/context/constants.js\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ChatLIstItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ChatLIstItem */ \"./src/components/Chatlist/ChatLIstItem.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction List() {\n    _s();\n    const [{ userInfo , userContacts  }, dispatch] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const getContacts = async ()=>{\n            try {\n                const { data: { Users , onlineUsers  }  } = await (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_3__.GET_INITIAL_CONTACTS, \"/\").concat(userInfo === null || userInfo === void 0 ? void 0 : userInfo.id));\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducercases.SET_USER_CONTACTS,\n                    userContacts: Users\n                });\n                dispatch({\n                    type: _context_constants__WEBPACK_IMPORTED_MODULE_2__.reducercases.SET_ONLINE_USERS,\n                    onlineUsers\n                });\n            } catch (error) {\n                console.log(error);\n            }\n        };\n        getContacts();\n    }, [\n        userInfo\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-search-input-container-background flex-auto overflow-auto max-h-full custom-scrollbar \",\n        children: userContacts.map((contact)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ChatLIstItem__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                data: contact\n            }, contact.id, false, {\n                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\List.jsx\",\n                lineNumber: 26,\n                columnNumber: 37\n            }, this))\n    }, void 0, false, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chatlist\\\\List.jsx\",\n        lineNumber: 25,\n        columnNumber: 10\n    }, this);\n}\n_s(List, \"F7QPHHOzkmsZBJxAADRo3D3b9KY=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = List;\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0bGlzdC9MaXN0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDUDtBQUNNO0FBQy9CO0FBQ2U7QUFDQztBQUUxQyxTQUFTTyxPQUFPOztJQUNkLE1BQU0sQ0FBQyxFQUFDQyxTQUFRLEVBQUNDLGFBQVksRUFBQyxFQUFDQyxTQUFTLEdBQUdWLHVFQUFnQkE7SUFDM0RLLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNTSxjQUFjLFVBQVM7WUFDM0IsSUFBSTtnQkFDRixNQUFNLEVBQUNDLE1BQUssRUFBQ0MsTUFBSyxFQUFDQyxZQUFXLEVBQUMsR0FBQyxHQUFHLE1BQU1YLGlEQUFLQSxDQUFDLEdBQTJCSyxPQUF4Qk4sa0VBQW9CQSxFQUFDLEtBQWdCLE9BQWJNLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVU8sRUFBRTtnQkFDdEZMLFNBQVM7b0JBQUNNLE1BQUtmLDhFQUE4QjtvQkFBQ1EsY0FBY0k7Z0JBQUs7Z0JBQ2pFSCxTQUFTO29CQUFDTSxNQUFLZiw2RUFBNkI7b0JBQUNhO2dCQUFXO1lBRTFELEVBQUUsT0FBT0ssT0FBTztnQkFDZEMsUUFBUUMsR0FBRyxDQUFDRjtZQUNkO1FBQ0Y7UUFFQVI7SUFDRixHQUFHO1FBQUNIO0tBQVM7SUFFYixxQkFBTyw4REFBQ2M7UUFBSUMsV0FBVTtrQkFDakJkLGFBQWFlLEdBQUcsQ0FBQyxDQUFDQyx3QkFBVyw4REFBQ25CLHFEQUFZQTtnQkFBQ00sTUFBTWE7ZUFBY0EsUUFBUVYsRUFBRTs7Ozs7Ozs7OztBQUVoRjtHQXBCU1I7O1FBQ29DUCxtRUFBZ0JBOzs7S0FEcERPO0FBc0JULCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NoYXRsaXN0L0xpc3QuanN4PzBhMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XHJcbmltcG9ydCB7IHJlZHVjZXJjYXNlcyB9IGZyb20gXCJAL2NvbnRleHQvY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IEdFVF9JTklUSUFMX0NPTlRBQ1RTIH0gZnJvbSBcIkAvdXRpbHMvQXBpUm91dGVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2hhdExJc3RJdGVtIGZyb20gXCIuL0NoYXRMSXN0SXRlbVwiO1xyXG5cclxuZnVuY3Rpb24gTGlzdCgpIHtcclxuICBjb25zdCBbe3VzZXJJbmZvLHVzZXJDb250YWN0c30sZGlzcGF0Y2hdID0gdXNlU3RhdGVQcm92aWRlcigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRDb250YWN0cyA9IGFzeW5jKCk9PntcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7ZGF0YTp7VXNlcnMsb25saW5lVXNlcnN9fSA9IGF3YWl0IGF4aW9zKGAke0dFVF9JTklUSUFMX0NPTlRBQ1RTfS8ke3VzZXJJbmZvPy5pZH1gKTtcclxuICAgICAgICBkaXNwYXRjaCh7dHlwZTpyZWR1Y2VyY2FzZXMuU0VUX1VTRVJfQ09OVEFDVFMsdXNlckNvbnRhY3RzOiBVc2Vyc30pO1xyXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOnJlZHVjZXJjYXNlcy5TRVRfT05MSU5FX1VTRVJTLG9ubGluZVVzZXJzfSk7XHJcblxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0Q29udGFjdHMoKTtcclxuICB9LCBbdXNlckluZm9dKTtcclxuICBcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCIgYmctc2VhcmNoLWlucHV0LWNvbnRhaW5lci1iYWNrZ3JvdW5kIGZsZXgtYXV0byBvdmVyZmxvdy1hdXRvIG1heC1oLWZ1bGwgY3VzdG9tLXNjcm9sbGJhciBcIj5cclxuICAgICAge3VzZXJDb250YWN0cy5tYXAoKGNvbnRhY3QpPT4gPENoYXRMSXN0SXRlbSBkYXRhPXtjb250YWN0fSBrZXk9e2NvbnRhY3QuaWR9IC8+KX1cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZVByb3ZpZGVyIiwicmVkdWNlcmNhc2VzIiwiR0VUX0lOSVRJQUxfQ09OVEFDVFMiLCJheGlvcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwiQ2hhdExJc3RJdGVtIiwiTGlzdCIsInVzZXJJbmZvIiwidXNlckNvbnRhY3RzIiwiZGlzcGF0Y2giLCJnZXRDb250YWN0cyIsImRhdGEiLCJVc2VycyIsIm9ubGluZVVzZXJzIiwiaWQiLCJ0eXBlIiwiU0VUX1VTRVJfQ09OVEFDVFMiLCJTRVRfT05MSU5FX1VTRVJTIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiY29udGFjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Chatlist/List.jsx\n"));

/***/ })

});