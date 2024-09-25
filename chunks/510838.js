var r = n(957578).Buffer,
    i = n(294415),
    a = n(530917),
    o = n(136924).ec,
    s = n(28704),
    l = n(223428),
    u = n(733345);
function c(e, t, n, i, o) {
    var s = l(t);
    if (s.curve) {
        if ('ecdsa' !== i && 'ecdsa/rsa' !== i) throw Error('wrong private key type');
        return d(e, s);
    }
    if ('dsa' === s.type) {
        if ('dsa' !== i) throw Error('wrong private key type');
        return _(e, s, n);
    }
    if ('rsa' !== i && 'ecdsa/rsa' !== i) throw Error('wrong private key type');
    e = r.concat([o, e]);
    for (var u = s.modulus.byteLength(), c = [0, 1]; e.length + c.length + 1 < u; ) c.push(255);
    c.push(0);
    for (var E = -1; ++E < e.length; ) c.push(e[E]);
    return a(c, s);
}
function d(e, t) {
    var n = u[t.curve.join('.')];
    if (!n) throw Error('unknown curve ' + t.curve.join('.'));
    var i = new o(n).keyFromPrivate(t.privateKey).sign(e);
    return r.from(i.toDER());
}
function _(e, t, n) {
    for (var r, i = t.params.priv_key, a = t.params.p, o = t.params.q, l = t.params.g, u = new s(0), c = h(e, o).mod(o), d = !1, _ = f(i, o, e, n); !1 === d; )
        (u = I(l, (r = m(o, _, n)), a, o)),
            0 ===
                (d = r
                    .invm(o)
                    .imul(c.add(i.mul(u)))
                    .mod(o)).cmpn(0) && ((d = !1), (u = new s(0)));
    return E(u, d);
}
function E(e, t) {
    (e = e.toArray()), (t = t.toArray()), 128 & e[0] && (e = [0].concat(e)), 128 & t[0] && (t = [0].concat(t));
    var n = [48, e.length + t.length + 4, 2, e.length];
    return (n = n.concat(e, [2, t.length], t)), r.from(n);
}
function f(e, t, n, a) {
    if ((e = r.from(e.toArray())).length < t.byteLength()) {
        var o = r.alloc(t.byteLength() - e.length);
        e = r.concat([o, e]);
    }
    var s = n.length,
        l = p(n, t),
        u = r.alloc(s);
    u.fill(1);
    var c = r.alloc(s);
    return (
        (c = i(a, c)
            .update(u)
            .update(r.from([0]))
            .update(e)
            .update(l)
            .digest()),
        (u = i(a, c).update(u).digest()),
        (c = i(a, c)
            .update(u)
            .update(r.from([1]))
            .update(e)
            .update(l)
            .digest()),
        (u = i(a, c).update(u).digest()),
        {
            k: c,
            v: u
        }
    );
}
function h(e, t) {
    var n = new s(e),
        r = (e.length << 3) - t.bitLength();
    return r > 0 && n.ishrn(r), n;
}
function p(e, t) {
    e = (e = h(e, t)).mod(t);
    var n = r.from(e.toArray());
    if (n.length < t.byteLength()) {
        var i = r.alloc(t.byteLength() - n.length);
        n = r.concat([i, n]);
    }
    return n;
}
function m(e, t, n) {
    var a, o;
    do {
        for (a = r.alloc(0); 8 * a.length < e.bitLength(); ) (t.v = i(n, t.k).update(t.v).digest()), (a = r.concat([a, t.v]));
        (o = h(a, e)),
            (t.k = i(n, t.k)
                .update(t.v)
                .update(r.from([0]))
                .digest()),
            (t.v = i(n, t.k).update(t.v).digest());
    } while (-1 !== o.cmp(e));
    return o;
}
function I(e, t, n, r) {
    return e.toRed(s.mont(n)).redPow(t).fromRed().mod(r);
}
(e.exports = c), (e.exports.getKey = f), (e.exports.makeKey = m);
