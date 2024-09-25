r = { value: !0 };
var r,
    i =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    a = o(n(470079));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
function s(e, t) {
    var n = {};
    for (var r in e) {
        if (!(t.indexOf(r) >= 0)) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
    }
    return n;
}
var l = 24;
t.default = function (e) {
    var t = e.fill,
        n = void 0 === t ? 'currentColor' : t,
        r = e.width,
        o = void 0 === r ? l : r,
        u = e.height,
        c = void 0 === u ? l : u,
        d = e.style,
        _ = void 0 === d ? {} : d,
        E = s(e, ['fill', 'width', 'height', 'style']);
    return a.default.createElement(
        'svg',
        i(
            {
                viewBox: '0 0 ' + l + ' ' + l,
                style: i(
                    {
                        fill: n,
                        width: o,
                        height: c
                    },
                    _
                )
            },
            E
        ),
        a.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
    );
};
