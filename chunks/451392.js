n.d(t, {
    Z: function () {
        return T;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(498607),
    a = n.n(l),
    o = n(692547),
    c = n(481060),
    d = n(220082),
    u = n(687158),
    m = n(576635),
    h = n(74538),
    g = n(193528),
    p = n(993413),
    x = n(388032),
    S = n(195465);
function T(e) {
    let { user: t, pendingAvatar: n, pendingColors: s, onThemeColorsChange: l, preventDisabled: T, guildId: C, className: _, showPremiumIcon: E = !0, showResetThemeButton: I = !1, forcedDivider: f } = e,
        N = (0, u.ZP)(t.id, C),
        { primaryColor: A, secondaryColor: b } = (0, m.Z)({
            user: t,
            displayProfile: N,
            pendingThemeColors: s,
            isPreview: !0
        }),
        v = h.ZP.canUsePremiumProfileCustomization(t),
        j = null != n ? n : t.getAvatarURL(C, 80),
        O = (0, c.useToken)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        R = (0, d.Cf)(j, O, !1);
    if (null == A || null == b) return null;
    let P = (e) => {
        l(a()(e, null == N ? void 0 : N.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(p.Z, {
        title: x.intl.string(x.t.DMeO2d),
        disabled: !v && !T,
        className: r()(S.__invalid_profileThemesSection, _),
        showPremiumIcon: E,
        forcedDivider: f,
        children: (0, i.jsxs)('div', {
            className: S.sectionContainer,
            children: [
                (0, i.jsx)('div', {
                    className: S.sparkleContainer,
                    children: (0, i.jsx)(g.Z, {
                        onChange: (e) => P([e, b]),
                        color: A,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: S.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: x.intl.string(x.t.C3KTQk)
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: S.sparkleContainer,
                    children: (0, i.jsx)(g.Z, {
                        onChange: (e) => P([A, e]),
                        color: b,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: S.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: x.intl.string(x.t['8elvy8'])
                        })
                    })
                }),
                I &&
                    null != C &&
                    (0, i.jsx)(c.Button, {
                        className: S.resetButton,
                        color: c.Button.Colors.PRIMARY,
                        look: c.Button.Looks.LINK,
                        size: c.Button.Sizes.SMALL,
                        onClick: () => P([null, null]),
                        children: x.intl.string(x.t['L+Gmoa'])
                    })
            ]
        })
    });
}
