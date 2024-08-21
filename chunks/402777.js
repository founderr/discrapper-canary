n.d(t, {
    Z: function () {
        return j;
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
    _ = n(78675),
    f = n(113557),
    E = n(169979),
    g = n(119096),
    C = n(502762),
    I = n(256059),
    x = n(437758),
    T = n(544989),
    N = n(481932),
    v = n(272510),
    S = n(171368),
    Z = n(926150),
    A = n(940885),
    M = n(625015),
    b = n(228168),
    R = n(689938),
    L = n(317986);
function j(e) {
    let { user: t, currentUser: n, channel: j } = e,
        P = __OVERLAY__,
        O = (0, m.ZP)(t.id),
        y = (0, o.ZP)(),
        { analyticsLocations: D } = (0, u.ZP)(c.Z.PROFILE_PANEL),
        k = (0, h.ZB)({
            layout: 'SIMPLIFIED_DM_PANEL',
            userId: t.id,
            channelId: j.id
        }),
        U = a.useRef(null),
        w = (0, r.Z)(U),
        [B, H] = a.useState(!1),
        [G, V] = a.useState(!1),
        [F, W] = a.useState(!1),
        [z, Y] = a.useState(),
        [K, q] = a.useState(),
        X = (e) => {
            Y(e.interactionType), q(e.interactionSourceType);
        },
        Q = (e) => {
            (0, S.openUserProfileModal)({
                sourceAnalyticsLocations: D,
                ...k,
                ...e
            });
        };
    return (0, i.jsx)(u.Gt, {
        value: D,
        children: (0, i.jsx)(h.Mt, {
            value: k,
            children: (0, i.jsxs)(C.Z, {
                ref: U,
                user: t,
                displayProfile: O,
                profileType: b.y0.PANEL,
                themeOverride: y,
                className: L.container,
                children: [
                    null != z && (0, i.jsx)('div', { className: L.backdrop }),
                    (0, i.jsxs)(s.u2, {
                        children: [
                            (0, i.jsxs)(T.Z, {
                                profileType: b.y0.PANEL,
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        user: t,
                                        profileType: b.y0.PANEL
                                    }),
                                    t.bot ? (0, i.jsx)(x.Z, { user: t }) : (0, i.jsx)(v.Z, { user: t })
                                ]
                            }),
                            (0, i.jsxs)('header', {
                                className: L.header,
                                children: [
                                    (0, i.jsx)(_.Z, {
                                        user: t,
                                        displayProfile: O,
                                        profileType: b.y0.PANEL,
                                        animateOnHover: !w,
                                        className: L.banner
                                    }),
                                    (0, i.jsx)(g.Z, {
                                        isReply: F,
                                        sent: G,
                                        shown: B,
                                        className: L.toast
                                    }),
                                    (0, i.jsx)(f.Z, {
                                        location: 'SimplifiedProfilePanel',
                                        user: t,
                                        displayProfile: O,
                                        channelId: j.id,
                                        profileType: b.y0.PANEL,
                                        isInteractionSource: K === b.n_.AVATAR || K === b.n_.STATUS,
                                        onOpenProfile: P ? void 0 : Q,
                                        onInteraction: X,
                                        setInteractionToastShown: H,
                                        setInteractionSent: V,
                                        setIsReplyInteraction: W,
                                        showReplyPopout: z === b.P.REPLY && K === b.n_.AVATAR
                                    }),
                                    (0, i.jsx)(E.Z, {
                                        location: 'SimplifiedProfilePanel',
                                        user: t,
                                        channelId: j.id,
                                        profileType: b.y0.PANEL,
                                        isInteractionSource: K === b.n_.STATUS,
                                        onInteraction: X,
                                        setInteractionToastShown: H,
                                        setInteractionSent: V,
                                        setIsReplyInteraction: W,
                                        showReplyPopout: z === b.P.REPLY && K === b.n_.STATUS
                                    }),
                                    (0, i.jsx)(I.Z, { user: t })
                                ]
                            }),
                            (0, i.jsx)(Z.Z, {
                                user: t,
                                currentUser: n,
                                displayProfile: O,
                                channel: j,
                                isHovering: w,
                                onOpenProfile: P ? void 0 : Q
                            }),
                            (0, i.jsx)(A.Z, { user: t }),
                            (0, i.jsx)(M.Z, {
                                user: t,
                                displayProfile: O
                            })
                        ]
                    }),
                    !P &&
                        (0, i.jsx)('footer', {
                            className: L.footer,
                            children: (0, i.jsx)(l.Button, {
                                fullWidth: !0,
                                size: l.Button.Sizes.LARGE,
                                look: l.Button.Looks.BLANK,
                                color: L.footerButtonColor,
                                onClick: () => {
                                    Q(),
                                        (0, p.pQ)({
                                            action: 'PRESS_VIEW_PROFILE',
                                            analyticsLocations: D,
                                            ...k
                                        });
                                },
                                children: R.Z.Messages.VIEW_FULL_PROFILE
                            })
                        }),
                    (null == O ? void 0 : O.profileEffectId) != null &&
                        (0, i.jsx)(d.Z, {
                            profileEffectId: null == O ? void 0 : O.profileEffectId,
                            isHovering: w
                        })
                ]
            })
        })
    });
}
