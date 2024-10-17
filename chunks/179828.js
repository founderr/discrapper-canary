t.d(n, {
    Z: function () {
        return v;
    }
}),
    t(47120);
var o = t(735250),
    i = t(470079),
    s = t(772848),
    l = t(924826),
    c = t(91192),
    r = t(442837),
    a = t(749210),
    d = t(434404),
    u = t(271383),
    _ = t(430824),
    I = t(496675),
    E = t(700785),
    f = t(785717),
    p = t(256226),
    Z = t(678738),
    h = t(314172),
    x = t(981631),
    m = t(689938),
    S = t(726769);
function T(e) {
    let { user: n, currentUser: t, guild: r, guildMember: a, roles: d, highestRole: u, canManageRoles: _, onAddRole: I, onRemoveRole: f } = e,
        Z = _ && null != a,
        T = i.useMemo(() => 'roles-'.concat((0, s.Z)()), []),
        v = (0, l.ZP)({
            id: T,
            isEnabled: !0,
            scrollToStart: x.Cyb,
            scrollToEnd: x.Cyb,
            wrap: !0
        }),
        g = d.length,
        A = 0 === g ? m.Z.Messages.ROLE_LIST_EMPTY : m.Z.Messages.ROLES_LIST.format({ numRoles: g }),
        O = d.map((e) => {
            var i;
            return (0, o.jsx)(
                p.Z,
                {
                    role: e,
                    guildId: r.id,
                    disableBorderColor: !0,
                    onRemove: () => f(e),
                    canRemove: _ ? E.r6(r, t.id, u, e) : (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null && n.id === t.id
                },
                e.id
            );
        });
    return (0, o.jsx)(c.bG, {
        navigator: v,
        children: (0, o.jsx)(c.SJ, {
            children: (e) => {
                let { ref: n, ...t } = e;
                return (0, o.jsxs)('div', {
                    className: S.root,
                    'aria-label': A,
                    ref: n,
                    ...t,
                    children: [
                        O,
                        Z &&
                            (0, o.jsx)(h.Z, {
                                guild: r,
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
function v(e) {
    let { user: n, currentUser: t, guild: s, scrollIntoView: l } = e,
        { trackUserProfileAction: c } = (0, f.KZ)(),
        p = (0, r.e7)([u.ZP], () => u.ZP.getMember(s.id, n.id)),
        h = (0, r.e7)([_.Z], () => _.Z.getRoles(s.id)),
        S = null == p ? void 0 : p.roles,
        v = i.useMemo(
            () =>
                null == S || 0 === S.length
                    ? []
                    : Object.values(h)
                          .filter((e) => S.includes(e.id))
                          .sort((e, n) => {
                              var t, o;
                              let i = (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) !== null,
                                  s = (null === (o = n.tags) || void 0 === o ? void 0 : o.guild_connections) !== null;
                              return i && !s ? 1 : !i && s ? -1 : 0;
                          }),
            [h, S]
        ),
        g = E.e9(s, t.id),
        [A] = (0, r.Wu)([I.Z], () => [I.Z.can(x.Plq.MANAGE_ROLES, s), null != s ? I.Z.getGuildVersion(s.id) : null]),
        O = i.useCallback(
            (e) => {
                var t, o;
                c({ action: 'REMOVE_ROLE' });
                let i = null !== (o = null == S ? void 0 : S.filter((n) => n !== e.id)) && void 0 !== o ? o : [];
                (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null ? a.Z.unassignGuildRoleConnection(s.id, e.id) : d.Z.updateMemberRoles(s.id, n.id, i, [], [e.id]);
            },
            [S, s.id, n.id, c]
        ),
        L = i.useCallback(
            (e) => {
                c({ action: 'ADD_ROLE' });
                let t = null != S ? S : [];
                -1 === t.indexOf(e) && (t = t.concat([e])), d.Z.updateMemberRoles(s.id, n.id, t, [e], []);
            },
            [S, s.id, n.id, c]
        ),
        b = A && null != p;
    return 0 !== v.length || b
        ? (0, o.jsx)(Z.Z, {
              heading: m.Z.Messages.ROLES,
              scrollIntoView: l,
              children: (0, o.jsx)(T, {
                  user: n,
                  currentUser: t,
                  guild: s,
                  guildMember: p,
                  roles: v,
                  highestRole: g,
                  canManageRoles: A,
                  onAddRole: L,
                  onRemoveRole: O
              })
          })
        : null;
}
