var r = n(476508),
    i = n(570596),
    a = n(611345),
    o = n(925232),
    s = n(987100),
    l = n(571240),
    u = n(474883),
    c = n(256110),
    d = n(86930),
    _ = n(749915),
    E = Array;
e.exports = function (e) {
    var t,
        n,
        f,
        h,
        p,
        m,
        I = a(e),
        T = l(this),
        g = arguments.length,
        S = g > 1 ? arguments[1] : void 0,
        A = void 0 !== S;
    A && (S = r(S, g > 2 ? arguments[2] : void 0));
    var v = _(I),
        N = 0;
    if (v && !(this === E && s(v))) for (p = (h = d(I, v)).next, n = T ? new this() : []; !(f = i(p, h)).done; N++) (m = A ? o(h, S, [f.value, N], !0) : f.value), c(n, N, m);
    else for (t = u(I), n = T ? new this(t) : E(t); t > N; N++) (m = A ? S(I[N], N) : I[N]), c(n, N, m);
    return (n.length = N), n;
};
