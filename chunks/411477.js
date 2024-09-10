i.d(n, {
    Z: function () {
        return d;
    }
});
var t = i(735250);
i(470079);
var o = i(120356),
    a = i.n(o),
    r = i(481060),
    l = i(436774),
    s = i(112831),
    c = i(148393);
function d(e) {
    let { text: n, textSize: i = s.Z.Sizes.SIZE_12, textColor: o = s.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: _ = !1 } = e;
    return (0, t.jsxs)('div', {
        className: a()(_ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, d),
        children: [
            (0, t.jsxs)('div', {
                className: c.noticeLeft,
                children: [
                    (0, t.jsx)(r.NitroWheelIcon, {
                        size: 'md',
                        className: c.icon,
                        color: l.JX.PREMIUM_TIER_2
                    }),
                    (0, t.jsx)(s.Z, {
                        className: c.text,
                        size: i,
                        color: o,
                        children: n
                    })
                ]
            }),
            u
        ]
    });
}
