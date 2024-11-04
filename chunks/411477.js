n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(200651);
n(192379);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    c = n(436774),
    l = n(118012),
    s = n(148393);
function u(e) {
    let { text: t, textSize: n = l.Z.Sizes.SIZE_12, textColor: o = l.Z.Colors.STANDARD, className: u, button: d, reducedRightPadding: b = !1 } = e;
    return (0, i.jsxs)('div', {
        className: a()(b ? s.noticeWithoutRightPadding : s.noticeWithRightPadding, u),
        children: [
            (0, i.jsxs)('div', {
                className: s.noticeLeft,
                children: [
                    (0, i.jsx)(r.NitroWheelIcon, {
                        size: 'md',
                        className: s.icon,
                        color: c.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(l.Z, {
                        className: s.text,
                        size: n,
                        color: o,
                        children: t
                    })
                ]
            }),
            d
        ]
    });
}
