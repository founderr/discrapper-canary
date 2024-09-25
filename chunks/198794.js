var r = n(67867),
    i = n(548828),
    a = n(228042),
    o = n(292137),
    s = TypeError;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        reduce: function (e) {
            var t = a(this),
                n = arguments.length < 2,
                r = n ? void 0 : arguments[1];
            if (
                (i(e),
                o(t, function (i, a) {
                    n ? ((n = !1), (r = i)) : (r = e(r, i, a, t));
                }),
                n)
            )
                throw new s('Reduce of empty map with no initial value');
            return r;
        }
    }
);
