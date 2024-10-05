var r = n(566885),
    i = n(926515),
    a = n(339718),
    s = n(627060),
    o = n(908355),
    l = n(933676),
    u = n(49693),
    c = n(182867),
    d = n(981971),
    _ = n(11697),
    E = Array;
e.exports = function (e) {
    var t,
        n,
        f,
        h,
        p,
        I,
        m = a(e),
        T = l(this),
        S = arguments.length,
        g = S > 1 ? arguments[1] : void 0,
        A = void 0 !== g;
    A && (g = r(g, S > 2 ? arguments[2] : void 0));
    var N = _(m),
        O = 0;
    if (N && !(this === E && o(N))) for (p = (h = d(m, N)).next, n = T ? new this() : []; !(f = i(p, h)).done; O++) (I = A ? s(h, g, [f.value, O], !0) : f.value), c(n, O, I);
    else for (t = u(m), n = T ? new this(t) : E(t); t > O; O++) (I = A ? g(m[O], O) : m[O]), c(n, O, I);
    return (n.length = O), n;
};
