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
        race: function (e) {
            var t = this,
                n = o.f(t),
                r = n.reject,
                u = s(function () {
                    var o = a(t.resolve);
                    l(e, function (e) {
                        i(o, t, e).then(n.resolve, r);
                    });
                });
            return u.error && r(u.value), n.promise;
        }
    }
);
