var r = n(67867),
    i = n(718380),
    a = n(821819),
    o = n(982665),
    s = n(938988).onFreeze,
    l = Object.freeze;
r(
    {
        target: 'Object',
        stat: !0,
        forced: a(function () {
            l(1);
        }),
        sham: !i
    },
    {
        freeze: function (e) {
            return l && o(e) ? l(s(e)) : e;
        }
    }
);
