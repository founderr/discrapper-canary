n.d(i, {
    Z: function () {
        return p;
    }
});
var l = n(735250);
n(470079);
var s = n(442837), t = n(481060), o = n(666520), a = n(706454), r = n(430824), d = n(914010), c = n(785717), u = n(532776), I = n(648067), f = n(588822), _ = n(900927), E = n(678738), m = n(652853), Z = n(335191), v = n(351707), S = n(228168), x = n(689938), h = n(247321);
function p(e) {
    let {
            user: i,
            currentUser: n,
            displayProfile: p,
            subsection: g,
            onClose: N
        } = e, {theme: T} = (0, m.z)(), {trackUserProfileAction: C} = (0, c.KZ)(), j = null == p ? void 0 : p.guildId, A = (0, s.e7)([r.Z], () => null != j ? r.Z.getGuild(j) : null), R = (0, s.e7)([d.Z], () => d.Z.getGuildId()), U = (0, s.e7)([a.default], () => a.default.locale), O = (0, I.Z)(i.id), M = (0, u.Z)(i.id);
    return (0, l.jsxs)(t.ScrollerThin, {
        fade: !0,
        className: h.scroller,
        children: [
            (null == p ? void 0 : p.bio) != null && (null == p ? void 0 : p.bio) !== '' && (0, l.jsx)(f.Z, {
                userBio: p.bio,
                setLineClamp: !1
            }),
            null != A && (0, l.jsx)(v.Z, {
                user: i,
                currentUser: n,
                guild: A,
                scrollIntoView: g === S.Tb.ROLES
            }),
            (0, l.jsx)(E.Z, {
                title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, l.jsx)(_.Z, {
                    userId: i.id,
                    guildId: null == p ? void 0 : p.guildId,
                    tooltipDelay: S.vB
                })
            }),
            O.length > 0 && (0, l.jsx)(E.Z, {
                title: x.Z.Messages.CONNECTIONS,
                children: (0, l.jsx)(Z.OA, {
                    connectedAccounts: O,
                    className: h.connections,
                    userId: i.id,
                    theme: T,
                    locale: U
                })
            }),
            M.length > 0 && (0, l.jsx)(E.Z, {
                title: x.Z.Messages.APPS,
                children: M.map(e => (0, l.jsx)(Z.tH, {
                    className: h.appsConnections,
                    applicationRoleConnection: e,
                    locale: U,
                    onApplicationClicked: () => {
                        C({ action: 'PRESS_APP_CONNECTION' }), N();
                    },
                    selectedGuildId: null != R ? R : void 0
                }, e.application.id))
            }),
            (0, l.jsx)(E.Z, {
                title: x.Z.Messages.NOTE,
                scrollIntoView: g === S.Tb.NOTE,
                children: (0, l.jsx)(o.Z, {
                    userId: i.id,
                    className: h.note,
                    autoFocus: g === S.Tb.NOTE,
                    onUpdate: () => C({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
