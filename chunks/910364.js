t.d(n, {
    Z: function () {
        return B;
    }
}),
    t(47120);
var o = t(735250),
    i = t(470079),
    s = t(212433),
    l = t(442837),
    c = t(481060),
    r = t(727637),
    a = t(58540),
    d = t(100527),
    u = t(906732),
    _ = t(680295),
    I = t(699516),
    E = t(5192),
    f = t(785717),
    p = t(221292),
    Z = t(687158),
    h = t(326094),
    x = t(510659),
    m = t(113557),
    S = t(867176),
    T = t(169979),
    v = t(451834),
    g = t(502762),
    A = t(544989),
    O = t(705556),
    L = t(481932),
    b = t(195387),
    N = t(272510),
    M = t(171368),
    C = t(62154),
    R = t(412317),
    j = t(228168),
    P = t(981631),
    y = t(689938),
    U = t(272216);
function B(e) {
    let { user: n, currentUser: t, guildId: B, channelId: D, messageId: F, roleId: G, sessionId: w, friendToken: V, initialSection: k, initialSubsection: W, transitionState: Y, onClose: K, showGuildProfile: H = !0, sourceAnalyticsLocations: q = [] } = e,
        z = B === P.ME ? void 0 : B,
        { analyticsLocations: Q } = (0, u.ZP)([...q, d.Z.SIMPLIFIED_PROFILE_MODAL]),
        J = (0, h.Z)({
            user: n,
            currentUser: t,
            location: P.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        X = (0, f.ZB)({
            layout: J ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: w,
            guildId: z,
            channelId: D,
            messageId: F,
            roleId: G,
            showGuildProfile: H
        }),
        $ = (0, x.$m)(),
        ee = (0, c.useSpring)({
            opacity: null != $.interactionType ? 1 : 0,
            config: { duration: 150 }
        }),
        en = (0, Z.ZP)(n.id, H ? z : void 0),
        et = (0, Z.ZP)(n.id, z),
        eo = (0, l.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        ei = i.useMemo(() => (null != z ? { [z]: [n.id] } : {}), [z, n.id]);
    (0, a.$)(ei);
    let es = i.createRef(),
        el = (0, r.Z)(es),
        ec = () =>
            (null == et ? void 0 : et.guildId) == null
                ? null
                : (null == en ? void 0 : en.guildId) != null
                  ? (0, o.jsx)(c.MenuItem, {
                        id: 'view-main-profile',
                        label: y.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            K(),
                                (0, M.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !1,
                                    friendToken: V,
                                    sourceAnalyticsLocations: q
                                }),
                                (0, p.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: Q,
                                    ...X
                                });
                        }
                    })
                  : (0, o.jsx)(c.MenuItem, {
                        id: 'view-server-profile',
                        label: y.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: y.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: E.ZP.getName(z, D, n) }),
                        action: () => {
                            K(),
                                (0, M.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !0,
                                    friendToken: V,
                                    sourceAnalyticsLocations: q
                                }),
                                (0, p.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: Q,
                                    ...X
                                });
                        }
                    });
    return (0, o.jsx)(u.Gt, {
        value: Q,
        children: (0, o.jsx)(f.Mt, {
            value: X,
            children: (0, o.jsx)(x.NJ, {
                value: $,
                children: (0, o.jsxs)(c.ModalRoot, {
                    transitionState: Y,
                    className: U.root,
                    hideShadow: !0,
                    'aria-label': y.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, o.jsxs)(g.Z, {
                            user: n,
                            displayProfile: en,
                            profileType: j.y0.FULL_SIZE,
                            ref: es,
                            children: [
                                (0, o.jsxs)(A.Z, {
                                    profileType: j.y0.FULL_SIZE,
                                    children: [
                                        (0, o.jsx)(b.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            user: n,
                                            guildId: z,
                                            channelId: D,
                                            onClose: K
                                        }),
                                        (0, o.jsx)(L.Z, {
                                            shouldShowTooltip: null === $.interactionType,
                                            profileType: j.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: V
                                        }),
                                        (0, o.jsx)(N.Z, {
                                            user: n,
                                            guildId: z,
                                            viewProfileItem: ec()
                                        })
                                    ]
                                }),
                                (0, o.jsxs)('header', {
                                    children: [
                                        (0, o.jsx)(S.Z, {
                                            user: n,
                                            displayProfile: en,
                                            profileType: j.y0.FULL_SIZE
                                        }),
                                        (0, o.jsx)(v.Z, {
                                            userId: n.id,
                                            onClose: K,
                                            className: U.toast
                                        }),
                                        null != $.interactionType &&
                                            (0, o.jsx)(s.animated.div, {
                                                style: ee,
                                                className: U.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: U.headerInner,
                                            children: [
                                                (0, o.jsx)(m.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: z,
                                                    channelId: D,
                                                    profileType: j.y0.FULL_SIZE
                                                }),
                                                (0, o.jsx)(T.Z, {
                                                    location: 'SimplifiedUserProfileModal',
                                                    user: n,
                                                    displayProfile: en,
                                                    guildId: z,
                                                    channelId: D,
                                                    profileType: j.y0.FULL_SIZE,
                                                    hasEntered: Y === c.ModalTransitionState.ENTERED,
                                                    onCloseProfile: K
                                                }),
                                                (0, o.jsxs)('div', {
                                                    className: U.headerButtons,
                                                    children: [
                                                        (0, o.jsx)(R.Z, {
                                                            user: n,
                                                            isCurrentUser: n.id === t.id,
                                                            relationshipType: eo,
                                                            friendToken: V,
                                                            onClose: K
                                                        }),
                                                        (0, o.jsx)(O.Z, {
                                                            user: n,
                                                            guildId: z,
                                                            onClose: K
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(C.Z, {
                                    user: n,
                                    currentUser: t,
                                    channelId: D,
                                    displayProfile: en,
                                    initialSection: k,
                                    initialSubsection: W,
                                    friendToken: V,
                                    onClose: K
                                })
                            ]
                        }),
                        (null == en ? void 0 : en.profileEffectId) != null &&
                            (0, o.jsx)(_.Z, {
                                profileEffectId: null == en ? void 0 : en.profileEffectId,
                                isHovering: el
                            })
                    ]
                })
            })
        })
    });
}
