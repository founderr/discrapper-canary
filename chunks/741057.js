var i = r(421896),
    a = r(318670),
    s = r(193079),
    o = r(97106),
    l = r(257109),
    u = r(175056),
    c = r(532455),
    d = r(676067),
    f = 1,
    _ = '[object Arguments]',
    h = '[object Array]',
    p = '[object Object]',
    m = Object.prototype.hasOwnProperty;
function g(e, n, r, g, E, v) {
    var I = (0, u.Z)(e),
        T = (0, u.Z)(n),
        b = I ? h : (0, l.Z)(e),
        y = T ? h : (0, l.Z)(n);
    (b = b == _ ? p : b), (y = y == _ ? p : y);
    var S = b == p,
        A = y == p,
        N = b == y;
    if (N && (0, c.Z)(e)) {
        if (!(0, c.Z)(n)) return !1;
        (I = !0), (S = !1);
    }
    if (N && !S) return v || (v = new i.Z()), I || (0, d.Z)(e) ? (0, a.Z)(e, n, r, g, E, v) : (0, s.Z)(e, n, b, r, g, E, v);
    if (!(r & f)) {
        var C = S && m.call(e, '__wrapped__'),
            R = A && m.call(n, '__wrapped__');
        if (C || R) {
            var O = C ? e.value() : e,
                D = R ? n.value() : n;
            return v || (v = new i.Z()), E(O, D, r, g, v);
        }
    }
    return !!N && (v || (v = new i.Z()), (0, o.Z)(e, n, r, g, E, v));
}
n.Z = g;
