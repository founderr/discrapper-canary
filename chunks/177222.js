n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(597312),
    l = n(481060),
    r = n(727637),
    o = n(410030),
    c = n(100527),
    u = n(906732),
    d = n(688465),
    h = n(680295),
    p = n(785717),
    m = n(221292),
    _ = n(318661),
    f = n(428785),
    E = n(113557),
    C = n(867176),
    g = n(169979),
    I = n(119096),
    x = n(502762),
    T = n(952124),
    N = n(544989),
    S = n(481932),
    v = n(272510),
    Z = n(171368),
    A = n(348540),
    M = n(179142),
    b = n(572791),
    R = n(228168),
    L = n(981631),
    j = n(689938),
    O = n(61291);
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
        w = (0, p.ZB)({
            layout: U ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: P.id
        }),
        { analyticsLocations: B } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        H = a.useRef(null),
        G = (0, r.Z)(H),
        [V, F] = a.useState(!1),
        [W, z] = a.useState(!1),
        [Y, K] = a.useState(!1),
        [q, X] = a.useState(),
        [Q, J] = a.useState(),
        $ = (e) => {
            X(e.interactionType), J(e.interactionSourceType);
        },
        ee = (e) => {
            (0, Z.openUserProfileModal)({
                sourceAnalyticsLocations: B,
                ...w,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: B,
        children: (0, i.jsx)(p.Mt, {
            value: w,
            children: (0, i.jsxs)(x.Z, {
                ref: H,
                user: t,
                displayProfile: D,
                profileType: R.y0.PANEL,
                themeOverride: k,
                className: O.container,
                children: [
                    null != q && (0, i.jsx)('div', { className: O.backdrop }),
                    (0, i.jsxs)(s.u2, {
                        children: [
                            (0, i.jsxs)(N.Z, {
                                profileType: R.y0.PANEL,
                                children: [
                                    (0, i.jsx)(S.Z, {
                                        user: t,
                                        profileType: R.y0.PANEL
                                    }),
                                    t.bot ? (0, i.jsx)(T.Z, { user: t }) : (0, i.jsx)(v.Z, { user: t })
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
                                    (0, i.jsx)(I.Z, {
                                        isReply: Y,
                                        sent: W,
                                        shown: V,
                                        userId: t.id,
                                        className: O.toast
                                    }),
                                    (0, i.jsx)(E.Z, {
                                        location: 'UserProfilePanel',
                                        user: t,
                                        displayProfile: D,
                                        channelId: P.id,
                                        profileType: R.y0.PANEL,
                                        isInteractionSource: Q === R.n_.AVATAR || Q === R.n_.STATUS,
                                        onOpenProfile: y ? void 0 : ee,
                                        onInteraction: $,
                                        setInteractionToastShown: F,
                                        setInteractionSent: z,
                                        setIsReplyInteraction: K,
                                        showReplyPopout: q === R.P.REPLY && Q === R.n_.AVATAR
                                    }),
                                    (0, i.jsx)(g.Z, {
                                        location: 'UserProfilePanel',
                                        user: t,
                                        channelId: P.id,
                                        profileType: R.y0.PANEL,
                                        isInteractionSource: Q === R.n_.STATUS,
                                        onInteraction: $,
                                        setInteractionToastShown: F,
                                        setInteractionSent: z,
                                        setIsReplyInteraction: K,
                                        showReplyPopout: q === R.P.REPLY && Q === R.n_.STATUS
                                    }),
                                    t.isClyde() && (0, i.jsx)(d.Z, { className: O.headerTag })
                                ]
                            }),
                            (0, i.jsx)(A.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: D,
                                channel: P,
                                isHovering: G,
                                onOpenProfile: y ? void 0 : ee
                            }),
                            (0, i.jsx)(M.Z, { user: t }),
                            (0, i.jsx)(b.Z, {
                                user: t,
                                displayProfile: D
                            })
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
                                    ee(),
                                        (0, m.pQ)({
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
    });
}
