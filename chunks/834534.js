i.d(n, {
    Z: function () {
        return N;
    }
});
var l = i(735250);
i(470079);
var s = i(442837), o = i(481060), t = i(666520), a = i(706454), r = i(430824), d = i(914010), c = i(785717), u = i(532776), I = i(648067), f = i(588822), _ = i(900927), E = i(678738), m = i(652853), Z = i(335191), v = i(351707), S = i(228168), x = i(689938), h = i(247321);
function N(e) {
    let {
            user: n,
            currentUser: i,
            displayProfile: N,
            subsection: p,
            onClose: g
        } = e, {theme: T} = (0, m.z)(), {trackUserProfileAction: C} = (0, c.KZ)(), j = null == N ? void 0 : N.guildId, R = (0, s.e7)([r.Z], () => null != j ? r.Z.getGuild(j) : null), A = (0, s.e7)([d.Z], () => d.Z.getGuildId()), M = (0, s.e7)([a.default], () => a.default.locale), P = (0, I.Z)(n.id), U = (0, u.Z)(n.id);
    return (0, l.jsxs)(o.ScrollerThin, {
        fade: !0,
        className: h.scroller,
        children: [
            (null == N ? void 0 : N.bio) != null && (null == N ? void 0 : N.bio) !== '' && (0, l.jsx)(f.Z, {
                userBio: N.bio,
                setLineClamp: !1
            }),
            null != R && (0, l.jsx)(v.Z, {
                user: n,
                currentUser: i,
                guild: R,
                scrollIntoView: p === S.Tb.ROLES
            }),
            (0, l.jsx)(E.Z, {
                title: x.Z.Messages.USER_PROFILE_MEMBER_SINCE,
                children: (0, l.jsx)(_.Z, {
                    userId: n.id,
                    guildId: null == N ? void 0 : N.guildId,
                    tooltipDelay: S.vB
                })
            }),
            P.length > 0 && (0, l.jsx)(E.Z, {
                title: x.Z.Messages.CONNECTIONS,
                children: (0, l.jsx)(Z.OA, {
                    connectedAccounts: P,
                    className: h.connections,
                    userId: n.id,
                    theme: T,
                    locale: M
                })
            }),
            U.length > 0 && (0, l.jsx)(E.Z, {
                title: x.Z.Messages.APPS,
                children: U.map(e => (0, l.jsx)(Z.tH, {
                    className: h.appsConnections,
                    applicationRoleConnection: e,
                    locale: M,
                    onApplicationClicked: () => {
                        C({ action: 'PRESS_APP_CONNECTION' }), g();
                    },
                    selectedGuildId: null != A ? A : void 0
                }, e.application.id))
            }),
            (0, l.jsx)(E.Z, {
                title: x.Z.Messages.NOTE,
                scrollIntoView: p === S.Tb.NOTE,
                children: (0, l.jsx)(t.Z, {
                    userId: n.id,
                    className: h.note,
                    autoFocus: p === S.Tb.NOTE,
                    onUpdate: () => C({ action: 'SET_NOTE' })
                })
            })
        ]
    });
}
