n.d(i, {
    Z: function () {
        return g;
    }
}), n(47120);
var s = n(735250);
n(470079);
var l = n(481060), t = n(100527), o = n(906732), r = n(5192), a = n(785717), d = n(318661), c = n(741308), u = n(681837), I = n(502762), _ = n(530), f = n(437758), E = n(544989), m = n(740021), S = n(616140), v = n(29530), Z = n(228168), x = n(981631), h = n(689938), p = n(505451);
function g(e) {
    let {
            user: i,
            currentUser: n,
            guildId: g,
            channelId: T,
            messageId: N,
            roleId: C,
            initialSection: j,
            initialSubsection: A,
            transitionState: O,
            onClose: M,
            sourceAnalyticsLocations: R = []
        } = e, U = g === x.ME ? void 0 : g, L = (0, d.ZP)(i.id, U), {analyticsLocations: P} = (0, o.ZP)([
            ...R,
            t.Z.SIMPLIFIED_PROFILE_MODAL
        ]), b = (0, v.Z)(i);
    return (0, s.jsx)(o.Gt, {
        value: P,
        children: (0, s.jsx)(a.Mt, {
            layout: 'SIMPLIFIED_MODAL',
            userId: i.id,
            guildId: U,
            channelId: T,
            messageId: N,
            roleId: C,
            showGuildProfile: !0,
            children: (0, s.jsx)(l.ModalRoot, {
                transitionState: O,
                className: p.root,
                hideShadow: !0,
                'aria-label': h.Z.Messages.USER_PROFILE_MODAL,
                children: (0, s.jsxs)(I.Z, {
                    user: i,
                    displayProfile: L,
                    profileType: Z.y0.FULL_SIZE,
                    children: [
                        (0, s.jsx)(E.Z, {
                            profileType: Z.y0.FULL_SIZE,
                            children: (0, s.jsx)(f.Z, {
                                user: i,
                                guildId: U
                            })
                        }),
                        (0, s.jsx)(m.Z, {
                            user: i,
                            displayProfile: L,
                            guildId: U,
                            channelId: T,
                            activity: void 0,
                            transitionState: O,
                            onClose: M
                        }),
                        (0, s.jsxs)('div', {
                            className: p.body,
                            children: [
                                (0, s.jsx)(_.Z, {
                                    user: i,
                                    profileType: Z.y0.FULL_SIZE,
                                    nickname: r.ZP.getName(U, T, i),
                                    pronouns: null == L ? void 0 : L.pronouns,
                                    nicknameVariant: 'heading-xl/bold',
                                    nicknameIcons: (0, s.jsx)(u.Z, { userId: i.id }),
                                    tags: (0, s.jsx)(c.Z, {
                                        displayProfile: L,
                                        profileType: Z.y0.FULL_SIZE,
                                        onClose: M
                                    })
                                }),
                                (0, s.jsx)(I.Z.Overlay, {
                                    className: p.overlay,
                                    children: (0, s.jsx)(S.Z, {
                                        user: i,
                                        currentUser: n,
                                        displayProfile: L,
                                        items: b,
                                        initialSection: null != j ? j : Z.oh.BOT_INFO,
                                        initialSubsection: A,
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
