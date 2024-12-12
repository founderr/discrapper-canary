Object.defineProperty(n, '__esModule', { value: !0 });
var r = function (e, n) {
    var r = {},
        i = function (e) {
            var n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            r[e] = n;
        };
    return 0 === e && i('first-child'), e === n - 1 && i('last-child'), (0 === e || e % 2 == 0) && i('even'), 1 === Math.abs(e % 2) && i('odd'), i('nth-child', e), r;
};
n.default = r;
