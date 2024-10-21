l.d(n, {
    Z: function () {
        return m;
    }
});
var t = l(200651);
l(192379);
var i = l(866442),
    a = l(442837),
    r = l(481060),
    s = l(607070),
    u = l(605436),
    d = l(910693),
    o = l(434404),
    c = l(271383),
    Z = l(430824),
    E = l(496675),
    M = l(823379),
    f = l(981631),
    _ = l(689938),
    g = l(587525);
function I(e, n) {
    var l, a;
    return (0, t.jsxs)('div', {
        className: g.roleRow,
        children: [
            'dot' === n
                ? (0, t.jsx)(r.RoleDot, {
                      className: g.roleDot,
                      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, i.Rf)(f.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, t.jsx)(r.RoleCircle, {
                      className: g.roleDot,
                      color: null !== (a = e.colorString) && void 0 !== a ? a : (0, i.Rf)(f.p6O)
                  }),
            (0, t.jsx)('div', { children: e.name })
        ]
    });
}
function m(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        g = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        m = (0, a.e7)([Z.Z], () => Z.Z.getGuild(n)),
        R = (0, a.e7)([Z.Z], () => Z.Z.getRoles(n)),
        N = (0, a.e7)([s.Z], () => s.Z.roleStyle),
        C = (0, d.sE)(n, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: O,
            isGuildMember: A,
            canManageRoles: h
        } = (0, a.cj)(
            [c.ZP, E.Z],
            () => {
                let l = c.ZP.getMember(n, e);
                return {
                    userRoles: null != l ? l.roles : [],
                    isGuildMember: null != l,
                    canManageRoles: null != m && E.Z.can(f.Plq.MANAGE_ROLES, m)
                };
            },
            [e, n, m]
        );
    if (__OVERLAY__ || null == O || null == m || !A) return null;
    let v = E.Z.getHighestRole(m),
        T = Object.values(R).filter((e) => !(0, u.pM)(m.id, e.id)),
        x =
            h && !g
                ? T.map((l) => {
                      let i = l.managed || !E.Z.isRoleHigher(m, v, l),
                          a = -1 !== O.indexOf(l.id);
                      return i && !a
                          ? null
                          : (0, t.jsx)(
                                r.MenuCheckboxItem,
                                {
                                    id: l.id,
                                    label: () => I(l, N),
                                    disabled: i,
                                    action: () => {
                                        var t;
                                        return (
                                            (t = l),
                                            void (O.includes(t.id)
                                                ? (o.Z.updateMemberRoles(
                                                      n,
                                                      e,
                                                      O.filter((e) => e !== t.id),
                                                      [],
                                                      [t.id]
                                                  ),
                                                  C(d.jQ.REMOVE_ROLE))
                                                : (o.Z.updateMemberRoles(n, e, O.concat([t.id]), [t.id], []), C(d.jQ.ADD_ROLE)))
                                        );
                                    },
                                    checked: a
                                },
                                l.id
                            );
                  })
                : T.filter((e) => -1 !== O.indexOf(e.id)).map((e) =>
                      (0, u.pM)(m.id, e.id)
                          ? null
                          : (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: e.id,
                                    label: () => I(e, N)
                                },
                                e.id
                            )
                  );
    return 0 === x.filter(M.lm).length
        ? null
        : l
          ? x
          : (0, t.jsx)(r.MenuItem, {
                id: 'roles',
                label: _.Z.Messages.ROLES_LIST.format({ numRoles: x.length }),
                children: x
            });
}
