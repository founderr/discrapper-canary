var i = r(754793),
    a = !0,
    s = !0;
try {
    String.fromCharCode.apply(null, [0]);
} catch (e) {
    a = !1;
}
try {
    String.fromCharCode.apply(null, new Uint8Array(1));
} catch (e) {
    s = !1;
}
for (var o = new i.Buf8(256), l = 0; l < 256; l++) o[l] = l >= 252 ? 6 : l >= 248 ? 5 : l >= 240 ? 4 : l >= 224 ? 3 : l >= 192 ? 2 : 1;
function u(e, n) {
    if (n < 65534 && ((e.subarray && s) || (!e.subarray && a))) return String.fromCharCode.apply(null, i.shrinkBuf(e, n));
    for (var r = '', o = 0; o < n; o++) r += String.fromCharCode(e[o]);
    return r;
}
(o[254] = o[254] = 1),
    (n.string2buf = function (e) {
        var n,
            r,
            a,
            s,
            o,
            l = e.length,
            u = 0;
        for (s = 0; s < l; s++) (64512 & (r = e.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (a = e.charCodeAt(s + 1))) == 56320 && ((r = 65536 + ((r - 55296) << 10) + (a - 56320)), s++), (u += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4);
        for (o = 0, n = new i.Buf8(u), s = 0; o < u; s++) (64512 & (r = e.charCodeAt(s))) == 55296 && s + 1 < l && (64512 & (a = e.charCodeAt(s + 1))) == 56320 && ((r = 65536 + ((r - 55296) << 10) + (a - 56320)), s++), r < 128 ? (n[o++] = r) : (r < 2048 ? (n[o++] = 192 | (r >>> 6)) : (r < 65536 ? (n[o++] = 224 | (r >>> 12)) : ((n[o++] = 240 | (r >>> 18)), (n[o++] = 128 | ((r >>> 12) & 63))), (n[o++] = 128 | ((r >>> 6) & 63))), (n[o++] = 128 | (63 & r)));
        return n;
    }),
    (n.buf2binstring = function (e) {
        return u(e, e.length);
    }),
    (n.binstring2buf = function (e) {
        for (var n = new i.Buf8(e.length), r = 0, a = n.length; r < a; r++) n[r] = e.charCodeAt(r);
        return n;
    }),
    (n.buf2string = function (e, n) {
        var r,
            i,
            a,
            s,
            l = n || e.length,
            c = Array(2 * l);
        for (i = 0, r = 0; r < l; ) {
            if ((a = e[r++]) < 128) {
                c[i++] = a;
                continue;
            }
            if ((s = o[a]) > 4) {
                (c[i++] = 65533), (r += s - 1);
                continue;
            }
            for (a &= 2 === s ? 31 : 3 === s ? 15 : 7; s > 1 && r < l; ) (a = (a << 6) | (63 & e[r++])), s--;
            if (s > 1) {
                c[i++] = 65533;
                continue;
            }
            a < 65536 ? (c[i++] = a) : ((a -= 65536), (c[i++] = 55296 | ((a >> 10) & 1023)), (c[i++] = 56320 | (1023 & a)));
        }
        return u(c, i);
    }),
    (n.utf8border = function (e, n) {
        var r;
        for ((n = n || e.length) > e.length && (n = e.length), r = n - 1; r >= 0 && (192 & e[r]) == 128; ) r--;
        return r < 0 || 0 === r ? n : r + o[e[r]] > n ? r : n;
    });
