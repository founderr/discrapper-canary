var r = n(67867),
    i = n(952256),
    a = n(571240),
    o = n(982665),
    s = n(223944),
    l = n(474883),
    u = n(729605),
    c = n(256110),
    d = n(360518),
    _ = n(469624),
    E = n(780524),
    f = _('slice'),
    h = d('species'),
    p = Array,
    m = Math.max;
r(
    {
        target: 'Array',
        proto: !0,
        forced: !f
    },
    {
        slice: function (e, t) {
            var n,
                r,
                d,
                _ = u(this),
                f = l(_),
                I = s(e, f),
                T = s(void 0 === t ? f : t, f);
            if (i(_) && (a((n = _.constructor)) && (n === p || i(n.prototype)) ? (n = void 0) : o(n) && null === (n = n[h]) && (n = void 0), n === p || void 0 === n)) return E(_, I, T);
            for (d = 0, r = new (void 0 === n ? p : n)(m(T - I, 0)); I < T; I++, d++) I in _ && c(r, d, _[I]);
            return (r.length = d), r;
        }
    }
);
