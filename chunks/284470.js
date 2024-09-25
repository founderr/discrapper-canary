var r = n(67867),
    i = n(821819),
    a = n(952256),
    o = n(982665),
    s = n(611345),
    l = n(474883),
    u = n(741674),
    c = n(256110),
    d = n(15507),
    _ = n(469624),
    E = n(360518),
    f = n(882708),
    h = E('isConcatSpreadable'),
    p =
        f >= 51 ||
        !i(function () {
            var e = [];
            return (e[h] = !1), e.concat()[0] !== e;
        }),
    m = function (e) {
        if (!o(e)) return !1;
        var t = e[h];
        return void 0 !== t ? !!t : a(e);
    };
r(
    {
        target: 'Array',
        proto: !0,
        arity: 1,
        forced: !p || !_('concat')
    },
    {
        concat: function (e) {
            var t,
                n,
                r,
                i,
                a,
                o = s(this),
                _ = d(o, 0),
                E = 0;
            for (t = -1, r = arguments.length; t < r; t++)
                if (((a = -1 === t ? o : arguments[t]), m(a))) for (u(E + (i = l(a))), n = 0; n < i; n++, E++) n in a && c(_, E, a[n]);
                else u(E + 1), c(_, E++, a);
            return (_.length = E), _;
        }
    }
);
