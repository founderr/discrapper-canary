n.d(s, {
  Z: function() {
return p;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  o = n(772848),
  t = n(924826),
  r = n(91192),
  a = n(442837),
  d = n(749210),
  c = n(434404),
  u = n(271383),
  _ = n(430824),
  I = n(496675),
  E = n(700785),
  f = n(785717),
  m = n(256226),
  S = n(678738),
  Z = n(314172),
  x = n(981631),
  v = n(689938),
  h = n(700763);

function T(e) {
  let {
user: s,
currentUser: n,
guild: a,
guildMember: d,
roles: c,
highestRole: u,
canManageRoles: _,
onAddRole: I,
onRemoveRole: f
  } = e, S = _ && null != d, T = l.useMemo(() => 'roles-'.concat((0, o.Z)()), []), p = (0, t.ZP)({
id: T,
isEnabled: !0,
scrollToStart: x.Cyb,
scrollToEnd: x.Cyb,
wrap: !0
  }), g = c.length, N = 0 === g ? v.Z.Messages.ROLE_LIST_EMPTY : v.Z.Messages.ROLES_LIST.format({
numRoles: g
  }), C = c.map(e => {
var l;
return (0, i.jsx)(m.Z, {
  role: e,
  guildId: a.id,
  disableBorderColor: !0,
  onRemove: () => f(e),
  canRemove: _ ? E.r6(a, n.id, u, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && s.id === n.id
}, e.id);
  });
  return (0, i.jsx)(r.bG, {
navigator: p,
children: (0, i.jsx)(r.SJ, {
  children: e => {
    let {
      ref: s,
      ...n
    } = e;
    return (0, i.jsxs)('div', {
      className: h.root,
      'aria-label': N,
      ref: s,
      ...n,
      children: [
        C,
        S && (0, i.jsx)(Z.Z, {
          guild: a,
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

function p(e) {
  let {
user: s,
currentUser: n,
guild: o,
scrollIntoView: t
  } = e, {
trackUserProfileAction: r
  } = (0, f.KZ)(), m = (0, a.e7)([u.ZP], () => u.ZP.getMember(o.id, s.id)), Z = (0, a.e7)([_.Z], () => _.Z.getRoles(o.id)), h = null == m ? void 0 : m.roles, p = l.useMemo(() => null == h || 0 === h.length ? [] : Object.values(Z).filter(e => h.includes(e.id)).sort((e, s) => {
var n, i;
let l = (null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) !== null,
  o = (null === (i = s.tags) || void 0 === i ? void 0 : i.guild_connections) !== null;
return l && !o ? 1 : !l && o ? -1 : 0;
  }), [
Z,
h
  ]), g = E.e9(o, n.id), [N] = (0, a.Wu)([I.Z], () => [
I.Z.can(x.Plq.MANAGE_ROLES, o),
null != o ? I.Z.getGuildVersion(o.id) : null
  ]), C = l.useCallback(e => {
var n, i;
r({
  action: 'REMOVE_ROLE'
});
let l = null !== (i = null == h ? void 0 : h.filter(s => s !== e.id)) && void 0 !== i ? i : [];
(null === (n = e.tags) || void 0 === n ? void 0 : n.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, s.id, l, [], [e.id]);
  }, [
h,
o.id,
s.id,
r
  ]), j = l.useCallback(e => {
r({
  action: 'ADD_ROLE'
});
let n = null != h ? h : []; -
1 === n.indexOf(e) && (n = n.concat([e])), c.Z.updateMemberRoles(o.id, s.id, n, [e], []);
  }, [
h,
o.id,
s.id,
r
  ]), A = N && null != m;
  return 0 !== p.length || A ? (0, i.jsx)(S.Z, {
heading: v.Z.Messages.ROLES,
scrollIntoView: t,
children: (0, i.jsx)(T, {
  user: s,
  currentUser: n,
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