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
        all: function (e) {
            var t = this,
                n = o.f(t),
                r = n.resolve,
                u = n.reject,
                c = s(function () {
                    var n = a(t.resolve),
                        o = [],
                        s = 0,
                        c = 1;
                    l(e, function (e) {
                        var a = s++,
                            l = !1;
                        c++,
                            i(n, t, e).then(function (e) {
                                !l && ((l = !0), (o[a] = e), --c || r(o));
                            }, u);
                    }),
                        --c || r(o);
                });
            return c.error && u(c.value), n.promise;
        }
    }
);
