var i = r(413135).Buffer,
    a = r(28704),
    s = r(706178);
function o(e) {
    var n = l(e);
    return {
        blinder: n.toRed(a.mont(e.modulus)).redPow(new a(e.publicExponent)).fromRed(),
        unblinder: n.invm(e.modulus)
    };
}
function l(e) {
    var n,
        r = e.modulus.byteLength();
    do n = new a(s(r));
    while (n.cmp(e.modulus) >= 0 || !n.umod(e.prime1) || !n.umod(e.prime2));
    return n;
}
function u(e, n) {
    var r = o(n),
        s = n.modulus.byteLength(),
        l = new a(e).mul(r.blinder).umod(n.modulus),
        u = l.toRed(a.mont(n.prime1)),
        c = l.toRed(a.mont(n.prime2)),
        d = n.coefficient,
        f = n.prime1,
        _ = n.prime2,
        h = u.redPow(n.exponent1).fromRed(),
        p = c.redPow(n.exponent2).fromRed(),
        m = h.isub(p).imul(d).umod(f).imul(_);
    return p.iadd(m).imul(r.unblinder).umod(n.modulus).toArrayLike(i, 'be', s);
}
(u.getr = l), (e.exports = u);
