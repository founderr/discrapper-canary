var r = n(67867),
    i = n(294377),
    a = n(414629),
    o = n(197859),
    s = n(732116).CONSTRUCTOR,
    l = n(607672),
    u = i('Promise'),
    c = a && !s;
r(
    {
        target: 'Promise',
        stat: !0,
        forced: a || s
    },
    {
        resolve: function (e) {
            return l(c && this === u ? o : this, e);
        }
    }
);
