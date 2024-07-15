l.d(n, {
  Z: function() {
return R;
  }
});
var t = l(735250);
l(470079);
var i = l(866442),
  r = l(442837),
  a = l(481060),
  s = l(607070),
  u = l(605436),
  o = l(910693),
  d = l(434404),
  c = l(271383),
  Z = l(430824),
  E = l(496675),
  M = l(823379),
  _ = l(981631),
  f = l(689938),
  g = l(646263);

function m(e, n) {
  var l, r;
  return (0, t.jsxs)('div', {
className: g.roleRow,
children: [
  'dot' === n ? (0, t.jsx)(a.RoleDot, {
    className: g.roleDot,
    color: null !== (l = e.colorString) && void 0 !== l ? l : (0, i.Rf)(_.p6O),
    background: !1,
    tooltip: !1
  }) : (0, t.jsx)(a.RoleCircle, {
    className: g.roleDot,
    color: null !== (r = e.colorString) && void 0 !== r ? r : (0, i.Rf)(_.p6O)
  }),
  (0, t.jsx)('div', {
    children: e.name
  })
]
  });
}

function R(e, n) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
g = (0, r.e7)([Z.Z], () => Z.Z.getGuild(n)),
R = (0, r.e7)([Z.Z], () => Z.Z.getRoles(n)),
I = (0, r.e7)([s.Z], () => s.Z.roleStyle),
N = (0, o.sE)(n, {
  location: i,
  targetUserId: e
}),
{
  userRoles: C,
  isGuildMember: O,
  canManageRoles: A
} = (0, r.cj)([
  c.ZP,
  E.Z
], () => {
  let l = c.ZP.getMember(n, e);
  return {
    userRoles: null != l ? l.roles : [],
    isGuildMember: null != l,
    canManageRoles: null != g && E.Z.can(_.Plq.MANAGE_ROLES, g)
  };
}, [
  e,
  n,
  g
]);
  if (__OVERLAY__ || null == C || null == g || !O)
return null;
  let x = E.Z.getHighestRole(g),
T = Object.values(R).filter(e => !(0, u.pM)(g.id, e.id)),
v = A ? T.map(l => {
  let i = l.managed || !E.Z.isRoleHigher(g, x, l),
    r = -1 !== C.indexOf(l.id);
  return i && !r ? null : (0, t.jsx)(a.MenuCheckboxItem, {
    id: l.id,
    label: () => m(l, I),
    disabled: i,
    action: () => {
      var t;
      return t = l, void(C.includes(t.id) ? (d.Z.updateMemberRoles(n, e, C.filter(e => e !== t.id), [], [t.id]), N(o.jQ.REMOVE_ROLE)) : (d.Z.updateMemberRoles(n, e, C.concat([t.id]), [t.id], []), N(o.jQ.ADD_ROLE)));
    },
    checked: r
  }, l.id);
}) : T.filter(e => -1 !== C.indexOf(e.id)).map(e => (0, u.pM)(g.id, e.id) ? null : (0, t.jsx)(a.MenuItem, {
  id: e.id,
  label: () => m(e, I)
}, e.id));
  return 0 === v.filter(M.lm).length ? null : l ? v : (0, t.jsx)(a.MenuItem, {
id: 'roles',
label: f.Z.Messages.ROLES_LIST.format({
  numRoles: v.length
}),
children: v
  });
}