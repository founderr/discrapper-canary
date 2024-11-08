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
        h,
        p,
        m,
        g,
        E = a(e),
        v = l(this),
        I = arguments.length,
        S = I > 1 ? arguments[1] : void 0,
        b = void 0 !== S;
    b && (S = r(S, I > 2 ? arguments[2] : void 0));
    var T = f(E),
        y = 0;
    if (T && !(this === _ && o(T))) for (m = (p = d(E, T)).next, n = v ? new this() : []; !(h = i(m, p)).done; y++) (g = b ? s(p, S, [h.value, y], !0) : h.value), c(n, y, g);
    else for (t = u(E), n = v ? new this(t) : _(t); t > y; y++) (g = b ? S(E[y], y) : E[y]), c(n, y, g);
    return (n.length = y), n;
};
