t.d(n, {
    Z: function () {
        return T;
    }
}),
    t(47120);
var i = t(735250),
    s = t(470079),
    o = t(772848),
    l = t(924826),
    r = t(91192),
    c = t(442837),
    a = t(749210),
    d = t(434404),
    u = t(271383),
    _ = t(430824),
    I = t(496675),
    E = t(700785),
    f = t(785717),
    m = t(256226),
    x = t(678738),
    p = t(314172),
    Z = t(981631),
    h = t(689938),
    v = t(726769);
function S(e) {
    let { user: n, currentUser: t, guild: c, guildMember: a, roles: d, highestRole: u, canManageRoles: _, onAddRole: I, onRemoveRole: f } = e,
        x = _ && null != a,
        S = s.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: Z.Cyb,
            scrollToEnd: Z.Cyb,
            wrap: !0
        }),
        g = d.length,
        A = 0 === g ? h.Z.Messages.ROLE_LIST_EMPTY : h.Z.Messages.ROLES_LIST.format({ numRoles: g }),
        N = d.map((e) => {
            var s;
            return (0, i.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: c.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove: _ ? E.r6(c, t.id, u, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, i.jsx)(r.bG, {
        navigator: T,
        children: (0, i.jsx)(r.SJ, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, i.jsxs)('div', {
                    className: v.root,
                    'aria-label': A,
                    ref: n,
                    ...t,
                    children: [
                        N,
                        x &&
                            (0, i.jsx)(p.Z, {
                                guild: c,
                                guildMember: a,
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
    let { user: n, currentUser: t, guild: o, scrollIntoView: l } = e,
        { trackUserProfileAction: r } = (0, f.KZ)(),
        m = (0, c.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        p = (0, c.e7)([_.Z], () => _.Z.getRoles(o.id)),
        v = null == m ? void 0 : m.roles,
        T = s.useMemo(
            () =>
                null == v || 0 === v.length
                    ? []
                    : Object.values(p)
                          .filter((e) => v.includes(e.id))
                          .sort((e, n) => {
                              var t, i;
                              let s = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
                                  o = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return s && !o ? 1 : !s && o ? -1 : 0;
                          }),
            [p, v]
        ),
        g = E.e9(o, t.id),
        [A] = (0, c.Wu)([I.Z], () => [I.Z.can(Z.Plq.MANAGE_ROLES, o), null != o ? I.Z.getGuildVersion(o.id) : null]),
        N = s.useCallback(
            (e) => {
                var t, i;
                r({ action: 'REMOVE_ROLE' });
                let s = null !== (i = null == v ? void 0 : v.filter((n) => n !== e.id)) && void 0 !== i ? i : [];
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(o.id, e.id) : d.Z.updateMemberRoles(o.id, n.id, s, [], [e.id]);
            },
            [v, o.id, n.id, r]
        ),
        j = s.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let t = null != v ? v : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [v, o.id, n.id, r]
        ),
        b = A && null != m;
    return 0 !== T.length || b
        ? (0, i.jsx)(x.Z, {
              heading: h.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, i.jsx)(S, {
                  user: n,
                  currentUser: t,
                  guild: o,
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
