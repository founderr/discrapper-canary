n.d(t, {
    T: function () {
        return c;
    }
}),
    n(757143);
var r = n(200651),
    i = n(818083),
    a = n(424218),
    s = n(380684),
    o = n(474936),
    l = n(388032);
let u = (0, i.B)({
    kind: 'user',
    id: '2024-09_sky_load',
    label: 'Sky Load',
    defaultConfig: { enabled: !1 },
    treatments: [
        {
            id: 1,
            label: 'Variant 1',
            config: { enabled: !0 }
        }
    ]
});
function c(e) {
    let { user: t, onClick: n } = e,
        i = (0, a.BU)((0, s.h6)(t) / 1024, { useKibibytes: !0 }),
        u = (0, a.BU)(o.Uq / 1024, { useKibibytes: !0 }),
        c = l.intl.formatToPlainString(l.t.q5fTZm, { maxSize: i }),
        d = l.intl.formatToPlainString(l.t.htbuIS, { premiumMaxSize: u }),
        f = l.intl.format(l.t.fjSvsL, { onClick: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [c, ' ', d.replace('\n', ' '), '. ', f]
    });
}
t.Z = u;
