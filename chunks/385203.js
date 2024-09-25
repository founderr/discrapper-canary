var r = n(223428),
    i = n(855467),
    a = n(972566),
    o = n(814033),
    s = n(530917),
    l = n(108381),
    u = n(895598),
    c = n(957578).Buffer;
function d(e, t) {
    var n = e.modulus.byteLength(),
        r = l('sha1').update(c.alloc(0)).digest(),
        o = r.length;
    if (0 !== t[0]) throw Error('decryption error');
    var s = t.slice(1, o + 1),
        u = t.slice(o + 1),
        d = a(s, i(u, o)),
        _ = a(u, i(d, n - o - 1));
    if (E(r, _.slice(0, o))) throw Error('decryption error');
    for (var f = o; 0 === _[f]; ) f++;
    if (1 !== _[f++]) throw Error('decryption error');
    return _.slice(f);
}
function _(e, t, n) {
    for (var r = t.slice(0, 2), i = 2, a = 0; 0 !== t[i++]; )
        if (i >= t.length) {
            a++;
            break;
        }
    var o = t.slice(2, i - 1);
    if (((('0002' !== r.toString('hex') && !n) || ('0001' !== r.toString('hex') && n)) && a++, o.length < 8 && a++, a)) throw Error('decryption error');
    return t.slice(i);
}
function E(e, t) {
    (e = c.from(e)), (t = c.from(t));
    var n = 0,
        r = e.length;
    e.length !== t.length && (n++, (r = Math.min(e.length, t.length)));
    for (var i = -1; ++i < r; ) n += e[i] ^ t[i];
    return n;
}
e.exports = function (e, t, n) {
    i = e.padding ? e.padding : n ? 1 : 4;
    var i,
        a,
        l = r(e),
        E = l.modulus.byteLength();
    if (t.length > E || new o(t).cmp(l.modulus) >= 0) throw Error('decryption error');
    a = n ? u(new o(t), l) : s(t, l);
    var f = c.alloc(E - a.length);
    if (((a = c.concat([f, a], E)), 4 === i)) return d(l, a);
    if (1 === i) return _(l, a, n);
    if (3 === i) return a;
    else throw Error('unknown padding');
};
