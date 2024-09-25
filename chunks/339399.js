var r = n(796774),
    i = n(680625),
    a = Array,
    o = Math.abs,
    s = Math.pow,
    l = Math.floor,
    u = Math.log,
    c = Math.LN2,
    d = function (e) {
        var t = i(e),
            n = o(e - t);
        return n > 0.5 || (0.5 === n && t % 2 != 0) ? t + r(e) : t;
    },
    _ = function (e, t, n) {
        var r,
            i,
            _,
            E = a(n),
            f = 8 * n - t - 1,
            h = (1 << f) - 1,
            p = h >> 1,
            m = 23 === t ? s(2, -24) - s(2, -77) : 0,
            I = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
            T = 0;
        for ((e = o(e)) != e || e === 1 / 0 ? ((i = e != e ? 1 : 0), (r = h)) : ((_ = s(2, -(r = l(u(e) / c)))), e * _ < 1 && (r--, (_ *= 2)), r + p >= 1 ? (e += m / _) : (e += m * s(2, 1 - p)), e * _ >= 2 && (r++, (_ /= 2)), r + p >= h ? ((i = 0), (r = h)) : r + p >= 1 ? ((i = d((e * _ - 1) * s(2, t))), (r += p)) : ((i = d(e * s(2, p - 1) * s(2, t))), (r = 0))); t >= 8; ) (E[T++] = 255 & i), (i /= 256), (t -= 8);
        for (r = (r << t) | i, f += t; f > 0; ) (E[T++] = 255 & r), (r /= 256), (f -= 8);
        return (E[--T] |= 128 * I), E;
    },
    E = function (e, t) {
        var n,
            r = e.length,
            i = 8 * r - t - 1,
            a = (1 << i) - 1,
            o = a >> 1,
            l = i - 7,
            u = r - 1,
            c = e[u--],
            d = 127 & c;
        for (c >>= 7; l > 0; ) (d = 256 * d + e[u--]), (l -= 8);
        for (n = d & ((1 << -l) - 1), d >>= -l, l += t; l > 0; ) (n = 256 * n + e[u--]), (l -= 8);
        if (0 === d) d = 1 - o;
        else {
            if (d === a) return n ? NaN : c ? -1 / 0 : 1 / 0;
            (n += s(2, t)), (d -= o);
        }
        return (c ? -1 : 1) * n * s(2, d - t);
    };
e.exports = {
    pack: _,
    unpack: E
};
