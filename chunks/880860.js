var r = n(67867),
    i = n(228042),
    a = n(146321),
    o = a.get,
    s = a.has,
    l = a.set;
r(
    {
        target: 'Map',
        proto: !0,
        real: !0,
        forced: !0
    },
    {
        emplace: function (e, t) {
            var n,
                r,
                a = i(this);
            return s(a, e) ? ((n = o(a, e)), 'update' in t && ((n = t.update(n, e, a)), l(a, e, n)), n) : ((r = t.insert(e, a)), l(a, e, r), r);
        }
    }
);
