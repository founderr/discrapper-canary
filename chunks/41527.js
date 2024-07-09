i.d(n, {
    Z: function () {
        return p;
    }
}), i(47120);
var l = i(735250);
i(470079);
var s = i(481060), o = i(100527), t = i(906732), a = i(5192), r = i(785717), d = i(318661), c = i(741308), u = i(681837), I = i(502762), f = i(530), _ = i(437758), E = i(544989), m = i(740021), Z = i(616140), v = i(29530), S = i(228168), x = i(981631), h = i(689938), N = i(505451);
function p(e) {
    let {
            user: n,
            currentUser: i,
            guildId: p,
            channelId: g,
            messageId: T,
            roleId: C,
            initialSection: j,
            initialSubsection: R,
            transitionState: A,
            onClose: M,
            sourceAnalyticsLocations: P = []
        } = e, U = p === x.ME ? void 0 : p, O = (0, d.ZP)(n.id, U), {analyticsLocations: L} = (0, t.ZP)([
            ...P,
            o.Z.SIMPLIFIED_PROFILE_MODAL
        ]), b = (0, v.Z)(n);
    return (0, l.jsx)(t.Gt, {
        value: L,
        children: (0, l.jsx)(r.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: n.id,
            guildId: U,
            channelId: g,
            messageId: T,
            roleId: C,
            showGuildProfile: !0,
            children: (0, l.jsx)(s.ModalRoot, {
                transitionState: A,
                className: N.root,
                hideShadow: !0,
                'aria-label': h.Z.Messages.USER_PROFILE_MODAL,
                children: (0, l.jsxs)(I.Z, {
                    user: n,
                    displayProfile: O,
                    profileType: S.y0.FULL_SIZE,
                    children: [
                        (0, l.jsx)(E.Z, {
                            profileType: S.y0.FULL_SIZE,
                            children: (0, l.jsx)(_.Z, {
                                user: n,
                                guildId: U
                            })
                        }),
                        (0, l.jsx)(m.Z, {
                            user: n,
                            displayProfile: O,
                            guildId: U,
                            channelId: g,
                            activity: void 0,
                            transitionState: A,
                            onClose: M
                        }),
                        (0, l.jsxs)('div', {
                            className: N.body,
                            children: [
                                (0, l.jsx)(f.Z, {
                                    user: n,
                                    profileType: S.y0.FULL_SIZE,
                                    nickname: a.ZP.getName(U, g, n),
                                    pronouns: null == O ? void 0 : O.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(u.Z, { userId: n.id }),
                                    tags: (0, l.jsx)(c.Z, {
                                        displayProfile: O,
                                        profileType: S.y0.FULL_SIZE,
                                        onClose: M
                                    })
                                }),
                                (0, l.jsx)(I.Z.Overlay, {
                                    className: N.overlay,
                                    children: (0, l.jsx)(Z.Z, {
                                        user: n,
                                        currentUser: i,
                                        displayProfile: O,
                                        items: b,
                                        initialSection: null != j ? j : S.oh.BOT_INFO,
                                        initialSubsection: R,
                                        onClose: M
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
