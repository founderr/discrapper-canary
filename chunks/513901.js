t.d(s, {
    Z: function () {
        return A;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(481060),
    l = t(906732),
    c = t(642619),
    d = t(626135),
    _ = t(74538),
    u = t(150039),
    E = t(993413),
    T = t(504983),
    S = t(981631),
    I = t(474936),
    N = t(689938),
    C = t(492004);
function A(e) {
    let { user: s, guild: t, className: i, sectionTitle: A, forcedDivider: m = !1, withTutorial: g = !1, showBorder: h = !1, isTryItOutFlow: O = !1, initialSelectedEffectId: p } = e,
        R = (0, u.Kg)(s, t),
        x = _.ZP.canUsePremiumProfileCustomization(s),
        { analyticsLocations: M } = (0, l.ZP)(),
        { pendingProfileEffectId: f, errors: D } = (0, u.bd)(t),
        L = a.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: M,
                    initialSelectedEffectId: p,
                    guild: t
                }),
            [M, p, t]
        );
    a.useEffect(() => {
        x &&
            d.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: I.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: M
            });
    }, [x, M]);
    let P = null != t,
        b = O || void 0 !== f ? null != f : null != R,
        Z = g ? o.ShinyButton : o.Button;
    return (0, n.jsx)(E.Z, {
        forcedDivider: m,
        borderType: T.Y.PREMIUM,
        hasBackground: !0,
        title: A,
        showBorder: h,
        errors: D,
        className: i,
        children: (0, n.jsxs)('div', {
            className: C.buttonsContainer,
            children: [
                (0, n.jsx)(Z, {
                    size: o.Button.Sizes.SMALL,
                    onClick: L,
                    className: r()({ [C.buttonHighlighted]: g }),
                    children: N.Z.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
                }),
                b &&
                    (0, n.jsx)(o.Button, {
                        className: C.removeButton,
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        size: o.Button.Sizes.SMALL,
                        onClick: function () {
                            (0, u.s6)(null, R, null == t ? void 0 : t.id);
                        },
                        children: P ? N.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : N.Z.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
                    })
            ]
        })
    });
}
