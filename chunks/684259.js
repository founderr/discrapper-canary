n.d(t, {
    T: function () {
        return c;
    }
}),
    n(757143);
var r = n(735250),
    i = n(818083),
    a = n(424218),
    s = n(380684),
    o = n(474936),
    l = n(689938);
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
        c = l.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: i }),
        d = l.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_3.format({ premiumMaxSize: u }),
        _ = l.Z.Messages.LEARN_MORE_CLICK.format({ onClick: n });
    return (0, r.jsxs)(r.Fragment, {
        children: [c, ' ', d.replace('\n', ' '), '. ', _]
    });
}
t.Z = u;
