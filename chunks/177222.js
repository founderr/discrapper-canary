n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
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
    E = n(113557),
    g = n(867176),
    C = n(169979),
    I = n(119096),
    T = n(502762),
    x = n(952124),
    S = n(544989),
    v = n(481932),
    N = n(272510),
    A = n(171368),
    Z = n(348540),
    M = n(179142),
    b = n(572791),
    R = n(228168),
    L = n(981631),
    j = n(689938),
    P = n(337319);
function O(e) {
    let { user: t, currentUser: n, channel: O } = e,
        y = __OVERLAY__,
        D = (0, _.ZP)(t.id),
        U = (0, o.ZP)(),
        k = (0, f.Z)({
            user: t,
            currentUser: n,
            location: L.Sbl.PROFILE_PANEL
        }),
        w = (0, m.ZB)({
            layout: k ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: O.id
        }),
        { analyticsLocations: B } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        H = s.useRef(null),
        G = (0, r.Z)(H),
        [V, F] = s.useState(!1),
        [W, z] = s.useState(!1),
        [Y, K] = s.useState(!1),
        [q, X] = s.useState(),
        [J, Q] = s.useState(),
        $ = (e) => {
            X(e.interactionType), Q(e.interactionSourceType);
        },
        ee = (e) => {
            (0, A.openUserProfileModal)({
                sourceAnalyticsLocations: B,
                ...w,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: B,
        children: (0, i.jsx)(m.Mt, {
            value: w,
            children: (0, i.jsxs)(T.Z, {
                ref: H,
                user: t,
                displayProfile: D,
                profileType: R.y0.PANEL,
                themeOverride: U,
                className: P.container,
                children: [
                    null != q && (0, i.jsx)('div', { className: P.backdrop }),
                    (0, i.jsxs)(a.u2, {
                        children: [
                            (0, i.jsxs)(S.Z, {
                                profileType: R.y0.PANEL,
                                children: [
                                    (0, i.jsx)(v.Z, {
                                        user: t,
                                        profileType: R.y0.PANEL
                                    }),
                                    t.bot ? (0, i.jsx)(x.Z, { user: t }) : (0, i.jsx)(N.Z, { user: t })
                                ]
                            }),
                            (0, i.jsxs)('header', {
                                className: P.header,
                                children: [
                                    (0, i.jsx)(g.Z, {
                                        user: t,
                                        displayProfile: D,
                                        profileType: R.y0.PANEL,
                                        animateOnHover: !G,
                                        className: P.banner
                                    }),
                                    (0, i.jsx)(I.Z, {
                                        isReply: Y,
                                        sent: W,
                                        shown: V,
                                        userId: t.id,
                                        className: P.toast
                                    }),
                                    (0, i.jsx)(E.Z, {
                                        location: 'UserProfilePanel',
                                        user: t,
                                        displayProfile: D,
                                        channelId: O.id,
                                        profileType: R.y0.PANEL,
                                        isInteractionSource: J === R.n_.AVATAR || J === R.n_.STATUS,
                                        onOpenProfile: y ? void 0 : ee,
                                        onInteraction: $,
                                        setInteractionToastShown: F,
                                        setInteractionSent: z,
                                        setIsReplyInteraction: K,
                                        showReplyPopout: q === R.P.REPLY && J === R.n_.AVATAR
                                    }),
                                    (0, i.jsx)(C.Z, {
                                        location: 'UserProfilePanel',
                                        user: t,
                                        channelId: O.id,
                                        profileType: R.y0.PANEL,
                                        isInteractionSource: J === R.n_.STATUS,
                                        onInteraction: $,
                                        setInteractionToastShown: F,
                                        setInteractionSent: z,
                                        setIsReplyInteraction: K,
                                        showReplyPopout: q === R.P.REPLY && J === R.n_.STATUS
                                    }),
                                    t.isClyde() && (0, i.jsx)(d.Z, { className: P.headerTag })
                                ]
                            }),
                            (0, i.jsx)(Z.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: D,
                                channel: O,
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
                            className: P.footer,
                            children: (0, i.jsx)(l.Button, {
                                fullWidth: !0,
                                size: l.Button.Sizes.LARGE,
                                look: l.Button.Looks.BLANK,
                                color: P.footerButtonColor,
                                onClick: () => {
                                    ee(),
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
    });
}
