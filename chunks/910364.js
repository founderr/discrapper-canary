t.d(n, {
    Z: function () {
        return G;
    }
}),
    t(47120);
var i = t(200651),
    s = t(192379),
    o = t(100621),
    l = t(442837),
    r = t(481060),
    c = t(727637),
    a = t(58540),
    d = t(100527),
    u = t(906732),
    _ = t(680295),
    I = t(699516),
    E = t(5192),
    f = t(785717),
    m = t(221292),
    p = t(816988),
    x = t(687158),
    Z = t(326094),
    h = t(510659),
    S = t(113557),
    v = t(867176),
    T = t(169979),
    g = t(451834),
    N = t(502762),
    A = t(544989),
    b = t(705556),
    j = t(481932),
    P = t(195387),
    M = t(272510),
    L = t(748283),
    R = t(902423),
    O = t(171368),
    C = t(62154),
    y = t(412317),
    U = t(228168),
    B = t(981631),
    D = t(689938),
    F = t(272216);
function G(e) {
    let { user: n, currentUser: t, guildId: G, channelId: w, messageId: k, roleId: V, sessionId: W, friendToken: K, initialSection: Y, initialSubsection: H, transitionState: z, onClose: q, showGuildProfile: Q = !0, sourceAnalyticsLocations: X = [] } = e,
        { analyticsLocations: J } = (0, u.ZP)([...X, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        $ = (0, Z.Z)({
            user: n,
            currentUser: t,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        ee = (0, f.ZB)({
            layout: $ ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: W,
            guildId: G,
            channelId: w,
            messageId: k,
            roleId: V,
            showGuildProfile: Q
        }),
        en = (0, h.$m)(),
        et = (0, r.useSpring)({
            opacity: null != en.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        ei = (0, x.ZP)(n.id, Q ? G : void 0),
        es = (0, x.ZP)(n.id, G),
        eo = (0, l.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        el = n.id === t.id,
        er = s.useMemo(() => (null != G ? { [G]: [n.id] } : {}), [G, n.id]);
    (0, a.$)(er);
    let ec = s.createRef(),
        ea = (0, c.Z)(ec),
        { permanentEntryPointsEnabled: ed } = (0, p.u)({ location: 'UserProfileModal' }),
        eu = () =>
            (null == es ? void 0 : es.guildId) == null
                ? null
                : (null == ei ? void 0 : ei.guildId) != null
                  ? (0, i.jsx)(r.MenuItem, {
                        id: 'view-main-profile',
                        label: D.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: D.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            q(),
                                (0, O.openUserProfileModal)({
                                    ...ee,
                                    showGuildProfile: !1,
                                    friendToken: K,
                                    sourceAnalyticsLocations: X
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: J,
                                    ...ee
                                });
                        }
                    })
                  : (0, i.jsx)(r.MenuItem, {
                        id: 'view-server-profile',
                        label: D.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: D.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(G, w, n) }),
                        action: () => {
                            q(),
                                (0, O.openUserProfileModal)({
                                    ...ee,
                                    showGuildProfile: !0,
                                    friendToken: K,
                                    sourceAnalyticsLocations: X
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: J,
                                    ...ee
                                });
                        }
                    });
    return (0, i.jsx)(u.Gt, {
        value: J,
        children: (0, i.jsx)(f.Mt, {
            value: ee,
            children: (0, i.jsx)(h.NJ, {
                value: en,
                children: (0, i.jsxs)(r.ModalRoot, {
                    transitionState: z,
                    className: F.root,
                    hideShadow: !0,
                    'aria-label': D.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, i.jsxs)(N.Z, {
                            user: n,
                            displayProfile: ei,
                            profileType: U.y0.FULL_SIZE,
                            ref: ec,
                            children: [
                                (0, i.jsxs)(A.Z, {
                                    profileType: U.y0.FULL_SIZE,
                                    children: [
                                        ed &&
                                            el &&
                                            (0, i.jsxs)(i.Fragment, {
                                                children: [
                                                    (0, i.jsx)(R.Z, { onClose: q }),
                                                    (0, i.jsx)(L.Z, {
                                                        currentUser: t,
                                                        onClose: q
                                                    })
                                                ]
                                            }),
                                        (0, i.jsx)(P.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            user: n,
                                            guildId: G,
                                            channelId: w,
                                            onClose: q
                                        }),
                                        (0, i.jsx)(j.Z, {
                                            shouldShowTooltip: null === en.interactionType,
                                            profileType: U.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: K
                                        }),
                                        (0, i.jsx)(M.Z, {
                                            user: n,
                                            guildId: G,
                                            viewProfileItem: eu()
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    children: [
                                        (0, i.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: ei,
                                            profileType: U.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            userId: n.id,
                                            onClose: q,
                                            className: F.toast
                                        }),
                                        null != en.interactionType &&
                                            (0, i.jsx)(o.animated.div, {
                                                style: et,
                                                className: F.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: F.headerInner,
                                            children: [
                                                (0, i.jsx)(S.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: G,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    location: 'SimplifiedUserProfileModal',
                                                    user: n,
                                                    displayProfile: ei,
                                                    guildId: G,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE,
                                                    hasEntered: z === r.ModalTransitionState.ENTERED,
                                                    onCloseProfile: q
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: F.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(y.Z, {
                                                            isCurrentUser: el,
                                                            user: n,
                                                            relationshipType: eo,
                                                            friendToken: K,
                                                            onClose: q
                                                        }),
                                                        (0, i.jsx)(b.Z, {
                                                            user: n,
                                                            guildId: G,
                                                            onClose: q
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, i.jsx)(C.Z, {
                                    user: n,
                                    currentUser: t,
                                    channelId: w,
                                    displayProfile: ei,
                                    initialSection: Y,
                                    initialSubsection: H,
                                    friendToken: K,
                                    onClose: q
                                })
                            ]
                        }),
                        (null == ei ? void 0 : ei.profileEffectId) != null &&
                            (0, i.jsx)(_.Z, {
                                profileEffectId: null == ei ? void 0 : ei.profileEffectId,
                                isHovering: ea
                            })
                    ]
                })
            })
        })
    });
}
