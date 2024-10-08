n.d(t, {
    Z: function () {
        return u;
    }
});
var o = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    r = n(481060),
    c = n(436774),
    s = n(112831),
    l = n(148393);
function u(e) {
    let { text: t, textSize: n = s.Z.Sizes.SIZE_12, textColor: i = s.Z.Colors.STANDARD, className: u, button: d, reducedRightPadding: _ = !1 } = e;
    return (0, o.jsxs)('div', {
        className: a()(_ ? l.noticeWithoutRightPadding : l.noticeWithRightPadding, u),
        children: [
            (0, o.jsxs)('div', {
                className: l.noticeLeft,
                children: [
                    (0, o.jsx)(r.NitroWheelIcon, {
                        size: 'md',
                        className: l.icon,
                        color: c.JX.PREMIUM_TIER_2
                    }),
                    (0, o.jsx)(s.Z, {
                        className: l.text,
                        size: n,
                        color: i,
                        children: t
                    })
                ]
            }),
            d
        ]
    });
}
