var r = n(67867),
    i = n(294377),
    a = n(156741),
    o = n(420926),
    s = n(831496),
    l = n(28886),
    u = n(982665),
    c = n(224106),
    d = n(821819),
    _ = i('Reflect', 'construct'),
    E = Object.prototype,
    f = [].push,
    h = d(function () {
        function e() {}
        return !(_(function () {}, [], e) instanceof e);
    }),
    p = !d(function () {
        _(function () {});
    }),
    m = h || p;
r(
    {
        target: 'Reflect',
        stat: !0,
        forced: m,
        sham: m
    },
    {
        construct: function (e, t) {
            s(e), l(t);
            var n = arguments.length < 3 ? e : s(arguments[2]);
            if (p && !h) return _(e, t, n);
            if (e === n) {
                switch (t.length) {
                    case 0:
                        return new e();
                    case 1:
                        return new e(t[0]);
                    case 2:
                        return new e(t[0], t[1]);
                    case 3:
                        return new e(t[0], t[1], t[2]);
                    case 4:
                        return new e(t[0], t[1], t[2], t[3]);
                }
                var r = [null];
                return a(f, r, t), new (a(o, e, r))();
            }
            var i = n.prototype,
                d = c(u(i) ? i : E),
                m = a(e, d, t);
            return u(m) ? m : d;
        }
    }
);
