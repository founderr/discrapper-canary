n.d(i, {
    Z: function () {
        return g;
    }
}), n(47120);
var l = n(735250);
n(470079);
var s = n(481060), t = n(100527), o = n(906732), a = n(5192), r = n(785717), d = n(318661), c = n(741308), u = n(681837), I = n(502762), f = n(530), _ = n(437758), E = n(544989), m = n(740021), Z = n(616140), v = n(29530), S = n(228168), x = n(981631), h = n(689938), p = n(505451);
function g(e) {
    let {
            user: i,
            currentUser: n,
            guildId: g,
            channelId: N,
            messageId: T,
            roleId: C,
            initialSection: j,
            initialSubsection: A,
            transitionState: R,
            onClose: U,
            sourceAnalyticsLocations: O = []
        } = e, M = g === x.ME ? void 0 : g, L = (0, d.ZP)(i.id, M), {analyticsLocations: P} = (0, o.ZP)([
            ...O,
            t.Z.SIMPLIFIED_PROFILE_MODAL
        ]), b = (0, v.Z)(i);
    return (0, l.jsx)(o.Gt, {
        value: P,
        children: (0, l.jsx)(r.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: M,
            channelId: N,
            messageId: T,
            roleId: C,
            showGuildProfile: !0,
            children: (0, l.jsx)(s.ModalRoot, {
                transitionState: R,
                className: p.root,
                hideShadow: !0,
                'aria-label': h.Z.Messages.USER_PROFILE_MODAL,
                children: (0, l.jsxs)(I.Z, {
                    user: i,
                    displayProfile: L,
                    profileType: S.y0.FULL_SIZE,
                    children: [
                        (0, l.jsx)(E.Z, {
                            profileType: S.y0.FULL_SIZE,
                            children: (0, l.jsx)(_.Z, {
                                user: i,
                                guildId: M
                            })
                        }),
                        (0, l.jsx)(m.Z, {
                            user: i,
                            displayProfile: L,
                            guildId: M,
                            channelId: N,
                            activity: void 0,
                            transitionState: R,
                            onClose: U
                        }),
                        (0, l.jsxs)('div', {
                            className: p.body,
                            children: [
                                (0, l.jsx)(f.Z, {
                                    user: i,
                                    profileType: S.y0.FULL_SIZE,
                                    nickname: a.ZP.getName(M, N, i),
                                    pronouns: null == L ? void 0 : L.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, l.jsx)(u.Z, { userId: i.id }),
                                    tags: (0, l.jsx)(c.Z, {
                                        displayProfile: L,
                                        profileType: S.y0.FULL_SIZE,
                                        onClose: U
                                    })
                                }),
                                (0, l.jsx)(I.Z.Overlay, {
                                    className: p.overlay,
                                    children: (0, l.jsx)(Z.Z, {
                                        user: i,
                                        currentUser: n,
                                        displayProfile: L,
                                        items: b,
                                        initialSection: null != j ? j : S.oh.BOT_INFO,
                                        initialSubsection: A,
                                        onClose: U
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
