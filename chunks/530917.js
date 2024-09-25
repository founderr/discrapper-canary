var r = n(413135).Buffer,
    i = n(28704),
    a = n(706178);
function o(e) {
    var t = s(e);
    return {
        blinder: t.toRed(i.mont(e.modulus)).redPow(new i(e.publicExponent)).fromRed(),
        unblinder: t.invm(e.modulus)
    };
}
function s(e) {
    var t,
        n = e.modulus.byteLength();
    do t = new i(a(n));
    while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
    return t;
}
function l(e, t) {
    var n = o(t),
        a = t.modulus.byteLength(),
        s = new i(e).mul(n.blinder).umod(t.modulus),
        l = s.toRed(i.mont(t.prime1)),
        u = s.toRed(i.mont(t.prime2)),
        c = t.coefficient,
        d = t.prime1,
        _ = t.prime2,
        E = l.redPow(t.exponent1).fromRed(),
        f = u.redPow(t.exponent2).fromRed(),
        h = E.isub(f).imul(c).umod(d).imul(_);
    return f.iadd(h).imul(n.unblinder).umod(t.modulus).toArrayLike(r, 'be', a);
}
(l.getr = s), (e.exports = l);
