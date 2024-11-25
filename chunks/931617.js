t.d(n, {
    Z: function () {
        return P;
    }
});
var l = t(200651);
t(192379);
var i = t(866442),
    r = t(442837),
    a = t(481060),
    u = t(607070),
    o = t(605436),
    d = t(910693),
    s = t(434404),
    c = t(271383),
    Z = t(430824),
    f = t(496675),
    g = t(823379),
    m = t(981631),
    M = t(388032),
    v = t(849324);
function x(e, n) {
    var t, r;
    return (0, l.jsxs)('div', {
        className: v.roleRow,
        children: [
            'dot' === n
                ? (0, l.jsx)(a.RoleDot, {
                      className: v.roleDot,
                      color: null !== (t = e.colorString) && void 0 !== t ? t : (0, i.Rf)(m.p6O),
                      background: !1,
                      tooltip: !1
                  })
                : (0, l.jsx)(a.RoleCircle, {
                      className: v.roleDot,
                      color: null !== (r = e.colorString) && void 0 !== r ? r : (0, i.Rf)(m.p6O)
                  }),
            (0, l.jsx)('div', { children: e.name })
        ]
    });
}
function P(e, n) {
    let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
        v = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        P = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
        h = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
        p = (0, r.e7)([u.Z], () => u.Z.roleStyle),
        I = (0, d.sE)(n, {
            location: i,
            targetUserId: e
        }),
        {
            userRoles: b,
            isGuildMember: C,
            canManageRoles: E
        } = (0, r.cj)(
            [c.ZP, f.Z],
            () => {
                let t = c.ZP.getMember(n, e);
                return {
                    userRoles: null != t ? t.roles : [],
                    isGuildMember: null != t,
                    canManageRoles: null != P && f.Z.can(m.Plq.MANAGE_ROLES, P)
                };
            },
            [e, n, P]
        );
    if (__OVERLAY__ || null == b || null == P || !C) return null;
    let j = f.Z.getHighestRole(P),
        O = Object.values(h).filter((e) => !(0, o.pM)(P.id, e.id)),
        N =
            E && !v
                ? O.map((t) => {
                      let i = t.managed || !f.Z.isRoleHigher(P, j, t),
                          r = -1 !== b.indexOf(t.id);
                      return i && !r
                          ? null
                          : (0, l.jsx)(
                                a.MenuCheckboxItem,
                                {
                                    id: t.id,
                                    label: () => x(t, p),
                                    disabled: i,
                                    action: () => {
                                        var l;
                                        return (
                                            (l = t),
                                            void (b.includes(l.id)
                                                ? (s.Z.updateMemberRoles(
                                                      n,
                                                      e,
                                                      b.filter((e) => e !== l.id),
                                                      [],
                                                      [l.id]
                                                  ),
                                                  I(d.jQ.REMOVE_ROLE))
                                                : (s.Z.updateMemberRoles(n, e, b.concat([l.id]), [l.id], []), I(d.jQ.ADD_ROLE)))
                                        );
                                    },
                                    checked: r
                                },
                                t.id
                            );
                  })
                : O.filter((e) => -1 !== b.indexOf(e.id)).map((e) =>
                      (0, o.pM)(P.id, e.id)
                          ? null
                          : (0, l.jsx)(
                                a.MenuItem,
                                {
                                    id: e.id,
                                    label: () => x(e, p)
                                },
                                e.id
                            )
                  );
    return 0 === N.filter(g.lm).length
        ? null
        : t
          ? N
          : (0, l.jsx)(a.MenuItem, {
                id: 'roles',
                label: M.intl.formatToPlainString(M.t.PCs0oq, { numRoles: N.length }),
                children: N
            });
}
