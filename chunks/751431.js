var r = n(67867),
    i = n(294377),
    a = n(141603),
    o = n(342545),
    s = n(293303),
    l = n(56684),
    u = s('string-to-symbol-registry'),
    c = s('symbol-to-string-registry');
r(
    {
        target: 'Symbol',
        stat: !0,
        forced: !l
    },
    {
        for: function (e) {
            var t = o(e);
            if (a(u, t)) return u[t];
            var n = i('Symbol')(t);
            return (u[t] = n), (c[n] = t), n;
        }
    }
);
