var r = n(147018),
    i = n(161581),
    a = n(545576),
    o = n(879),
    s = n(97131).f,
    l = n(740362),
    u = n(603528),
    c = n(95948),
    d = n(892725),
    _ = n(33995),
    E = n(905145),
    f = n(325008),
    h = n(992051),
    p = 'DOMException',
    m = a('Error'),
    I = a(p),
    T = function () {
        u(this, g);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], 'Error'),
            r = new I(t, n),
            i = m(t);
        return (i.name = p), s(r, 'stack', o(1, E(i.stack, 1))), c(r, this, T), r;
    },
    g = (T.prototype = I.prototype),
    S = 'stack' in m(p),
    A = 'stack' in new I(1, 2),
    v = I && f && Object.getOwnPropertyDescriptor(i, p),
    N = !!v && !(v.writable && v.configurable),
    O = S && !N && !A;
r(
    {
        global: !0,
        constructor: !0,
        forced: h || O
    },
    { DOMException: O ? T : I }
);
var R = a(p),
    C = R.prototype;
if (C.constructor !== R) {
    for (var y in (!h && s(C, 'constructor', o(1, R)), _))
        if (l(_, y)) {
            var b = _[y],
                L = b.s;
            !l(R, L) && s(R, L, o(6, b.c));
        }
}
