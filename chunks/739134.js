var i = r(223428),
    a = r(706178),
    s = r(108381),
    o = r(855467),
    l = r(972566),
    u = r(814033),
    c = r(895598),
    d = r(530917),
    f = r(957578).Buffer;
function _(e, n) {
    var r = e.modulus.byteLength(),
        i = n.length,
        c = s('sha1').update(f.alloc(0)).digest(),
        d = c.length,
        _ = 2 * d;
    if (i > r - _ - 2) throw Error('message too long');
    var h = f.alloc(r - i - _ - 2),
        p = r - d - 1,
        m = a(d),
        g = l(f.concat([c, h, f.alloc(1, 1), n], p), o(m, p)),
        E = l(m, o(g, d));
    return new u(f.concat([f.alloc(1), E, g], r));
}
function h(e, n, r) {
    var i,
        a = n.length,
        s = e.modulus.byteLength();
    if (a > s - 11) throw Error('message too long');
    return (i = r ? f.alloc(s - a - 3, 255) : p(s - a - 3)), new u(f.concat([f.from([0, r ? 1 : 2]), i, f.alloc(1), n], s));
}
function p(e) {
    for (var n, r = f.allocUnsafe(e), i = 0, s = a(2 * e), o = 0; i < e; ) o === s.length && ((s = a(2 * e)), (o = 0)), (n = s[o++]) && (r[i++] = n);
    return r;
}
e.exports = function (e, n, r) {
    a = e.padding ? e.padding : r ? 1 : 4;
    var a,
        s,
        o = i(e);
    if (4 === a) s = _(o, n);
    else if (1 === a) s = h(o, n, r);
    else if (3 === a) {
        if ((s = new u(n)).cmp(o.modulus) >= 0) throw Error('data too long for modulus');
    } else throw Error('unknown padding');
    return r ? d(s, o) : c(s, o);
};
