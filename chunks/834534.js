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
    _ = t(588822),
    E = t(900927),
    f = t(678738),
    m = t(652853),
    p = t(335191),
    x = t(351707),
    Z = t(228168),
    v = t(689938),
    h = t(408277);
function S(e) {
    let { user: n, currentUser: t, displayProfile: S, subsection: T, onClose: A } = e,
        { theme: g } = (0, m.z)(),
        { trackUserProfileAction: N } = (0, d.KZ)(),
        L = null == S ? void 0 : S.guildId,
        j = (0, i.e7)([a.Z], () => (null != L ? a.Z.getGuild(L) : null)),
        R = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        O = (0, i.e7)([r.default], () => r.default.locale),
        b = (0, I.Z)(n.id),
        C = (0, u.Z)(n.id);
    return (0, s.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: h.scroller,
        children: [
            (null == S ? void 0 : S.bio) != null &&
                (null == S ? void 0 : S.bio) !== '' &&
                (0, s.jsx)(_.Z, {
                    userBio: S.bio,
                    setLineClamp: !1
                }),
            null != j &&
                (0, s.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guild: j,
                    scrollIntoView: T === Z.Tb.ROLES
                }),
            (0, s.jsx)(f.Z, {
                heading: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, s.jsx)(E.Z, {
                    userId: n.id,
                    guildId: null == S ? void 0 : S.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            b.length > 0 &&
                (0, s.jsx)(f.Z, {
                    heading: v.Z.Messages.CONNECTIONS,
                    scrollIntoView: T === Z.Tb.CONNECTIONS,
                    children: (0, s.jsx)(p.OA, {
                        connectedAccounts: b,
                        className: h.connections,
                        userId: n.id,
                        theme: g,
                        locale: O
                    })
                }),
            C.length > 0 &&
                (0, s.jsx)(f.Z, {
                    heading: v.Z.Messages.APPS,
                    children: C.map((e) =>
                        (0, s.jsx)(
                            p.tH,
                            {
                                className: h.appsConnections,
                                applicationRoleConnection: e,
                                locale: O,
                                onApplicationClicked: () => {
                                    N({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != R ? R : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, s.jsx)(f.Z, {
                heading: v.Z.Messages.NOTE,
                scrollIntoView: T === Z.Tb.NOTE,
                children: (0, s.jsx)(l.Z, {
                    userId: n.id,
                    className: h.note,
                    autoFocus: T === Z.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
