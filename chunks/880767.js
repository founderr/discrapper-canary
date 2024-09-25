var r = n(957578).Buffer;
function i(e, t, n) {
    for (var r, i, o, s = -1, l = 8, u = 0; ++s < l; ) (r = e._cipher.encryptBlock(e._prev)), (i = t & (1 << (7 - s)) ? 128 : 0), (u += (128 & (o = r[0] ^ i)) >> s % 8), (e._prev = a(e._prev, n ? i : o));
    return u;
}
function a(e, t) {
    var n = e.length,
        i = -1,
        a = r.allocUnsafe(e.length);
    for (e = r.concat([e, r.from([t])]); ++i < n; ) a[i] = (e[i] << 1) | (e[i + 1] >> 7);
    return a;
}
t.encrypt = function (e, t, n) {
    for (var a = t.length, o = r.allocUnsafe(a), s = -1; ++s < a; ) o[s] = i(e, t[s], n);
    return o;
};
