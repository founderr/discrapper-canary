n.d(s, {
  Z: function() {
return T;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  t = n(772848),
  o = n(924826),
  a = n(91192),
  r = n(442837),
  d = n(749210),
  c = n(434404),
  u = n(271383),
  _ = n(430824),
  I = n(496675),
  f = n(700785),
  E = n(785717),
  m = n(256226),
  S = n(678738),
  x = n(314172),
  v = n(981631),
  Z = n(689938),
  p = n(328156);

function h(e) {
  let {
user: s,
currentUser: n,
guild: r,
guildMember: d,
roles: c,
highestRole: u,
canManageRoles: _,
onAddRole: I,
onRemoveRole: E
  } = e, S = _ && null != d, h = l.useMemo(() => 'roles-'.concat((0, t.Z)()), []), T = (0, o.ZP)({
id: h,
isEnabled: !0,
scrollToStart: v.Cyb,
scrollToEnd: v.Cyb,
wrap: !0
  }), g = c.length, N = 0 === g ? Z.Z.Messages.ROLE_LIST_EMPTY : Z.Z.Messages.ROLES_LIST.format({
numRoles: g
  }), j = c.map(e => {
var l;
return (0, i.jsx)(m.Z, {
  role: e,
  guildId: r.id,
  disableBorderColor: !0,
  onRemove: () => E(e),
  canRemove: _ ? f.r6(r, n.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && s.id === n.id
}, e.id);
  });
  return (0, i.jsx)(a.bG, {
navigator: T,
children: (0, i.jsx)(a.SJ, {
  children: e => {
    let {
      ref: s,
      ...n
    } = e;
    return (0, i.jsxs)('div', {
      className: p.root,
      'aria-label': N,
      ref: s,
      ...n,
      children: [
        j,
        S && (0, i.jsx)(x.Z, {
          guild: r,
          guildMember: d,
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
  let {
user: s,
currentUser: n,
guild: t,
scrollIntoView: o
  } = e, {
trackUserProfileAction: a
  } = (0, E.KZ)(), m = (0, r.e7)([u.ZP], () => u.ZP.getMember(t.id, s.id)), x = (0, r.e7)([_.Z], () => _.Z.getRoles(t.id)), p = null == m ? void 0 : m.roles, T = l.useMemo(() => null == p || 0 === p.length ? [] : Object.values(x).filter(e => p.includes(e.id)).sort((e, s) => {
var n, i;
let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
  t = (null === (i = s.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
return l && !t ? 1 : !l && t ? -1 : 0;
  }), [
x,
p
  ]), g = f.e9(t, n.id), [N] = (0, r.Wu)([I.Z], () => [
I.Z.can(v.Plq.MANAGE_ROLES, t),
null != t ? I.Z.getGuildVersion(t.id) : null
  ]), j = l.useCallback(e => {
var n, i;
a({
  action: 'REMOVE_ROLE'
});
let l = null !== (i = null == p ? void 0 : p.filter(s => s !== e.id)) && void 0 !== i ? i : [];
(null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : c.Z.updateMemberRoles(t.id, s.id, l, [], [e.id]);
  }, [
p,
t.id,
s.id,
a
  ]), C = l.useCallback(e => {
a({
  action: 'ADD_ROLE'
});
let n = null != p ? p : []; -
1 === n.indexOf(e) && (n = n.concat([e])), c.Z.updateMemberRoles(t.id, s.id, n, [e], []);
  }, [
p,
t.id,
s.id,
a
  ]), A = N && null != m;
  return 0 !== T.length || A ? (0, i.jsx)(S.Z, {
heading: Z.Z.Messages.ROLES,
scrollIntoView: o,
children: (0, i.jsx)(h, {
  user: s,
  currentUser: n,
  guild: t,
  guildMember: m,
  roles: T,
  highestRole: g,
  canManageRoles: N,
  onAddRole: C,
  onRemoveRole: j
})
  }) : null;
}