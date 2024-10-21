t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(200651);
t(192379);
var a = t(630759),
    i = t(921157),
    r = t(76793),
    o = t(838436),
    l = t(726985),
    c = t(689938),
    d = t(605017);
function _() {
    let e = (0, i.s)();
    return (0, n.jsxs)(o.U, {
        setting: l.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2,
        children: [
            (0, n.jsx)(o.H, {
                header: c.Z.Messages.E2EE_VERIFIED_DEVICES,
                description: c.Z.Messages.E2EE_VERIFIED_DEVICES_DESCRIPTION.format({ helpArticle: (0, a.pL)() })
            }),
            e.map((e) =>
                (0, n.jsx)(
                    'div',
                    {
                        className: d.item,
                        children: (0, n.jsx)(r.q, { userId: e })
                    },
                    e
                )
            )
        ]
    });
}
