n.d(t, {
    Z: function () {
        return O;
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
    d = n(680295),
    h = n(785717),
    p = n(221292),
    m = n(318661),
    _ = n(428785),
    f = n(78675),
    E = n(113557),
    g = n(169979),
    C = n(119096),
    I = n(502762),
    x = n(256059),
    T = n(437758),
    N = n(544989),
    v = n(481932),
    S = n(272510),
    Z = n(171368),
    A = n(926150),
    M = n(940885),
    b = n(625015),
    R = n(228168),
    L = n(981631),
    j = n(689938),
    P = n(317986);
function O(e) {
    let { user: t, currentUser: n, channel: O } = e,
        y = __OVERLAY__,
        D = (0, m.ZP)(t.id),
        k = (0, o.ZP)(),
        U = (0, _.Z)({
            user: t,
            currentUser: n,
            location: L.Sbl.PROFILE_PANEL
        }),
        w = (0, h.ZB)({
            layout: U ? 'SIMPLIFIED_DM_PANEL' : 'SIMPLIFIED_DM_PANEL_RESTRICTED_BLOCKER_PROFILE',
            userId: t.id,
            channelId: O.id
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
        children: (0, i.jsx)(h.Mt, {
            value: w,
            children: (0, i.jsxs)(I.Z, {
                ref: H,
                user: t,
                displayProfile: D,
                profileType: R.y0.PANEL,
                themeOverride: k,
                className: P.container,
                children: [
                    null != q && (0, i.jsx)('div', { className: P.backdrop }),
                    (0, i.jsxs)(s.u2, {
                        children: [
                            (0, i.jsxs)(N.Z, {
                                profileType: R.y0.PANEL,
                                children: [
                                    (0, i.jsx)(v.Z, {
                                        user: t,
                                        profileType: R.y0.PANEL
                                    }),
                                    t.bot ? (0, i.jsx)(T.Z, { user: t }) : (0, i.jsx)(S.Z, { user: t })
                                ]
                            }),
                            (0, i.jsxs)('header', {
                                className: P.header,
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        user: t,
                                        displayProfile: D,
                                        profileType: R.y0.PANEL,
                                        animateOnHover: !G,
                                        className: P.banner
                                    }),
                                    (0, i.jsx)(C.Z, {
                                        isReply: Y,
                                        sent: W,
                                        shown: V,
                                        className: P.toast
                                    }),
                                    (0, i.jsx)(E.Z, {
                                        location: 'SimplifiedProfilePanel',
                                        user: t,
                                        displayProfile: D,
                                        channelId: O.id,
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
                                        location: 'SimplifiedProfilePanel',
                                        user: t,
                                        channelId: O.id,
                                        profileType: R.y0.PANEL,
                                        isInteractionSource: Q === R.n_.STATUS,
                                        onInteraction: $,
                                        setInteractionToastShown: F,
                                        setInteractionSent: z,
                                        setIsReplyInteraction: K,
                                        showReplyPopout: q === R.P.REPLY && Q === R.n_.STATUS
                                    }),
                                    (0, i.jsx)(x.Z, { user: t })
                                ]
                            }),
                            (0, i.jsx)(A.Z, {
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
                        (0, i.jsx)(d.Z, {
                            profileEffectId: null == D ? void 0 : D.profileEffectId,
                            isHovering: G
                        })
                ]
            })
        })
    });
}
