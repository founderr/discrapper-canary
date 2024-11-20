t.d(n, {
    Z: function () {
        return b;
    }
});
var i = t(200651);
t(192379);
var l = t(442837),
    o = t(481060),
    r = t(666520),
    s = t(189156),
    c = t(706454),
    a = t(430824),
    d = t(914010),
    u = t(785717),
    f = t(250822),
    m = t(771362),
    x = t(280885),
    I = t(819602),
    p = t(900927),
    h = t(678738),
    v = t(652853),
    g = t(179828),
    Z = t(228168),
    _ = t(388032),
    j = t(11633);
function b(e) {
    let { user: n, currentUser: t, displayProfile: b, subsection: E, onClose: N } = e,
        { theme: S } = (0, v.z)(),
        { trackUserProfileAction: T } = (0, u.KZ)(),
        y = null == b ? void 0 : b.guildId,
        P = (0, l.e7)([a.Z], () => (null != y ? a.Z.getGuild(y) : null)),
        C = (0, l.e7)([d.Z], () => d.Z.getGuildId()),
        A = (0, l.e7)([c.default], () => c.default.locale),
        L = (0, m.Z)(n.id),
        O = (0, f.Z)(n.id);
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: j.scroller,
        children: [
            (null == b ? void 0 : b.bio) != null &&
                (null == b ? void 0 : b.bio) !== '' &&
                (0, i.jsx)(x.Z, {
                    userBio: b.bio,
                    setLineClamp: !1
                }),
            null != P &&
                (0, i.jsx)(g.Z, {
                    user: n,
                    currentUser: t,
                    guild: P,
                    scrollIntoView: E === Z.Tb.ROLES
                }),
            n.isProvisional && (0, i.jsx)(s.Z, { look: 'profile_modal' }),
            (0, i.jsx)(h.Z, {
                heading: _.intl.string(_.t.a6XYDw),
                children: (0, i.jsx)(p.Z, {
                    userId: n.id,
                    guildId: null == b ? void 0 : b.guildId,
                    tooltipDelay: Z.vB
                })
            }),
            L.length > 0 &&
                (0, i.jsx)(h.Z, {
                    heading: _.intl.string(_.t['3fe7U1']),
                    scrollIntoView: E === Z.Tb.CONNECTIONS,
                    children: (0, i.jsx)(I.OA, {
                        connectedAccounts: L,
                        className: j.connections,
                        userId: n.id,
                        theme: S,
                        locale: A
                    })
                }),
            O.length > 0 &&
                (0, i.jsx)(h.Z, {
                    heading: _.intl.string(_.t.PHjkRE),
                    children: O.map((e) =>
                        (0, i.jsx)(
                            I.tH,
                            {
                                className: j.appsConnections,
                                applicationRoleConnection: e,
                                locale: A,
                                onApplicationClicked: () => {
                                    T({ action: 'PRESS_APP_CONNECTION' }), N();
                                },
                                selectedGuildId: null != C ? C : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(h.Z, {
                heading: _.intl.string(_.t.PbMNh4),
                scrollIntoView: E === Z.Tb.NOTE,
                children: (0, i.jsx)(r.Z, {
                    userId: n.id,
                    className: j.note,
                    autoFocus: E === Z.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
