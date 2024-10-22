t.d(s, {
    Z: function () {
        return m;
    }
});
var n = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    r = t(498607),
    o = t.n(r),
    l = t(692547),
    c = t(481060),
    d = t(220082),
    _ = t(687158),
    u = t(576635),
    E = t(74538),
    T = t(193528),
    S = t(993413),
    I = t(689938),
    N = t(96923);
function m(e) {
    let { user: s, pendingAvatar: t, pendingColors: a, onThemeColorsChange: r, preventDisabled: m, guildId: C, className: A, showPremiumIcon: g = !0, showResetThemeButton: h = !1, forcedDivider: O } = e,
        p = (0, _.ZP)(s.id, C),
        { primaryColor: R, secondaryColor: x } = (0, u.Z)({
            user: s,
            displayProfile: p,
            pendingThemeColors: a,
            isPreview: !0
        }),
        M = E.ZP.canUsePremiumProfileCustomization(s),
        f = null != t ? t : s.getAvatarURL(C, 80),
        D = (0, c.useToken)(l.Z.unsafe_rawColors.PRIMARY_530).hex(),
        L = (0, d.Cf)(f, D, !1);
    if (null == R || null == x) return null;
    let P = (e) => {
        r(o()(e, null == p ? void 0 : p.themeColors) ? void 0 : e);
    };
    return (0, n.jsx)(S.Z, {
        title: I.Z.Messages.USER_SETTINGS_PROFILE_THEME,
        disabled: !M && !m,
        className: i()(N.__invalid_profileThemesSection, A),
        showPremiumIcon: g,
        forcedDivider: O,
        children: (0, n.jsxs)('div', {
            className: N.sectionContainer,
            children: [
                (0, n.jsx)('div', {
                    className: N.sparkleContainer,
                    children: (0, n.jsx)(T.Z, {
                        onChange: (e) => P([e, x]),
                        color: R,
                        suggestedColors: L,
                        showEyeDropper: !0,
                        label: (0, n.jsx)(c.Text, {
                            className: N.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: I.Z.Messages.USER_SETTINGS_PROFILE_THEME_PRIMARY
                        })
                    })
                }),
                (0, n.jsx)('div', {
                    className: N.sparkleContainer,
                    children: (0, n.jsx)(T.Z, {
                        onChange: (e) => P([R, e]),
                        color: x,
                        suggestedColors: L,
                        showEyeDropper: !0,
                        label: (0, n.jsx)(c.Text, {
                            className: N.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: I.Z.Messages.USER_SETTINGS_PROFILE_THEME_ACCENT
                        })
                    })
                }),
                h &&
                    null != C &&
                    (0, n.jsx)(c.Button, {
                        className: N.resetButton,
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.LINK,
                        size: c.Button.Sizes.SMALL,
                        onClick: () => P([null, null]),
                        children: I.Z.Messages.USER_SETTINGS_RESET_PROFILE_THEME
                    })
            ]
        })
    });
}
