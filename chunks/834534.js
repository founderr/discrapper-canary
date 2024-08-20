t.d(n, {
    Z: function () {
        return S;
    }
});
var i = t(735250);
t(470079);
var s = t(442837),
    o = t(481060),
    l = t(666520),
    r = t(706454),
    a = t(430824),
    c = t(914010),
    d = t(785717),
    u = t(532776),
    I = t(648067),
    _ = t(588822),
    f = t(900927),
    E = t(678738),
    m = t(652853),
    p = t(335191),
    x = t(351707),
    v = t(228168),
    Z = t(689938),
    h = t(408277);
function S(e) {
    let { user: n, currentUser: t, displayProfile: S, subsection: T, onClose: A } = e,
        { theme: g } = (0, m.z)(),
        { trackUserProfileAction: N } = (0, d.KZ)(),
        b = null == S ? void 0 : S.guildId,
        j = (0, s.e7)([a.Z], () => (null != b ? a.Z.getGuild(b) : null)),
        L = (0, s.e7)([c.Z], () => c.Z.getGuildId()),
        R = (0, s.e7)([r.default], () => r.default.locale),
        C = (0, I.Z)(n.id),
        M = (0, u.Z)(n.id);
    return (0, i.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: h.scroller,
        children: [
            (null == S ? void 0 : S.bio) != null &&
                (null == S ? void 0 : S.bio) !== '' &&
                (0, i.jsx)(_.Z, {
                    userBio: S.bio,
                    setLineClamp: !1
                }),
            null != j &&
                (0, i.jsx)(x.Z, {
                    user: n,
                    currentUser: t,
                    guild: j,
                    scrollIntoView: T === v.Tb.ROLES
                }),
            (0, i.jsx)(E.Z, {
                heading: Z.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, i.jsx)(f.Z, {
                    userId: n.id,
                    guildId: null == S ? void 0 : S.guildId,
                    tooltipDelay: v.vB
                })
            }),
            C.length > 0 &&
                (0, i.jsx)(E.Z, {
                    heading: Z.Z.Messages.CONNECTIONS,
                    scrollIntoView: T === v.Tb.CONNECTIONS,
                    children: (0, i.jsx)(p.OA, {
                        connectedAccounts: C,
                        className: h.connections,
                        userId: n.id,
                        theme: g,
                        locale: R
                    })
                }),
            M.length > 0 &&
                (0, i.jsx)(E.Z, {
                    heading: Z.Z.Messages.APPS,
                    children: M.map((e) =>
                        (0, i.jsx)(
                            p.tH,
                            {
                                className: h.appsConnections,
                                applicationRoleConnection: e,
                                locale: R,
                                onApplicationClicked: () => {
                                    N({ action: 'PRESS_APP_CONNECTION' }), A();
                                },
                                selectedGuildId: null != L ? L : void 0
                            },
                            e.application.id
                        )
                    )
                }),
            (0, i.jsx)(E.Z, {
                heading: Z.Z.Messages.NOTE,
                scrollIntoView: T === v.Tb.NOTE,
                children: (0, i.jsx)(l.Z, {
                    userId: n.id,
                    className: h.note,
                    autoFocus: T === v.Tb.NOTE,
                    onUpdate: () => N({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
