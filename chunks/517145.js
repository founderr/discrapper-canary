var i = r(957578).Buffer,
    a = r(28704),
    s = r(136924).ec,
    o = r(223428),
    l = r(733345);
function u(e, n, r, s, l) {
    var u = o(r);
    if ('ec' === u.type) {
        if ('ecdsa' !== s && 'ecdsa/rsa' !== s) throw Error('wrong public key type');
        return c(e, n, u);
    }
    if ('dsa' === u.type) {
        if ('dsa' !== s) throw Error('wrong public key type');
        return d(e, n, u);
    }
    if ('rsa' !== s && 'ecdsa/rsa' !== s) throw Error('wrong public key type');
    n = i.concat([l, n]);
    for (var f = u.modulus.byteLength(), _ = [1], h = 0; n.length + _.length + 2 < f; ) _.push(255), h++;
    _.push(0);
    for (var p = -1; ++p < n.length; ) _.push(n[p]);
    _ = i.from(_);
    var m = a.mont(u.modulus);
    (e = (e = new a(e).toRed(m)).redPow(new a(u.publicExponent))), (e = i.from(e.fromRed().toArray()));
    var g = h < 8 ? 1 : 0;
    for (f = Math.min(e.length, _.length), e.length !== _.length && (g = 1), p = -1; ++p < f; ) g |= e[p] ^ _[p];
    return 0 === g;
}
function c(e, n, r) {
    var i = l[r.data.algorithm.curve.join('.')];
    if (!i) throw Error('unknown curve ' + r.data.algorithm.curve.join('.'));
    var a = new s(i),
        o = r.data.subjectPrivateKey.data;
    return a.verify(n, e, o);
}
function d(e, n, r) {
    var i = r.data.p,
        s = r.data.q,
        l = r.data.g,
        u = r.data.pub_key,
        c = o.signature.decode(e, 'der'),
        d = c.s,
        _ = c.r;
    f(d, s), f(_, s);
    var h = a.mont(i),
        p = d.invm(s);
    return (
        0 ===
        l
            .toRed(h)
            .redPow(new a(n).mul(p).mod(s))
            .fromRed()
            .mul(u.toRed(h).redPow(_.mul(p).mod(s)).fromRed())
            .mod(i)
            .mod(s)
            .cmp(_)
    );
}
function f(e, n) {
    if (0 >= e.cmpn(0) || e.cmp(n) >= n) throw Error('invalid sig');
}
e.exports = u;
