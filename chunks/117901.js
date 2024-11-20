var r = n(566885),
    i = n(926515),
    a = n(339718),
    s = n(627060),
    o = n(908355),
    l = n(933676),
    u = n(49693),
    c = n(182867),
    d = n(981971),
    f = n(11697),
    _ = Array;
e.exports = function (e) {
    var t,
        n,
        p,
        h,
        m,
        g,
        E = a(e),
        v = l(this),
        I = arguments.length,
        b = I > 1 ? arguments[1] : void 0,
        T = void 0 !== b;
    T && (b = r(b, I > 2 ? arguments[2] : void 0));
    var S = f(E),
        y = 0;
    if (S && !(this === _ && o(S))) for (m = (h = d(E, S)).next, n = v ? new this() : []; !(p = i(m, h)).done; y++) (g = T ? s(h, b, [p.value, y], !0) : p.value), c(n, y, g);
    else for (t = u(E), n = v ? new this(t) : _(t); t > y; y++) (g = T ? b(E[y], y) : E[y]), c(n, y, g);
    return (n.length = y), n;
};
