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
    a = t(442837),
    c = t(749210),
    d = t(434404),
    u = t(271383),
    I = t(430824),
    _ = t(496675),
    f = t(700785),
    E = t(785717),
    m = t(256226),
    p = t(678738),
    x = t(314172),
    v = t(981631),
    Z = t(689938),
    h = t(328156);
function S(e) {
    let { user: n, currentUser: t, guild: a, guildMember: c, roles: d, highestRole: u, canManageRoles: I, onAddRole: _, onRemoveRole: E } = e,
        p = I && null != c,
        S = s.useMemo(() => 'roles-'.concat((0, o.Z)()), []),
        T = (0, l.ZP)({
            id: S,
            isEnabled: !0,
            scrollToStart: v.Cyb,
            scrollToEnd: v.Cyb,
            wrap: !0
        }),
        A = d.length,
        g = 0 === A ? Z.Z.Messages.ROLE_LIST_EMPTY : Z.Z.Messages.ROLES_LIST.format({ numRoles: A }),
        N = d.map((e) => {
            var s;
            return (0, i.jsx)(
                m.Z,
                {
                    role: e,
                    guildId: a.id,
                    disableBorderColor: !0,
                    onRemove: () => E(e),
                    canRemove: I ? f.r6(a, t.id, u, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && n.id === t.id
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
                    className: h.root,
                    'aria-label': g,
                    ref: n,
                    ...t,
                    children: [
                        N,
                        p &&
                            (0, i.jsx)(x.Z, {
                                guild: a,
                                guildMember: c,
                                numRoles: A,
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
    let { user: n, currentUser: t, guild: o, scrollIntoView: l } = e,
        { trackUserProfileAction: r } = (0, E.KZ)(),
        m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)),
        x = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)),
        h = null == m ? void 0 : m.roles,
        T = s.useMemo(
            () =>
                null == h || 0 === h.length
                    ? []
                    : Object.values(x)
                          .filter((e) => h.includes(e.id))
                          .sort((e, n) => {
                              var t, i;
                              let s = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
                                  o = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
                              return s && !o ? 1 : !s && o ? -1 : 0;
                          }),
            [x, h]
        ),
        A = f.e9(o, t.id),
        [g] = (0, a.Wu)([_.Z], () => [_.Z.can(v.Plq.MANAGE_ROLES, o), null != o ? _.Z.getGuildVersion(o.id) : null]),
        N = s.useCallback(
            (e) => {
                var t, i;
                r({ action: 'REMOVE_ROLE' });
                let s = null !== (i = null == h ? void 0 : h.filter((n) => n !== e.id)) && void 0 !== i ? i : [];
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? c.Z.unassignGuildRoleConnection(o.id, e.id) : d.Z.updateMemberRoles(o.id, n.id, s, [], [e.id]);
            },
            [h, o.id, n.id, r]
        ),
        b = s.useCallback(
            (e) => {
                r({ action: 'ADD_ROLE' });
                let t = null != h ? h : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(o.id, n.id, t, [e], []);
            },
            [h, o.id, n.id, r]
        ),
        j = g && null != m;
    return 0 !== T.length || j
        ? (0, i.jsx)(p.Z, {
              heading: Z.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, i.jsx)(S, {
                  user: n,
                  currentUser: t,
                  guild: o,
                  guildMember: m,
                  roles: T,
                  highestRole: A,
                  canManageRoles: g,
                  onAddRole: b,
                  onRemoveRole: N
              })
          })
        : null;
}
