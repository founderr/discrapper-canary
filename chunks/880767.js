var i = r(957578).Buffer;
function a(e, n, r) {
    for (var i, a, o, l = -1, u = 8, c = 0; ++l < u; ) (i = e._cipher.encryptBlock(e._prev)), (a = n & (1 << (7 - l)) ? 128 : 0), (c += (128 & (o = i[0] ^ a)) >> l % 8), (e._prev = s(e._prev, r ? a : o));
    return c;
}
function s(e, n) {
    var r = e.length,
        a = -1,
        s = i.allocUnsafe(e.length);
    for (e = i.concat([e, i.from([n])]); ++a < r; ) s[a] = (e[a] << 1) | (e[a + 1] >> 7);
    return s;
}
n.encrypt = function (e, n, r) {
    for (var s = n.length, o = i.allocUnsafe(s), l = -1; ++l < s; ) o[l] = a(e, n[l], r);
    return o;
};
