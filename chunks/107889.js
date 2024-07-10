n.d(i, {
    Z: function () {
        return A;
    }
}), n(47120);
var s = n(735250), l = n(470079), t = n(442837), o = n(481060), r = n(727637), a = n(100527), d = n(906732), c = n(680295), u = n(158776), I = n(5192), _ = n(877485), f = n(785717), E = n(318661), m = n(502762), S = n(544989), v = n(481932), Z = n(195387), x = n(272510), h = n(171368), p = n(806926), g = n(740021), T = n(228168), N = n(981631), C = n(689938), j = n(505451);
function A(e) {
    let {
            user: i,
            currentUser: n,
            guildId: A,
            channelId: O,
            messageId: M,
            roleId: R,
            friendToken: U,
            initialSection: L,
            initialSubsection: P,
            transitionState: b,
            onClose: y,
            showGuildProfile: D = !0,
            sourceAnalyticsLocations: F = []
        } = e, B = A === N.ME ? void 0 : A, {analyticsLocations: G} = (0, d.ZP)([
            ...F,
            a.Z.SIMPLIFIED_PROFILE_MODAL
        ]), {originalFriendingEnabled: w} = (0, _.V)({ location: 'SimplifiedUserProfileModal' }), k = (0, f.Q1)({
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: B,
            channelId: O,
            messageId: M,
            roleId: R,
            showGuildProfile: D
        }), V = (0, E.ZP)(i.id, D ? B : void 0), Y = (0, E.ZP)(i.id, B), H = (0, t.e7)([u.Z], () => u.Z.findActivity(i.id, e => {
            let {type: i} = e;
            return i !== N.IIU.CUSTOM_STATUS;
        })), W = l.createRef(), z = (0, r.Z)(W), K = () => (null == Y ? void 0 : Y.guildId) == null ? null : (null == V ? void 0 : V.guildId) != null ? (0, s.jsx)(o.MenuItem, {
            id: 'view-main-profile',
            label: C.Z.Messages.VIEW_MAIN_PROFILE,
            subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(void 0, void 0, i) }),
            action: () => {
                k({
                    action: 'PRESS_VIEW_MAIN_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: i.id,
                    showGuildProfile: !1,
                    guildId: B,
                    channelId: O,
                    messageId: M,
                    roleId: R,
                    friendToken: U,
                    sourceAnalyticsLocations: F
                });
            }
        }) : (0, s.jsx)(o.MenuItem, {
            id: 'view-server-profile',
            label: C.Z.Messages.VIEW_SERVER_PROFILE,
            subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(B, O, i) }),
            action: () => {
                k({
                    action: 'PRESS_VIEW_SERVER_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: i.id,
                    showGuildProfile: !0,
                    guildId: B,
                    channelId: O,
                    messageId: M,
                    roleId: R,
                    friendToken: U,
                    sourceAnalyticsLocations: F
                });
            }
        });
    return (0, s.jsx)(d.Gt, {
        value: G,
        children: (0, s.jsx)(f.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: B,
            channelId: O,
            messageId: M,
            roleId: R,
            showGuildProfile: D,
            children: (0, s.jsxs)(o.ModalRoot, {
                transitionState: b,
                className: j.root,
                hideShadow: !0,
                'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, s.jsxs)(m.Z, {
                        user: i,
                        displayProfile: V,
                        profileType: T.y0.FULL_SIZE,
                        ref: W,
                        children: [
                            w ? (0, s.jsx)(S.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: (0, s.jsx)(Z.Z, {
                                    user: i,
                                    guildId: B,
                                    channelId: O,
                                    onClose: y
                                })
                            }) : (0, s.jsxs)(S.Z, {
                                profileType: T.y0.FULL_SIZE,
                                children: [
                                    (0, s.jsx)(Z.Z, {
                                        user: i,
                                        guildId: B,
                                        channelId: O,
                                        onClose: y
                                    }),
                                    (0, s.jsx)(v.Z, {
                                        profileType: T.y0.FULL_SIZE,
                                        user: i,
                                        friendToken: U
                                    }),
                                    (0, s.jsx)(x.Z, {
                                        user: i,
                                        guildId: B,
                                        viewProfileItem: K()
                                    })
                                ]
                            }),
                            (0, s.jsx)(g.Z, {
                                user: i,
                                displayProfile: V,
                                guildId: B,
                                channelId: O,
                                activity: H,
                                transitionState: b,
                                viewProfileItem: K(),
                                onClose: y
                            }),
                            (0, s.jsx)(p.Z, {
                                user: i,
                                currentUser: n,
                                channelId: O,
                                displayProfile: V,
                                initialSection: L,
                                initialSubsection: P,
                                friendToken: U,
                                onClose: y
                            })
                        ]
                    }),
                    (null == V ? void 0 : V.profileEffectId) != null && (0, s.jsx)(c.Z, {
                        profileEffectId: null == V ? void 0 : V.profileEffectId,
                        isHovering: z
                    })
                ]
            })
        })
    });
}
