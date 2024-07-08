i.d(n, {
    Z: function () {
        return h;
    }
});
var o = i(735250);
i(470079);
var s = i(442837), t = i(481060), l = i(666520), a = i(706454), r = i(430824), c = i(914010), d = i(785717), u = i(532776), I = i(648067), E = i(588822), _ = i(900927), f = i(678738), Z = i(652853), m = i(335191), v = i(351707), S = i(228168), x = i(689938), N = i(247321);
function h(e) {
    let {
            user: n,
            currentUser: i,
            displayProfile: h,
            subsection: g,
            onClose: p
        } = e, {theme: C} = (0, Z.z)(), {trackUserProfileAction: T} = (0, d.KZ)(), R = null == h ? void 0 : h.guildId, M = (0, s.e7)([r.Z], () => null != R ? r.Z.getGuild(R) : null), j = (0, s.e7)([c.Z], () => c.Z.getGuildId()), A = (0, s.e7)([a.default], () => a.default.locale), P = (0, I.Z)(n.id), U = (0, u.Z)(n.id);
    return (0, o.jsxs)(t.ScrollerThin, {
        fade: !0,
        className: N.scroller,
        children: [
            (null == h ? void 0 : h.bio) != null && (null == h ? void 0 : h.bio) !== '' && (0, o.jsx)(E.Z, {
                userBio: h.bio,
                setLineClamp: !1
            }),
            null != M && (0, o.jsx)(v.Z, {
                user: n,
                currentUser: i,
                guild: M,
                scrollIntoView: g === S.Tb.ROLES
            }),
            (0, o.jsx)(f.Z, {
                title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, o.jsx)(_.Z, {
                    userId: n.id,
                    guildId: null == h ? void 0 : h.guildId,
                    tooltipDelay: S.vB
                })
            }),
            P.length > 0 && (0, o.jsx)(f.Z, {
                title: x.Z.Messages.CONNECTIONS,
                children: (0, o.jsx)(m.OA, {
                    connectedAccounts: P,
                    className: N.connections,
                    userId: n.id,
                    theme: C,
                    locale: A
                })
            }),
            U.length > 0 && (0, o.jsx)(f.Z, {
                title: x.Z.Messages.APPS,
                children: U.map(e => (0, o.jsx)(m.tH, {
                    className: N.appsConnections,
                    applicationRoleConnection: e,
                    locale: A,
                    onApplicationClicked: () => {
                        T({ action: 'PRESS_APP_CONNECTION' }), p();
                    },
                    selectedGuildId: null != j ? j : void 0
                }, e.application.id))
            }),
            (0, o.jsx)(f.Z, {
                title: x.Z.Messages.NOTE,
                scrollIntoView: g === S.Tb.NOTE,
                children: (0, o.jsx)(l.Z, {
                    userId: n.id,
                    className: N.note,
                    autoFocus: g === S.Tb.NOTE,
                    onUpdate: () => T({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
