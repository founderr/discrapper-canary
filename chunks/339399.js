var r = n(796774),
    i = n(680625),
    a = Array,
    s = Math.abs,
    o = Math.pow,
    l = Math.floor,
    u = Math.log,
    c = Math.LN2,
    d = function (e) {
        var t = i(e),
            n = s(e - t);
        return n > 0.5 || (0.5 === n && t % 2 != 0) ? t + r(e) : t;
    };
e.exports = {
    pack: function (e, t, n) {
        var r,
            i,
            _,
            E = a(n),
            f = 8 * n - t - 1,
            h = (1 << f) - 1,
            p = h >> 1,
            I = 23 === t ? o(2, -24) - o(2, -77) : 0,
            m = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0,
            T = 0;
        for ((e = s(e)) != e || e === 1 / 0 ? ((i = e != e ? 1 : 0), (r = h)) : ((_ = o(2, -(r = l(u(e) / c)))), e * _ < 1 && (r--, (_ *= 2)), r + p >= 1 ? (e += I / _) : (e += I * o(2, 1 - p)), e * _ >= 2 && (r++, (_ /= 2)), r + p >= h ? ((i = 0), (r = h)) : r + p >= 1 ? ((i = d((e * _ - 1) * o(2, t))), (r += p)) : ((i = d(e * o(2, p - 1) * o(2, t))), (r = 0))); t >= 8; ) (E[T++] = 255 & i), (i /= 256), (t -= 8);
        for (r = (r << t) | i, f += t; f > 0; ) (E[T++] = 255 & r), (r /= 256), (f -= 8);
        return (E[--T] |= 128 * m), E;
    },
    unpack: function (e, t) {
        var n,
            r = e.length,
            i = 8 * r - t - 1,
            a = (1 << i) - 1,
            s = a >> 1,
            l = i - 7,
            u = r - 1,
            c = e[u--],
            d = 127 & c;
        for (c >>= 7; l > 0; ) (d = 256 * d + e[u--]), (l -= 8);
        for (n = d & ((1 << -l) - 1), d >>= -l, l += t; l > 0; ) (n = 256 * n + e[u--]), (l -= 8);
        if (0 === d) d = 1 - s;
        else {
            if (d === a) return n ? NaN : c ? -1 / 0 : 1 / 0;
            (n += o(2, t)), (d -= s);
        }
        return (c ? -1 : 1) * n * o(2, d - t);
    }
};
