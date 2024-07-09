i.d(n, {
    Z: function () {
        return R;
    }
}), i(47120);
var l = i(735250), s = i(470079), o = i(442837), t = i(481060), a = i(727637), r = i(100527), d = i(906732), c = i(680295), u = i(158776), I = i(5192), f = i(877485), _ = i(785717), E = i(318661), m = i(502762), Z = i(544989), v = i(481932), S = i(195387), x = i(272510), h = i(171368), N = i(806926), p = i(740021), g = i(228168), T = i(981631), C = i(689938), j = i(505451);
function R(e) {
    let {
            user: n,
            currentUser: i,
            guildId: R,
            channelId: A,
            messageId: M,
            roleId: P,
            friendToken: U,
            initialSection: O,
            initialSubsection: L,
            transitionState: b,
            onClose: y,
            showGuildProfile: B = !0,
            sourceAnalyticsLocations: D = []
        } = e, F = R === T.ME ? void 0 : R, {analyticsLocations: G} = (0, d.ZP)([
            ...D,
            r.Z.SIMPLIFIED_PROFILE_MODAL
        ]), {originalFriendingEnabled: w} = (0, f.V)({ location: 'SimplifiedUserProfileModal' }), k = (0, _.Q1)({
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: F,
            channelId: A,
            messageId: M,
            roleId: P,
            showGuildProfile: B
        }), Y = (0, E.ZP)(n.id, B ? F : void 0), V = (0, E.ZP)(n.id, F), H = (0, o.e7)([u.Z], () => u.Z.findActivity(n.id, e => {
            let {type: n} = e;
            return n !== T.IIU.CUSTOM_STATUS;
        })), W = s.createRef(), z = (0, a.Z)(W), K = () => (null == V ? void 0 : V.guildId) == null ? null : (null == Y ? void 0 : Y.guildId) != null ? (0, l.jsx)(t.MenuItem, {
            id: 'view-main-profile',
            label: C.Z.Messages.VIEW_MAIN_PROFILE,
            subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(void 0, void 0, n) }),
            action: () => {
                k({
                    action: 'PRESS_VIEW_MAIN_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !1,
                    guildId: F,
                    channelId: A,
                    messageId: M,
                    roleId: P,
                    friendToken: U,
                    sourceAnalyticsLocations: D
                });
            }
        }) : (0, l.jsx)(t.MenuItem, {
            id: 'view-server-profile',
            label: C.Z.Messages.VIEW_SERVER_PROFILE,
            subtext: C.Z.Messages.AKA_DISPLAY_NAME.format({ displayName: I.ZP.getName(F, A, n) }),
            action: () => {
                k({
                    action: 'PRESS_VIEW_SERVER_PROFILE',
                    analyticsLocations: G
                }), y(), (0, h.openUserProfileModal)({
                    userId: n.id,
                    showGuildProfile: !0,
                    guildId: F,
                    channelId: A,
                    messageId: M,
                    roleId: P,
                    friendToken: U,
                    sourceAnalyticsLocations: D
                });
            }
        });
    return (0, l.jsx)(d.Gt, {
        value: G,
        children: (0, l.jsx)(_.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: F,
            channelId: A,
            messageId: M,
            roleId: P,
            showGuildProfile: B,
            children: (0, l.jsxs)(t.ModalRoot, {
                transitionState: b,
                className: j.root,
                hideShadow: !0,
                'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
                children: [
                    (0, l.jsxs)(m.Z, {
                        user: n,
                        displayProfile: Y,
                        profileType: g.y0.FULL_SIZE,
                        ref: W,
                        children: [
                            w ? (0, l.jsx)(Z.Z, {
                                profileType: g.y0.FULL_SIZE,
                                children: (0, l.jsx)(S.Z, {
                                    user: n,
                                    guildId: F,
                                    channelId: A,
                                    onClose: y
                                })
                            }) : (0, l.jsxs)(Z.Z, {
                                profileType: g.y0.FULL_SIZE,
                                children: [
                                    (0, l.jsx)(S.Z, {
                                        user: n,
                                        guildId: F,
                                        channelId: A,
                                        onClose: y
                                    }),
                                    (0, l.jsx)(v.Z, {
                                        profileType: g.y0.FULL_SIZE,
                                        user: n,
                                        friendToken: U
                                    }),
                                    (0, l.jsx)(x.Z, {
                                        user: n,
                                        guildId: F,
                                        viewProfileItem: K()
                                    })
                                ]
                            }),
                            (0, l.jsx)(p.Z, {
                                user: n,
                                displayProfile: Y,
                                guildId: F,
                                channelId: A,
                                activity: H,
                                transitionState: b,
                                viewProfileItem: K(),
                                onClose: y
                            }),
                            (0, l.jsx)(N.Z, {
                                user: n,
                                currentUser: i,
                                channelId: A,
                                displayProfile: Y,
                                initialSection: O,
                                initialSubsection: L,
                                friendToken: U,
                                onClose: y
                            })
                        ]
                    }),
                    (null == Y ? void 0 : Y.profileEffectId) != null && (0, l.jsx)(c.Z, {
                        profileEffectId: null == Y ? void 0 : Y.profileEffectId,
                        isHovering: z
                    })
                ]
            })
        })
    });
}
