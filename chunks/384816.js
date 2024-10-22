t.d(n, {
    Z: function () {
        return T;
    }
});
var i = t(200651);
t(192379);
var s = t(442837),
    o = t(481060),
    l = t(666520),
    r = t(189156),
    c = t(706454),
    a = t(430824),
    d = t(914010),
    u = t(785717),
    _ = t(250822),
    I = t(771362),
    E = t(280885),
    f = t(819602),
    m = t(900927),
    p = t(678738),
    x = t(652853),
    Z = t(179828),
    h = t(228168),
    S = t(689938),
    v = t(11633);
function T(e) {
    let { user: n, currentUser: t, displayProfile: T, subsection: g, onClose: N } = e,
        { theme: A } = (0, x.z)(),
        { trackUserProfileAction: b } = (0, u.KZ)(),
        j = null == T ? void 0 : T.guildId,
        P = (0, s.e7)([a.Z], () => (null != j ? a.Z.getGuild(j) : null)),
        M = (0, s.e7)([d.Z], () => d.Z.getGuildId()),
        L = (0, s.e7)([c.default], () => c.default.locale),
        R = (0, I.Z)(n.id),
        O = (0, _.Z)(n.id);
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: v.scroller,
        children: [
            (null == T ? void 0 : T.bio) != null &&
                (null == T ? void 0 : T.bio) !== '' &&
                (0, i.jsx)(E.Z, {
                    userBio: T.bio,
                    setLineClamp: !1
                }),
            null != P &&
                (0, i.jsx)(Z.Z, {
                    user: n,
                    currentUser: t,
                    guild: P,
                    scrollIntoView: g === h.Tb.ROLES
                }),
            n.isProvisional && (0, i.jsx)(r.Z, { look: 'profile_modal' }),
            (0, i.jsx)(p.Z, {
                heading: S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, i.jsx)(m.Z, {
                    userId: n.id,
                    guildId: null == T ? void 0 : T.guildId,
                    tooltipDelay: h.vB
                })
            }),
            R.length > 0 &&
                (0, i.jsx)(p.Z, {
                    heading: S.Z.Messages.CONNECTIONS,
                    scrollIntoView: g === h.Tb.CONNECTIONS,
                    children: (0, i.jsx)(f.OA, {
                        connectedAccounts: R,
                        className: v.connections,
                        userId: n.id,
                        theme: A,
                        locale: L
                    })
                }),
            O.length > 0 &&
                (0, i.jsx)(p.Z, {
                    heading: S.Z.Messages.APPS,
                    children: O.map((e) =>
                        (0, i.jsx)(
                            f.tH,
                            {
                                className: v.appsConnections,
                                applicationRoleConnection: e,
                                locale: L,
                                onApplicationClicked: () => {
                                    b({ action: 'PRESS_APP_CONNECTION' }), N();
                                },
                                selectedGuildId: null != M ? M : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(p.Z, {
                heading: S.Z.Messages.NOTE,
                scrollIntoView: g === h.Tb.NOTE,
                children: (0, i.jsx)(l.Z, {
                    userId: n.id,
                    className: v.note,
                    autoFocus: g === h.Tb.NOTE,
                    onUpdate: () => b({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
