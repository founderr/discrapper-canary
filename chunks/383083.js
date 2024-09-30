var n = t(413135).Buffer,
    a = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
(r.encode = function (e) {
    !n.isBuffer(e) && (e = new n(e));
    var r,
        t,
        a = 0,
        i = 0,
        o = 0,
        f = 0;
    for (var s = new n(8 * ((t = Math.floor((r = e).length / 5)), r.length % 5 == 0 ? t : t + 1)); a < e.length; ) {
        var l = e[a];
        o > 3 ? ((f = ((f = l & (255 >> o)) << (o = (o + 5) % 8)) | ((a + 1 < e.length ? e[a + 1] : 0) >> (8 - o))), a++) : ((f = (l >> (8 - (o + 5))) & 31), 0 == (o = (o + 5) % 8) && a++), (s[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(f)), i++;
    }
    for (a = i; a < s.length; a++) s[a] = 61;
    return s;
}),
    (r.decode = function (e) {
        var r,
            t = 0,
            i = 0,
            o = 0;
        !n.isBuffer(e) && (e = new n(e));
        for (var f = new n(Math.ceil((5 * e.length) / 8)), s = 0; s < e.length && 61 != e[s]; s++) {
            var l = e[s] - 48;
            if (l < a.length) (i = a[l]), t <= 3 ? (0 == (t = (t + 5) % 8) ? ((r |= i), (f[o] = r), o++, (r = 0)) : (r |= 255 & (i << (8 - t)))) : ((r |= 255 & (i >>> (t = (t + 5) % 8))), (f[o] = r), o++, (r = 255 & (i << (8 - t))));
            else throw Error('Invalid input - it is not base32 encoded string');
        }
        return f.slice(0, o);
    });
