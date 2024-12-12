var i = r(957578).Buffer,
    a = r(294415),
    s = r(530917),
    o = r(136924).ec,
    l = r(28704),
    u = r(223428),
    c = r(733345);
function d(e, n, r, a, o) {
    var l = u(n);
    if (l.curve) {
        if ('ecdsa' !== a && 'ecdsa/rsa' !== a) throw Error('wrong private key type');
        return f(e, l);
    }
    if ('dsa' === l.type) {
        if ('dsa' !== a) throw Error('wrong private key type');
        return _(e, l, r);
    }
    if ('rsa' !== a && 'ecdsa/rsa' !== a) throw Error('wrong private key type');
    e = i.concat([o, e]);
    for (var c = l.modulus.byteLength(), d = [0, 1]; e.length + d.length + 1 < c; ) d.push(255);
    d.push(0);
    for (var h = -1; ++h < e.length; ) d.push(e[h]);
    return s(d, l);
}
function f(e, n) {
    var r = c[n.curve.join('.')];
    if (!r) throw Error('unknown curve ' + n.curve.join('.'));
    var a = new o(r).keyFromPrivate(n.privateKey).sign(e);
    return i.from(a.toDER());
}
function _(e, n, r) {
    for (var i, a = n.params.priv_key, s = n.params.p, o = n.params.q, u = n.params.g, c = new l(0), d = m(e, o).mod(o), f = !1, _ = p(a, o, e, r); !1 === f; )
        (c = v(u, (i = E(o, _, r)), s, o)),
            0 ===
                (f = i
                    .invm(o)
                    .imul(d.add(a.mul(c)))
                    .mod(o)).cmpn(0) && ((f = !1), (c = new l(0)));
    return h(c, f);
}
function h(e, n) {
    (e = e.toArray()), (n = n.toArray()), 128 & e[0] && (e = [0].concat(e)), 128 & n[0] && (n = [0].concat(n));
    var r = [48, e.length + n.length + 4, 2, e.length];
    return (r = r.concat(e, [2, n.length], n)), i.from(r);
}
function p(e, n, r, s) {
    if ((e = i.from(e.toArray())).length < n.byteLength()) {
        var o = i.alloc(n.byteLength() - e.length);
        e = i.concat([o, e]);
    }
    var l = r.length,
        u = g(r, n),
        c = i.alloc(l);
    c.fill(1);
    var d = i.alloc(l);
    return (
        (d = a(s, d)
            .update(c)
            .update(i.from([0]))
            .update(e)
            .update(u)
            .digest()),
        (c = a(s, d).update(c).digest()),
        (d = a(s, d)
            .update(c)
            .update(i.from([1]))
            .update(e)
            .update(u)
            .digest()),
        (c = a(s, d).update(c).digest()),
        {
            k: d,
            v: c
        }
    );
}
function m(e, n) {
    var r = new l(e),
        i = (e.length << 3) - n.bitLength();
    return i > 0 && r.ishrn(i), r;
}
function g(e, n) {
    e = (e = m(e, n)).mod(n);
    var r = i.from(e.toArray());
    if (r.length < n.byteLength()) {
        var a = i.alloc(n.byteLength() - r.length);
        r = i.concat([a, r]);
    }
    return r;
}
function E(e, n, r) {
    var s, o;
    do {
        for (s = i.alloc(0); 8 * s.length < e.bitLength(); ) (n.v = a(r, n.k).update(n.v).digest()), (s = i.concat([s, n.v]));
        (o = m(s, e)),
            (n.k = a(r, n.k)
                .update(n.v)
                .update(i.from([0]))
                .digest()),
            (n.v = a(r, n.k).update(n.v).digest());
    } while (-1 !== o.cmp(e));
    return o;
}
function v(e, n, r, i) {
    return e.toRed(l.mont(r)).redPow(n).fromRed().mod(i);
}
(e.exports = d), (e.exports.getKey = p), (e.exports.makeKey = E);
