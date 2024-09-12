t.d(n, {
    Z: function () {
        return y;
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
    _ = t(699516),
    I = t(5192),
    E = t(785717),
    f = t(221292),
    m = t(687158),
    x = t(326094),
    Z = t(113557),
    p = t(867176),
    h = t(169979),
    S = t(119096),
    v = t(502762),
    T = t(544989),
    g = t(705556),
    A = t(481932),
    N = t(195387),
    L = t(272510),
    R = t(171368),
    j = t(62154),
    M = t(412317),
    b = t(228168),
    O = t(981631),
    C = t(689938),
    P = t(272216);
function y(e) {
    let { user: n, currentUser: t, guildId: y, channelId: U, messageId: D, roleId: F, sessionId: B, friendToken: G, initialSection: w, initialSubsection: V, transitionState: k, onClose: W, showGuildProfile: Y = !0, sourceAnalyticsLocations: K = [] } = e,
        z = y === O.ME ? void 0 : y,
        { analyticsLocations: H } = (0, d.ZP)([...K, c.Z.SIMPLIFIED_PROFILE_MODAL]),
        q = (0, x.Z)({
            user: n,
            currentUser: t,
            location: O.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        Q = (0, E.ZB)({
            layout: q ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: B,
            guildId: z,
            channelId: U,
            messageId: D,
            roleId: F,
            showGuildProfile: Y
        }),
        [X, J] = i.useState(),
        [$, ee] = i.useState(),
        en = (e) => {
            J(e.interactionType), ee(e.interactionSourceType);
        },
        et = (0, m.ZP)(n.id, Y ? z : void 0),
        es = (0, m.ZP)(n.id, z),
        ei = (0, o.e7)([_.Z], () => _.Z.getRelationshipType(n.id)),
        eo = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, a.$)(eo);
    let el = i.createRef(),
        er = (0, r.Z)(el),
        [ea, ec] = i.useState(!1),
        [ed, eu] = i.useState(!1),
        [e_, eI] = i.useState(!1),
        eE = () =>
            (null == es ? void 0 : es.guildId) == null
                ? null
                : (null == et ? void 0 : et.guildId) != null
                  ? (0, s.jsx)(l.MenuItem, {
                        id: 'view-main-profile',
                        label: C.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            W(),
                                (0, R.openUserProfileModal)({
                                    ...Q,
                                    showGuildProfile: !1,
                                    friendToken: G,
                                    sourceAnalyticsLocations: K
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: H,
                                    ...Q
                                });
                        }
                    })
                  : (0, s.jsx)(l.MenuItem, {
                        id: 'view-server-profile',
                        label: C.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(z, U, n) }),
                        action: () => {
                            W(),
                                (0, R.openUserProfileModal)({
                                    ...Q,
                                    showGuildProfile: !0,
                                    friendToken: G,
                                    sourceAnalyticsLocations: K
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: H,
                                    ...Q
                                });
                        }
                    });
    return (0, s.jsx)(d.Gt, {
        value: H,
        children: (0, s.jsx)(E.Mt, {
            value: Q,
            children: (0, s.jsxs)(l.ModalRoot, {
                transitionState: k,
                className: P.root,
                hideShadow: !0,
                'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, s.jsxs)(v.Z, {
                        user: n,
                        displayProfile: et,
                        profileType: b.y0.FULL_SIZE,
                        ref: el,
                        children: [
                            (0, s.jsxs)(T.Z, {
                                profileType: b.y0.FULL_SIZE,
                                children: [
                                    (0, s.jsx)(N.Z, {
                                        user: n,
                                        guildId: z,
                                        channelId: U,
                                        onClose: W
                                    }),
                                    (0, s.jsx)(A.Z, {
                                        profileType: b.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: G
                                    }),
                                    (0, s.jsx)(L.Z, {
                                        user: n,
                                        guildId: z,
                                        viewProfileItem: eE()
                                    })
                                ]
                            }),
                            (0, s.jsxs)('header', {
                                children: [
                                    (0, s.jsx)(p.Z, {
                                        user: n,
                                        displayProfile: et,
                                        profileType: b.y0.FULL_SIZE
                                    }),
                                    (0, s.jsx)(S.Z, {
                                        isReply: e_,
                                        sent: ed,
                                        shown: ea,
                                        userId: n.id,
                                        onClose: W,
                                        className: P.toast
                                    }),
                                    null != X && (0, s.jsx)('div', { className: P.backdrop }),
                                    (0, s.jsxs)('div', {
                                        className: P.headerInner,
                                        children: [
                                            (0, s.jsx)(Z.Z, {
                                                location: 'UserProfileModal',
                                                user: n,
                                                displayProfile: et,
                                                guildId: z,
                                                channelId: U,
                                                profileType: b.y0.FULL_SIZE,
                                                isInteractionSource: $ === b.n_.AVATAR || $ === b.n_.STATUS,
                                                onInteraction: en,
                                                showReplyPopout: X === b.P.REPLY && $ === b.n_.AVATAR,
                                                setInteractionToastShown: ec,
                                                setInteractionSent: eu,
                                                setIsReplyInteraction: eI
                                            }),
                                            (0, s.jsx)(h.Z, {
                                                location: 'SimplifiedUserProfileModal',
                                                user: n,
                                                displayProfile: et,
                                                guildId: z,
                                                channelId: U,
                                                profileType: b.y0.FULL_SIZE,
                                                hasEntered: k === l.ModalTransitionState.ENTERED,
                                                isInteractionSource: $ === b.n_.STATUS,
                                                onInteraction: en,
                                                showReplyPopout: X === b.P.REPLY && $ === b.n_.STATUS,
                                                onClose: W,
                                                setInteractionToastShown: ec,
                                                setInteractionSent: eu,
                                                setIsReplyInteraction: eI
                                            }),
                                            (0, s.jsxs)('div', {
                                                className: P.headerButtons,
                                                children: [
                                                    (0, s.jsx)(M.Z, {
                                                        user: n,
                                                        isCurrentUser: n.id === t.id,
                                                        relationshipType: ei,
                                                        friendToken: G,
                                                        onClose: W
                                                    }),
                                                    (0, s.jsx)(g.Z, {
                                                        user: n,
                                                        guildId: z,
                                                        onClose: W
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, s.jsx)(j.Z, {
                                user: n,
                                currentUser: t,
                                channelId: U,
                                displayProfile: et,
                                initialSection: w,
                                initialSubsection: V,
                                friendToken: G,
                                onClose: W
                            })
                        ]
                    }),
                    (null == et ? void 0 : et.profileEffectId) != null &&
                        (0, s.jsx)(u.Z, {
                            profileEffectId: null == et ? void 0 : et.profileEffectId,
                            isHovering: er
                        })
                ]
            })
        })
    });
}
