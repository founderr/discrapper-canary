var r = n(67867),
    i = n(828596),
    a = n(821819),
    o = n(502640),
    s = n(611345);
r(
    {
        target: 'Object',
        stat: !0,
        forced:
            !i ||
            a(function () {
                o.f(1);
            })
    },
    {
        getOwnPropertySymbols: function (e) {
            var t = o.f;
            return t ? t(s(e)) : [];
        }
    }
);
