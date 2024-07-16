n.d(i, {
  Z: function() {
return T;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  o = n(772848),
  t = n(924826),
  r = n(91192),
  a = n(442837),
  d = n(749210),
  c = n(434404),
  u = n(271383),
  I = n(430824),
  f = n(496675),
  _ = n(700785),
  E = n(785717),
  m = n(256226),
  S = n(678738),
  Z = n(314172),
  x = n(981631),
  v = n(689938),
  h = n(700763);

function p(e) {
  let {
user: i,
currentUser: n,
guild: a,
guildMember: d,
roles: c,
highestRole: u,
canManageRoles: I,
onAddRole: f,
onRemoveRole: E
  } = e, S = I && null != d, p = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []), T = (0, t.ZP)({
id: p,
isEnabled: !0,
scrollToStart: x.Cyb,
scrollToEnd: x.Cyb,
wrap: !0
  }), g = c.length, N = 0 === g ? v.Z.Messages.ROLE_LIST_EMPTY : v.Z.Messages.ROLES_LIST.format({
numRoles: g
  }), C = c.map(e => {
var l;
return (0, s.jsx)(m.Z, {
  role: e,
  guildId: a.id,
  disableBorderColor: !0,
  onRemove: () => E(e),
  canRemove: I ? _.r6(a, n.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && i.id === n.id
}, e.id);
  });
  return (0, s.jsx)(r.bG, {
navigator: T,
children: (0, s.jsx)(r.SJ, {
  children: e => {
    let {
      ref: i,
      ...n
    } = e;
    return (0, s.jsxs)('div', {
      className: h.root,
      'aria-label': N,
      ref: i,
      ...n,
      children: [
        C,
        S && (0, s.jsx)(Z.Z, {
          guild: a,
          guildMember: d,
          numRoles: g,
          highestRole: u,
          onAddRole: f
        })
      ]
    });
  }
})
  });
}

function T(e) {
  let {
user: i,
currentUser: n,
guild: o,
scrollIntoView: t
  } = e, {
trackUserProfileAction: r
  } = (0, E.KZ)(), m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, i.id)), Z = (0, a.e7)([I.Z], () => I.Z.getRoles(o.id)), h = null == m ? void 0 : m.roles, T = l.useMemo(() => null == h || 0 === h.length ? [] : Object.values(Z).filter(e => h.includes(e.id)).sort((e, i) => {
var n, s;
let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
  o = (null === (s = i.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
return l && !o ? 1 : !l && o ? -1 : 0;
  }), [
Z,
h
  ]), g = _.e9(o, n.id), [N] = (0, a.Wu)([f.Z], () => [
f.Z.can(x.Plq.MANAGE_ROLES, o),
null != o ? f.Z.getGuildVersion(o.id) : null
  ]), C = l.useCallback(e => {
var n, s;
r({
  action: 'REMOVE_ROLE'
});
let l = null !== (s = null == h ? void 0 : h.filter(i => i !== e.id)) && void 0 !== s ? s : [];
(null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, i.id, l, [], [e.id]);
  }, [
h,
o.id,
i.id,
r
  ]), j = l.useCallback(e => {
r({
  action: 'ADD_ROLE'
});
let n = null != h ? h : []; -
1 === n.indexOf(e) && (n = n.concat([e])), c.Z.updateMemberRoles(o.id, i.id, n, [e], []);
  }, [
h,
o.id,
i.id,
r
  ]), A = N && null != m;
  return 0 !== T.length || A ? (0, s.jsx)(S.Z, {
title: v.Z.Messages.ROLES,
scrollIntoView: t,
children: (0, s.jsx)(p, {
  user: i,
  currentUser: n,
  guild: o,
  guildMember: m,
  roles: T,
  highestRole: g,
  canManageRoles: N,
  onAddRole: j,
  onRemoveRole: C
})
  }) : null;
}