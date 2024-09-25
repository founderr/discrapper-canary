var r = n(67867),
    i = n(570596),
    a = n(730427),
    o = n(735471),
    s = n(548828),
    l = n(146321).Map;
r(
    {
        target: 'Map',
        stat: !0,
        forced: !0
    },
    {
        keyBy: function (e, t) {
            var n = new (o(this) ? this : l)();
            s(t);
            var r = s(n.set);
            return (
                a(e, function (e) {
                    i(r, n, t(e), e);
                }),
                n
            );
        }
    }
);
