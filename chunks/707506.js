r.d(n, {
    m: function () {
        return s;
    }
});
var i = r(239189),
    a = r(217348),
    s = function (e, n, r) {
        if (a.is.fun(e)) return e;
        if (a.is.arr(e))
            return s({
                range: e,
                output: n,
                extrapolate: r
            });
        if (a.is.str(e.output[0])) return i.createStringInterpolator(e);
        var u = e,
            c = u.output,
            d = u.range || [0, 1],
            f = u.extrapolateLeft || u.extrapolate || 'extend',
            _ = u.extrapolateRight || u.extrapolate || 'extend',
            h =
                u.easing ||
                function (e) {
                    return e;
                };
        return function (e) {
            var n = l(e, d);
            return o(e, d[n], d[n + 1], c[n], c[n + 1], h, f, _, u.map);
        };
    };
function o(e, n, r, i, a, s, o, l, u) {
    var c = u ? u(e) : e;
    if (c < n) {
        if ('identity' === o) return c;
        'clamp' === o && (c = n);
    }
    if (c > r) {
        if ('identity' === l) return c;
        'clamp' === l && (c = r);
    }
    return i === a ? i : n === r ? (e <= n ? i : a) : (n === -1 / 0 ? (c = -c) : r === 1 / 0 ? (c -= n) : (c = (c - n) / (r - n)), (c = s(c)), i === -1 / 0 ? (c = -c) : a === 1 / 0 ? (c += i) : (c = c * (a - i) + i), c);
}
function l(e, n) {
    for (var r = 1; r < n.length - 1 && !(n[r] >= e); ++r);
    return r - 1;
}
