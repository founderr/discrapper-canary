i.d(n, {
    Z: function () {
        return M;
    }
}), i(47120);
var o = i(735250), s = i(470079), t = i(442837), l = i(481060), a = i(727637), r = i(100527), c = i(906732), d = i(680295), u = i(158776), I = i(5192), E = i(877485), f = i(785717), _ = i(318661), Z = i(502762), m = i(544989), v = i(481932), S = i(195387), x = i(272510), h = i(171368), N = i(806926), g = i(740021), p = i(228168), C = i(981631), T = i(689938), R = i(505451);
function M(e) {
    let {
            user: n,
            currentUser: i,
            guildId: M,
            channelId: j,
            messageId: A,
            roleId: P,
            friendToken: U,
            initialSection: O,
            initialSubsection: L,
            transitionState: b,
            onClose: y,
            showGuildProfile: D = !0,
            sourceAnalyticsLocations: B = []
        } = e, F = M === C.ME ? void 0 : M, {analyticsLocations: G} = (0, c.ZP)([
            ...B,
            r.Z.SIMPLIFIED_PROFILE_MODAL
        ]), {originalFriendingEnabled: k} = (0, E.V)({ location: 'SimplifiedUserProfileModal' }), w = (0, f.Q1)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: F,
            channelId: j,
            messageId: A,
            roleId: P,
            showGuildProfile: D
        }), Y = (0, _.ZP)(n.id, D ? F : void 0), V = (0, _.ZP)(n.id, F), H = (0, t.e7)([u.Z], () => u.Z.findActivity(n.id, e => {
            let {type: n} = e;
            return n !== C.IIU.CUSTOM_STATUS;
        })), W = s.createRef(), z = (0, a.Z)(W), K = () => (null == V ? void 0 : V.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, o.jsx)(l.MenuItem, {
            id: 'view-main-profile',
            label: T.Z.Messages.VIEW_MAIN_PROFILE,
            subtext: T.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(void 0, void 0, n) }),
            action: () => {
                w({
                    action: 'PRESS_VIEW_MAIN_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !1,
                    guildId: F,
                    channelId: j,
                    messageId: A,
                    roleId: P,
                    friendToken: U,
                    sourceAnalyticsLocations: B
                });
            }
        }) : (0, o.jsx)(l.MenuItem, {
            id: 'view-server-profile',
            label: T.Z.Messages.VIEW_SERVER_PROFILE,
            subtext: T.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(F, j, n) }),
            action: () => {
                w({
                    action: 'PRESS_VIEW_SERVER_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !0,
                    guildId: F,
                    channelId: j,
                    messageId: A,
                    roleId: P,
                    friendToken: U,
                    sourceAnalyticsLocations: B
                });
            }
        });
    return (0, o.jsx)(c.Gt, {
        value: G,
        children: (0, o.jsx)(f.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: F,
            channelId: j,
            messageId: A,
            roleId: P,
            showGuildProfile: D,
            children: (0, o.jsxs)(l.ModalRoot, {
                transitionState: b,
                className: R.root,
                hideShadow: !0,
                'aria-label': T.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, o.jsxs)(Z.Z, {
                        user: n,
                        displayProfile: Y,
                        profileType: p.y0.FULL_SIZE,
                        ref: W,
                        children: [
                            k ? (0, o.jsx)(m.Z, {
                                profileType: p.y0.FULL_SIZE,
                                children: (0, o.jsx)(S.Z, {
                                    user: n,
                                    guildId: F,
                                    channelId: j,
                                    onClose: y
                                })
                            }) : (0, o.jsxs)(m.Z, {
                                profileType: p.y0.FULL_SIZE,
                                children: [
                                    (0, o.jsx)(S.Z, {
                                        user: n,
                                        guildId: F,
                                        channelId: j,
                                        onClose: y
                                    }),
                                    (0, o.jsx)(v.Z, {
                                        profileType: p.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: U
                                    }),
                                    (0, o.jsx)(x.Z, {
                                        user: n,
                                        guildId: F,
                                        viewProfileItem: K()
                                    })
                                ]
                            }),
                            (0, o.jsx)(g.Z, {
                                user: n,
                                displayProfile: Y,
                                guildId: F,
                                channelId: j,
                                activity: H,
                                transitionState: b,
                                viewProfileItem: K(),
                                onClose: y
                            }),
                            (0, o.jsx)(N.Z, {
                                user: n,
                                currentUser: i,
                                channelId: j,
                                displayProfile: Y,
                                initialSection: O,
                                initialSubsection: L,
                                friendToken: U,
                                onClose: y
                            })
                        ]
                    }),
                    (null == Y ? void 0 : Y.profileEffectId) != null && (0, o.jsx)(d.Z, {
                        profileEffectId: null == Y ? void 0 : Y.profileEffectId,
                        isHovering: z
                    })
                ]
            })
        })
    });
}
