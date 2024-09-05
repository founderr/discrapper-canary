t.d(s, {
    Z: function () {
        return _;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(654904),
    l = t(993413),
    c = t(486324),
    d = t(689938),
    u = t(949985);
function _(e) {
    let { showRemoveBannerButton: s, errors: t, onBannerChange: a, guildId: _, className: E, disabled: T = !1, showPremiumIcon: S = !0, isTryItOutFlow: I = !1, forcedDivider: N, withHighlight: m = !1 } = e,
        C = m ? r.ShinyButton : r.Button;
    return (0, n.jsx)(l.Z, {
        className: E,
        title: d.Z.Messages.USER_SETTINGS_PROFILE_BANNER,
        showPremiumIcon: S,
        errors: t,
        disabled: T,
        forcedDivider: N,
        children: (0, n.jsxs)('div', {
            className: u.buttonsContainer,
            children: [
                (0, n.jsx)(C, {
                    className: i()({ [u.buttonHighlighted]: m }),
                    size: r.Button.Sizes.SMALL,
                    onClick: () => (0, o.$r)(c.pC.BANNER, _, I, void 0),
                    children: d.Z.Messages.CHANGE_BANNER
                }),
                s &&
                    (0, n.jsx)(r.Button, {
                        className: u.removeButton,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.SMALL,
                        onClick: () => a(null),
                        children: null != _ ? d.Z.Messages.USER_SETTINGS_RESET_BANNER : d.Z.Messages.USER_SETTINGS_REMOVE_BANNER
                    })
            ]
        })
    });
}
