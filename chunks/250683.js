(t.byteLength = u), (t.toByteArray = d), (t.fromByteArray = f);
for (var n = [], r = [], i = 'undefined' != typeof Uint8Array ? Uint8Array : Array, a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/', o = 0, s = a.length; o < s; ++o) (n[o] = a[o]), (r[a.charCodeAt(o)] = o);
function l(e) {
    var t = e.length;
    if (t % 4 > 0) throw Error('Invalid string. Length must be a multiple of 4');
    var n = e.indexOf('=');
    -1 === n && (n = t);
    var r = n === t ? 0 : 4 - (n % 4);
    return [n, r];
}
function u(e) {
    var t = l(e),
        n = t[0],
        r = t[1];
    return ((n + r) * 3) / 4 - r;
}
function c(e, t, n) {
    return ((t + n) * 3) / 4 - n;
}
function d(e) {
    var t,
        n,
        a = l(e),
        o = a[0],
        s = a[1],
        u = new i(c(e, o, s)),
        d = 0,
        _ = s > 0 ? o - 4 : o;
    for (n = 0; n < _; n += 4) (t = (r[e.charCodeAt(n)] << 18) | (r[e.charCodeAt(n + 1)] << 12) | (r[e.charCodeAt(n + 2)] << 6) | r[e.charCodeAt(n + 3)]), (u[d++] = (t >> 16) & 255), (u[d++] = (t >> 8) & 255), (u[d++] = 255 & t);
    return 2 === s && ((t = (r[e.charCodeAt(n)] << 2) | (r[e.charCodeAt(n + 1)] >> 4)), (u[d++] = 255 & t)), 1 === s && ((t = (r[e.charCodeAt(n)] << 10) | (r[e.charCodeAt(n + 1)] << 4) | (r[e.charCodeAt(n + 2)] >> 2)), (u[d++] = (t >> 8) & 255), (u[d++] = 255 & t)), u;
}
function _(e) {
    return n[(e >> 18) & 63] + n[(e >> 12) & 63] + n[(e >> 6) & 63] + n[63 & e];
}
function E(e, t, n) {
    for (var r, i = [], a = t; a < n; a += 3) (r = ((e[a] << 16) & 16711680) + ((e[a + 1] << 8) & 65280) + (255 & e[a + 2])), i.push(_(r));
    return i.join('');
}
function f(e) {
    for (var t, r = e.length, i = r % 3, a = [], o = 16383, s = 0, l = r - i; s < l; s += o) a.push(E(e, s, s + o > l ? l : s + o));
    return 1 === i ? ((t = e[r - 1]), a.push(n[t >> 2] + n[(t << 4) & 63] + '==')) : 2 === i && ((t = (e[r - 2] << 8) + e[r - 1]), a.push(n[t >> 10] + n[(t >> 4) & 63] + n[(t << 2) & 63] + '=')), a.join('');
}
(r['-'.charCodeAt(0)] = 62), (r['_'.charCodeAt(0)] = 63);
