var r = n(566885),
    i = n(926515),
    a = n(772425),
    o = n(339718),
    s = n(49693),
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
        m,
        I,
        T,
        g = a(this),
        S = o(e),
        A = arguments.length,
        v = A > 1 ? arguments[1] : void 0,
        N = void 0 !== v,
        O = u(S);
    if (O && !c(O)) for (T = (I = l(S, O)).next, S = []; !(m = i(T, I)).done; ) S.push(m.value);
    for (N && A > 2 && (v = r(v, arguments[2])), n = s(S), h = d((f = new (_(g))(n))), t = 0; n > t; t++) (p = N ? v(S[t], t) : S[t]), (f[t] = h ? E(p) : +p);
    return f;
};
