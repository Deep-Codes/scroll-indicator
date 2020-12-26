"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ScrollIndicator = function (_a) {
    var _b = _a.height, height = _b === void 0 ? '10px' : _b, _c = _a.bgColor, bgColor = _c === void 0 ? 'gray' : _c, 
    // @ts-ignore
    props = __rest(_a, ["height", "bgColor"]);
    var _d = react_1.default.useState(0), scroll = _d[0], setScroll = _d[1];
    react_1.default.useEffect(function () {
        var progressBarHandler = function () {
            var totalScroll = document.documentElement.scrollTop;
            var windowHeight = document.documentElement.scrollHeight -
                document.documentElement.clientHeight;
            var scroll = "" + totalScroll / windowHeight;
            // @ts-ignore
            setScroll((+scroll * 100).toFixed(1));
        };
        window.addEventListener('scroll', progressBarHandler);
        return function () { return window.removeEventListener('scroll', progressBarHandler); };
    });
    return (react_1.default.createElement("div", { className: 'scroll_indicator', style: {
            height: "" + height,
            backgroundColor: "" + bgColor,
            position: 'sticky',
            top: '0%',
            left: '0%',
            width: scroll + "%",
            zIndex: 1000,
        } }));
};
exports.default = ScrollIndicator;
//# sourceMappingURL=ScrollIndicator.js.map