t.d(n, {
    Z: function () {
        return y;
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
    m = t(910128),
    p = t(318661),
    x = t(78675),
    v = t(113557),
    Z = t(169979),
    h = t(119096),
    S = t(502762),
    T = t(544989),
    A = t(705556),
    g = t(481932),
    N = t(195387),
    b = t(272510),
    j = t(225714),
    L = t(171368),
    R = t(806926),
    C = t(228168),
    M = t(981631),
    O = t(689938),
    P = t(392214);
function y(e) {
    let { user: n, currentUser: t, guildId: y, channelId: U, messageId: D, roleId: F, sessionId: B, friendToken: w, initialSection: G, initialSubsection: k, transitionState: V, onClose: Y, showGuildProfile: W = !0, sourceAnalyticsLocations: K = [] } = e,
        z = y === M.ME ? void 0 : y,
        { analyticsLocations: H } = (0, d.ZP)([...K, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        q = (0, f.ZB)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            sourceSessionId: B,
            guildId: z,
            channelId: U,
            messageId: D,
            roleId: F,
            showGuildProfile: W
        }),
        { persistentCallCtaEnabled: Q, activeInviteToCallCtaEnabled: X } = (0, m.l)({ location: 'SimplifiedUserProfileModalHeader' }),
        [J, $] = s.useState(),
        [ee, en] = s.useState(),
        et = (e) => {
            $(e.interactionType), en(e.interactionSourceType);
        },
        ei = (0, p.ZP)(n.id, W ? z : void 0),
        es = (0, p.ZP)(n.id, z),
        eo = (0, o.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        el = s.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, a.$)(el);
    let er = s.createRef(),
        ea = (0, r.Z)(er),
        [ec, ed] = s.useState(!1),
        [eu, eI] = s.useState(!1),
        [e_, ef] = s.useState(!1),
        eE = () =>
            (null == es ? void 0 : es.guildId) == null
                ? null
                : (null == ei ? void 0 : ei.guildId) != null
                  ? (0, i.jsx)(l.MenuItem, {
                        id: 'view-main-profile',
                        label: O.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            Y(),
                                (0, L.openUserProfileModal)({
                                    ...q,
                                    showGuildProfile: !1,
                                    friendToken: w,
                                    sourceAnalyticsLocations: K
                                }),
                                (0, E.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: H,
                                    ...q
                                });
                        }
                    })
                  : (0, i.jsx)(l.MenuItem, {
                        id: 'view-server-profile',
                        label: O.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: O.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(z, U, n) }),
                        action: () => {
                            Y(),
                                (0, L.openUserProfileModal)({
                                    ...q,
                                    showGuildProfile: !0,
                                    friendToken: w,
                                    sourceAnalyticsLocations: K
                                }),
                                (0, E.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: H,
                                    ...q
                                });
                        }
                    });
    return (0, i.jsx)(d.Gt, {
        value: H,
        children: (0, i.jsx)(f.Mt, {
            value: q,
            children: (0, i.jsxs)(l.ModalRoot, {
                transitionState: V,
                className: P.root,
                hideShadow: !0,
                'aria-label': O.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, i.jsxs)(S.Z, {
                        user: n,
                        displayProfile: ei,
                        profileType: C.y0.FULL_SIZE,
                        ref: er,
                        children: [
                            (0, i.jsxs)(T.Z, {
                                profileType: C.y0.FULL_SIZE,
                                children: [
                                    (0, i.jsx)(N.Z, {
                                        user: n,
                                        guildId: z,
                                        channelId: U,
                                        onClose: Y
                                    }),
                                    (0, i.jsx)(g.Z, {
                                        profileType: C.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: w
                                    }),
                                    (0, i.jsx)(b.Z, {
                                        user: n,
                                        guildId: z,
                                        viewProfileItem: eE()
                                    })
                                ]
                            }),
                            (0, i.jsxs)('header', {
                                children: [
                                    (0, i.jsx)(x.Z, {
                                        user: n,
                                        displayProfile: ei,
                                        profileType: C.y0.FULL_SIZE,
                                        hasProfileEffect: (null == ei ? void 0 : ei.profileEffectId) != null
                                    }),
                                    (0, i.jsx)(h.Z, {
                                        isReply: e_,
                                        sent: eu,
                                        shown: ec,
                                        className: P.toast
                                    }),
                                    null != J && (0, i.jsx)('div', { className: P.backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: P.headerInner,
                                        children: [
                                            (0, i.jsx)(v.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: ei,
                                                guildId: z,
                                                channelId: U,
                                                profileType: C.y0.FULL_SIZE,
                                                isInteractionSource: ee === C.n_.AVATAR || ee === C.n_.STATUS,
                                                onInteraction: et,
                                                showReplyPopout: J === C.P.REPLY && ee === C.n_.AVATAR,
                                                setInteractionToastShown: ed,
                                                setInteractionSent: eI,
                                                setIsReplyInteraction: ef
                                            }),
                                            (0, i.jsxs)('div', {
                                                className: P.headerButtons,
                                                children: [
                                                    (0, i.jsx)(j.Z, {
                                                        user: n,
                                                        isCurrentUser: n.id === t.id,
                                                        relationshipType: eo,
                                                        persistentCallCtaEnabled: Q,
                                                        activeInviteToCallCtaEnabled: X,
                                                        friendToken: w,
                                                        onClose: Y
                                                    }),
                                                    (0, i.jsx)(A.Z, {
                                                        user: n,
                                                        guildId: z,
                                                        onClose: Y
                                                    })
                                                ]
                                            }),
                                            (0, i.jsx)(Z.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: ei,
                                                guildId: z,
                                                channelId: U,
                                                profileType: C.y0.FULL_SIZE,
                                                hasEntered: V === l.ModalTransitionState.ENTERED,
                                                isInteractionSource: ee === C.n_.STATUS,
                                                onInteraction: et,
                                                showReplyPopout: J === C.P.REPLY && ee === C.n_.STATUS,
                                                onClose: Y,
                                                setInteractionToastShown: ed,
                                                setInteractionSent: eI,
                                                setIsReplyInteraction: ef
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, i.jsx)(R.Z, {
                                user: n,
                                currentUser: t,
                                channelId: U,
                                displayProfile: ei,
                                initialSection: G,
                                initialSubsection: k,
                                friendToken: w,
                                onClose: Y
                            })
                        ]
                    }),
                    (null == ei ? void 0 : ei.profileEffectId) != null &&
                        (0, i.jsx)(u.Z, {
                            profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                            isHovering: ea
                        })
                ]
            })
        })
    });
}
