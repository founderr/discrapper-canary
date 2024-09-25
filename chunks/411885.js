var r = n(67867),
    i = n(570596),
    a = n(548828),
    o = n(653457),
    s = n(139545),
    l = n(730427);
r(
    {
        target: 'Promise',
        stat: !0,
        forced: n(871785)
    },
    {
        allSettled: function (e) {
            var t = this,
                n = o.f(t),
                r = n.resolve,
                u = n.reject,
                c = s(function () {
                    var n = a(t.resolve),
                        o = [],
                        s = 0,
                        u = 1;
                    l(e, function (e) {
                        var a = s++,
                            l = !1;
                        u++,
                            i(n, t, e).then(
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (o[a] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --u || r(o));
                                },
                                function (e) {
                                    !l &&
                                        ((l = !0),
                                        (o[a] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --u || r(o));
                                }
                            );
                    }),
                        --u || r(o);
                });
            return c.error && u(c.value), n.promise;
        }
    }
);
