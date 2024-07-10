i.d(n, {
    Z: function () {
        return L;
    }
}), i(47120);
var s = i(735250), l = i(470079), o = i(442837), t = i(481060), r = i(727637), a = i(100527), d = i(906732), c = i(680295), u = i(699516), I = i(5192), _ = i(751009), f = i(332390), E = i(877485), m = i(785717), S = i(318661), Z = i(78675), x = i(899007), v = i(438163), h = i(502762), p = i(544989), T = i(481932), g = i(195387), N = i(272510), C = i(171368), j = i(900687), A = i(806926), O = i(228168), R = i(981631), U = i(689938), M = i(505451);
function L(e) {
    let {
            user: n,
            currentUser: i,
            guildId: L,
            channelId: P,
            messageId: b,
            roleId: y,
            friendToken: D,
            initialSection: F,
            initialSubsection: B,
            transitionState: G,
            onClose: w,
            showGuildProfile: k = !0,
            sourceAnalyticsLocations: V = []
        } = e, Y = L === R.ME ? void 0 : L, {analyticsLocations: H} = (0, d.ZP)([
            ...V,
            a.Z.SIMPLIFIED_PROFILE_MODAL
        ]), W = (0, m.Q1)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: Y,
            channelId: P,
            messageId: b,
            roleId: y,
            showGuildProfile: k
        }), {
            originalFriendingEnabled: z,
            improvedFriendingEnabled: K
        } = (0, E.V)({ location: 'SimplifiedUserProfileModal' }), {profileStatusEditEnabled: q} = (0, _.K)({ location: 'SimplifiedUserProfileModalHeader' }), {
            persistentCallCtaEnabled: Q,
            activeInviteToCallCtaEnabled: J
        } = (0, f.l)({ location: 'SimplifiedUserProfileModalHeader' }), X = (0, S.ZP)(n.id, k ? Y : void 0), $ = (0, S.ZP)(n.id, Y), ee = (0, o.e7)([u.Z], () => u.Z.getRelationshipType(n.id)), en = l.createRef(), ei = (0, r.Z)(en), es = () => (null == $ ? void 0 : $.guildId) == null ? null : (null == X ? void 0 : X.guildId) != null ? (0, s.jsx)(t.MenuItem, {
            id: 'view-main-profile',
            label: U.Z.Messages.VIEW_MAIN_PROFILE,
            subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(void 0, void 0, n) }),
            action: () => {
                W({
                    action: 'PRESS_VIEW_MAIN_PROFILE',
                    analyticsLocations: H
                }), w(), (0, C.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !1,
                    guildId: Y,
                    channelId: P,
                    messageId: b,
                    roleId: y,
                    friendToken: D,
                    sourceAnalyticsLocations: V
                });
            }
        }) : (0, s.jsx)(t.MenuItem, {
            id: 'view-server-profile',
            label: U.Z.Messages.VIEW_SERVER_PROFILE,
            subtext: U.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(Y, P, n) }),
            action: () => {
                W({
                    action: 'PRESS_VIEW_SERVER_PROFILE',
                    analyticsLocations: H
                }), w(), (0, C.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !0,
                    guildId: Y,
                    channelId: P,
                    messageId: b,
                    roleId: y,
                    friendToken: D,
                    sourceAnalyticsLocations: V
                });
            }
        });
    return (0, s.jsx)(d.Gt, {
        value: H,
        children: (0, s.jsx)(m.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: Y,
            channelId: P,
            messageId: b,
            roleId: y,
            showGuildProfile: k,
            children: (0, s.jsxs)(t.ModalRoot, {
                transitionState: G,
                className: M.root,
                hideShadow: !0,
                'aria-label': U.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, s.jsxs)(h.Z, {
                        user: n,
                        displayProfile: X,
                        profileType: O.y0.FULL_SIZE,
                        ref: en,
                        children: [
                            z ? (0, s.jsx)(p.Z, {
                                profileType: O.y0.FULL_SIZE,
                                children: (0, s.jsx)(g.Z, {
                                    user: n,
                                    guildId: Y,
                                    channelId: P,
                                    onClose: w
                                })
                            }) : (0, s.jsxs)(p.Z, {
                                profileType: O.y0.FULL_SIZE,
                                children: [
                                    (0, s.jsx)(g.Z, {
                                        user: n,
                                        guildId: Y,
                                        channelId: P,
                                        onClose: w
                                    }),
                                    (0, s.jsx)(T.Z, {
                                        profileType: O.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: D
                                    }),
                                    (0, s.jsx)(N.Z, {
                                        user: n,
                                        guildId: Y,
                                        viewProfileItem: es()
                                    })
                                ]
                            }),
                            (0, s.jsxs)('header', {
                                children: [
                                    (0, s.jsx)(Z.Z, {
                                        user: n,
                                        displayProfile: X,
                                        profileType: O.y0.FULL_SIZE,
                                        hasProfileEffect: (null == X ? void 0 : X.profileEffectId) != null
                                    }),
                                    (0, s.jsxs)('div', {
                                        className: M.headerInner,
                                        children: [
                                            (0, s.jsx)(x.Z, {
                                                user: n,
                                                displayProfile: X,
                                                guildId: Y,
                                                channelId: P,
                                                profileType: O.y0.FULL_SIZE
                                            }),
                                            (0, s.jsx)(j.Z, {
                                                user: n,
                                                isCurrentUser: n.id === i.id,
                                                guildId: Y,
                                                relationshipType: ee,
                                                originalFriendingEnabled: z,
                                                improvedFriendingEnabled: K,
                                                persistentCallCtaEnabled: Q,
                                                activeInviteToCallCtaEnabled: J,
                                                viewProfileItem: es(),
                                                onClose: w
                                            }),
                                            (0, s.jsx)(v.Z, {
                                                user: n,
                                                profileType: O.y0.FULL_SIZE,
                                                editEnabled: q,
                                                hasEntered: G === t.ModalTransitionState.ENTERED,
                                                onClose: w
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, s.jsx)(A.Z, {
                                user: n,
                                currentUser: i,
                                channelId: P,
                                displayProfile: X,
                                initialSection: F,
                                initialSubsection: B,
                                friendToken: D,
                                onClose: w
                            })
                        ]
                    }),
                    (null == X ? void 0 : X.profileEffectId) != null && (0, s.jsx)(c.Z, {
                        profileEffectId: null == X ? void 0 : X.profileEffectId,
                        isHovering: ei
                    })
                ]
            })
        })
    });
}
