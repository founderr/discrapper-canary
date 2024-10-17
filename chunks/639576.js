var n = t(147018),
    a = t(345374),
    i = t(886960),
    f = t(49693),
    o = t(980855),
    l = t(299623),
    s = t(959318),
    u = Array,
    c = Math.max,
    v = Math.min;
n(
    {
        target: 'Array',
        proto: !0
    },
    {
        toSpliced: function (r, e) {
            var t,
                n,
                a,
                h,
                d = l(this),
                g = f(d),
                p = o(r, g),
                w = arguments.length,
                b = 0;
            for (0 === w ? (t = n = 0) : 1 === w ? ((t = 0), (n = g - p)) : ((t = w - 2), (n = v(c(s(e), 0), g - p))), h = u((a = i(g + t - n))); b < p; b++) h[b] = d[b];
            for (; b < p + t; b++) h[b] = arguments[b - p + 2];
            for (; b < a; b++) h[b] = d[b + n - t];
            return h;
        }
    }
),
    a('toSpliced');
