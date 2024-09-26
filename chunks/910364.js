s.d(n, {
    Z: function () {
        return U;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    l = s(442837),
    o = s(481060),
    r = s(727637),
    c = s(58540),
    a = s(100527),
    d = s(906732),
    u = s(680295),
    I = s(699516),
    _ = s(5192),
    E = s(785717),
    f = s(221292),
    m = s(687158),
    x = s(326094),
    Z = s(510659),
    p = s(113557),
    h = s(867176),
    v = s(169979),
    S = s(119096),
    T = s(502762),
    g = s(544989),
    A = s(705556),
    N = s(481932),
    j = s(195387),
    b = s(272510),
    L = s(171368),
    M = s(62154),
    O = s(412317),
    R = s(228168),
    C = s(981631),
    P = s(689938),
    y = s(272216);
function U(e) {
    let { user: n, currentUser: s, guildId: U, channelId: D, messageId: B, roleId: F, sessionId: G, friendToken: w, initialSection: k, initialSubsection: V, transitionState: W, onClose: Y, showGuildProfile: K = !0, sourceAnalyticsLocations: z = [] } = e,
        H = U === C.ME ? void 0 : U,
        { analyticsLocations: q } = (0, d.ZP)([...z, a.Z.SIMPLIFIED_PROFILE_MODAL]),
        Q = (0, x.Z)({
            user: n,
            currentUser: s,
            location: C.Sbl.SIMPLIFIED_USER_PROFILE
        }),
        X = (0, E.ZB)({
            layout: Q ? 'SIMPLIFIED_MODAL' : 'SIMPLIFIED_MODAL_RESTRICTED_BLOCKER_PROFILE',
            userId: n.id,
            sourceSessionId: G,
            guildId: H,
            channelId: D,
            messageId: B,
            roleId: F,
            showGuildProfile: K
        }),
        J = (0, Z.$m)(),
        $ = (0, m.ZP)(n.id, K ? H : void 0),
        ee = (0, m.ZP)(n.id, H),
        en = (0, l.e7)([I.Z], () => I.Z.getRelationshipType(n.id)),
        es = i.useMemo(() => (null != H ? { [H]: [n.id] } : {}), [H, n.id]);
    (0, c.$)(es);
    let et = i.createRef(),
        ei = (0, r.Z)(et),
        el = () =>
            (null == ee ? void 0 : ee.guildId) == null
                ? null
                : (null == $ ? void 0 : $.guildId) != null
                  ? (0, t.jsx)(o.MenuItem, {
                        id: 'view-main-profile',
                        label: P.Z.Messages.VIEW_MAIN_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(void 0, void 0, n) }),
                        action: () => {
                            Y(),
                                (0, L.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !1,
                                    friendToken: w,
                                    sourceAnalyticsLocations: z
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_MAIN_PROFILE',
                                    analyticsLocations: q,
                                    ...X
                                });
                        }
                    })
                  : (0, t.jsx)(o.MenuItem, {
                        id: 'view-server-profile',
                        label: P.Z.Messages.VIEW_SERVER_PROFILE,
                        subtext: P.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: _.ZP.getName(H, D, n) }),
                        action: () => {
                            Y(),
                                (0, L.openUserProfileModal)({
                                    ...X,
                                    showGuildProfile: !0,
                                    friendToken: w,
                                    sourceAnalyticsLocations: z
                                }),
                                (0, f.pQ)({
                                    action: 'PRESS_VIEW_SERVER_PROFILE',
                                    analyticsLocations: q,
                                    ...X
                                });
                        }
                    });
    return (0, t.jsx)(d.Gt, {
        value: q,
        children: (0, t.jsx)(E.Mt, {
            value: X,
            children: (0, t.jsx)(Z.NJ, {
                value: J,
                children: (0, t.jsxs)(o.ModalRoot, {
                    transitionState: W,
                    className: y.root,
                    hideShadow: !0,
                    'aria-label': P.Z.Messages.USER_PROFILE_MODAL,
                    children: [
                        (0, t.jsxs)(T.Z, {
                            user: n,
                            displayProfile: $,
                            profileType: R.y0.FULL_SIZE,
                            ref: et,
                            children: [
                                (0, t.jsxs)(g.Z, {
                                    profileType: R.y0.FULL_SIZE,
                                    children: [
                                        (0, t.jsx)(j.Z, {
                                            user: n,
                                            guildId: H,
                                            channelId: D,
                                            onClose: Y
                                        }),
                                        (0, t.jsx)(N.Z, {
                                            profileType: R.y0.FULL_SIZE,
                                            user: n,
                                            friendToken: w
                                        }),
                                        (0, t.jsx)(b.Z, {
                                            user: n,
                                            guildId: H,
                                            viewProfileItem: el()
                                        })
                                    ]
                                }),
                                (0, t.jsxs)('header', {
                                    children: [
                                        (0, t.jsx)(h.Z, {
                                            user: n,
                                            displayProfile: $,
                                            profileType: R.y0.FULL_SIZE
                                        }),
                                        (0, t.jsx)(S.Z, {
                                            userId: n.id,
                                            onClose: Y,
                                            className: y.toast
                                        }),
                                        null != J.interactionType && (0, t.jsx)('div', { className: y.backdrop }),
                                        (0, t.jsxs)('div', {
                                            className: y.headerInner,
                                            children: [
                                                (0, t.jsx)(p.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: $,
                                                    guildId: H,
                                                    channelId: D,
                                                    profileType: R.y0.FULL_SIZE
                                                }),
                                                (0, t.jsx)(v.Z, {
                                                    location: 'SimplifiedUserProfileModal',
                                                    user: n,
                                                    displayProfile: $,
                                                    guildId: H,
                                                    channelId: D,
                                                    profileType: R.y0.FULL_SIZE,
                                                    hasEntered: W === o.ModalTransitionState.ENTERED,
                                                    onCloseProfile: Y
                                                }),
                                                (0, t.jsxs)('div', {
                                                    className: y.headerButtons,
                                                    children: [
                                                        (0, t.jsx)(O.Z, {
                                                            user: n,
                                                            isCurrentUser: n.id === s.id,
                                                            relationshipType: en,
                                                            friendToken: w,
                                                            onClose: Y
                                                        }),
                                                        (0, t.jsx)(A.Z, {
                                                            user: n,
                                                            guildId: H,
                                                            onClose: Y
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, t.jsx)(M.Z, {
                                    user: n,
                                    currentUser: s,
                                    channelId: D,
                                    displayProfile: $,
                                    initialSection: k,
                                    initialSubsection: V,
                                    friendToken: w,
                                    onClose: Y
                                })
                            ]
                        }),
                        (null == $ ? void 0 : $.profileEffectId) != null &&
                            (0, t.jsx)(u.Z, {
                                profileEffectId: null == $ ? void 0 : $.profileEffectId,
                                isHovering: ei
                            })
                    ]
                })
            })
        })
    });
}
