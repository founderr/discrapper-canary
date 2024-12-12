i = { value: !0 };
var i,
    a =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    s = o(r(192379));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
function l(e, n) {
    var r = {};
    for (var i in e) {
        if (!(n.indexOf(i) >= 0)) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
}
var u = 24;
n.default = function (e) {
    var n = e.fill,
        r = void 0 === n ? 'currentColor' : n,
        i = e.width,
        o = void 0 === i ? u : i,
        c = e.height,
        d = void 0 === c ? u : c,
        f = e.style,
        _ = void 0 === f ? {} : f,
        h = l(e, ['fill', 'width', 'height', 'style']);
    return s.default.createElement(
        'svg',
        a(
            {
                viewBox: '0 0 ' + u + ' ' + u,
                style: a(
                    {
                        fill: r,
                        width: o,
                        height: d
                    },
                    _
                )
            },
            h
        ),
        s.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
    );
};
