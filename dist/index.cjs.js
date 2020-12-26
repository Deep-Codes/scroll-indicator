'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var ScrollIndicator = function (_a) {
    var _b = _a.height, height = _b === void 0 ? '10px' : _b, _c = _a.bgColor, bgColor = _c === void 0 ? 'gray' : _c, 
    // @ts-ignore
    props = __rest(_a, ["height", "bgColor"]);
    var _d = React__default['default'].useState(0), scroll = _d[0], setScroll = _d[1];
    React__default['default'].useEffect(function () {
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
    return (React__default['default'].createElement("div", { className: 'scroll_indicator', style: {
            height: "" + height,
            backgroundColor: "" + bgColor,
            position: 'sticky',
            top: '0%',
            left: '0%',
            width: scroll + "%",
            zIndex: 1000,
        } }));
};

module.exports = ScrollIndicator;
//# sourceMappingURL=index.cjs.js.map
