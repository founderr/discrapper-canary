s.d(n, {
    Z: function () {
        return T;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    o = s(481060),
    l = s(666520),
    r = s(189156),
    a = s(706454),
    c = s(430824),
    d = s(914010),
    u = s(785717),
    _ = s(250822),
    I = s(771362),
    E = s(280885),
    f = s(819602),
    m = s(900927),
    x = s(678738),
    Z = s(652853),
    h = s(179828),
    p = s(228168),
    v = s(689938),
    S = s(11633);
function T(e) {
    let { user: n, currentUser: s, displayProfile: T, subsection: g, onClose: A } = e,
        { theme: N } = (0, Z.z)(),
        { trackUserProfileAction: L } = (0, u.KZ)(),
        j = null == T ? void 0 : T.guildId,
        M = (0, i.e7)([c.Z], () => (null != j ? c.Z.getGuild(j) : null)),
        b = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        R = (0, i.e7)([a.default], () => a.default.locale),
        O = (0, I.Z)(n.id),
        C = (0, _.Z)(n.id);
    return (0, t.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: S.scroller,
        children: [
            (null == T ? void 0 : T.bio) != null &&
                (null == T ? void 0 : T.bio) !== '' &&
                (0, t.jsx)(E.Z, {
                    userBio: T.bio,
                    setLineClamp: !1
                }),
            null != M &&
                (0, t.jsx)(h.Z, {
                    user: n,
                    currentUser: s,
                    guild: M,
                    scrollIntoView: g === p.Tb.ROLES
                }),
            n.isProvisional() && (0, t.jsx)(r.Z, { look: 'profile_modal' }),
            (0, t.jsx)(x.Z, {
                heading: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, t.jsx)(m.Z, {
                    userId: n.id,
                    guildId: null == T ? void 0 : T.guildId,
                    tooltipDelay: p.vB
                })
            }),
            O.length > 0 &&
                (0, t.jsx)(x.Z, {
                    heading: v.Z.Messages.CONNECTIONS,
                    scrollIntoView: g === p.Tb.CONNECTIONS,
                    children: (0, t.jsx)(f.OA, {
                        connectedAccounts: O,
                        className: S.connections,
                        userId: n.id,
                        theme: N,
                        locale: R
                    })
                }),
            C.length > 0 &&
                (0, t.jsx)(x.Z, {
                    heading: v.Z.Messages.APPS,
                    children: C.map((e) =>
                        (0, t.jsx)(
                            f.tH,
                            {
                                className: S.appsConnections,
                                applicationRoleConnection: e,
                                locale: R,
                                onApplicationClicked: () => {
                                    L({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != b ? b : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, t.jsx)(x.Z, {
                heading: v.Z.Messages.NOTE,
                scrollIntoView: g === p.Tb.NOTE,
                children: (0, t.jsx)(l.Z, {
                    userId: n.id,
                    className: S.note,
                    autoFocus: g === p.Tb.NOTE,
                    onUpdate: () => L({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
