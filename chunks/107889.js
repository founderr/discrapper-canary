t.d(n, {
    Z: function () {
        return U;
    }
}),
    t(47120);
var i = t(735250),
    s = t(470079),
    o = t(442837),
    l = t(481060),
    r = t(727637),
    a = t(58540),
    c = t(100527),
    d = t(906732),
    u = t(680295),
    I = t(699516),
    _ = t(5192),
    f = t(785717),
    E = t(221292),
    m = t(481046),
    p = t(910128),
    x = t(318661),
    v = t(78675),
    Z = t(113557),
    h = t(169979),
    S = t(119096),
    T = t(502762),
    A = t(544989),
    g = t(705556),
    N = t(481932),
    b = t(195387),
    j = t(272510),
    L = t(225714),
    R = t(171368),
    C = t(806926),
    M = t(228168),
    O = t(981631),
    P = t(689938),
    y = t(392214);
function U(e) {
    let { user: n, currentUser: t, guildId: U, channelId: D, messageId: F, roleId: B, sessionId: w, friendToken: G, initialSection: k, initialSubsection: V, transitionState: Y, onClose: W, showGuildProfile: K = !0, sourceAnalyticsLocations: H = [] } = e,
        z = U === O.ME ? void 0 : U,
        { analyticsLocations: q } = (0, d.ZP)([...H, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        Q = (0, f.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: w,
            guildId: z,
            channelId: D,
            messageId: F,
            roleId: B,
            showGuildProfile: K
        }),
        { profileStatusEditEnabled: X } = (0, m.K)({ location: 'SimplifiedUserProfileModalHeader' }),
        { persistentCallCtaEnabled: J, activeInviteToCallCtaEnabled: $ } = (0, p.l)({ location: 'SimplifiedUserProfileModalHeader' }),
        [ee, en] = s.useState(),
        [et, ei] = s.useState(),
        es = (e) => {
            en(e.interactionType), ei(e.interactionSourceType);
        },
        eo = (0, x.ZP)(n.id, K ? z : void 0),
        el = (0, x.ZP)(n.id, z),
        er = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        ea = s.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, a.$)(ea);
    let ec = s.createRef(),
        ed = (0, r.Z)(ec),
        [eu, eI] = s.useState(!1),
        [e_, ef] = s.useState(!1),
        [eE, em] = s.useState(!1),
        ep = () =>
            (null == el ? void 0 : el.guildId) == null
                ? null
                : (null == eo ? void 0 : eo.guildId) != null
                  ? (0, i.jsx)(l.MenuItem, {
                        id: 'view-main-profile',
                        label: P.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            W(),
                                (0, R.openUserProfileModal)({
                                    ...Q,
                                    showGuildProfile: !1,
                                    friendToken: G,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, E.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: q,
                                    ...Q
                                });
                        }
                    })
                  : (0, i.jsx)(l.MenuItem, {
                        id: 'view-server-profile',
                        label: P.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(z, D, n) }),
                        action: () => {
                            W(),
                                (0, R.openUserProfileModal)({
                                    ...Q,
                                    showGuildProfile: !0,
                                    friendToken: G,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, E.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: q,
                                    ...Q
                                });
                        }
                    });
    return (0, i.jsx)(d.Gt, {
        value: q,
        children: (0, i.jsx)(f.Mt, {
            value: Q,
            children: (0, i.jsxs)(l.ModalRoot, {
                transitionState: Y,
                className: y.root,
                hideShadow: !0,
                'aria-label': P.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, i.jsxs)(T.Z, {
                        user: n,
                        displayProfile: eo,
                        profileType: M.y0.FULL_SIZE,
                        ref: ec,
                        children: [
                            (0, i.jsxs)(A.Z, {
                                profileType: M.y0.FULL_SIZE,
                                children: [
                                    (0, i.jsx)(b.Z, {
                                        user: n,
                                        guildId: z,
                                        channelId: D,
                                        onClose: W
                                    }),
                                    (0, i.jsx)(N.Z, {
                                        profileType: M.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: G
                                    }),
                                    (0, i.jsx)(j.Z, {
                                        user: n,
                                        guildId: z,
                                        viewProfileItem: ep()
                                    })
                                ]
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(v.Z, {
                                        user: n,
                                        displayProfile: eo,
                                        profileType: M.y0.FULL_SIZE,
                                        hasProfileEffect: (null == eo ? void 0 : eo.profileEffectId) != null
                                    }),
                                    (0, i.jsx)(S.Z, {
                                        isReply: eE,
                                        sent: e_,
                                        shown: eu,
                                        className: y.toast
                                    }),
                                    null != ee && (0, i.jsx)('div', { className: y.backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: y.headerInner,
                                        children: [
                                            (0, i.jsx)(Z.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: eo,
                                                guildId: z,
                                                channelId: D,
                                                profileType: M.y0.FULL_SIZE,
                                                isInteractionSource: et === M.n_.AVATAR || et === M.n_.STATUS,
                                                onInteraction: es,
                                                showReplyPopout: ee === M.P.REPLY && et === M.n_.AVATAR,
                                                setInteractionToastShown: eI,
                                                setInteractionSent: ef,
                                                setIsReplyInteraction: em
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: y.headerButtons,
                                                children: [
                                                    (0, i.jsx)(L.Z, {
                                                        user: n,
                                                        isCurrentUser: n.id === t.id,
                                                        relationshipType: er,
                                                        persistentCallCtaEnabled: J,
                                                        activeInviteToCallCtaEnabled: $,
                                                        friendToken: G,
                                                        onClose: W
                                                    }),
                                                    (0, i.jsx)(g.Z, {
                                                        user: n,
                                                        guildId: z,
                                                        onClose: W
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)(h.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: eo,
                                                guildId: z,
                                                channelId: D,
                                                profileType: M.y0.FULL_SIZE,
                                                editEnabled: X,
                                                hasEntered: Y === l.ModalTransitionState.ENTERED,
                                                isInteractionSource: et === M.n_.STATUS,
                                                onInteraction: es,
                                                showReplyPopout: ee === M.P.REPLY && et === M.n_.STATUS,
                                                onClose: W,
                                                setInteractionToastShown: eI,
                                                setInteractionSent: ef,
                                                setIsReplyInteraction: em
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(C.Z, {
                                user: n,
                                currentUser: t,
                                channelId: D,
                                displayProfile: eo,
                                initialSection: k,
                                initialSubsection: V,
                                friendToken: G,
                                onClose: W
                            })
                        ]
                    }),
                    (null == eo ? void 0 : eo.profileEffectId) != null &&
                        (0, i.jsx)(u.Z, {
                            profileEffectId: null == eo ? void 0 : eo.profileEffectId,
                            isHovering: ed
                        })
                ]
            })
        })
    });
}
