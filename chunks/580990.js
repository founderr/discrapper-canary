var r = n(67867),
    i = n(141603),
    a = n(538769),
    o = n(858698),
    s = n(293303),
    l = n(56684),
    u = s('symbol-to-string-registry');
r(
    {
        target: 'Symbol',
        stat: !0,
        forced: !l
    },
    {
        keyFor: function (e) {
            if (!a(e)) throw TypeError(o(e) + ' is not a symbol');
            if (i(u, e)) return u[e];
        }
    }
);
