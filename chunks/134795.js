n.d(t, {
    Z: function () {
        return m;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(654904),
    o = n(993413),
    c = n(486324),
    d = n(388032),
    u = n(975325);
function m(e) {
    let { showRemoveBannerButton: t, errors: n, onBannerChange: s, guildId: m, className: h, disabled: g = !1, showPremiumIcon: p = !0, isTryItOutFlow: x = !1, forcedDivider: S, withHighlight: T = !1 } = e,
        C = T ? l.ShinyButton : l.Button;
    return (0, i.jsx)(o.Z, {
        className: h,
        title: d.intl.string(d.t.Vgdusr),
        showPremiumIcon: p,
        errors: n,
        disabled: g,
        forcedDivider: S,
        children: (0, i.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, i.jsx)(C, {
                    className: r()({ [u.buttonHighlighted]: T }),
                    size: l.Button.Sizes.SMALL,
                    onClick: () => (0, a.$r)(c.pC.BANNER, m, x, void 0),
                    children: d.intl.string(d.t.N0bC3N)
                }),
                t &&
                    (0, i.jsx)(l.Button, {
                        className: u.removeButton,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.LINK,
                        size: l.Button.Sizes.SMALL,
                        onClick: () => s(null),
                        children: null != m ? d.intl.string(d.t.jHlJNT) : d.intl.string(d.t.tT9n7O)
                    })
            ]
        })
    });
}
