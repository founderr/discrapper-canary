t.d(n, {
    Z: function () {
        return S;
    }
});
var s = t(735250);
t(470079);
var i = t(442837),
    o = t(481060),
    l = t(666520),
    r = t(706454),
    a = t(430824),
    c = t(914010),
    d = t(785717),
    u = t(359607),
    I = t(642820),
    _ = t(280885),
    E = t(819602),
    f = t(900927),
    m = t(678738),
    p = t(652853),
    x = t(179828),
    Z = t(228168),
    h = t(689938),
    v = t(642411);
function S(e) {
    let { user: n, currentUser: t, displayProfile: S, subsection: T, onClose: A } = e,
        { theme: g } = (0, p.z)(),
        { trackUserProfileAction: N } = (0, d.KZ)(),
        L = null == S ? void 0 : S.guildId,
        R = (0, i.e7)([a.Z], () => (null != L ? a.Z.getGuild(L) : null)),
        j = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        M = (0, i.e7)([r.default], () => r.default.locale),
        O = (0, I.Z)(n.id),
        P = (0, u.Z)(n.id);
    return (0, s.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == S ? void 0 : S.bio) != null &&
                (null == S ? void 0 : S.bio) !== '' &&
                (0, s.jsx)(_.Z, {
                    userBio: S.bio,
                    setLineClamp: !1
                }),
            null != R &&
                (0, s.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guild: R,
                    scrollIntoView: T === Z.Tb.ROLES
                }),
            (0, s.jsx)(m.Z, {
                heading: h.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, s.jsx)(f.Z, {
                    userId: n.id,
                    guildId: null == S ? void 0 : S.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            O.length > 0 &&
                (0, s.jsx)(m.Z, {
                    heading: h.Z.Messages.CONNECTIONS,
                    scrollIntoView: T === Z.Tb.CONNECTIONS,
                    children: (0, s.jsx)(E.OA, {
                        connectedAccounts: O,
                        className: v.connections,
                        userId: n.id,
                        theme: g,
                        locale: M
                    })
                }),
            P.length > 0 &&
                (0, s.jsx)(m.Z, {
                    heading: h.Z.Messages.APPS,
                    children: P.map((e) =>
                        (0, s.jsx)(
                            E.tH,
                            {
                                className: v.appsConnections,
                                applicationRoleConnection: e,
                                locale: M,
                                onApplicationClicked: () => {
                                    N({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != j ? j : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, s.jsx)(m.Z, {
                heading: h.Z.Messages.NOTE,
                scrollIntoView: T === Z.Tb.NOTE,
                children: (0, s.jsx)(l.Z, {
                    userId: n.id,
                    className: v.note,
                    autoFocus: T === Z.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
