s.d(n, {
    Z: function () {
        return T;
    }
});
var t = s(735250);
s(470079);
var i = s(442837),
    l = s(481060),
    o = s(666520),
    r = s(189156),
    c = s(706454),
    a = s(430824),
    d = s(914010),
    u = s(785717),
    I = s(250822),
    _ = s(771362),
    E = s(280885),
    f = s(819602),
    m = s(900927),
    x = s(678738),
    Z = s(652853),
    p = s(179828),
    h = s(228168),
    v = s(689938),
    S = s(11633);
function T(e) {
    let { user: n, currentUser: s, displayProfile: T, subsection: g, onClose: A } = e,
        { theme: N } = (0, Z.z)(),
        { trackUserProfileAction: j } = (0, u.KZ)(),
        b = null == T ? void 0 : T.guildId,
        L = (0, i.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
        M = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        O = (0, i.e7)([c.default], () => c.default.locale),
        R = (0, _.Z)(n.id),
        C = (0, I.Z)(n.id);
    return (0, t.jsxs)(l.ScrollerThin, {
        fade: !0,
        className: S.scroller,
        children: [
            (null == T ? void 0 : T.bio) != null &&
                (null == T ? void 0 : T.bio) !== '' &&
                (0, t.jsx)(E.Z, {
                    userBio: T.bio,
                    setLineClamp: !1
                }),
            null != L &&
                (0, t.jsx)(p.Z, {
                    user: n,
                    currentUser: s,
                    guild: L,
                    scrollIntoView: g === h.Tb.ROLES
                }),
            n.isProvisional() && (0, t.jsx)(r.Z, { look: 'profile_modal' }),
            (0, t.jsx)(x.Z, {
                heading: v.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, t.jsx)(m.Z, {
                    userId: n.id,
                    guildId: null == T ? void 0 : T.guildId,
                    tooltipDelay: h.vB
                })
            }),
            R.length > 0 &&
                (0, t.jsx)(x.Z, {
                    heading: v.Z.Messages.CONNECTIONS,
                    scrollIntoView: g === h.Tb.CONNECTIONS,
                    children: (0, t.jsx)(f.OA, {
                        connectedAccounts: R,
                        className: S.connections,
                        userId: n.id,
                        theme: N,
                        locale: O
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
                                locale: O,
                                onApplicationClicked: () => {
                                    j({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != M ? M : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, t.jsx)(x.Z, {
                heading: v.Z.Messages.NOTE,
                scrollIntoView: g === h.Tb.NOTE,
                children: (0, t.jsx)(o.Z, {
                    userId: n.id,
                    className: S.note,
                    autoFocus: g === h.Tb.NOTE,
                    onUpdate: () => j({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
