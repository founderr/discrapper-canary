i.d(n, {
  Z: function() {
return g;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  t = i(772848),
  o = i(924826),
  a = i(91192),
  r = i(442837),
  d = i(749210),
  c = i(434404),
  u = i(271383),
  I = i(430824),
  _ = i(496675),
  f = i(700785),
  m = i(785717),
  E = i(256226),
  x = i(678738),
  v = i(314172),
  Z = i(981631),
  h = i(689938),
  S = i(700763);

function p(e) {
  let {
user: n,
currentUser: i,
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
  canRemove: I ? f.r6(r, i.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && n.id === i.id
}, e.id);
  });
  return (0, s.jsx)(a.bG, {
navigator: g,
children: (0, s.jsx)(a.SJ, {
  children: e => {
    let {
      ref: n,
      ...i
    } = e;
    return (0, s.jsxs)('div', {
      className: S.root,
      'aria-label': T,
      ref: n,
      ...i,
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
user: n,
currentUser: i,
guild: t,
scrollIntoView: o
  } = e, {
trackUserProfileAction: a
  } = (0, m.KZ)(), E = (0, r.e7)([u.ZP], () => u.ZP.getMember(t.id, n.id)), v = (0, r.e7)([I.Z], () => I.Z.getRoles(t.id)), S = null == E ? void 0 : E.roles, g = l.useMemo(() => null == S || 0 === S.length ? [] : Object.values(v).filter(e => S.includes(e.id)).sort((e, n) => {
var i, s;
let l = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null,
  t = (null === (s = n.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
return l && !t ? 1 : !l && t ? -1 : 0;
  }), [
v,
S
  ]), j = f.e9(t, i.id), [T] = (0, r.Wu)([_.Z], () => [
_.Z.can(Z.Plq.MANAGE_ROLES, t),
null != t ? _.Z.getGuildVersion(t.id) : null
  ]), N = l.useCallback(e => {
var i, s;
a({
  action: 'REMOVE_ROLE'
});
let l = null !== (s = null == S ? void 0 : S.filter(n => n !== e.id)) && void 0 !== s ? s : [];
(null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : c.Z.updateMemberRoles(t.id, n.id, l, [], [e.id]);
  }, [
S,
t.id,
n.id,
a
  ]), C = l.useCallback(e => {
a({
  action: 'ADD_ROLE'
});
let i = null != S ? S : []; -
1 === i.indexOf(e) && (i = i.concat([e])), c.Z.updateMemberRoles(t.id, n.id, i, [e], []);
  }, [
S,
t.id,
n.id,
a
  ]), A = T && null != E;
  return 0 !== g.length || A ? (0, s.jsx)(x.Z, {
heading: h.Z.Messages.ROLES,
scrollIntoView: o,
children: (0, s.jsx)(p, {
  user: n,
  currentUser: i,
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