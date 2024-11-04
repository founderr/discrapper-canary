n.d(t, {
    Z: function () {
        return k;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(100621),
    s = n(597312),
    a = n(481060),
    o = n(727637),
    c = n(410030),
    u = n(100527),
    d = n(906732),
    h = n(688465),
    m = n(680295),
    p = n(785717),
    f = n(221292),
    g = n(687158),
    C = n(326094),
    x = n(510659),
    v = n(113557),
    _ = n(867176),
    I = n(169979),
    E = n(451834),
    b = n(502762),
    S = n(952124),
    Z = n(544989),
    T = n(481932),
    N = n(272510),
    j = n(171368),
    A = n(348540),
    y = n(179142),
    P = n(228168),
    M = n(981631),
    R = n(388032),
    L = n(337319);
function k(e) {
    let { user: t, currentUser: n, channel: k } = e,
        O = __OVERLAY__,
        w = (0, g.ZP)(t.id),
        D = (0, c.ZP)(),
        U = (0, C.Z)({
            user: t,
            currentUser: n,
            location: M.Sbl.PROFILE_PANEL
        }),
        B = (0, p.ZB)({
            layout: U ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: k.id
        }),
        { analyticsLocations: H } = (0, d.ZP)(u.Z.PROFILE_PANEL),
        F = l.useRef(null),
        G = (0, o.Z)(F),
        V = (0, x.$m)(),
        z = (0, a.useSpring)({
            opacity: null != V.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        W = (e) => {
            (0, j.openUserProfileModal)({
                sourceAnalyticsLocations: H,
                ...B,
                ...e
            });
        };
    return (0, i.jsx)(d.Gt, {
        value: H,
        children: (0, i.jsx)(p.Mt, {
            value: B,
            children: (0, i.jsx)(x.NJ, {
                value: V,
                children: (0, i.jsxs)(b.Z, {
                    ref: F,
                    user: t,
                    displayProfile: w,
                    profileType: P.y0.PANEL,
                    themeOverride: D,
                    className: L.container,
                    children: [
                        null != V.interactionType &&
                            (0, i.jsx)(r.animated.div, {
                                style: z,
                                className: L.backdrop
                            }),
                        (0, i.jsxs)(s.u2, {
                            children: [
                                (0, i.jsxs)(Z.Z, {
                                    profileType: P.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(T.Z, {
                                            user: t,
                                            profileType: P.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(S.Z, { user: t }) : (0, i.jsx)(N.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: L.header,
                                    children: [
                                        (0, i.jsx)(_.Z, {
                                            user: t,
                                            displayProfile: w,
                                            profileType: P.y0.PANEL,
                                            animateOnHover: !G,
                                            className: L.banner
                                        }),
                                        (0, i.jsx)(E.Z, {
                                            userId: t.id,
                                            className: L.toast
                                        }),
                                        (0, i.jsx)(v.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: w,
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
                                        t.isClyde() && (0, i.jsx)(h.Z, { className: L.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(A.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: w,
                                    channel: k,
                                    isHovering: null == V.interactionType && G,
                                    onOpenProfile: O ? void 0 : W
                                }),
                                (0, i.jsx)(y.Z, { user: t })
                            ]
                        }),
                        !O &&
                            (0, i.jsx)('footer', {
                                className: L.footer,
                                children: (0, i.jsx)(a.Button, {
                                    fullWidth: !0,
                                    size: a.Button.Sizes.LARGE,
                                    look: a.Button.Looks.BLANK,
                                    color: L.footerButtonColor,
                                    onClick: () => {
                                        W(),
                                            (0, f.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: H,
                                                ...B
                                            });
                                    },
                                    children: R.intl.string(R.t['+Xp3ho'])
                                })
                            }),
                        (null == w ? void 0 : w.profileEffectId) != null &&
                            (0, i.jsx)(m.Z, {
                                profileEffectId: null == w ? void 0 : w.profileEffectId,
                                isHovering: G
                            })
                    ]
                })
            })
        })
    });
}
