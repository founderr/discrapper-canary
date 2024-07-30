n.d(i, {
  Z: function() {
return g;
  }
}), n(47120);
var s = n(735250),
  l = n(470079),
  t = n(772848),
  o = n(924826),
  a = n(91192),
  r = n(442837),
  d = n(749210),
  c = n(434404),
  u = n(271383),
  I = n(430824),
  _ = n(496675),
  f = n(700785),
  m = n(785717),
  E = n(256226),
  x = n(678738),
  v = n(314172),
  Z = n(981631),
  h = n(689938),
  S = n(700763);

function p(e) {
  let {
user: i,
currentUser: n,
guild: r,
guildMember: d,
roles: c,
highestRole: u,
canManageRoles: I,
onAddRole: _,
onRemoveRole: m
  } = e, x = I && null != d, p = l.useMemo(() => 'roles-'.concat((0, t.Z)()), []), g = (0, o.ZP)({
id: p,
isEnabled: !0,
scrollToStart: Z.Cyb,
scrollToEnd: Z.Cyb,
wrap: !0
  }), j = c.length, T = 0 === j ? h.Z.Messages.ROLE_LIST_EMPTY : h.Z.Messages.ROLES_LIST.format({
numRoles: j
  }), N = c.map(e => {
var l;
return (0, s.jsx)(E.Z, {
  role: e,
  guildId: r.id,
  disableBorderColor: !0,
  onRemove: () => m(e),
  canRemove: I ? f.r6(r, n.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && i.id === n.id
}, e.id);
  });
  return (0, s.jsx)(a.bG, {
navigator: g,
children: (0, s.jsx)(a.SJ, {
  children: e => {
    let {
      ref: i,
      ...n
    } = e;
    return (0, s.jsxs)('div', {
      className: S.root,
      'aria-label': T,
      ref: i,
      ...n,
      children: [
        N,
        x && (0, s.jsx)(v.Z, {
          guild: r,
          guildMember: d,
          numRoles: j,
          highestRole: u,
          onAddRole: _
        })
      ]
    });
  }
})
  });
}

function g(e) {
  let {
user: i,
currentUser: n,
guild: t,
scrollIntoView: o
  } = e, {
trackUserProfileAction: a
  } = (0, m.KZ)(), E = (0, r.e7)([u.ZP], () => u.ZP.getMember(t.id, i.id)), v = (0, r.e7)([I.Z], () => I.Z.getRoles(t.id)), S = null == E ? void 0 : E.roles, g = l.useMemo(() => null == S || 0 === S.length ? [] : Object.values(v).filter(e => S.includes(e.id)).sort((e, i) => {
var n, s;
let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
  t = (null === (s = i.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
return l && !t ? 1 : !l && t ? -1 : 0;
  }), [
v,
S
  ]), j = f.e9(t, n.id), [T] = (0, r.Wu)([_.Z], () => [
_.Z.can(Z.Plq.MANAGE_ROLES, t),
null != t ? _.Z.getGuildVersion(t.id) : null
  ]), N = l.useCallback(e => {
var n, s;
a({
  action: 'REMOVE_ROLE'
});
let l = null !== (s = null == S ? void 0 : S.filter(i => i !== e.id)) && void 0 !== s ? s : [];
(null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : c.Z.updateMemberRoles(t.id, i.id, l, [], [e.id]);
  }, [
S,
t.id,
i.id,
a
  ]), C = l.useCallback(e => {
a({
  action: 'ADD_ROLE'
});
let n = null != S ? S : []; -
1 === n.indexOf(e) && (n = n.concat([e])), c.Z.updateMemberRoles(t.id, i.id, n, [e], []);
  }, [
S,
t.id,
i.id,
a
  ]), A = T && null != E;
  return 0 !== g.length || A ? (0, s.jsx)(x.Z, {
heading: h.Z.Messages.ROLES,
scrollIntoView: o,
children: (0, s.jsx)(p, {
  user: i,
  currentUser: n,
  guild: t,
  guildMember: E,
  roles: g,
  highestRole: j,
  canManageRoles: T,
  onAddRole: C,
  onRemoveRole: N
})
  }) : null;
}