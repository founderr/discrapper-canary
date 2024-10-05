var r = n(147018),
    i = n(161581),
    a = n(545576),
    s = n(879),
    o = n(97131).f,
    l = n(740362),
    u = n(603528),
    c = n(95948),
    d = n(892725),
    _ = n(33995),
    E = n(905145),
    f = n(325008),
    h = n(992051),
    p = 'DOMException',
    I = a('Error'),
    m = a(p),
    T = function () {
        u(this, S);
        var e = arguments.length,
            t = d(e < 1 ? void 0 : arguments[0]),
            n = d(e < 2 ? void 0 : arguments[1], 'Error'),
            r = new m(t, n),
            i = I(t);
        return (i.name = p), o(r, 'stack', s(1, E(i.stack, 1))), c(r, this, T), r;
    },
    S = (T.prototype = m.prototype),
    g = 'stack' in I(p),
    A = 'stack' in new m(1, 2),
    N = m && f && Object.getOwnPropertyDescriptor(i, p),
    O = !!N && !(N.writable && N.configurable),
    R = g && !O && !A;
r(
    {
        global: !0,
        constructor: !0,
        forced: h || R
    },
    { DOMException: R ? T : m }
);
var v = a(p),
    C = v.prototype;
if (C.constructor !== v) {
    for (var L in (!h && o(C, 'constructor', s(1, v)), _))
        if (l(_, L)) {
            var D = _[L],
                y = D.s;
            !l(v, y) && o(v, y, s(6, D.c));
        }
}
