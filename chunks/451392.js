n.d(t, {
    Z: function () {
        return S;
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
    g = n(74538),
    h = n(193528),
    p = n(993413),
    x = n(388032),
    T = n(139019);
function S(e) {
    let { user: t, pendingAvatar: n, pendingColors: s, onThemeColorsChange: l, preventDisabled: S, guildId: _, className: E, showPremiumIcon: C = !0, showResetThemeButton: f = !1, forcedDivider: I } = e,
        N = (0, u.ZP)(t.id, _),
        { primaryColor: A, secondaryColor: b } = (0, m.Z)({
            user: t,
            displayProfile: N,
            pendingThemeColors: s,
            isPreview: !0
        }),
        v = g.ZP.canUsePremiumProfileCustomization(t),
        j = null != n ? n : t.getAvatarURL(_, 80),
        O = (0, c.useToken)(o.Z.unsafe_rawColors.PRIMARY_530).hex(),
        R = (0, d.Cf)(j, O, !1);
    if (null == A || null == b) return null;
    let P = (e) => {
        l(a()(e, null == N ? void 0 : N.themeColors) ? void 0 : e);
    };
    return (0, i.jsx)(p.Z, {
        title: x.intl.string(x.t.DMeO2d),
        disabled: !v && !S,
        className: r()(T.__invalid_profileThemesSection, E),
        showPremiumIcon: C,
        forcedDivider: I,
        children: (0, i.jsxs)('div', {
            className: T.sectionContainer,
            children: [
                (0, i.jsx)('div', {
                    className: T.sparkleContainer,
                    children: (0, i.jsx)(h.Z, {
                        onChange: (e) => P([e, b]),
                        color: A,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: T.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: x.intl.string(x.t.C3KTQk)
                        })
                    })
                }),
                (0, i.jsx)('div', {
                    className: T.sparkleContainer,
                    children: (0, i.jsx)(h.Z, {
                        onChange: (e) => P([A, e]),
                        color: b,
                        suggestedColors: R,
                        showEyeDropper: !0,
                        label: (0, i.jsx)(c.Text, {
                            className: T.colorSwatchLabel,
                            color: 'header-secondary',
                            variant: 'text-xs/normal',
                            'aria-hidden': !0,
                            children: x.intl.string(x.t['8elvy8'])
                        })
                    })
                }),
                f &&
                    null != _ &&
                    (0, i.jsx)(c.Button, {
                        className: T.resetButton,
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
