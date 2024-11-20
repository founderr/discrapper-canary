n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(100621),
    a = n(597312),
    s = n(481060),
    o = n(727637),
    c = n(410030),
    d = n(100527),
    u = n(906732),
    h = n(688465),
    p = n(680295),
    m = n(785717),
    f = n(221292),
    g = n(687158),
    C = n(326094),
    x = n(510659),
    _ = n(113557),
    v = n(867176),
    I = n(169979),
    E = n(451834),
    b = n(502762),
    Z = n(952124),
    N = n(544989),
    S = n(481932),
    T = n(272510),
    j = n(171368),
    A = n(348540),
    y = n(179142),
    P = n(228168),
    M = n(981631),
    L = n(388032),
    R = n(337319);
function k(e) {
    let { user: t, currentUser: n, channel: k } = e,
        O = __OVERLAY__,
        D = (0, g.ZP)(t.id),
        w = (0, c.ZP)(),
        B = (0, C.Z)({
            user: t,
            currentUser: n,
            location: M.Sbl.PROFILE_PANEL
        }),
        U = (0, m.ZB)({
            layout: B ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: k.id
        }),
        { analyticsLocations: H } = (0, u.ZP)(d.Z.PROFILE_PANEL),
        G = l.useRef(null),
        F = (0, o.Z)(G),
        V = (0, x.$m)(),
        z = (0, s.useSpring)({
            opacity: null != V.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        W = (e) => {
            (0, j.openUserProfileModal)({
                sourceAnalyticsLocations: H,
                ...U,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: H,
        children: (0, i.jsx)(m.Mt, {
            value: U,
            children: (0, i.jsx)(x.NJ, {
                value: V,
                children: (0, i.jsxs)(b.Z, {
                    ref: G,
                    user: t,
                    displayProfile: D,
                    profileType: P.y0.PANEL,
                    themeOverride: w,
                    children: [
                        null != V.interactionType &&
                            (0, i.jsx)(r.animated.div, {
                                style: z,
                                className: R.backdrop
                            }),
                        (0, i.jsxs)(a.u2, {
                            children: [
                                (0, i.jsxs)(N.Z, {
                                    profileType: P.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(S.Z, {
                                            user: t,
                                            profileType: P.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(Z.Z, { user: t }) : (0, i.jsx)(T.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: R.header,
                                    children: [
                                        (0, i.jsx)(v.Z, {
                                            user: t,
                                            displayProfile: D,
                                            profileType: P.y0.PANEL,
                                            animateOnHover: !F,
                                            className: R.banner
                                        }),
                                        (0, i.jsx)(E.Z, {
                                            userId: t.id,
                                            className: R.toast
                                        }),
                                        (0, i.jsx)(_.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: D,
                                            channelId: k.id,
                                            profileType: P.y0.PANEL,
                                            onOpenProfile: O ? void 0 : W
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: k.id,
                                            profileType: P.y0.PANEL
                                        }),
                                        t.isClyde() && (0, i.jsx)(h.Z, { className: R.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(A.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: D,
                                    channel: k,
                                    isHovering: null == V.interactionType && F,
                                    onOpenProfile: O ? void 0 : W
                                }),
                                (0, i.jsx)(y.Z, { user: t })
                            ]
                        }),
                        !O &&
                            (0, i.jsx)('footer', {
                                className: R.footer,
                                children: (0, i.jsx)(s.Button, {
                                    fullWidth: !0,
                                    size: s.Button.Sizes.LARGE,
                                    look: s.Button.Looks.BLANK,
                                    color: R.footerButtonColor,
                                    onClick: () => {
                                        W(),
                                            (0, f.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: H,
                                                ...U
                                            });
                                    },
                                    children: L.intl.string(L.t['+Xp3ho'])
                                })
                            }),
                        (null == D ? void 0 : D.profileEffectId) != null &&
                            (0, i.jsx)(p.Z, {
                                profileEffectId: null == D ? void 0 : D.profileEffectId,
                                isHovering: F
                            })
                    ]
                })
            })
        })
    });
}
