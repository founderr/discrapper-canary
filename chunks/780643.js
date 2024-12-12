var n = 4,
    r = 0.001,
    i = 1e-7,
    a = 10,
    s = 11,
    o = 0.1,
    l = 'function' == typeof Float32Array;
function u(e, n) {
    return 1 - 3 * n + 3 * e;
}
function c(e, n) {
    return 3 * n - 6 * e;
}
function d(e) {
    return 3 * e;
}
function f(e, n, r) {
    return ((u(n, r) * e + c(n, r)) * e + d(n)) * e;
}
function _(e, n, r) {
    return 3 * u(n, r) * e * e + 2 * c(n, r) * e + d(n);
}
function h(e, n, r, s, o) {
    var l,
        u,
        c = 0;
    do (l = f((u = n + (r - n) / 2), s, o) - e) > 0 ? (r = u) : (n = u);
    while (Math.abs(l) > i && ++c < a);
    return u;
}
function p(e, r, i, a) {
    for (var s = 0; s < n; ++s) {
        var o = _(r, i, a);
        if (0 === o) break;
        var l = f(r, i, a) - e;
        r -= l / o;
    }
    return r;
}
e.exports = function (e, n, i, a) {
    if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw Error('bezier x values must be in [0, 1] range');
    var u = l ? new Float32Array(s) : Array(s);
    if (e !== n || i !== a) for (var c = 0; c < s; ++c) u[c] = f(c * o, e, i);
    function d(n) {
        for (var a = 0, l = 1, c = s - 1; l !== c && u[l] <= n; ++l) a += o;
        var d = a + ((n - u[--l]) / (u[l + 1] - u[l])) * o,
            f = _(d, e, i);
        return f >= r ? p(n, d, e, i) : 0 === f ? d : h(n, a, a + o, e, i);
    }
    return function (r) {
        return e === n && i === a ? r : 0 === r ? 0 : 1 === r ? 1 : f(d(r), n, a);
    };
};
