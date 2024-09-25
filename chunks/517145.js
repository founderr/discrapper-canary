var r = n(957578).Buffer,
    i = n(28704),
    a = n(136924).ec,
    o = n(223428),
    s = n(733345);
function l(e, t, n, a, s) {
    var l = o(n);
    if ('ec' === l.type) {
        if ('ecdsa' !== a && 'ecdsa/rsa' !== a) throw Error('wrong public key type');
        return u(e, t, l);
    }
    if ('dsa' === l.type) {
        if ('dsa' !== a) throw Error('wrong public key type');
        return c(e, t, l);
    }
    if ('rsa' !== a && 'ecdsa/rsa' !== a) throw Error('wrong public key type');
    t = r.concat([s, t]);
    for (var d = l.modulus.byteLength(), _ = [1], E = 0; t.length + _.length + 2 < d; ) _.push(255), E++;
    _.push(0);
    for (var f = -1; ++f < t.length; ) _.push(t[f]);
    _ = r.from(_);
    var h = i.mont(l.modulus);
    (e = (e = new i(e).toRed(h)).redPow(new i(l.publicExponent))), (e = r.from(e.fromRed().toArray()));
    var p = E < 8 ? 1 : 0;
    for (d = Math.min(e.length, _.length), e.length !== _.length && (p = 1), f = -1; ++f < d; ) p |= e[f] ^ _[f];
    return 0 === p;
}
function u(e, t, n) {
    var r = s[n.data.algorithm.curve.join('.')];
    if (!r) throw Error('unknown curve ' + n.data.algorithm.curve.join('.'));
    var i = new a(r),
        o = n.data.subjectPrivateKey.data;
    return i.verify(t, e, o);
}
function c(e, t, n) {
    var r = n.data.p,
        a = n.data.q,
        s = n.data.g,
        l = n.data.pub_key,
        u = o.signature.decode(e, 'der'),
        c = u.s,
        _ = u.r;
    d(c, a), d(_, a);
    var E = i.mont(r),
        f = c.invm(a);
    return (
        0 ===
        s
            .toRed(E)
            .redPow(new i(t).mul(f).mod(a))
            .fromRed()
            .mul(l.toRed(E).redPow(_.mul(f).mod(a)).fromRed())
            .mod(r)
            .mod(a)
            .cmp(_)
    );
}
function d(e, t) {
    if (0 >= e.cmpn(0) || e.cmp(t) >= t) throw Error('invalid sig');
}
e.exports = l;
