var i = r(223428),
    a = r(855467),
    s = r(972566),
    o = r(814033),
    l = r(530917),
    u = r(108381),
    c = r(895598),
    d = r(957578).Buffer;
function f(e, n) {
    var r = e.modulus.byteLength(),
        i = u('sha1').update(d.alloc(0)).digest(),
        o = i.length;
    if (0 !== n[0]) throw Error('decryption error');
    var l = n.slice(1, o + 1),
        c = n.slice(o + 1),
        f = s(l, a(c, o)),
        _ = s(c, a(f, r - o - 1));
    if (h(i, _.slice(0, o))) throw Error('decryption error');
    for (var p = o; 0 === _[p]; ) p++;
    if (1 !== _[p++]) throw Error('decryption error');
    return _.slice(p);
}
function _(e, n, r) {
    for (var i = n.slice(0, 2), a = 2, s = 0; 0 !== n[a++]; )
        if (a >= n.length) {
            s++;
            break;
        }
    var o = n.slice(2, a - 1);
    if (((('0002' !== i.toString('hex') && !r) || ('0001' !== i.toString('hex') && r)) && s++, o.length < 8 && s++, s)) throw Error('decryption error');
    return n.slice(a);
}
function h(e, n) {
    (e = d.from(e)), (n = d.from(n));
    var r = 0,
        i = e.length;
    e.length !== n.length && (r++, (i = Math.min(e.length, n.length)));
    for (var a = -1; ++a < i; ) r += e[a] ^ n[a];
    return r;
}
e.exports = function (e, n, r) {
    a = e.padding ? e.padding : r ? 1 : 4;
    var a,
        s,
        u = i(e),
        h = u.modulus.byteLength();
    if (n.length > h || new o(n).cmp(u.modulus) >= 0) throw Error('decryption error');
    s = r ? c(new o(n), u) : l(n, u);
    var p = d.alloc(h - s.length);
    if (((s = d.concat([p, s], h)), 4 === a)) return f(u, s);
    if (1 === a) return _(u, s, r);
    if (3 === a) return s;
    else throw Error('unknown padding');
};
