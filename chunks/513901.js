n.d(t, {
    Z: function () {
        return _;
    }
});
var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(906732),
    c = n(642619),
    d = n(626135),
    u = n(74538),
    m = n(150039),
    g = n(993413),
    h = n(504983),
    p = n(981631),
    x = n(474936),
    T = n(388032),
    S = n(184057);
function _(e) {
    let { user: t, guild: n, className: r, sectionTitle: _, forcedDivider: E = !1, withTutorial: C = !1, showBorder: f = !1, isTryItOutFlow: I = !1, initialSelectedEffectId: N } = e,
        A = (0, m.Kg)(t, n),
        b = u.ZP.canUsePremiumProfileCustomization(t),
        { analyticsLocations: v } = (0, o.ZP)(),
        { pendingProfileEffectId: j, errors: O } = (0, m.bd)(n),
        R = s.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: v,
                    initialSelectedEffectId: N,
                    guild: n
                }),
            [v, N, n]
        );
    s.useEffect(() => {
        b &&
            d.default.track(p.rMx.PREMIUM_UPSELL_VIEWED, {
                type: x.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: v
            });
    }, [b, v]);
    let P = null != n,
        D = I || void 0 !== j ? null != j : null != A,
        y = C ? a.ShinyButton : a.Button;
    return (0, i.jsx)(g.Z, {
        forcedDivider: E,
        borderType: h.Y.PREMIUM,
        hasBackground: !0,
        title: _,
        showBorder: f,
        errors: O,
        className: r,
        children: (0, i.jsxs)('div', {
            className: S.buttonsContainer,
            children: [
                (0, i.jsx)(y, {
                    size: a.Button.Sizes.SMALL,
                    onClick: R,
                    className: l()({ [S.buttonHighlighted]: C }),
                    children: T.intl.string(T.t['0nEVoK'])
                }),
                D &&
                    (0, i.jsx)(a.Button, {
                        className: S.removeButton,
                        color: a.Button.Colors.PRIMARY,
                        look: a.Button.Looks.LINK,
                        size: a.Button.Sizes.SMALL,
                        onClick: function () {
                            (0, m.s6)(null, A, null == n ? void 0 : n.id);
                        },
                        children: P ? T.intl.string(T.t.GJ3Fcn) : T.intl.string(T.t['Ld+f5e'])
                    })
            ]
        })
    });
}
