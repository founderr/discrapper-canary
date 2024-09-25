var r = n(67867),
    i = n(570596),
    a = n(982665),
    o = n(28886),
    s = n(453556),
    l = n(65007),
    u = n(646948);
function c(e, t) {
    var n,
        r,
        d = arguments.length < 3 ? e : arguments[2];
    return o(e) === d ? e[t] : (n = l.f(e, t)) ? (s(n) ? n.value : void 0 === n.get ? void 0 : i(n.get, d)) : a((r = u(e))) ? c(r, t, d) : void 0;
}
r(
    {
        target: 'Reflect',
        stat: !0
    },
    { get: c }
);
