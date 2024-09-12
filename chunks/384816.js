t.d(n, {
    Z: function () {
        return v;
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
    u = t(250822),
    _ = t(771362),
    I = t(280885),
    E = t(819602),
    f = t(900927),
    m = t(678738),
    x = t(652853),
    Z = t(179828),
    p = t(228168),
    h = t(689938),
    S = t(11633);
function v(e) {
    let { user: n, currentUser: t, displayProfile: v, subsection: T, onClose: g } = e,
        { theme: A } = (0, x.z)(),
        { trackUserProfileAction: N } = (0, d.KZ)(),
        L = null == v ? void 0 : v.guildId,
        R = (0, i.e7)([a.Z], () => (null != L ? a.Z.getGuild(L) : null)),
        j = (0, i.e7)([c.Z], () => c.Z.getGuildId()),
        M = (0, i.e7)([r.default], () => r.default.locale),
        b = (0, _.Z)(n.id),
        O = (0, u.Z)(n.id);
    return (0, s.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: S.scroller,
        children: [
            (null == v ? void 0 : v.bio) != null &&
                (null == v ? void 0 : v.bio) !== '' &&
                (0, s.jsx)(I.Z, {
                    userBio: v.bio,
                    setLineClamp: !1
                }),
            null != R &&
                (0, s.jsx)(Z.Z, {
                    user: n,
                    currentUser: t,
                    guild: R,
                    scrollIntoView: T === p.Tb.ROLES
                }),
            (0, s.jsx)(m.Z, {
                heading: h.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, s.jsx)(f.Z, {
                    userId: n.id,
                    guildId: null == v ? void 0 : v.guildId,
                    tooltipDelay: p.vB
                })
            }),
            b.length > 0 &&
                (0, s.jsx)(m.Z, {
                    heading: h.Z.Messages.CONNECTIONS,
                    scrollIntoView: T === p.Tb.CONNECTIONS,
                    children: (0, s.jsx)(E.OA, {
                        connectedAccounts: b,
                        className: S.connections,
                        userId: n.id,
                        theme: A,
                        locale: M
                    })
                }),
            O.length > 0 &&
                (0, s.jsx)(m.Z, {
                    heading: h.Z.Messages.APPS,
                    children: O.map((e) =>
                        (0, s.jsx)(
                            E.tH,
                            {
                                className: S.appsConnections,
                                applicationRoleConnection: e,
                                locale: M,
                                onApplicationClicked: () => {
                                    N({ action: 'PRESS_APP_CONNECTION' }), g();
                                },
                                selectedGuildId: null != j ? j : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, s.jsx)(m.Z, {
                heading: h.Z.Messages.NOTE,
                scrollIntoView: T === p.Tb.NOTE,
                children: (0, s.jsx)(l.Z, {
                    userId: n.id,
                    className: S.note,
                    autoFocus: T === p.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
