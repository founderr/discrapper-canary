var r = n(67867),
    i = n(570596),
    a = n(548828),
    o = n(294377),
    s = n(653457),
    l = n(139545),
    u = n(730427),
    c = n(871785),
    d = 'No one promise resolved';
r(
    {
        target: 'Promise',
        stat: !0,
        forced: c
    },
    {
        any: function (e) {
            var t = this,
                n = o('AggregateError'),
                r = s.f(t),
                c = r.resolve,
                _ = r.reject,
                E = l(function () {
                    var r = a(t.resolve),
                        o = [],
                        s = 0,
                        l = 1,
                        E = !1;
                    u(e, function (e) {
                        var a = s++,
                            u = !1;
                        l++,
                            i(r, t, e).then(
                                function (e) {
                                    !u && !E && ((E = !0), c(e));
                                },
                                function (e) {
                                    !u && !E && ((u = !0), (o[a] = e), --l || _(new n(o, d)));
                                }
                            );
                    }),
                        --l || _(new n(o, d));
                });
            return E.error && _(E.value), r.promise;
        }
    }
);
