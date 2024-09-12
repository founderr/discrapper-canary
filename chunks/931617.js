l.d(n, {
    Z: function () {
        return m;
    }
});
var t = l(735250);
l(470079);
var a = l(866442),
    i = l(442837),
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
    var l, i;
    return (0, t.jsxs)('div', {
        className: g.roleRow,
        children: [
            'dot' === n
                ? (0, t.jsx)(r.RoleDot, {
                      className: g.roleDot,
                      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, a.Rf)(f.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, t.jsx)(r.RoleCircle, {
                      className: g.roleDot,
                      color: null !== (i = e.colorString) && void 0 !== i ? i : (0, a.Rf)(f.p6O)
                  }),
            (0, t.jsx)('div', { children: e.name })
        ]
    });
}
function m(e, n) {
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        g = (0, i.e7)([Z.Z], () => Z.Z.getGuild(n)),
        m = (0, i.e7)([Z.Z], () => Z.Z.getRoles(n)),
        R = (0, i.e7)([s.Z], () => s.Z.roleStyle),
        N = (0, d.sE)(n, {
            location: a,
            targetUserId: e
        }),
        {
            userRoles: C,
            isGuildMember: O,
            canManageRoles: A
        } = (0, i.cj)(
            [c.ZP, E.Z],
            () => {
                let l = c.ZP.getMember(n, e);
                return {
                    userRoles: null != l ? l.roles : [],
                    isGuildMember: null != l,
                    canManageRoles: null != g && E.Z.can(f.Plq.MANAGE_ROLES, g)
                };
            },
            [e, n, g]
        );
    if (__OVERLAY__ || null == C || null == g || !O) return null;
    let T = E.Z.getHighestRole(g),
        h = Object.values(m).filter((e) => !(0, u.pM)(g.id, e.id)),
        v = A
            ? h.map((l) => {
                  let a = l.managed || !E.Z.isRoleHigher(g, T, l),
                      i = -1 !== C.indexOf(l.id);
                  return a && !i
                      ? null
                      : (0, t.jsx)(
                            r.MenuCheckboxItem,
                            {
                                id: l.id,
                                label: () => I(l, R),
                                disabled: a,
                                action: () => {
                                    var t;
                                    return (
                                        (t = l),
                                        void (C.includes(t.id)
                                            ? (o.Z.updateMemberRoles(
                                                  n,
                                                  e,
                                                  C.filter((e) => e !== t.id),
                                                  [],
                                                  [t.id]
                                              ),
                                              N(d.jQ.REMOVE_ROLE))
                                            : (o.Z.updateMemberRoles(n, e, C.concat([t.id]), [t.id], []), N(d.jQ.ADD_ROLE)))
                                    );
                                },
                                checked: i
                            },
                            l.id
                        );
              })
            : h
                  .filter((e) => -1 !== C.indexOf(e.id))
                  .map((e) =>
                      (0, u.pM)(g.id, e.id)
                          ? null
                          : (0, t.jsx)(
                                r.MenuItem,
                                {
                                    id: e.id,
                                    label: () => I(e, R)
                                },
                                e.id
                            )
                  );
    return 0 === v.filter(M.lm).length
        ? null
        : l
          ? v
          : (0, t.jsx)(r.MenuItem, {
                id: 'roles',
                label: _.Z.Messages.ROLES_LIST.format({ numRoles: v.length }),
                children: v
            });
}
