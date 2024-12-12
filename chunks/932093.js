(n.read = function (e, n, r, i, a) {
    var s,
        o,
        l = 8 * a - i - 1,
        u = (1 << l) - 1,
        c = u >> 1,
        d = -7,
        f = r ? a - 1 : 0,
        _ = r ? -1 : 1,
        h = e[n + f];
    for (f += _, s = h & ((1 << -d) - 1), h >>= -d, d += l; d > 0; s = 256 * s + e[n + f], f += _, d -= 8);
    for (o = s & ((1 << -d) - 1), s >>= -d, d += i; d > 0; o = 256 * o + e[n + f], f += _, d -= 8);
    if (0 === s) s = 1 - c;
    else {
        if (s === u) return o ? NaN : (1 / 0) * (h ? -1 : 1);
        (o += Math.pow(2, i)), (s -= c);
    }
    return (h ? -1 : 1) * o * Math.pow(2, s - i);
}),
    (n.write = function (e, n, r, i, a, s) {
        var o,
            l,
            u,
            c = 8 * s - a - 1,
            d = (1 << c) - 1,
            f = d >> 1,
            _ = 23 === a ? 5.960464477539062e-8 : 0,
            h = i ? 0 : s - 1,
            p = i ? 1 : -1,
            m = n < 0 || (0 === n && 1 / n < 0) ? 1 : 0;
        for (isNaN((n = Math.abs(n))) || n === 1 / 0 ? ((l = isNaN(n) ? 1 : 0), (o = d)) : ((o = Math.floor(Math.log(n) / Math.LN2)), n * (u = Math.pow(2, -o)) < 1 && (o--, (u *= 2)), o + f >= 1 ? (n += _ / u) : (n += _ * Math.pow(2, 1 - f)), n * u >= 2 && (o++, (u /= 2)), o + f >= d ? ((l = 0), (o = d)) : o + f >= 1 ? ((l = (n * u - 1) * Math.pow(2, a)), (o += f)) : ((l = n * Math.pow(2, f - 1) * Math.pow(2, a)), (o = 0))); a >= 8; e[r + h] = 255 & l, h += p, l /= 256, a -= 8);
        for (o = (o << a) | l, c += a; c > 0; e[r + h] = 255 & o, h += p, o /= 256, c -= 8);
        e[r + h - p] |= 128 * m;
    });
