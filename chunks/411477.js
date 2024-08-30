n.d(i, {
    Z: function () {
        return d;
    }
});
var o = n(735250);
n(470079);
var t = n(120356),
    r = n.n(t),
    a = n(481060),
    s = n(436774),
    l = n(112831),
    c = n(590862);
function d(e) {
    let { text: i, textSize: n = l.Z.Sizes.SIZE_12, textColor: t = l.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: _ = !1 } = e;
    return (0, o.jsxs)('div', {
        className: r()(_ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, d),
        children: [
            (0, o.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, o.jsx)(a.NitroWheelIcon, {
                        size: 'md',
                        className: c.icon,
                        color: s.JX.PREMIUM_TIER_2
                    }),
                    (0, o.jsx)(l.Z, {
                        className: c.text,
                        size: n,
                        color: t,
                        children: i
                    })
                ]
            }),
            u
        ]
    });
}
