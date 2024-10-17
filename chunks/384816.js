t.d(n, {
    Z: function () {
        return v;
    }
});
var o = t(735250);
t(470079);
var i = t(442837),
    s = t(481060),
    l = t(666520),
    c = t(189156),
    r = t(706454),
    a = t(430824),
    d = t(914010),
    u = t(785717),
    _ = t(250822),
    I = t(771362),
    E = t(280885),
    f = t(819602),
    p = t(900927),
    Z = t(678738),
    h = t(652853),
    x = t(179828),
    m = t(228168),
    S = t(689938),
    T = t(11633);
function v(e) {
    let { user: n, currentUser: t, displayProfile: v, subsection: g, onClose: A } = e,
        { theme: O } = (0, h.z)(),
        { trackUserProfileAction: L } = (0, u.KZ)(),
        b = null == v ? void 0 : v.guildId,
        N = (0, i.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
        M = (0, i.e7)([d.Z], () => d.Z.getGuildId()),
        C = (0, i.e7)([r.default], () => r.default.locale),
        R = (0, I.Z)(n.id),
        j = (0, _.Z)(n.id);
    return (0, o.jsxs)(s.ScrollerThin, {
        fade: !0,
        className: T.scroller,
        children: [
            (null == v ? void 0 : v.bio) != null &&
                (null == v ? void 0 : v.bio) !== '' &&
                (0, o.jsx)(E.Z, {
                    userBio: v.bio,
                    setLineClamp: !1
                }),
            null != N &&
                (0, o.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guild: N,
                    scrollIntoView: g === m.Tb.ROLES
                }),
            n.isProvisional && (0, o.jsx)(c.Z, { look: 'profile_modal' }),
            (0, o.jsx)(Z.Z, {
                heading: S.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, o.jsx)(p.Z, {
                    userId: n.id,
                    guildId: null == v ? void 0 : v.guildId,
                    tooltipDelay: m.vB
                })
            }),
            R.length > 0 &&
                (0, o.jsx)(Z.Z, {
                    heading: S.Z.Messages.CONNECTIONS,
                    scrollIntoView: g === m.Tb.CONNECTIONS,
                    children: (0, o.jsx)(f.OA, {
                        connectedAccounts: R,
                        className: T.connections,
                        userId: n.id,
                        theme: O,
                        locale: C
                    })
                }),
            j.length > 0 &&
                (0, o.jsx)(Z.Z, {
                    heading: S.Z.Messages.APPS,
                    children: j.map((e) =>
                        (0, o.jsx)(
                            f.tH,
                            {
                                className: T.appsConnections,
                                applicationRoleConnection: e,
                                locale: C,
                                onApplicationClicked: () => {
                                    L({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != M ? M : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, o.jsx)(Z.Z, {
                heading: S.Z.Messages.NOTE,
                scrollIntoView: g === m.Tb.NOTE,
                children: (0, o.jsx)(l.Z, {
                    userId: n.id,
                    className: T.note,
                    autoFocus: g === m.Tb.NOTE,
                    onUpdate: () => L({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
