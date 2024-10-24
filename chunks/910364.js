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
        J = G === B.ME ? void 0 : G,
        { analyticsLocations: $ } = (0, u.ZP)([...X, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        ee = (0, Z.Z)({
            user: n,
            currentUser: t,
            location: B.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        en = (0, f.ZB)({
            layout: ee ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: W,
            guildId: J,
            channelId: w,
            messageId: k,
            roleId: V,
            showGuildProfile: Q
        }),
        et = (0, h.$m)(),
        ei = (0, r.useSpring)({
            opacity: null != et.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        es = (0, x.ZP)(n.id, Q ? J : void 0),
        eo = (0, x.ZP)(n.id, J),
        el = (0, l.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        er = n.id === t.id,
        ec = s.useMemo(() => (null != J ? { [J]: [n.id] } : {}), [J, n.id]);
    (0, a.$)(ec);
    let ea = s.createRef(),
        ed = (0, c.Z)(ea),
        { permanentEntryPointsEnabled: eu } = (0, p.u)({ location: 'UserProfileModal' }),
        e_ = () =>
            (null == eo ? void 0 : eo.guildId) == null
                ? null
                : (null == es ? void 0 : es.guildId) != null
                  ? (0, i.jsx)(r.MenuItem, {
                        id: 'view-main-profile',
                        label: D.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: D.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            q(),
                                (0, O.openUserProfileModal)({
                                    ...en,
                                    showGuildProfile: !1,
                                    friendToken: K,
                                    sourceAnalyticsLocations: X
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: $,
                                    ...en
                                });
                        }
                    })
                  : (0, i.jsx)(r.MenuItem, {
                        id: 'view-server-profile',
                        label: D.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: D.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(J, w, n) }),
                        action: () => {
                            q(),
                                (0, O.openUserProfileModal)({
                                    ...en,
                                    showGuildProfile: !0,
                                    friendToken: K,
                                    sourceAnalyticsLocations: X
                                }),
                                (0, m.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: $,
                                    ...en
                                });
                        }
                    });
    return (0, i.jsx)(u.Gt, {
        value: $,
        children: (0, i.jsx)(f.Mt, {
            value: en,
            children: (0, i.jsx)(h.NJ, {
                value: et,
                children: (0, i.jsxs)(r.ModalRoot, {
                    transitionState: z,
                    className: F.root,
                    hideShadow: !0,
                    'aria-label': D.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, i.jsxs)(N.Z, {
                            user: n,
                            displayProfile: es,
                            profileType: U.y0.FULL_SIZE,
                            ref: ea,
                            children: [
                                (0, i.jsxs)(A.Z, {
                                    profileType: U.y0.FULL_SIZE,
                                    children: [
                                        eu &&
                                            er &&
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
                                            shouldShowTooltip: null === et.interactionType,
                                            user: n,
                                            guildId: J,
                                            channelId: w,
                                            onClose: q
                                        }),
                                        (0, i.jsx)(j.Z, {
                                            shouldShowTooltip: null === et.interactionType,
                                            profileType: U.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: K
                                        }),
                                        (0, i.jsx)(M.Z, {
                                            user: n,
                                            guildId: J,
                                            viewProfileItem: e_()
                                        })
                                    ]
                                }),
                                (0, i.jsxs)('header', {
                                    children: [
                                        (0, i.jsx)(v.Z, {
                                            user: n,
                                            displayProfile: es,
                                            profileType: U.y0.FULL_SIZE
                                        }),
                                        (0, i.jsx)(g.Z, {
                                            userId: n.id,
                                            onClose: q,
                                            className: F.toast
                                        }),
                                        null != et.interactionType &&
                                            (0, i.jsx)(o.animated.div, {
                                                style: ei,
                                                className: F.backdrop
                                            }),
                                        (0, i.jsxs)('div', {
                                            className: F.headerInner,
                                            children: [
                                                (0, i.jsx)(S.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: es,
                                                    guildId: J,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE
                                                }),
                                                (0, i.jsx)(T.Z, {
                                                    location: 'SimplifiedUserProfileModal',
                                                    user: n,
                                                    displayProfile: es,
                                                    guildId: J,
                                                    channelId: w,
                                                    profileType: U.y0.FULL_SIZE,
                                                    hasEntered: z === r.ModalTransitionState.ENTERED,
                                                    onCloseProfile: q
                                                }),
                                                (0, i.jsxs)('div', {
                                                    className: F.headerButtons,
                                                    children: [
                                                        (0, i.jsx)(y.Z, {
                                                            isCurrentUser: er,
                                                            user: n,
                                                            relationshipType: el,
                                                            friendToken: K,
                                                            onClose: q
                                                        }),
                                                        (0, i.jsx)(b.Z, {
                                                            user: n,
                                                            guildId: J,
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
                                    displayProfile: es,
                                    initialSection: Y,
                                    initialSubsection: H,
                                    friendToken: K,
                                    onClose: q
                                })
                            ]
                        }),
                        (null == es ? void 0 : es.profileEffectId) != null &&
                            (0, i.jsx)(_.Z, {
                                profileEffectId: null == es ? void 0 : es.profileEffectId,
                                isHovering: ed
                            })
                    ]
                })
            })
        })
    });
}
