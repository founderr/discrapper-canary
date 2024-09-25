var r = n(67867),
    i = n(548828),
    a = n(228042),
    o = n(146321),
    s = TypeError,
    l = o.get,
    u = o.has,
    c = o.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        update: function (e, t) {
            var n = a(this),
                r = arguments.length;
            i(t);
            var o = u(n, e);
            if (!o && r < 3) throw new s('Updating absent value');
            var d = o ? l(n, e) : i(r > 2 ? arguments[2] : void 0)(e, n);
            return c(n, e, t(d, e, n)), n;
        }
    }
);
