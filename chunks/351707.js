s.d(n, {
  Z: function() {
return p;
  }
}), s(47120);
var i = s(735250),
  l = s(470079),
  o = s(772848),
  t = s(924826),
  r = s(91192),
  a = s(442837),
  d = s(749210),
  c = s(434404),
  u = s(271383),
  I = s(430824),
  _ = s(496675),
  f = s(700785),
  E = s(785717),
  m = s(256226),
  S = s(678738),
  Z = s(314172),
  v = s(981631),
  x = s(689938),
  h = s(700763);

function T(e) {
  let {
user: n,
currentUser: s,
guild: a,
guildMember: d,
roles: c,
highestRole: u,
canManageRoles: I,
onAddRole: _,
onRemoveRole: E
  } = e, S = I && null != d, T = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []), p = (0, t.ZP)({
id: T,
isEnabled: !0,
scrollToStart: v.Cyb,
scrollToEnd: v.Cyb,
wrap: !0
  }), g = c.length, N = 0 === g ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({
numRoles: g
  }), C = c.map(e => {
var l;
return (0, i.jsx)(m.Z, {
  role: e,
  guildId: a.id,
  disableBorderColor: !0,
  onRemove: () => E(e),
  canRemove: I ? f.r6(a, s.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === s.id
}, e.id);
  });
  return (0, i.jsx)(r.bG, {
navigator: p,
children: (0, i.jsx)(r.SJ, {
  children: e => {
    let {
      ref: n,
      ...s
    } = e;
    return (0, i.jsxs)('div', {
      className: h.root,
      'aria-label': N,
      ref: n,
      ...s,
      children: [
        C,
        S && (0, i.jsx)(Z.Z, {
          guild: a,
          guildMember: d,
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

function p(e) {
  let {
user: n,
currentUser: s,
guild: o,
scrollIntoView: t
  } = e, {
trackUserProfileAction: r
  } = (0, E.KZ)(), m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)), Z = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)), h = null == m ? void 0 : m.roles, p = l.useMemo(() => null == h || 0 === h.length ? [] : Object.values(Z).filter(e => h.includes(e.id)).sort((e, n) => {
var s, i;
let l = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
  o = (null === (i = n.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
return l && !o ? 1 : !l && o ? -1 : 0;
  }), [
Z,
h
  ]), g = f.e9(o, s.id), [N] = (0, a.Wu)([_.Z], () => [
_.Z.can(v.Plq.MANAGE_ROLES, o),
null != o ? _.Z.getGuildVersion(o.id) : null
  ]), C = l.useCallback(e => {
var s, i;
r({
  action: 'REMOVE_ROLE'
});
let l = null !== (i = null == h ? void 0 : h.filter(n => n !== e.id)) && void 0 !== i ? i : [];
(null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, l, [], [e.id]);
  }, [
h,
o.id,
n.id,
r
  ]), j = l.useCallback(e => {
r({
  action: 'ADD_ROLE'
});
let s = null != h ? h : []; -
1 === s.indexOf(e) && (s = s.concat([e])), c.Z.updateMemberRoles(o.id, n.id, s, [e], []);
  }, [
h,
o.id,
n.id,
r
  ]), A = N && null != m;
  return 0 !== p.length || A ? (0, i.jsx)(S.Z, {
heading: x.Z.Messages.ROLES,
scrollIntoView: t,
children: (0, i.jsx)(T, {
  user: n,
  currentUser: s,
  guild: o,
  guildMember: m,
  roles: p,
  highestRole: g,
  canManageRoles: N,
  onAddRole: j,
  onRemoveRole: C
})
  }) : null;
}