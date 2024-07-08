i.d(n, {
    Z: function () {
        return g;
    }
}), i(47120);
var o = i(735250);
i(470079);
var s = i(481060), t = i(100527), l = i(906732), a = i(5192), r = i(785717), c = i(318661), d = i(741308), u = i(681837), I = i(502762), E = i(530), f = i(437758), _ = i(544989), Z = i(740021), m = i(616140), v = i(29530), S = i(228168), x = i(981631), h = i(689938), N = i(505451);
function g(e) {
    let {
            user: n,
            currentUser: i,
            guildId: g,
            channelId: p,
            messageId: C,
            roleId: T,
            initialSection: R,
            initialSubsection: M,
            transitionState: j,
            onClose: A,
            sourceAnalyticsLocations: P = []
        } = e, U = g === x.ME ? void 0 : g, O = (0, c.ZP)(n.id, U), {analyticsLocations: L} = (0, l.ZP)([
            ...P,
            t.Z.SIMPLIFIED_PROFILE_MODAL
        ]), b = (0, v.Z)(n);
    return (0, o.jsx)(l.Gt, {
        value: L,
        children: (0, o.jsx)(r.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: U,
            channelId: p,
            messageId: C,
            roleId: T,
            showGuildProfile: !0,
            children: (0, o.jsx)(s.ModalRoot, {
                transitionState: j,
                className: N.root,
                hideShadow: !0,
                'aria-label': h.Z.Messages.USER_PROFILE_MODAL,
                children: (0, o.jsxs)(I.Z, {
                    user: n,
                    displayProfile: O,
                    profileType: S.y0.FULL_SIZE,
                    children: [
                        (0, o.jsx)(_.Z, {
                            profileType: S.y0.FULL_SIZE,
                            children: (0, o.jsx)(f.Z, {
                                user: n,
                                guildId: U
                            })
                        }),
                        (0, o.jsx)(Z.Z, {
                            user: n,
                            displayProfile: O,
                            guildId: U,
                            channelId: p,
                            activity: void 0,
                            transitionState: j,
                            onClose: A
                        }),
                        (0, o.jsxs)('div', {
                            className: N.body,
                            children: [
                                (0, o.jsx)(E.Z, {
                                    user: n,
                                    profileType: S.y0.FULL_SIZE,
                                    nickname: a.ZP.getName(U, p, n),
                                    pronouns: null == O ? void 0 : O.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, o.jsx)(u.Z, { userId: n.id }),
                                    tags: (0, o.jsx)(d.Z, {
                                        displayProfile: O,
                                        profileType: S.y0.FULL_SIZE,
                                        onClose: A
                                    })
                                }),
                                (0, o.jsx)(I.Z.Overlay, {
                                    className: N.overlay,
                                    children: (0, o.jsx)(m.Z, {
                                        user: n,
                                        currentUser: i,
                                        displayProfile: O,
                                        items: b,
                                        initialSection: null != R ? R : S.oh.BOT_INFO,
                                        initialSubsection: M,
                                        onClose: A
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
