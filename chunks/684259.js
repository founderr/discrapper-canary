r.d(n, {
    T: function () {
        return f;
    }
});
var i = r(757143);
var a = r(200651),
    s = r(818083),
    o = r(424218),
    l = r(380684),
    u = r(474936),
    c = r(388032);
let d = (0, s.B)({
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
function f(e) {
    let { user: n, onClick: r } = e,
        i = (0, o.BU)((0, l.h6)(n) / 1024, { useKibibytes: !0 }),
        s = (0, o.BU)(u.Uq / 1024, { useKibibytes: !0 }),
        d = c.intl.formatToPlainString(c.t.q5fTZm, { maxSize: i }),
        f = c.intl.formatToPlainString(c.t.htbuIS, { premiumMaxSize: s }),
        _ = c.intl.format(c.t.fjSvsL, { onClick: r });
    return (0, a.jsxs)(a.Fragment, {
        children: [d, ' ', f.replace('\n', ' '), '. ', _]
    });
}
n.Z = d;
