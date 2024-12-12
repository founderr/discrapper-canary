var i = r(147018),
    a = r(926515),
    s = r(526988),
    o = r(213897),
    l = r(532055),
    u = r(71480);
i(
    {
        target: 'Promise',
        stat: !0,
        forced: r(246582)
    },
    {
        allSettled: function (e) {
            var n = this,
                r = o.f(n),
                i = r.resolve,
                c = r.reject,
                d = l(function () {
                    var r = s(n.resolve),
                        o = [],
                        l = 0,
                        c = 1;
                    u(e, function (e) {
                        var s = l++,
                            u = !1;
                        c++,
                            a(r, n, e).then(
                                function (e) {
                                    !u &&
                                        ((u = !0),
                                        (o[s] = {
                                            status: 'fulfilled',
                                            value: e
                                        }),
                                        --c || i(o));
                                },
                                function (e) {
                                    !u &&
                                        ((u = !0),
                                        (o[s] = {
                                            status: 'rejected',
                                            reason: e
                                        }),
                                        --c || i(o));
                                }
                            );
                    }),
                        --c || i(o);
                });
            return d.error && c(d.value), r.promise;
        }
    }
);
