var r = n(67867),
    i = n(96403),
    a = n(548828),
    o = n(463374),
    s = n(730427),
    l = n(146321),
    u = n(414629),
    c = l.Map,
    d = l.has,
    _ = l.get,
    E = l.set,
    f = i([].push);
r(
    {
        target: 'Map',
        stat: !0,
        forced: u
    },
    {
        groupBy: function (e, t) {
            o(e), a(t);
            var n = new c(),
                r = 0;
            return (
                s(e, function (e) {
                    var i = t(e, r++);
                    d(n, i) ? f(_(n, i), e) : E(n, i, [e]);
                }),
                n
            );
        }
    }
);
