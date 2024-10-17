n.d(t, {
    Z: function () {
        return k;
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
    f = n(719311),
    E = n(249978),
    g = n(687158),
    C = n(326094),
    I = n(510659),
    T = n(113557),
    x = n(867176),
    v = n(169979),
    S = n(451834),
    N = n(502762),
    A = n(952124),
    Z = n(544989),
    M = n(481932),
    b = n(272510),
    R = n(171368),
    L = n(348540),
    P = n(179142),
    j = n(101638),
    O = n(228168),
    y = n(981631),
    D = n(689938),
    U = n(337319);
function k(e) {
    let { user: t, currentUser: n, channel: k } = e,
        w = __OVERLAY__,
        B = (0, g.ZP)(t.id),
        H = (0, c.ZP)(),
        G = (0, C.Z)({
            user: t,
            currentUser: n,
            location: y.Sbl.PROFILE_PANEL
        }),
        V = (0, m.ZB)({
            layout: G ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: k.id
        }),
        { analyticsLocations: F } = (0, d.ZP)(u.Z.PROFILE_PANEL),
        { recentActivityEnabled: W } = (0, f.I)({ location: 'UserProfilePanel' }),
        { recentActivityStatusEnabled: z } = (0, E.U)({ location: 'UserProfilePanel' }),
        Y = s.useRef(null),
        K = (0, o.Z)(Y),
        q = (0, I.$m)(),
        X = (0, r.useSpring)({
            opacity: null != q.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        J = (e) => {
            (0, R.openUserProfileModal)({
                sourceAnalyticsLocations: F,
                ...V,
                ...e
            });
        };
    return (0, i.jsx)(d.Gt, {
        value: F,
        children: (0, i.jsx)(m.Mt, {
            value: V,
            children: (0, i.jsx)(I.NJ, {
                value: q,
                children: (0, i.jsxs)(N.Z, {
                    ref: Y,
                    user: t,
                    displayProfile: B,
                    profileType: O.y0.PANEL,
                    themeOverride: H,
                    className: U.container,
                    children: [
                        null != q.interactionType &&
                            (0, i.jsx)(a.animated.div, {
                                style: X,
                                className: U.backdrop
                            }),
                        (0, i.jsxs)(l.u2, {
                            children: [
                                (0, i.jsxs)(Z.Z, {
                                    profileType: O.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(M.Z, {
                                            user: t,
                                            profileType: O.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(A.Z, { user: t }) : (0, i.jsx)(b.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: U.header,
                                    children: [
                                        (0, i.jsx)(x.Z, {
                                            user: t,
                                            displayProfile: B,
                                            profileType: O.y0.PANEL,
                                            animateOnHover: !K,
                                            className: U.banner
                                        }),
                                        (0, i.jsx)(S.Z, {
                                            userId: t.id,
                                            className: U.toast
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: B,
                                            channelId: k.id,
                                            profileType: O.y0.PANEL,
                                            onOpenProfile: w ? void 0 : J
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: k.id,
                                            profileType: O.y0.PANEL
                                        }),
                                        t.isClyde() && (0, i.jsx)(h.Z, { className: U.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(L.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: B,
                                    channel: k,
                                    isHovering: null == q.interactionType && K,
                                    onOpenProfile: w ? void 0 : J,
                                    recentActivityEnabled: W || z
                                }),
                                (W || z) && (0, i.jsx)(j.Z, { user: t }),
                                (0, i.jsx)(P.Z, { user: t })
                            ]
                        }),
                        !w &&
                            (0, i.jsx)('footer', {
                                className: U.footer,
                                children: (0, i.jsx)(r.Button, {
                                    fullWidth: !0,
                                    size: r.Button.Sizes.LARGE,
                                    look: r.Button.Looks.BLANK,
                                    color: U.footerButtonColor,
                                    onClick: () => {
                                        J(),
                                            (0, _.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: F,
                                                ...V
                                            });
                                    },
                                    children: D.Z.Messages.VIEW_FULL_PROFILE
                                })
                            }),
                        (null == B ? void 0 : B.profileEffectId) != null &&
                            (0, i.jsx)(p.Z, {
                                profileEffectId: null == B ? void 0 : B.profileEffectId,
                                isHovering: K
                            })
                    ]
                })
            })
        })
    });
}
