n.d(i, {
    Z: function () {
        return A;
    }
}), n(47120);
var l = n(735250), s = n(470079), t = n(442837), o = n(481060), a = n(727637), r = n(100527), d = n(906732), c = n(680295), u = n(158776), I = n(5192), f = n(877485), _ = n(785717), E = n(318661), m = n(502762), Z = n(544989), v = n(481932), S = n(195387), x = n(272510), h = n(171368), p = n(806926), g = n(740021), N = n(228168), T = n(981631), C = n(689938), j = n(505451);
function A(e) {
    let {
            user: i,
            currentUser: n,
            guildId: A,
            channelId: R,
            messageId: U,
            roleId: O,
            friendToken: M,
            initialSection: L,
            initialSubsection: P,
            transitionState: b,
            onClose: y,
            showGuildProfile: D = !0,
            sourceAnalyticsLocations: F = []
        } = e, B = A === T.ME ? void 0 : A, {analyticsLocations: G} = (0, d.ZP)([
            ...F,
            r.Z.SIMPLIFIED_PROFILE_MODAL
        ]), {originalFriendingEnabled: w} = (0, f.V)({ location: 'SimplifiedUserProfileModal' }), k = (0, _.Q1)({
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: B,
            channelId: R,
            messageId: U,
            roleId: O,
            showGuildProfile: D
        }), V = (0, E.ZP)(i.id, D ? B : void 0), Y = (0, E.ZP)(i.id, B), H = (0, t.e7)([u.Z], () => u.Z.findActivity(i.id, e => {
            let {type: i} = e;
            return i !== T.IIU.CUSTOM_STATUS;
        })), W = s.createRef(), z = (0, a.Z)(W), K = () => (null == Y ? void 0 : Y.guildId) == null ? null : (null == V ? void 0 : V.guildId) != null ? (0, l.jsx)(o.MenuItem, {
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
                    channelId: R,
                    messageId: U,
                    roleId: O,
                    friendToken: M,
                    sourceAnalyticsLocations: F
                });
            }
        }) : (0, l.jsx)(o.MenuItem, {
            id: 'view-server-profile',
            label: C.Z.Messages.VIEW_SERVER_PROFILE,
            subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(B, R, i) }),
            action: () => {
                k({
                    action: 'PRESS_VIEW_SERVER_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: i.id,
                    showGuildProfile: !0,
                    guildId: B,
                    channelId: R,
                    messageId: U,
                    roleId: O,
                    friendToken: M,
                    sourceAnalyticsLocations: F
                });
            }
        });
    return (0, l.jsx)(d.Gt, {
        value: G,
        children: (0, l.jsx)(_.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: B,
            channelId: R,
            messageId: U,
            roleId: O,
            showGuildProfile: D,
            children: (0, l.jsxs)(o.ModalRoot, {
                transitionState: b,
                className: j.root,
                hideShadow: !0,
                'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, l.jsxs)(m.Z, {
                        user: i,
                        displayProfile: V,
                        profileType: N.y0.FULL_SIZE,
                        ref: W,
                        children: [
                            w ? (0, l.jsx)(Z.Z, {
                                profileType: N.y0.FULL_SIZE,
                                children: (0, l.jsx)(S.Z, {
                                    user: i,
                                    guildId: B,
                                    channelId: R,
                                    onClose: y
                                })
                            }) : (0, l.jsxs)(Z.Z, {
                                profileType: N.y0.FULL_SIZE,
                                children: [
                                    (0, l.jsx)(S.Z, {
                                        user: i,
                                        guildId: B,
                                        channelId: R,
                                        onClose: y
                                    }),
                                    (0, l.jsx)(v.Z, {
                                        profileType: N.y0.FULL_SIZE,
                                        user: i,
                                        friendToken: M
                                    }),
                                    (0, l.jsx)(x.Z, {
                                        user: i,
                                        guildId: B,
                                        viewProfileItem: K()
                                    })
                                ]
                            }),
                            (0, l.jsx)(g.Z, {
                                user: i,
                                displayProfile: V,
                                guildId: B,
                                channelId: R,
                                activity: H,
                                transitionState: b,
                                viewProfileItem: K(),
                                onClose: y
                            }),
                            (0, l.jsx)(p.Z, {
                                user: i,
                                currentUser: n,
                                channelId: R,
                                displayProfile: V,
                                initialSection: L,
                                initialSubsection: P,
                                friendToken: M,
                                onClose: y
                            })
                        ]
                    }),
                    (null == V ? void 0 : V.profileEffectId) != null && (0, l.jsx)(c.Z, {
                        profileEffectId: null == V ? void 0 : V.profileEffectId,
                        isHovering: z
                    })
                ]
            })
        })
    });
}
