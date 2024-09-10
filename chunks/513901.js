t.d(s, {
    Z: function () {
        return C;
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
    m = t(492004);
function C(e) {
    let { user: s, guild: t, className: i, sectionTitle: C, forcedDivider: A = !1, withTutorial: g = !1, showBorder: h = !1, isTryItOutFlow: O = !1, initialSelectedEffectId: p } = e,
        R = (0, u.Kg)(s, t),
        x = _.ZP.canUsePremiumProfileCustomization(s),
        { analyticsLocations: f } = (0, l.ZP)(),
        { pendingProfileEffectId: M, errors: D } = (0, u.bd)(t),
        P = a.useCallback(
            () =>
                (0, c.H)({
                    analyticsLocations: f,
                    initialSelectedEffectId: p,
                    guild: t
                }),
            [f, p, t]
        );
    a.useEffect(() => {
        x &&
            d.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: I.cd.PROFILE_EFFECTS_INLINE_SETTINGS,
                location_stack: f
            });
    }, [x, f]);
    let L = null != t,
        b = O || void 0 !== M ? null != M : null != R,
        Z = g ? o.ShinyButton : o.Button;
    return (0, n.jsx)(E.Z, {
        forcedDivider: A,
        borderType: T.Y.PREMIUM,
        hasBackground: !0,
        title: C,
        showBorder: h,
        errors: D,
        className: i,
        children: (0, n.jsxs)('div', {
            className: m.buttonsContainer,
            children: [
                (0, n.jsx)(Z, {
                    size: o.Button.Sizes.SMALL,
                    onClick: P,
                    className: r()({ [m.buttonHighlighted]: g }),
                    children: N.Z.Messages.USER_SETTINGS_CHANGE_PROFILE_EFFECT
                }),
                b &&
                    (0, n.jsx)(o.Button, {
                        className: m.removeButton,
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.LINK,
                        size: o.Button.Sizes.SMALL,
                        onClick: function () {
                            (0, u.s6)(null, R, null == t ? void 0 : t.id);
                        },
                        children: L ? N.Z.Messages.USER_SETTINGS_USE_DEFAULT_PROFILE_EFFECT : N.Z.Messages.USER_SETTINGS_REMOVE_PROFILE_EFFECT
                    })
            ]
        })
    });
}
