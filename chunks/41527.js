i.d(n, {
    Z: function () {
        return A;
    }
}), i(47120);
var s = i(735250);
i(470079);
var l = i(481060), o = i(100527), t = i(906732), r = i(5192), a = i(332390), d = i(877485), c = i(785717), u = i(318661), I = i(78675), _ = i(741308), f = i(899007), E = i(438163), m = i(681837), S = i(502762), Z = i(530), x = i(437758), v = i(544989), h = i(900687), p = i(616140), T = i(29530), g = i(228168), N = i(981631), C = i(689938), j = i(505451);
function A(e) {
    let {
            user: n,
            currentUser: i,
            guildId: A,
            channelId: U,
            messageId: R,
            roleId: O,
            initialSection: M,
            initialSubsection: L,
            transitionState: P,
            onClose: b,
            sourceAnalyticsLocations: y = []
        } = e, D = A === N.ME ? void 0 : A, F = (0, u.ZP)(n.id, D), {analyticsLocations: B} = (0, t.ZP)([
            ...y,
            o.Z.SIMPLIFIED_PROFILE_MODAL
        ]), {
            originalFriendingEnabled: G,
            improvedFriendingEnabled: w
        } = (0, d.V)({ location: 'UserBotProfileModal' }), {
            persistentCallCtaEnabled: k,
            activeInviteToCallCtaEnabled: V
        } = (0, a.l)({ location: 'UserBotProfileModal' }), Y = (0, T.Z)(n);
    return (0, s.jsx)(t.Gt, {
        value: B,
        children: (0, s.jsx)(c.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: D,
            channelId: U,
            messageId: R,
            roleId: O,
            showGuildProfile: !0,
            children: (0, s.jsx)(l.ModalRoot, {
                transitionState: P,
                className: j.root,
                hideShadow: !0,
                'aria-label': C.Z.Messages.USER_PROFILE_MODAL,
                children: (0, s.jsxs)(S.Z, {
                    user: n,
                    displayProfile: F,
                    profileType: g.y0.FULL_SIZE,
                    children: [
                        (0, s.jsx)(v.Z, {
                            profileType: g.y0.FULL_SIZE,
                            children: (0, s.jsx)(x.Z, {
                                user: n,
                                guildId: D
                            })
                        }),
                        (0, s.jsxs)('header', {
                            children: [
                                (0, s.jsx)(I.Z, {
                                    user: n,
                                    displayProfile: F,
                                    profileType: g.y0.FULL_SIZE,
                                    hasProfileEffect: (null == F ? void 0 : F.profileEffectId) != null
                                }),
                                (0, s.jsxs)('div', {
                                    className: j.headerInner,
                                    children: [
                                        (0, s.jsx)(f.Z, {
                                            user: n,
                                            displayProfile: F,
                                            guildId: D,
                                            channelId: U,
                                            profileType: g.y0.FULL_SIZE
                                        }),
                                        (0, s.jsx)(h.Z, {
                                            user: n,
                                            isCurrentUser: n.id === i.id,
                                            guildId: D,
                                            originalFriendingEnabled: G,
                                            improvedFriendingEnabled: w,
                                            persistentCallCtaEnabled: k,
                                            activeInviteToCallCtaEnabled: V,
                                            onClose: b
                                        }),
                                        (0, s.jsx)(E.Z, {
                                            user: n,
                                            profileType: g.y0.FULL_SIZE,
                                            hasEntered: P === l.ModalTransitionState.ENTERED,
                                            onClose: b
                                        })
                                    ]
                                })
                            ]
                        }),
                        (0, s.jsxs)('div', {
                            className: j.body,
                            children: [
                                (0, s.jsx)(Z.Z, {
                                    user: n,
                                    profileType: g.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(D, U, n),
                                    pronouns: null == F ? void 0 : F.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, s.jsx)(m.Z, { userId: n.id }),
                                    tags: (0, s.jsx)(_.Z, {
                                        displayProfile: F,
                                        profileType: g.y0.FULL_SIZE,
                                        onClose: b
                                    })
                                }),
                                (0, s.jsx)(S.Z.Overlay, {
                                    className: j.overlay,
                                    children: (0, s.jsx)(p.Z, {
                                        user: n,
                                        currentUser: i,
                                        displayProfile: F,
                                        items: Y,
                                        initialSection: null != M ? M : g.oh.BOT_INFO,
                                        initialSubsection: L,
                                        onClose: b
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}
