t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(481060),
    o = t(654904),
    l = t(993413),
    c = t(486324),
    d = t(689938),
    _ = t(850691);
function u(e) {
    let { showRemoveBannerButton: s, errors: t, onBannerChange: a, guildId: u, className: E, disabled: T = !1, showPremiumIcon: S = !0, isTryItOutFlow: I = !1, forcedDivider: N, withHighlight: m = !1 } = e,
        C = m ? r.ShinyButton : r.Button;
    return (0, n.jsx)(l.Z, {
        className: E,
        title: d.Z.Messages.USER_SETTINGS_PROFILE_BANNER,
        showPremiumIcon: S,
        errors: t,
        disabled: T,
        forcedDivider: N,
        children: (0, n.jsxs)('div', {
            className: _.buttonsContainer,
            children: [
                (0, n.jsx)(C, {
                    className: i()({ [_.buttonHighlighted]: m }),
                    size: r.Button.Sizes.SMALL,
                    onClick: () => (0, o.$r)(c.pC.BANNER, u, I, void 0),
                    children: d.Z.Messages.CHANGE_BANNER
                }),
                s &&
                    (0, n.jsx)(r.Button, {
                        className: _.removeButton,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.LINK,
                        size: r.Button.Sizes.SMALL,
                        onClick: () => a(null),
                        children: null != u ? d.Z.Messages.USER_SETTINGS_RESET_BANNER : d.Z.Messages.USER_SETTINGS_REMOVE_BANNER
                    })
            ]
        })
    });
}
