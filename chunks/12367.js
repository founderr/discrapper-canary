var r = n(566885),
    i = n(926515),
    a = n(772425),
    s = n(339718),
    o = n(49693),
    l = n(981971),
    u = n(11697),
    c = n(908355),
    d = n(536524),
    _ = n(192291).aTypedArrayConstructor,
    E = n(165915);
e.exports = function (e) {
    var t,
        n,
        f,
        h,
        p,
        I,
        m,
        T,
        S = a(this),
        g = s(e),
        A = arguments.length,
        N = A > 1 ? arguments[1] : void 0,
        O = void 0 !== N,
        R = u(g);
    if (R && !c(R)) for (T = (m = l(g, R)).next, g = []; !(I = i(T, m)).done; ) g.push(I.value);
    for (O && A > 2 && (N = r(N, arguments[2])), n = o(g), h = d((f = new (_(S))(n))), t = 0; n > t; t++) (p = O ? N(g[t], t) : g[t]), (f[t] = h ? E(p) : +p);
    return f;
};
