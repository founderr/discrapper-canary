var t = 4,
    n = 0.001,
    r = 1e-7,
    i = 10,
    a = 11,
    o = 0.1,
    s = 'function' == typeof Float32Array;
function l(e, t) {
    return 1 - 3 * t + 3 * e;
}
function u(e, t) {
    return 3 * t - 6 * e;
}
function c(e) {
    return 3 * e;
}
function d(e, t, n) {
    return ((l(t, n) * e + u(t, n)) * e + c(t)) * e;
}
function _(e, t, n) {
    return 3 * l(t, n) * e * e + 2 * u(t, n) * e + c(t);
}
function E(e, t, n, a, o) {
    var s,
        l,
        u = 0;
    do (s = d((l = t + (n - t) / 2), a, o) - e) > 0 ? (n = l) : (t = l);
    while (Math.abs(s) > r && ++u < i);
    return l;
}
function f(e, n, r, i) {
    for (var a = 0; a < t; ++a) {
        var o = _(n, r, i);
        if (0 === o) break;
        var s = d(n, r, i) - e;
        n -= s / o;
    }
    return n;
}
e.exports = function (e, t, r, i) {
    if (!(0 <= e && e <= 1 && 0 <= r && r <= 1)) throw Error('bezier x values must be in [0, 1] range');
    var l = s ? new Float32Array(a) : Array(a);
    if (e !== t || r !== i) for (var u = 0; u < a; ++u) l[u] = d(u * o, e, r);
    function c(t) {
        for (var i = 0, s = 1, u = a - 1; s !== u && l[s] <= t; ++s) i += o;
        var c = i + ((t - l[--s]) / (l[s + 1] - l[s])) * o,
            d = _(c, e, r);
        return d >= n ? f(t, c, e, r) : 0 === d ? c : E(t, i, i + o, e, r);
    }
    return function (n) {
        return e === t && r === i ? n : 0 === n ? 0 : 1 === n ? 1 : d(c(n), t, i);
    };
};
