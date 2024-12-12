var i = r(566885),
    a = r(926515),
    s = r(339718),
    o = r(627060),
    l = r(908355),
    u = r(933676),
    c = r(49693),
    d = r(182867),
    f = r(981971),
    _ = r(11697),
    h = Array;
e.exports = function (e) {
    var n,
        r,
        p,
        m,
        g,
        E,
        v = s(e),
        I = u(this),
        T = arguments.length,
        b = T > 1 ? arguments[1] : void 0,
        y = void 0 !== b;
    y && (b = i(b, T > 2 ? arguments[2] : void 0));
    var S = _(v),
        A = 0;
    if (S && !(this === h && l(S))) for (g = (m = f(v, S)).next, r = I ? new this() : []; !(p = a(g, m)).done; A++) (E = y ? o(m, b, [p.value, A], !0) : p.value), d(r, A, E);
    else for (n = c(v), r = I ? new this(n) : h(n); n > A; A++) (E = y ? b(v[A], A) : v[A]), d(r, A, E);
    return (r.length = A), r;
};
