s.d(n, {
    Z: function () {
        return D;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(212433),
    l = s(442837),
    r = s(481060),
    c = s(727637),
    a = s(58540),
    d = s(100527),
    u = s(906732),
    I = s(680295),
    _ = s(699516),
    E = s(5192),
    f = s(785717),
    m = s(221292),
    x = s(687158),
    Z = s(326094),
    p = s(510659),
    h = s(113557),
    v = s(867176),
    S = s(169979),
    T = s(119096),
    g = s(502762),
    A = s(544989),
    N = s(705556),
    j = s(481932),
    b = s(195387),
    L = s(272510),
    M = s(171368),
    O = s(62154),
    R = s(412317),
    C = s(228168),
    P = s(981631),
    y = s(689938),
    U = s(272216);
function D(e) {
    let { user: n, currentUser: s, guildId: D, channelId: B, messageId: F, roleId: G, sessionId: w, friendToken: k, initialSection: V, initialSubsection: W, transitionState: Y, onClose: K, showGuildProfile: z = !0, sourceAnalyticsLocations: H = [] } = e,
        q = D === P.ME ? void 0 : D,
        { analyticsLocations: Q } = (0, u.ZP)([...H, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        X = (0, Z.Z)({
            user: n,
            currentUser: s,
            location: P.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        J = (0, f.ZB)({
            layout: X ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: w,
            guildId: q,
            channelId: B,
            messageId: F,
            roleId: G,
            showGuildProfile: z
        }),
        $ = (0, p.$m)(),
        ee = (0, r.useSpring)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        en = (0, x.ZP)(n.id, z ? q : void 0),
        es = (0, x.ZP)(n.id, q),
        et = (0, l.e7)([_.Z], () => _.Z.getRelationshipType(n.id)),
        ei = i.useMemo(() => (null != q ? { [q]: [n.id] } : {}), [q, n.id]);
    (0, a.$)(ei);
    let eo = i.createRef(),
        el = (0, c.Z)(eo),
        er = () =>
            (null == es ? void 0 : es.guildId) == null
                ? null
                : (null == en ? void 0 : en.guildId) != null
                  ? (0, t.jsx)(r.MenuItem, {
                        id: 'view-main-profile',
                        label: y.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            K(),
                                (0, M.openUserProfileModal)({
                                    ...J,
                                    showGuildProfile: !1,
                                    friendToken: k,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: Q,
                                    ...J
                                });
                        }
                    })
                  : (0, t.jsx)(r.MenuItem, {
                        id: 'view-server-profile',
                        label: y.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(q, B, n) }),
                        action: () => {
                            K(),
                                (0, M.openUserProfileModal)({
                                    ...J,
                                    showGuildProfile: !0,
                                    friendToken: k,
                                    sourceAnalyticsLocations: H
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: Q,
                                    ...J
                                });
                        }
                    });
    return (0, t.jsx)(u.Gt, {
        value: Q,
        children: (0, t.jsx)(f.Mt, {
            value: J,
            children: (0, t.jsx)(p.NJ, {
                value: $,
                children: (0, t.jsxs)(r.ModalRoot, {
                    transitionState: Y,
                    className: U.root,
                    hideShadow: !0,
                    'aria-label': y.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, t.jsxs)(g.Z, {
                            user: n,
                            displayProfile: en,
                            profileType: C.y0.FULL_SIZE,
                            ref: eo,
                            children: [
                                (0, t.jsxs)(A.Z, {
                                    profileType: C.y0.FULL_SIZE,
                                    children: [
                                        (0, t.jsx)(b.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            user: n,
                                            guildId: q,
                                            channelId: B,
                                            onClose: K
                                        }),
                                        (0, t.jsx)(j.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            profileType: C.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: k
                                        }),
                                        (0, t.jsx)(L.Z, {
                                            user: n,
                                            guildId: q,
                                            viewProfileItem: er()
                                        })
                                    ]
                                }),
                                (0, t.jsxs)('header', {
                                    children: [
                                        (0, t.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: en,
                                            profileType: C.y0.FULL_SIZE
                                        }),
                                        (0, t.jsx)(T.Z, {
                                            userId: n.id,
                                            onClose: K,
                                            className: U.toast
                                        }),
                                        null != $.interactionType &&
                                            (0, t.jsx)(o.animated.div, {
                                                style: ee,
                                                className: U.backdrop
                                            }),
                                        (0, t.jsxs)('div', {
                                            className: U.headerInner,
                                            children: [
                                                (0, t.jsx)(h.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: q,
                                                    channelId: B,
                                                    profileType: C.y0.FULL_SIZE
                                                }),
                                                (0, t.jsx)(S.Z, {
                                                    location: 'SimplifiedUserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: q,
                                                    channelId: B,
                                                    profileType: C.y0.FULL_SIZE,
                                                    hasEntered: Y === r.ModalTransitionState.ENTERED,
                                                    onCloseProfile: K
                                                }),
                                                (0, t.jsxs)('div', {
                                                    className: U.headerButtons,
                                                    children: [
                                                        (0, t.jsx)(R.Z, {
                                                            user: n,
                                                            isCurrentUser: n.id === s.id,
                                                            relationshipType: et,
                                                            friendToken: k,
                                                            onClose: K
                                                        }),
                                                        (0, t.jsx)(N.Z, {
                                                            user: n,
                                                            guildId: q,
                                                            onClose: K
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, t.jsx)(O.Z, {
                                    user: n,
                                    currentUser: s,
                                    channelId: B,
                                    displayProfile: en,
                                    initialSection: V,
                                    initialSubsection: W,
                                    friendToken: k,
                                    onClose: K
                                })
                            ]
                        }),
                        (null == en ? void 0 : en.profileEffectId) != null &&
                            (0, t.jsx)(I.Z, {
                                profileEffectId: null == en ? void 0 : en.profileEffectId,
                                isHovering: el
                            })
                    ]
                })
            })
        })
    });
}
