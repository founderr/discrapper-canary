var n = s(413135).Buffer,
    r = [255, 255, 26, 27, 28, 29, 30, 31, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255];
(t.encode = function (e) {
    !n.isBuffer(e) && (e = new n(e));
    var t,
        s,
        r = 0,
        i = 0,
        a = 0,
        o = 0;
    for (var c = new n(8 * ((s = Math.floor((t = e).length / 5)), t.length % 5 == 0 ? s : s + 1)); r < e.length; ) {
        var l = e[r];
        a > 3 ? ((o = ((o = l & (255 >> a)) << (a = (a + 5) % 8)) | ((r + 1 < e.length ? e[r + 1] : 0) >> (8 - a))), r++) : ((o = (l >> (8 - (a + 5))) & 31), 0 == (a = (a + 5) % 8) && r++), (c[i] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'.charCodeAt(o)), i++;
    }
    for (r = i; r < c.length; r++) c[r] = 61;
    return c;
}),
    (t.decode = function (e) {
        var t,
            s = 0,
            i = 0,
            a = 0;
        !n.isBuffer(e) && (e = new n(e));
        for (var o = new n(Math.ceil((5 * e.length) / 8)), c = 0; c < e.length && 61 != e[c]; c++) {
            var l = e[c] - 48;
            if (l < r.length) (i = r[l]), s <= 3 ? (0 == (s = (s + 5) % 8) ? ((t |= i), (o[a] = t), a++, (t = 0)) : (t |= 255 & (i << (8 - s)))) : ((t |= 255 & (i >>> (s = (s + 5) % 8))), (o[a] = t), a++, (t = 255 & (i << (8 - s))));
            else throw Error('Invalid input - it is not base32 encoded string');
        }
        return o.slice(0, a);
    });
