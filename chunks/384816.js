s.d(n, {
    Z: function () {
        return S;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    o = s(481060),
    l = s(666520),
    r = s(706454),
    c = s(430824),
    a = s(914010),
    d = s(785717),
    u = s(250822),
    _ = s(771362),
    I = s(280885),
    E = s(819602),
    f = s(900927),
    m = s(678738),
    x = s(652853),
    Z = s(179828),
    h = s(228168),
    p = s(689938),
    v = s(11633);
function S(e) {
    let { user: n, currentUser: s, displayProfile: S, subsection: T, onClose: g } = e,
        { theme: A } = (0, x.z)(),
        { trackUserProfileAction: N } = (0, d.KZ)(),
        L = null == S ? void 0 : S.guildId,
        j = (0, i.e7)([c.Z], () => (null != L ? c.Z.getGuild(L) : null)),
        M = (0, i.e7)([a.Z], () => a.Z.getGuildId()),
        b = (0, i.e7)([r.default], () => r.default.locale),
        R = (0, _.Z)(n.id),
        O = (0, u.Z)(n.id);
    return (0, t.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == S ? void 0 : S.bio) != null &&
                (null == S ? void 0 : S.bio) !== '' &&
                (0, t.jsx)(I.Z, {
                    userBio: S.bio,
                    setLineClamp: !1
                }),
            null != j &&
                (0, t.jsx)(Z.Z, {
                    user: n,
                    currentUser: s,
                    guild: j,
                    scrollIntoView: T === h.Tb.ROLES
                }),
            (0, t.jsx)(m.Z, {
                heading: p.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, t.jsx)(f.Z, {
                    userId: n.id,
                    guildId: null == S ? void 0 : S.guildId,
                    tooltipDelay: h.vB
                })
            }),
            R.length > 0 &&
                (0, t.jsx)(m.Z, {
                    heading: p.Z.Messages.CONNECTIONS,
                    scrollIntoView: T === h.Tb.CONNECTIONS,
                    children: (0, t.jsx)(E.OA, {
                        connectedAccounts: R,
                        className: v.connections,
                        userId: n.id,
                        theme: A,
                        locale: b
                    })
                }),
            O.length > 0 &&
                (0, t.jsx)(m.Z, {
                    heading: p.Z.Messages.APPS,
                    children: O.map((e) =>
                        (0, t.jsx)(
                            E.tH,
                            {
                                className: v.appsConnections,
                                applicationRoleConnection: e,
                                locale: b,
                                onApplicationClicked: () => {
                                    N({ action: 'PRESS_APP_CONNECTION' }), g();
                                },
                                selectedGuildId: null != M ? M : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, t.jsx)(m.Z, {
                heading: p.Z.Messages.NOTE,
                scrollIntoView: T === h.Tb.NOTE,
                children: (0, t.jsx)(l.Z, {
                    userId: n.id,
                    className: v.note,
                    autoFocus: T === h.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
