s.d(n, {
    Z: function () {
        return T;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    l = s(772848),
    o = s(924826),
    r = s(91192),
    c = s(442837),
    a = s(749210),
    d = s(434404),
    u = s(271383),
    I = s(430824),
    _ = s(496675),
    E = s(700785),
    f = s(785717),
    m = s(256226),
    x = s(678738),
    Z = s(314172),
    p = s(981631),
    h = s(689938),
    v = s(726769);
function S(e) {
    let { user: n, currentUser: s, guild: c, guildMember: a, roles: d, highestRole: u, canManageRoles: I, onAddRole: _, onRemoveRole: f } = e,
        x = I && null != a,
        S = i.useMemo(() => 'roles-'.concat((0, l.Z)()), []),
        T = (0, o.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: p.Cyb,
            scrollToEnd: p.Cyb,
            wrap: !0
        }),
        g = d.length,
        A = 0 === g ? h.Z.Messages.ROLE_LIST_EMPTY : h.Z.Messages.ROLES_LIST.format({ numRoles: g }),
        N = d.map((e) => {
            var i;
            return (0, t.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove: I ? E.r6(c, s.id, u, e) : (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null && n.id === s.id
                },
                e.id
            );
        });
    return (0, t.jsx)(r.bG, {
        navigator: T,
        children: (0, t.jsx)(r.SJ, {
            children: (e) => {
                let { ref: n, ...s } = e;
                return (0, t.jsxs)('div', {
                    className: v.root,
                    'aria-label': A,
                    ref: n,
                    ...s,
                    children: [
                        N,
                        x &&
                            (0, t.jsx)(Z.Z, {
                                guild: c,
                                guildMember: a,
                                numRoles: g,
                                highestRole: u,
                                onAddRole: _
                            })
                    ]
                });
            }
        })
    });
}
function T(e) {
    let { user: n, currentUser: s, guild: l, scrollIntoView: o } = e,
        { trackUserProfileAction: r } = (0, f.KZ)(),
        m = (0, c.e7)([u.ZP], () => u.ZP.getMember(l.id, n.id)),
        Z = (0, c.e7)([I.Z], () => I.Z.getRoles(l.id)),
        v = null == m ? void 0 : m.roles,
        T = i.useMemo(
            () =>
                null == v || 0 === v.length
                    ? []
                    : Object.values(Z)
                          .filter((e) => v.includes(e.id))
                          .sort((e, n) => {
                              var s, t;
                              let i = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
                                  l = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) !== null;
                              return i && !l ? 1 : !i && l ? -1 : 0;
                          }),
            [Z, v]
        ),
        g = E.e9(l, s.id),
        [A] = (0, c.Wu)([_.Z], () => [_.Z.can(p.Plq.MANAGE_ROLES, l), null != l ? _.Z.getGuildVersion(l.id) : null]),
        N = i.useCallback(
            (e) => {
                var s, t;
                r({ action: 'REMOVE_ROLE' });
                let i = null !== (t = null == v ? void 0 : v.filter((n) => n !== e.id)) && void 0 !== t ? t : [];
                (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? a.Z.unassignGuildRoleConnection(l.id, e.id) : d.Z.updateMemberRoles(l.id, n.id, i, [], [e.id]);
            },
            [v, l.id, n.id, r]
        ),
        j = i.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let s = null != v ? v : [];
                -1 === s.indexOf(e) && (s = s.concat([e])), d.Z.updateMemberRoles(l.id, n.id, s, [e], []);
            },
            [v, l.id, n.id, r]
        ),
        b = A && null != m;
    return 0 !== T.length || b
        ? (0, t.jsx)(x.Z, {
              heading: h.Z.Messages.ROLES,
              scrollIntoView: o,
              children: (0, t.jsx)(S, {
                  user: n,
                  currentUser: s,
                  guild: l,
                  guildMember: m,
                  roles: T,
                  highestRole: g,
                  canManageRoles: A,
                  onAddRole: j,
                  onRemoveRole: N
              })
          })
        : null;
}
