var i = r(242474),
    a = r(780177),
    s = r(737372),
    o = r(109426),
    l = r(245413);
function u(e, n) {
    if (s[(e = e.toLowerCase())]) (r = s[e].key), (i = s[e].iv);
    else if (o[e]) (r = 8 * o[e].key), (i = o[e].iv);
    else throw TypeError('invalid suite type');
    var r,
        i,
        a = l(n, !1, r, i);
    return d(e, a.key, a.iv);
}
function c(e, n) {
    if (s[(e = e.toLowerCase())]) (r = s[e].key), (i = s[e].iv);
    else if (o[e]) (r = 8 * o[e].key), (i = o[e].iv);
    else throw TypeError('invalid suite type');
    var r,
        i,
        a = l(n, !1, r, i);
    return f(e, a.key, a.iv);
}
function d(e, n, r) {
    if (s[(e = e.toLowerCase())]) return a.createCipheriv(e, n, r);
    if (o[e])
        return new i({
            key: n,
            iv: r,
            mode: e
        });
    throw TypeError('invalid suite type');
}
function f(e, n, r) {
    if (s[(e = e.toLowerCase())]) return a.createDecipheriv(e, n, r);
    if (o[e])
        return new i({
            key: n,
            iv: r,
            mode: e,
            decrypt: !0
        });
    throw TypeError('invalid suite type');
}
function _() {
    return Object.keys(o).concat(a.getCiphers());
}
(n.createCipher = n.Cipher = u), (n.createCipheriv = n.Cipheriv = d), (n.createDecipher = n.Decipher = c), (n.createDecipheriv = n.Decipheriv = f), (n.listCiphers = n.getCiphers = _);
