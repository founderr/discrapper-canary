var r = n(413135).Buffer,
    i = n(28704),
    a = n(706178);
function s(e) {
    var t,
        n = e.modulus.byteLength();
    do t = new i(a(n));
    while (t.cmp(e.modulus) >= 0 || !t.umod(e.prime1) || !t.umod(e.prime2));
    return t;
}
function o(e, t) {
    var n,
        a,
        o = {
            blinder: (a = s((n = t))).toRed(i.mont(n.modulus)).redPow(new i(n.publicExponent)).fromRed(),
            unblinder: a.invm(n.modulus)
        },
        l = t.modulus.byteLength(),
        u = new i(e).mul(o.blinder).umod(t.modulus),
        c = u.toRed(i.mont(t.prime1)),
        d = u.toRed(i.mont(t.prime2)),
        f = t.coefficient,
        _ = t.prime1,
        h = t.prime2,
        p = c.redPow(t.exponent1).fromRed(),
        m = d.redPow(t.exponent2).fromRed(),
        g = p.isub(m).imul(f).umod(_).imul(h);
    return m.iadd(g).imul(o.unblinder).umod(t.modulus).toArrayLike(r, 'be', l);
}
(o.getr = s), (e.exports = o);
