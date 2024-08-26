t.d(n, {
    Z: function () {
        return U;
    }
}),
    t(47120);
var s = t(735250),
    i = t(470079),
    o = t(442837),
    l = t(481060),
    r = t(727637),
    a = t(58540),
    c = t(100527),
    d = t(906732),
    u = t(680295),
    I = t(699516),
    _ = t(5192),
    E = t(785717),
    f = t(221292),
    m = t(910128),
    p = t(318661),
    x = t(428785),
    Z = t(78675),
    h = t(113557),
    v = t(169979),
    S = t(119096),
    T = t(502762),
    A = t(544989),
    g = t(705556),
    N = t(481932),
    L = t(195387),
    j = t(272510),
    R = t(225714),
    O = t(171368),
    b = t(806926),
    C = t(228168),
    M = t(981631),
    P = t(689938),
    y = t(392214);
function U(e) {
    let { user: n, currentUser: t, guildId: U, channelId: D, messageId: F, roleId: B, sessionId: w, friendToken: G, initialSection: V, initialSubsection: k, transitionState: Y, onClose: W, showGuildProfile: K = !0, sourceAnalyticsLocations: z = [] } = e,
        H = U === M.ME ? void 0 : U,
        { analyticsLocations: q } = (0, d.ZP)([...z, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        Q = (0, x.Z)({
            user: n,
            currentUser: t,
            location: M.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        X = (0, E.ZB)({
            layout: Q ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: w,
            guildId: H,
            channelId: D,
            messageId: F,
            roleId: B,
            showGuildProfile: K
        }),
        { persistentCallCtaEnabled: J, activeInviteToCallCtaEnabled: $ } = (0, m.l)({ location: 'SimplifiedUserProfileModalHeader' }),
        [ee, en] = i.useState(),
        [et, es] = i.useState(),
        ei = (e) => {
            en(e.interactionType), es(e.interactionSourceType);
        },
        eo = (0, p.ZP)(n.id, K ? H : void 0),
        el = (0, p.ZP)(n.id, H),
        er = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        ea = i.useMemo(() => (null != H ? { [H]: [n.id] } : {}), [H, n.id]);
    (0, a.$)(ea);
    let ec = i.createRef(),
        ed = (0, r.Z)(ec),
        [eu, eI] = i.useState(!1),
        [e_, eE] = i.useState(!1),
        [ef, em] = i.useState(!1),
        ep = () =>
            (null == el ? void 0 : el.guildId) == null
                ? null
                : (null == eo ? void 0 : eo.guildId) != null
                  ? (0, s.jsx)(l.MenuItem, {
                        id: 'view-main-profile',
                        label: P.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            W(),
                                (0, O.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !1,
                                    friendToken: G,
                                    sourceAnalyticsLocations: z
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: q,
                                    ...X
                                });
                        }
                    })
                  : (0, s.jsx)(l.MenuItem, {
                        id: 'view-server-profile',
                        label: P.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(H, D, n) }),
                        action: () => {
                            W(),
                                (0, O.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !0,
                                    friendToken: G,
                                    sourceAnalyticsLocations: z
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: q,
                                    ...X
                                });
                        }
                    });
    return (0, s.jsx)(d.Gt, {
        value: q,
        children: (0, s.jsx)(E.Mt, {
            value: X,
            children: (0, s.jsxs)(l.ModalRoot, {
                transitionState: Y,
                className: y.root,
                hideShadow: !0,
                'aria-label': P.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, s.jsxs)(T.Z, {
                        user: n,
                        displayProfile: eo,
                        profileType: C.y0.FULL_SIZE,
                        ref: ec,
                        children: [
                            (0, s.jsxs)(A.Z, {
                                profileType: C.y0.FULL_SIZE,
                                children: [
                                    (0, s.jsx)(L.Z, {
                                        user: n,
                                        guildId: H,
                                        channelId: D,
                                        onClose: W
                                    }),
                                    (0, s.jsx)(N.Z, {
                                        profileType: C.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: G
                                    }),
                                    (0, s.jsx)(j.Z, {
                                        user: n,
                                        guildId: H,
                                        viewProfileItem: ep()
                                    })
                                ]
                            }),
                            (0, s.jsxs)('header', {
                                children: [
                                    (0, s.jsx)(Z.Z, {
                                        user: n,
                                        displayProfile: eo,
                                        profileType: C.y0.FULL_SIZE
                                    }),
                                    (0, s.jsx)(S.Z, {
                                        isReply: ef,
                                        sent: e_,
                                        shown: eu,
                                        className: y.toast
                                    }),
                                    null != ee && (0, s.jsx)('div', { className: y.backdrop }),
                                    (0, s.jsxs)('div', {
                                        className: y.headerInner,
                                        children: [
                                            (0, s.jsx)(h.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: eo,
                                                guildId: H,
                                                channelId: D,
                                                profileType: C.y0.FULL_SIZE,
                                                isInteractionSource: et === C.n_.AVATAR || et === C.n_.STATUS,
                                                onInteraction: ei,
                                                showReplyPopout: ee === C.P.REPLY && et === C.n_.AVATAR,
                                                setInteractionToastShown: eI,
                                                setInteractionSent: eE,
                                                setIsReplyInteraction: em
                                            }),
                                            (0, s.jsxs)('div', {
                                                className: y.headerButtons,
                                                children: [
                                                    (0, s.jsx)(R.Z, {
                                                        user: n,
                                                        isCurrentUser: n.id === t.id,
                                                        relationshipType: er,
                                                        persistentCallCtaEnabled: J,
                                                        activeInviteToCallCtaEnabled: $,
                                                        friendToken: G,
                                                        onClose: W
                                                    }),
                                                    (0, s.jsx)(g.Z, {
                                                        user: n,
                                                        guildId: H,
                                                        onClose: W
                                                    })
                                                ]
                                            }),
                                            (0, s.jsx)(v.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: eo,
                                                guildId: H,
                                                channelId: D,
                                                profileType: C.y0.FULL_SIZE,
                                                hasEntered: Y === l.ModalTransitionState.ENTERED,
                                                isInteractionSource: et === C.n_.STATUS,
                                                onInteraction: ei,
                                                showReplyPopout: ee === C.P.REPLY && et === C.n_.STATUS,
                                                onClose: W,
                                                setInteractionToastShown: eI,
                                                setInteractionSent: eE,
                                                setIsReplyInteraction: em
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, s.jsx)(b.Z, {
                                user: n,
                                currentUser: t,
                                channelId: D,
                                displayProfile: eo,
                                initialSection: V,
                                initialSubsection: k,
                                friendToken: G,
                                onClose: W
                            })
                        ]
                    }),
                    (null == eo ? void 0 : eo.profileEffectId) != null &&
                        (0, s.jsx)(u.Z, {
                            profileEffectId: null == eo ? void 0 : eo.profileEffectId,
                            isHovering: ed
                        })
                ]
            })
        })
    });
}
