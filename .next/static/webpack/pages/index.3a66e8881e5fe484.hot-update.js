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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_StateContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/context/StateContext */ \"./src/context/StateContext.jsx\");\n/* harmony import */ var _utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/ApiRoutes */ \"./src/utils/ApiRoutes.js\");\n/* harmony import */ var _utils_CalculateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/CalculateTime */ \"./src/utils/CalculateTime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/MessageStatus */ \"./src/components/common/MessageStatus.jsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction ImageMessage(param) {\n    let { message  } = param;\n    _s();\n    const [{ currentChatUser , userInfo  }] = (0,_context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider)();\n    const handleClick = ()=>{\n        // Create an anchor element to trigger the download\n        const link = document.createElement(\"a\");\n        link.href = \"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__.HOST, \"/\").concat(message.message);\n        link.download = \"downloaded_image.jpg\";\n        link.target = \"_blanck\" // Set the desired filename\n        ;\n        // Simulate a click on the anchor element to start the download\n        link.click();\n    };\n    const handleDownloadClick = async ()=>{\n        try {\n            const imageUrl = \"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__.HOST, \"/\").concat(message.message); // Replace with the actual image URL\n            const response = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(imageUrl, {\n                responseType: \"blob\"\n            });\n            if (response.status === 200) {\n                const blob = new Blob([\n                    response.data\n                ]);\n                const url = window.URL.createObjectURL(blob);\n                const a = document.createElement(\"a\");\n                a.href = url;\n                a.download = \"downloaded-image.jpg\"; // Specify the filename\n                a.style.display = \"none\";\n                document.body.appendChild(a);\n                a.click();\n                document.body.removeChild(a);\n                window.URL.revokeObjectURL(url);\n            } else {\n                console.error(\"Failed to download image\");\n            }\n        } catch (error) {\n            console.error(\"Error downloading image:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" p-1 rounded-lg \".concat((message === null || message === void 0 ? void 0 : message.senderId) === (currentChatUser === null || currentChatUser === void 0 ? void 0 : currentChatUser.data.id) ? \" bg-incoming-background\" : \"bg-outgoing-background\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"\".concat(_utils_ApiRoutes__WEBPACK_IMPORTED_MODULE_2__.HOST, \"/\").concat(message.message),\n                    className: \"rounded-lg\",\n                    alt: \"asset\",\n                    onClick: handleDownloadClick,\n                    height: 300,\n                    width: 300\n                }, void 0, false, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute bottom-1 right-1 flex items-end gap-1\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" text-bubble-meta text-[11px] pt-1 min-w-fit\",\n                            children: (0,_utils_CalculateTime__WEBPACK_IMPORTED_MODULE_3__.calculateTime)(message.createdAt)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" text-bubble-meta\",\n                            children: (message === null || message === void 0 ? void 0 : message.senderId) === (userInfo === null || userInfo === void 0 ? void 0 : userInfo.id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_common_MessageStatus__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                messageStatus: message.messageStatus\n                            }, void 0, false, {\n                                fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 51\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n            lineNumber: 50,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\IICSAssignments\\\\web development\\\\rEACT\\\\Next\\\\tutWatsp\\\\nextjs-whatsapp-clone-starter\\\\client\\\\src\\\\components\\\\Chat\\\\ImageMessage.jsx\",\n        lineNumber: 49,\n        columnNumber: 10\n    }, this);\n}\n_s(ImageMessage, \"BjKX+ZiY1kpMlmXsp61jsrcoD1c=\", false, function() {\n    return [\n        _context_StateContext__WEBPACK_IMPORTED_MODULE_1__.useStateProvider\n    ];\n});\n_c = ImageMessage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageMessage);\nvar _c;\n$RefreshReg$(_c, \"ImageMessage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DaGF0L0ltYWdlTWVzc2FnZS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBMEQ7QUFDakI7QUFDYTtBQUN2QjtBQUNMO0FBQzBCO0FBQzFCO0FBRTFCLFNBQVNPLGFBQWEsS0FBVyxFQUFFO1FBQWIsRUFBRUMsUUFBTyxFQUFFLEdBQVg7O0lBQ3BCLE1BQU0sQ0FBQyxFQUFFQyxnQkFBZSxFQUFFQyxTQUFRLEVBQUUsQ0FBQyxHQUFHVix1RUFBZ0JBO0lBQ3hELE1BQU1XLGNBQWMsSUFBTTtRQUN4QixtREFBbUQ7UUFDbkQsTUFBTUMsT0FBT0MsU0FBU0MsYUFBYSxDQUFDO1FBQ3BDRixLQUFLRyxJQUFJLEdBQUcsR0FBV1AsT0FBUlAsa0RBQUlBLEVBQUMsS0FBbUIsT0FBaEJPLFFBQVFBLE9BQU87UUFDdENJLEtBQUtJLFFBQVEsR0FBRztRQUNoQkosS0FBS0ssTUFBTSxHQUFHLFVBQVUsMkJBQTJCOztRQUVuRCwrREFBK0Q7UUFDL0RMLEtBQUtNLEtBQUs7SUFBRztJQUdiLE1BQU1DLHNCQUFzQixVQUFZO1FBQ3RDLElBQUk7WUFDRixNQUFNQyxXQUFXLEdBQVdaLE9BQVJQLGtEQUFJQSxFQUFDLEtBQW1CLE9BQWhCTyxRQUFRQSxPQUFPLEdBQUksb0NBQW9DO1lBQ25GLE1BQU1hLFdBQVcsTUFBTWYsaURBQVMsQ0FBQ2MsVUFBVTtnQkFBRUcsY0FBYztZQUFPO1lBRWxFLElBQUlGLFNBQVNHLE1BQU0sS0FBSyxLQUFLO2dCQUMzQixNQUFNQyxPQUFPLElBQUlDLEtBQUs7b0JBQUNMLFNBQVNNLElBQUk7aUJBQUM7Z0JBQ3JDLE1BQU1DLE1BQU1DLE9BQU9DLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDTjtnQkFFdkMsTUFBTU8sSUFBSW5CLFNBQVNDLGFBQWEsQ0FBQztnQkFDakNrQixFQUFFakIsSUFBSSxHQUFHYTtnQkFDVEksRUFBRWhCLFFBQVEsR0FBRyx3QkFBd0IsdUJBQXVCO2dCQUM1RGdCLEVBQUVDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHO2dCQUVsQnJCLFNBQVNzQixJQUFJLENBQUNDLFdBQVcsQ0FBQ0o7Z0JBQzFCQSxFQUFFZCxLQUFLO2dCQUVQTCxTQUFTc0IsSUFBSSxDQUFDRSxXQUFXLENBQUNMO2dCQUMxQkgsT0FBT0MsR0FBRyxDQUFDUSxlQUFlLENBQUNWO1lBQzdCLE9BQU87Z0JBQ0xXLFFBQVFDLEtBQUssQ0FBQztZQUNoQixDQUFDO1FBQ0gsRUFBRSxPQUFPQSxPQUFPO1lBQ2RELFFBQVFDLEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFRixxQkFBTyw4REFBQ0M7UUFBSUMsV0FBVyxtQkFBeUgsT0FBdEdsQyxDQUFBQSxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNtQyxRQUFRLE9BQUtsQyw0QkFBQUEsNkJBQUFBLEtBQUFBLElBQUFBLGdCQUFpQmtCLElBQUksQ0FBQ2lCLEVBQUUsSUFBRyw0QkFBNEIsd0JBQXdCO2tCQUM3SSw0RUFBQ0g7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNHO29CQUFJQyxLQUFLLEdBQVd0QyxPQUFSUCxrREFBSUEsRUFBQyxLQUFtQixPQUFoQk8sUUFBUUEsT0FBTztvQkFBSWtDLFdBQVU7b0JBQWFLLEtBQUk7b0JBQVNDLFNBQVM3QjtvQkFBcUI4QixRQUFRO29CQUFLQyxPQUFPOzs7Ozs7OEJBQzlILDhEQUFDVDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNTOzRCQUFLVCxXQUFVO3NDQUVaeEMsbUVBQWFBLENBQUNNLFFBQVE0QyxTQUFTOzs7Ozs7c0NBR25DLDhEQUFDRDs0QkFBS1QsV0FBVTtzQ0FFWmxDLENBQUFBLG9CQUFBQSxxQkFBQUEsS0FBQUEsSUFBQUEsUUFBU21DLFFBQVEsTUFBS2pDLENBQUFBLHFCQUFBQSxzQkFBQUEsS0FBQUEsSUFBQUEsU0FBVWtDLEVBQUUsbUJBQUksOERBQUN2Qyw2REFBYUE7Z0NBQUNnRCxlQUFlN0MsUUFBUTZDLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckc7R0F6RFM5Qzs7UUFDaUNQLG1FQUFnQkE7OztLQURqRE87QUEyRFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2hhdC9JbWFnZU1lc3NhZ2UuanN4P2MxM2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGVQcm92aWRlciB9IGZyb20gXCJAL2NvbnRleHQvU3RhdGVDb250ZXh0XCI7XHJcbmltcG9ydCB7IEhPU1QgfSBmcm9tIFwiQC91dGlscy9BcGlSb3V0ZXNcIjtcclxuaW1wb3J0IHsgY2FsY3VsYXRlVGltZSB9IGZyb20gXCJAL3V0aWxzL0NhbGN1bGF0ZVRpbWVcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1lc3NhZ2VTdGF0dXMgZnJvbSBcIi4uL2NvbW1vbi9NZXNzYWdlU3RhdHVzXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIEltYWdlTWVzc2FnZSh7IG1lc3NhZ2UgfSkge1xyXG4gIGNvbnN0IFt7IGN1cnJlbnRDaGF0VXNlciwgdXNlckluZm8gfV0gPSB1c2VTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAvLyBDcmVhdGUgYW4gYW5jaG9yIGVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgZG93bmxvYWRcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLmhyZWYgPSBgJHtIT1NUfS8ke21lc3NhZ2UubWVzc2FnZX1gO1xyXG4gICAgbGluay5kb3dubG9hZCA9ICdkb3dubG9hZGVkX2ltYWdlLmpwZyc7XHJcbiAgICBsaW5rLnRhcmdldCA9ICdfYmxhbmNrJyAvLyBTZXQgdGhlIGRlc2lyZWQgZmlsZW5hbWVcclxuXHJcbiAgICAvLyBTaW11bGF0ZSBhIGNsaWNrIG9uIHRoZSBhbmNob3IgZWxlbWVudCB0byBzdGFydCB0aGUgZG93bmxvYWRcclxuICAgIGxpbmsuY2xpY2soKTt9XHJcbiAgXHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVEb3dubG9hZENsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlVXJsID0gYCR7SE9TVH0vJHttZXNzYWdlLm1lc3NhZ2V9YDsgLy8gUmVwbGFjZSB3aXRoIHRoZSBhY3R1YWwgaW1hZ2UgVVJMXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoaW1hZ2VVcmwsIHsgcmVzcG9uc2VUeXBlOiAnYmxvYicgfSk7XHJcbiAgXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlc3BvbnNlLmRhdGFdKTtcclxuICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gIFxyXG4gICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgIGEuaHJlZiA9IHVybDtcclxuICAgICAgICAgIGEuZG93bmxvYWQgPSAnZG93bmxvYWRlZC1pbWFnZS5qcGcnOyAvLyBTcGVjaWZ5IHRoZSBmaWxlbmFtZVxyXG4gICAgICAgICAgYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIFxyXG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhKTtcclxuICAgICAgICAgIGEuY2xpY2soKTtcclxuICBcclxuICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoYSk7XHJcbiAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTCh1cmwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gZG93bmxvYWQgaW1hZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZG93bmxvYWRpbmcgaW1hZ2U6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e2AgcC0xIHJvdW5kZWQtbGcgJHttZXNzYWdlPy5zZW5kZXJJZCA9PT0gY3VycmVudENoYXRVc2VyPy5kYXRhLmlkID8gXCIgYmctaW5jb21pbmctYmFja2dyb3VuZFwiIDogXCJiZy1vdXRnb2luZy1iYWNrZ3JvdW5kXCJ9YH0+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgIDxpbWcgc3JjPXtgJHtIT1NUfS8ke21lc3NhZ2UubWVzc2FnZX1gfSBjbGFzc05hbWU9XCJyb3VuZGVkLWxnXCIgYWx0PVwiYXNzZXRcIiAgb25DbGljaz17aGFuZGxlRG93bmxvYWRDbGlja30gaGVpZ2h0PXszMDB9IHdpZHRoPXszMDB9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTEgcmlnaHQtMSBmbGV4IGl0ZW1zLWVuZCBnYXAtMVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LWJ1YmJsZS1tZXRhIHRleHQtWzExcHhdIHB0LTEgbWluLXctZml0XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGN1bGF0ZVRpbWUobWVzc2FnZS5jcmVhdGVkQXQpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIiB0ZXh0LWJ1YmJsZS1tZXRhXCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U/LnNlbmRlcklkID09PSB1c2VySW5mbz8uaWQgJiYgPE1lc3NhZ2VTdGF0dXMgbWVzc2FnZVN0YXR1cz17bWVzc2FnZS5tZXNzYWdlU3RhdHVzfSAvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlTWVzc2FnZTtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlUHJvdmlkZXIiLCJIT1NUIiwiY2FsY3VsYXRlVGltZSIsIkltYWdlIiwiUmVhY3QiLCJNZXNzYWdlU3RhdHVzIiwiYXhpb3MiLCJJbWFnZU1lc3NhZ2UiLCJtZXNzYWdlIiwiY3VycmVudENoYXRVc2VyIiwidXNlckluZm8iLCJoYW5kbGVDbGljayIsImxpbmsiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJ0YXJnZXQiLCJjbGljayIsImhhbmRsZURvd25sb2FkQ2xpY2siLCJpbWFnZVVybCIsInJlc3BvbnNlIiwiZ2V0IiwicmVzcG9uc2VUeXBlIiwic3RhdHVzIiwiYmxvYiIsIkJsb2IiLCJkYXRhIiwidXJsIiwid2luZG93IiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYSIsInN0eWxlIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNoaWxkIiwicmV2b2tlT2JqZWN0VVJMIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VuZGVySWQiLCJpZCIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJoZWlnaHQiLCJ3aWR0aCIsInNwYW4iLCJjcmVhdGVkQXQiLCJtZXNzYWdlU3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Chat/ImageMessage.jsx\n"));

/***/ })

});