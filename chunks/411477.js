n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var o = n(120356),
    a = n.n(o),
    r = n(481060),
    s = n(436774),
    l = n(112831),
    c = n(590862);
function u(e) {
    let { text: t, textSize: n = l.Z.Sizes.SIZE_12, textColor: o = l.Z.Colors.STANDARD, className: u, button: d, reducedRightPadding: _ = !1 } = e;
    return (0, i.jsxs)('div', {
        className: a()(_ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, u),
        children: [
            (0, i.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, i.jsx)(r.NitroWheelIcon, {
                        size: 'md',
                        className: c.icon,
                        color: s.JX.PREMIUM_TIER_2
                    }),
                    (0, i.jsx)(l.Z, {
                        className: c.text,
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
