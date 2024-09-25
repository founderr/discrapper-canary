n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    r = n(481060),
    s = n(436774),
    l = n(112831),
    c = n(148393);
function d(e) {
    let { text: t, textSize: n = l.Z.Sizes.SIZE_12, textColor: a = l.Z.Colors.STANDARD, className: d, button: u, reducedRightPadding: _ = !1 } = e;
    return (0, i.jsxs)('div', {
        className: o()(_ ? c.noticeWithoutRightPadding : c.noticeWithRightPadding, d),
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
                        color: a,
                        children: t
                    })
                ]
            }),
            u
        ]
    });
}
