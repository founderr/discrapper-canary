n.d(t, {
    Z: function () {
        return P;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(597312),
    l = n(481060),
    r = n(727637),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(688465),
    h = n(680295),
    m = n(785717),
    p = n(221292),
    _ = n(687158),
    f = n(326094),
    E = n(510659),
    g = n(113557),
    C = n(867176),
    I = n(169979),
    T = n(119096),
    x = n(502762),
    v = n(952124),
    S = n(544989),
    N = n(481932),
    A = n(272510),
    Z = n(171368),
    M = n(348540),
    b = n(179142),
    R = n(228168),
    L = n(981631),
    j = n(689938),
    O = n(337319);
function P(e) {
    let { user: t, currentUser: n, channel: P } = e,
        y = __OVERLAY__,
        D = (0, _.ZP)(t.id),
        k = (0, o.ZP)(),
        U = (0, f.Z)({
            user: t,
            currentUser: n,
            location: L.Sbl.PROFILE_PANEL
        }),
        w = (0, m.ZB)({
            layout: U ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: P.id
        }),
        { analyticsLocations: B } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        H = s.useRef(null),
        G = (0, r.Z)(H),
        V = (0, E.$m)(),
        F = (e) => {
            (0, Z.openUserProfileModal)({
                sourceAnalyticsLocations: B,
                ...w,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: B,
        children: (0, i.jsx)(m.Mt, {
            value: w,
            children: (0, i.jsx)(E.NJ, {
                value: V,
                children: (0, i.jsxs)(x.Z, {
                    ref: H,
                    user: t,
                    displayProfile: D,
                    profileType: R.y0.PANEL,
                    themeOverride: k,
                    className: O.container,
                    children: [
                        null != V.interactionType && (0, i.jsx)('div', { className: O.backdrop }),
                        (0, i.jsxs)(a.u2, {
                            children: [
                                (0, i.jsxs)(S.Z, {
                                    profileType: R.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(N.Z, {
                                            user: t,
                                            profileType: R.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(v.Z, { user: t }) : (0, i.jsx)(A.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: O.header,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            user: t,
                                            displayProfile: D,
                                            profileType: R.y0.PANEL,
                                            animateOnHover: !G,
                                            className: O.banner
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            userId: t.id,
                                            className: O.toast
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: D,
                                            channelId: P.id,
                                            profileType: R.y0.PANEL,
                                            onOpenProfile: y ? void 0 : F
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: P.id,
                                            profileType: R.y0.PANEL
                                        }),
                                        t.isClyde() && (0, i.jsx)(d.Z, { className: O.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(M.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: D,
                                    channel: P,
                                    isHovering: G,
                                    onOpenProfile: y ? void 0 : F
                                }),
                                (0, i.jsx)(b.Z, { user: t })
                            ]
                        }),
                        !y &&
                            (0, i.jsx)('footer', {
                                className: O.footer,
                                children: (0, i.jsx)(l.Button, {
                                    fullWidth: !0,
                                    size: l.Button.Sizes.LARGE,
                                    look: l.Button.Looks.BLANK,
                                    color: O.footerButtonColor,
                                    onClick: () => {
                                        F(),
                                            (0, p.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: B,
                                                ...w
                                            });
                                    },
                                    children: j.Z.Messages.VIEW_FULL_PROFILE
                                })
                            }),
                        (null == D ? void 0 : D.profileEffectId) != null &&
                            (0, i.jsx)(h.Z, {
                                profileEffectId: null == D ? void 0 : D.profileEffectId,
                                isHovering: G
                            })
                    ]
                })
            })
        })
    });
}
