n.d(t, {
    Z: function () {
        return U;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(212433),
    l = n(597312),
    r = n(481060),
    o = n(727637),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    h = n(688465),
    p = n(680295),
    m = n(785717),
    _ = n(221292),
    f = n(110581),
    E = n(687158),
    g = n(326094),
    C = n(510659),
    I = n(113557),
    T = n(867176),
    x = n(169979),
    v = n(451834),
    S = n(502762),
    N = n(952124),
    A = n(544989),
    Z = n(481932),
    M = n(272510),
    b = n(171368),
    R = n(348540),
    L = n(179142),
    P = n(101638),
    j = n(228168),
    O = n(981631),
    y = n(689938),
    D = n(337319);
function U(e) {
    let { user: t, currentUser: n, channel: U } = e,
        k = __OVERLAY__,
        w = (0, E.ZP)(t.id),
        B = (0, c.ZP)(),
        H = (0, g.Z)({
            user: t,
            currentUser: n,
            location: O.Sbl.PROFILE_PANEL
        }),
        G = (0, m.ZB)({
            layout: H ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: U.id
        }),
        { analyticsLocations: V } = (0, d.ZP)(u.Z.PROFILE_PANEL),
        { recentActivitySectionEnabled: F } = (0, f.P)({ location: 'UserProfilePanel' }),
        W = s.useRef(null),
        z = (0, o.Z)(W),
        Y = (0, C.$m)(),
        K = (0, r.useSpring)({
            opacity: null != Y.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        q = (e) => {
            (0, b.openUserProfileModal)({
                sourceAnalyticsLocations: V,
                ...G,
                ...e
            });
        };
    return (0, i.jsx)(d.Gt, {
        value: V,
        children: (0, i.jsx)(m.Mt, {
            value: G,
            children: (0, i.jsx)(C.NJ, {
                value: Y,
                children: (0, i.jsxs)(S.Z, {
                    ref: W,
                    user: t,
                    displayProfile: w,
                    profileType: j.y0.PANEL,
                    themeOverride: B,
                    className: D.container,
                    children: [
                        null != Y.interactionType &&
                            (0, i.jsx)(a.animated.div, {
                                style: K,
                                className: D.backdrop
                            }),
                        (0, i.jsxs)(l.u2, {
                            children: [
                                (0, i.jsxs)(A.Z, {
                                    profileType: j.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(Z.Z, {
                                            user: t,
                                            profileType: j.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(N.Z, { user: t }) : (0, i.jsx)(M.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: D.header,
                                    children: [
                                        (0, i.jsx)(T.Z, {
                                            user: t,
                                            displayProfile: w,
                                            profileType: j.y0.PANEL,
                                            animateOnHover: !z,
                                            className: D.banner
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            userId: t.id,
                                            className: D.toast
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: w,
                                            channelId: U.id,
                                            profileType: j.y0.PANEL,
                                            onOpenProfile: k ? void 0 : q
                                        }),
                                        (0, i.jsx)(x.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: U.id,
                                            profileType: j.y0.PANEL
                                        }),
                                        t.isClyde() && (0, i.jsx)(h.Z, { className: D.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(R.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: w,
                                    channel: U,
                                    isHovering: null == Y.interactionType && z,
                                    onOpenProfile: k ? void 0 : q,
                                    recentActivitySectionEnabled: F
                                }),
                                F && (0, i.jsx)(P.Z, { user: t }),
                                (0, i.jsx)(L.Z, { user: t })
                            ]
                        }),
                        !k &&
                            (0, i.jsx)('footer', {
                                className: D.footer,
                                children: (0, i.jsx)(r.Button, {
                                    fullWidth: !0,
                                    size: r.Button.Sizes.LARGE,
                                    look: r.Button.Looks.BLANK,
                                    color: D.footerButtonColor,
                                    onClick: () => {
                                        q(),
                                            (0, _.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: V,
                                                ...G
                                            });
                                    },
                                    children: y.Z.Messages.VIEW_FULL_PROFILE
                                })
                            }),
                        (null == w ? void 0 : w.profileEffectId) != null &&
                            (0, i.jsx)(p.Z, {
                                profileEffectId: null == w ? void 0 : w.profileEffectId,
                                isHovering: z
                            })
                    ]
                })
            })
        })
    });
}
