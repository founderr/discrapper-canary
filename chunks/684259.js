n.d(t, {
    T: function () {
        return d;
    }
});
var r = n(757143);
var i = n(735250),
    a = n(818083),
    o = n(424218),
    s = n(380684),
    l = n(474936),
    u = n(689938);
let c = (0, a.B)({
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
function d(e) {
    let { user: t, onClick: n } = e,
        r = (0, o.BU)((0, s.h6)(t) / 1024, { useKibibytes: !0 }),
        a = (0, o.BU)(l.Uq / 1024, { useKibibytes: !0 }),
        c = u.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({ maxSize: r }),
        d = u.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_3.format({ premiumMaxSize: a }),
        _ = u.Z.Messages.LEARN_MORE_CLICK.format({ onClick: n });
    return (0, i.jsxs)(i.Fragment, {
        children: [c, ' ', d.replace('\n', ' '), '. ', _]
    });
}
t.Z = c;
