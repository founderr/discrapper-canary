s.d(n, {
    Z: function () {
        return T;
    }
}),
    s(47120);
var t = s(735250),
    i = s(470079),
    o = s(772848),
    l = s(924826),
    r = s(91192),
    a = s(442837),
    c = s(749210),
    d = s(434404),
    u = s(271383),
    _ = s(430824),
    I = s(496675),
    E = s(700785),
    f = s(785717),
    m = s(256226),
    x = s(678738),
    Z = s(314172),
    h = s(981631),
    p = s(689938),
    v = s(726769);
function S(e) {
    let { user: n, currentUser: s, guild: a, guildMember: c, roles: d, highestRole: u, canManageRoles: _, onAddRole: I, onRemoveRole: f } = e,
        x = _ && null != c,
        S = i.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: h.Cyb,
            scrollToEnd: h.Cyb,
            wrap: !0
        }),
        g = d.length,
        A = 0 === g ? p.Z.Messages.ROLE_LIST_EMPTY : p.Z.Messages.ROLES_LIST.format({ numRoles: g }),
        N = d.map((e) => {
            var i;
            return (0, t.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove: _ ? E.r6(a, s.id, u, e) : (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null && n.id === s.id
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
                                guild: a,
                                guildMember: c,
                                numRoles: g,
                                highestRole: u,
                                onAddRole: I
                            })
                    ]
                });
            }
        })
    });
}
function T(e) {
    let { user: n, currentUser: s, guild: o, scrollIntoView: l } = e,
        { trackUserProfileAction: r } = (0, f.KZ)(),
        m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        Z = (0, a.e7)([_.Z], () => _.Z.getRoles(o.id)),
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
                                  o = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) !== null;
                              return i && !o ? 1 : !i && o ? -1 : 0;
                          }),
            [Z, v]
        ),
        g = E.e9(o, s.id),
        [A] = (0, a.Wu)([I.Z], () => [I.Z.can(h.Plq.MANAGE_ROLES, o), null != o ? I.Z.getGuildVersion(o.id) : null]),
        N = i.useCallback(
            (e) => {
                var s, t;
                r({ action: 'REMOVE_ROLE' });
                let i = null !== (t = null == v ? void 0 : v.filter((n) => n !== e.id)) && void 0 !== t ? t : [];
                (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? c.Z.unassignGuildRoleConnection(o.id, e.id) : d.Z.updateMemberRoles(o.id, n.id, i, [], [e.id]);
            },
            [v, o.id, n.id, r]
        ),
        L = i.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let s = null != v ? v : [];
                -1 === s.indexOf(e) && (s = s.concat([e])), d.Z.updateMemberRoles(o.id, n.id, s, [e], []);
            },
            [v, o.id, n.id, r]
        ),
        j = A && null != m;
    return 0 !== T.length || j
        ? (0, t.jsx)(x.Z, {
              heading: p.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, t.jsx)(S, {
                  user: n,
                  currentUser: s,
                  guild: o,
                  guildMember: m,
                  roles: T,
                  highestRole: g,
                  canManageRoles: A,
                  onAddRole: L,
                  onRemoveRole: N
              })
          })
        : null;
}
