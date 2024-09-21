n.d(t, {
    Z: function () {
        return y;
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
    S = n(952124),
    v = n(544989),
    N = n(481932),
    A = n(272510),
    Z = n(171368),
    M = n(348540),
    b = n(179142),
    R = n(572791),
    L = n(228168),
    j = n(981631),
    P = n(689938),
    O = n(337319);
function y(e) {
    let { user: t, currentUser: n, channel: y } = e,
        D = __OVERLAY__,
        U = (0, _.ZP)(t.id),
        k = (0, o.ZP)(),
        w = (0, f.Z)({
            user: t,
            currentUser: n,
            location: j.Sbl.PROFILE_PANEL
        }),
        B = (0, m.ZB)({
            layout: w ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: y.id
        }),
        { analyticsLocations: H } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        G = s.useRef(null),
        V = (0, r.Z)(G),
        F = (0, E.$m)(),
        W = (e) => {
            (0, Z.openUserProfileModal)({
                sourceAnalyticsLocations: H,
                ...B,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: H,
        children: (0, i.jsx)(m.Mt, {
            value: B,
            children: (0, i.jsx)(E.NJ, {
                value: F,
                children: (0, i.jsxs)(x.Z, {
                    ref: G,
                    user: t,
                    displayProfile: U,
                    profileType: L.y0.PANEL,
                    themeOverride: k,
                    className: O.container,
                    children: [
                        null != F.interactionType && (0, i.jsx)('div', { className: O.backdrop }),
                        (0, i.jsxs)(a.u2, {
                            children: [
                                (0, i.jsxs)(v.Z, {
                                    profileType: L.y0.PANEL,
                                    children: [
                                        (0, i.jsx)(N.Z, {
                                            user: t,
                                            profileType: L.y0.PANEL
                                        }),
                                        t.bot ? (0, i.jsx)(S.Z, { user: t }) : (0, i.jsx)(A.Z, { user: t })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    className: O.header,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            user: t,
                                            displayProfile: U,
                                            profileType: L.y0.PANEL,
                                            animateOnHover: !V,
                                            className: O.banner
                                        }),
                                        (0, i.jsx)(T.Z, {
                                            userId: t.id,
                                            className: O.toast
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            displayProfile: U,
                                            channelId: y.id,
                                            profileType: L.y0.PANEL,
                                            onOpenProfile: D ? void 0 : W
                                        }),
                                        (0, i.jsx)(I.Z, {
                                            location: 'UserProfilePanel',
                                            user: t,
                                            channelId: y.id,
                                            profileType: L.y0.PANEL
                                        }),
                                        t.isClyde() && (0, i.jsx)(d.Z, { className: O.headerTag })
                                    ]
                                }),
                                (0, i.jsx)(M.Z, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: U,
                                    channel: y,
                                    isHovering: V,
                                    onOpenProfile: D ? void 0 : W
                                }),
                                (0, i.jsx)(b.Z, { user: t }),
                                (0, i.jsx)(R.Z, {
                                    user: t,
                                    displayProfile: U
                                })
                            ]
                        }),
                        !D &&
                            (0, i.jsx)('footer', {
                                className: O.footer,
                                children: (0, i.jsx)(l.Button, {
                                    fullWidth: !0,
                                    size: l.Button.Sizes.LARGE,
                                    look: l.Button.Looks.BLANK,
                                    color: O.footerButtonColor,
                                    onClick: () => {
                                        W(),
                                            (0, p.pQ)({
                                                action: 'PRESS_VIEW_PROFILE',
                                                analyticsLocations: H,
                                                ...B
                                            });
                                    },
                                    children: P.Z.Messages.VIEW_FULL_PROFILE
                                })
                            }),
                        (null == U ? void 0 : U.profileEffectId) != null &&
                            (0, i.jsx)(h.Z, {
                                profileEffectId: null == U ? void 0 : U.profileEffectId,
                                isHovering: V
                            })
                    ]
                })
            })
        })
    });
}
