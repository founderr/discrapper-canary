var r = n(223428),
    i = n(706178),
    a = n(108381),
    o = n(855467),
    s = n(972566),
    l = n(814033),
    u = n(895598),
    c = n(530917),
    d = n(957578).Buffer;
function _(e, t) {
    var n = e.modulus.byteLength(),
        r = t.length,
        u = a('sha1').update(d.alloc(0)).digest(),
        c = u.length,
        _ = 2 * c;
    if (r > n - _ - 2) throw Error('message too long');
    var E = d.alloc(n - r - _ - 2),
        f = n - c - 1,
        h = i(c),
        p = s(d.concat([u, E, d.alloc(1, 1), t], f), o(h, f)),
        m = s(h, o(p, c));
    return new l(d.concat([d.alloc(1), m, p], n));
}
function E(e, t, n) {
    var r,
        i = t.length,
        a = e.modulus.byteLength();
    if (i > a - 11) throw Error('message too long');
    return (r = n ? d.alloc(a - i - 3, 255) : f(a - i - 3)), new l(d.concat([d.from([0, n ? 1 : 2]), r, d.alloc(1), t], a));
}
function f(e) {
    for (var t, n = d.allocUnsafe(e), r = 0, a = i(2 * e), o = 0; r < e; ) o === a.length && ((a = i(2 * e)), (o = 0)), (t = a[o++]) && (n[r++] = t);
    return n;
}
e.exports = function (e, t, n) {
    i = e.padding ? e.padding : n ? 1 : 4;
    var i,
        a,
        o = r(e);
    if (4 === i) a = _(o, t);
    else if (1 === i) a = E(o, t, n);
    else if (3 === i) {
        if ((a = new l(t)).cmp(o.modulus) >= 0) throw Error('data too long for modulus');
    } else throw Error('unknown padding');
    return n ? c(a, o) : u(a, o);
};
