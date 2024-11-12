var r = n(957578).Buffer,
    i = n(28704),
    a = n(136924).ec,
    s = n(223428),
    o = n(733345);
function l(e, t) {
    if (0 >= e.cmpn(0) || e.cmp(t) >= t) throw Error('invalid sig');
}
e.exports = function (e, t, n, u, c) {
    var d = s(n);
    if ('ec' === d.type) {
        if ('ecdsa' !== u && 'ecdsa/rsa' !== u) throw Error('wrong public key type');
        return (function (e, t, n) {
            var r = o[n.data.algorithm.curve.join('.')];
            if (!r) throw Error('unknown curve ' + n.data.algorithm.curve.join('.'));
            var i = new a(r),
                s = n.data.subjectPrivateKey.data;
            return i.verify(t, e, s);
        })(e, t, d);
    }
    if ('dsa' === d.type) {
        if ('dsa' !== u) throw Error('wrong public key type');
        return (function (e, t, n) {
            var r = n.data.p,
                a = n.data.q,
                o = n.data.g,
                u = n.data.pub_key,
                c = s.signature.decode(e, 'der'),
                d = c.s,
                f = c.r;
            l(d, a), l(f, a);
            var _ = i.mont(r),
                p = d.invm(a);
            return (
                0 ===
                o
                    .toRed(_)
                    .redPow(new i(t).mul(p).mod(a))
                    .fromRed()
                    .mul(u.toRed(_).redPow(f.mul(p).mod(a)).fromRed())
                    .mod(r)
                    .mod(a)
                    .cmp(f)
            );
        })(e, t, d);
    }
    if ('rsa' !== u && 'ecdsa/rsa' !== u) throw Error('wrong public key type');
    t = r.concat([c, t]);
    for (var f = d.modulus.byteLength(), _ = [1], p = 0; t.length + _.length + 2 < f; ) _.push(255), p++;
    _.push(0);
    for (var h = -1; ++h < t.length; ) _.push(t[h]);
    _ = r.from(_);
    var m = i.mont(d.modulus);
    (e = (e = new i(e).toRed(m)).redPow(new i(d.publicExponent))), (e = r.from(e.fromRed().toArray()));
    var g = p < 8 ? 1 : 0;
    for (f = Math.min(e.length, _.length), e.length !== _.length && (g = 1), h = -1; ++h < f; ) g |= e[h] ^ _[h];
    return 0 === g;
};
