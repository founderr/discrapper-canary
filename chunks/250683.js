(n.byteLength = c), (n.toByteArray = f), (n.fromByteArray = p);
for (var r = [], i = [], a = 'undefined' != typeof Uint8Array ? Uint8Array : Array, s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0, l = s.length; o < l; ++o) (r[o] = s[o]), (i[s.charCodeAt(o)] = o);
function u(e) {
    var n = e.length;
    if (n % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var r = e.indexOf('=');
    -1 === r && (r = n);
    var i = r === n ? 0 : 4 - (r % 4);
    return [r, i];
}
function c(e) {
    var n = u(e),
        r = n[0],
        i = n[1];
    return ((r + i) * 3) / 4 - i;
}
function d(e, n, r) {
    return ((n + r) * 3) / 4 - r;
}
function f(e) {
    var n,
        r,
        s = u(e),
        o = s[0],
        l = s[1],
        c = new a(d(e, o, l)),
        f = 0,
        _ = l > 0 ? o - 4 : o;
    for (r = 0; r < _; r += 4) (n = (i[e.charCodeAt(r)] << 18) | (i[e.charCodeAt(r + 1)] << 12) | (i[e.charCodeAt(r + 2)] << 6) | i[e.charCodeAt(r + 3)]), (c[f++] = (n >> 16) & 255), (c[f++] = (n >> 8) & 255), (c[f++] = 255 & n);
    return 2 === l && ((n = (i[e.charCodeAt(r)] << 2) | (i[e.charCodeAt(r + 1)] >> 4)), (c[f++] = 255 & n)), 1 === l && ((n = (i[e.charCodeAt(r)] << 10) | (i[e.charCodeAt(r + 1)] << 4) | (i[e.charCodeAt(r + 2)] >> 2)), (c[f++] = (n >> 8) & 255), (c[f++] = 255 & n)), c;
}
function _(e) {
    return r[(e >> 18) & 63] + r[(e >> 12) & 63] + r[(e >> 6) & 63] + r[63 & e];
}
function h(e, n, r) {
    for (var i, a = [], s = n; s < r; s += 3) (i = ((e[s] << 16) & 16711680) + ((e[s + 1] << 8) & 65280) + (255 & e[s + 2])), a.push(_(i));
    return a.join('');
}
function p(e) {
    for (var n, i = e.length, a = i % 3, s = [], o = 16383, l = 0, u = i - a; l < u; l += o) s.push(h(e, l, l + o > u ? u : l + o));
    return 1 === a ? ((n = e[i - 1]), s.push(r[n >> 2] + r[(n << 4) & 63] + '==')) : 2 === a && ((n = (e[i - 2] << 8) + e[i - 1]), s.push(r[n >> 10] + r[(n >> 4) & 63] + r[(n << 2) & 63] + '=')), s.join('');
}
(i['-'.charCodeAt(0)] = 62), (i['_'.charCodeAt(0)] = 63);
