"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/context/StateReducers.js":
/*!**************************************!*\
  !*** ./src/context/StateReducers.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialState\": function() { return /* binding */ initialState; },\n/* harmony export */   \"reducer\": function() { return /* binding */ reducer; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ \"./src/context/constants.js\");\n\n\nconst data = ()=>{\n    try {\n        const localdata = JSON.parse(localStorage.getItem(\"userInfo\"));\n        return localdata;\n    } catch (error) {}\n};\nconst initialState = {\n    userInfo: data(),\n    newUser: false,\n    contactsPage: false,\n    currentChatUser: undefined,\n    messages: [],\n    socket: undefined,\n    search: undefined,\n    userContacts: [],\n    onlineusers: [],\n    filteredContacts: []\n};\nconst reducer = (state, action)=>{\n    switch(action.type){\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SET_USER_INFO:\n            return {\n                ...state,\n                userInfo: action.userInfo\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SET_NEW_USER_INFO:\n            return {\n                ...state,\n                newUser: action.newUser\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SET_ALL_CONTACT_PAGE:\n            return {\n                ...state,\n                contactsPage: !state.contactsPage\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.CHANGE_CURRENT_USER:\n            return {\n                ...state,\n                currentChatUser: action.user\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SET_MESSAGES:\n            return {\n                ...state,\n                messages: action.messages\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SET_SOCKET:\n            return {\n                ...state,\n                socket: action.socket\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.ADD_MESSAGE:\n            return {\n                ...state,\n                messages: [\n                    ...state.messages,\n                    action.newMessage\n                ]\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SEARCH:\n            return {\n                ...state,\n                search: action.search\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SET_USER_CONTACTS:\n            return {\n                ...state,\n                userContacts: action.userContacts\n            };\n        case _constants__WEBPACK_IMPORTED_MODULE_1__.reducercases.SET_ONLINE_USERS:\n            return {\n                ...state,\n                onlineusers: action.onlineusers\n            };\n        default:\n            return state;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9TdGF0ZVJlZHVjZXJzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ1U7QUFFM0MsTUFBTUUsT0FBTyxJQUFJO0lBQ2IsSUFBSTtRQUNBLE1BQU1DLFlBQVlDLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDO1FBQ2xELE9BQU9KO0lBQ1gsRUFBRSxPQUFPSyxPQUFPLENBRWhCO0FBQ0o7QUFFTyxNQUFNQyxlQUFlO0lBQ3hCQyxVQUFVUjtJQUNWUyxTQUFRLEtBQUs7SUFDYkMsY0FBYSxLQUFLO0lBQ2xCQyxpQkFBZ0JDO0lBQ2hCQyxVQUFTLEVBQUU7SUFDWEMsUUFBT0Y7SUFDUEcsUUFBT0g7SUFDUEksY0FBYSxFQUFFO0lBQ2ZDLGFBQVksRUFBRTtJQUNkQyxrQkFBaUIsRUFBRTtBQUN2QixFQUFDO0FBRU0sTUFBTUMsVUFBVSxDQUFDQyxPQUFNQyxTQUFTO0lBQ25DLE9BQVFBLE9BQU9DLElBQUk7UUFDZixLQUFLdkIsa0VBQTBCO1lBQzNCLE9BQU87Z0JBQ0gsR0FBR3FCLEtBQUs7Z0JBQ1JaLFVBQVNhLE9BQU9iLFFBQVE7WUFDNUI7UUFFSixLQUFLVCxzRUFBOEI7WUFDL0IsT0FBTztnQkFDSCxHQUFHcUIsS0FBSztnQkFDUlgsU0FBUVksT0FBT1osT0FBTztZQUMxQjtRQUNKLEtBQUtWLHlFQUFpQztZQUNsQyxPQUFNO2dCQUNGLEdBQUdxQixLQUFLO2dCQUNSVixjQUFhLENBQUNVLE1BQU1WLFlBQVk7WUFDcEM7UUFDSixLQUFLWCx3RUFBZ0M7WUFDakMsT0FBTTtnQkFDRixHQUFHcUIsS0FBSztnQkFDUlQsaUJBQWdCVSxPQUFPTSxJQUFJO1lBQy9CO1FBQ0osS0FBSzVCLGlFQUF5QjtZQUMxQixPQUFNO2dCQUNGLEdBQUdxQixLQUFLO2dCQUNSUCxVQUFTUSxPQUFPUixRQUFRO1lBQzVCO1FBQ0osS0FBS2QsK0RBQXVCO1lBQ3hCLE9BQU07Z0JBQ0YsR0FBR3FCLEtBQUs7Z0JBQ1JOLFFBQU9PLE9BQU9QLE1BQU07WUFDeEI7UUFDSixLQUFLZixnRUFBd0I7WUFDekIsT0FBTTtnQkFDRixHQUFHcUIsS0FBSztnQkFDUlAsVUFBUzt1QkFBSU8sTUFBTVAsUUFBUTtvQkFBQ1EsT0FBT1UsVUFBVTtpQkFBQztZQUNsRDtRQUNKLEtBQUtoQywyREFBbUI7WUFDcEIsT0FBTTtnQkFDRixHQUFHcUIsS0FBSztnQkFDUkwsUUFBT00sT0FBT04sTUFBTTtZQUN4QjtRQUNKLEtBQUtoQixzRUFBOEI7WUFDL0IsT0FBTTtnQkFDRixHQUFHcUIsS0FBSztnQkFDUkosY0FBYUssT0FBT0wsWUFBWTtZQUNwQztRQUNKLEtBQUtqQixxRUFBNkI7WUFDOUIsT0FBTTtnQkFDRixHQUFHcUIsS0FBSztnQkFDUkgsYUFBWUksT0FBT0osV0FBVztZQUNsQztRQUNKO1lBQ0ksT0FBT0c7SUFDZjtBQUNKLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHQvU3RhdGVSZWR1Y2Vycy5qcz8wMDQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlZHVjZXJjYXNlcyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgZGF0YSA9ICgpPT57XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGxvY2FsZGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySW5mb1wiKSk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICB1c2VySW5mbzogZGF0YSgpLFxyXG4gICAgbmV3VXNlcjpmYWxzZSxcclxuICAgIGNvbnRhY3RzUGFnZTpmYWxzZSxcclxuICAgIGN1cnJlbnRDaGF0VXNlcjp1bmRlZmluZWQsXHJcbiAgICBtZXNzYWdlczpbXSxcclxuICAgIHNvY2tldDp1bmRlZmluZWQsXHJcbiAgICBzZWFyY2g6dW5kZWZpbmVkLFxyXG4gICAgdXNlckNvbnRhY3RzOltdLFxyXG4gICAgb25saW5ldXNlcnM6W10sXHJcbiAgICBmaWx0ZXJlZENvbnRhY3RzOltdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSByZWR1Y2VyY2FzZXMuU0VUX1VTRVJfSU5GTzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlckluZm86YWN0aW9uLnVzZXJJbmZvLFxyXG4gICAgICAgICAgICB9ICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSByZWR1Y2VyY2FzZXMuU0VUX05FV19VU0VSX0lORk86XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG5ld1VzZXI6YWN0aW9uLm5ld1VzZXIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIHJlZHVjZXJjYXNlcy5TRVRfQUxMX0NPTlRBQ1RfUEFHRTpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjb250YWN0c1BhZ2U6IXN0YXRlLmNvbnRhY3RzUGFnZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgcmVkdWNlcmNhc2VzLkNIQU5HRV9DVVJSRU5UX1VTRVI6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudENoYXRVc2VyOmFjdGlvbi51c2VyLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSByZWR1Y2VyY2FzZXMuU0VUX01FU1NBR0VTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOmFjdGlvbi5tZXNzYWdlc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSByZWR1Y2VyY2FzZXMuU0VUX1NPQ0tFVDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzb2NrZXQ6YWN0aW9uLnNvY2tldCxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgcmVkdWNlcmNhc2VzLkFERF9NRVNTQUdFOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOlsuLi5zdGF0ZS5tZXNzYWdlcyxhY3Rpb24ubmV3TWVzc2FnZV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgcmVkdWNlcmNhc2VzLlNFQVJDSDpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2g6YWN0aW9uLnNlYXJjaFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSByZWR1Y2VyY2FzZXMuU0VUX1VTRVJfQ09OVEFDVFM6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdXNlckNvbnRhY3RzOmFjdGlvbi51c2VyQ29udGFjdHMsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlIHJlZHVjZXJjYXNlcy5TRVRfT05MSU5FX1VTRVJTOlxyXG4gICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIG9ubGluZXVzZXJzOmFjdGlvbi5vbmxpbmV1c2Vyc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwicmVkdWNlcmNhc2VzIiwiZGF0YSIsImxvY2FsZGF0YSIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJlcnJvciIsImluaXRpYWxTdGF0ZSIsInVzZXJJbmZvIiwibmV3VXNlciIsImNvbnRhY3RzUGFnZSIsImN1cnJlbnRDaGF0VXNlciIsInVuZGVmaW5lZCIsIm1lc3NhZ2VzIiwic29ja2V0Iiwic2VhcmNoIiwidXNlckNvbnRhY3RzIiwib25saW5ldXNlcnMiLCJmaWx0ZXJlZENvbnRhY3RzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9VU0VSX0lORk8iLCJTRVRfTkVXX1VTRVJfSU5GTyIsIlNFVF9BTExfQ09OVEFDVF9QQUdFIiwiQ0hBTkdFX0NVUlJFTlRfVVNFUiIsInVzZXIiLCJTRVRfTUVTU0FHRVMiLCJTRVRfU09DS0VUIiwiQUREX01FU1NBR0UiLCJuZXdNZXNzYWdlIiwiU0VBUkNIIiwiU0VUX1VTRVJfQ09OVEFDVFMiLCJTRVRfT05MSU5FX1VTRVJTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/StateReducers.js\n"));

/***/ })

});