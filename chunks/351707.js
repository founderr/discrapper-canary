i.d(n, {
  Z: function() {
    return g
  }
}), i(47120);
var l = i(735250),
  s = i(470079),
  t = i(772848),
  o = i(924826),
  a = i(91192),
  r = i(442837),
  d = i(749210),
  u = i(434404),
  c = i(271383),
  I = i(430824),
  E = i(496675),
  f = i(700785),
  Z = i(785717),
  _ = i(256226),
  S = i(678738),
  m = i(314172),
  v = i(981631),
  N = i(689938),
  x = i(500478);

function h(e) {
  let {
    user: n,
    currentUser: i,
    guild: d,
    guildMember: u,
    userRoles: c,
    highestRole: E,
    canManageRoles: Z,
    onAddRole: S,
    onRemoveRole: h
  } = e, g = (0, r.e7)([I.Z], () => I.Z.getRoles(d.id)), C = s.useMemo(() => Object.values(g).filter(e => c.includes(e.id)).sort((e, n) => {
    var i, l;
    let s = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null,
      t = (null === (l = n.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return s && !t ? 1 : !s && t ? -1 : 0
  }), [g, c]), T = Z && null != u, R = s.useMemo(() => "roles-".concat((0, t.Z)()), []), A = (0, o.ZP)({
    id: R,
    isEnabled: !0,
    scrollToStart: v.Cyb,
    scrollToEnd: v.Cyb,
    wrap: !0
  }), M = C.length, j = 0 === M ? N.Z.Messages.ROLE_LIST_EMPTY : N.Z.Messages.ROLES_LIST.format({
    numRoles: M
  }), p = C.map(e => {
    var s;
    return (0, l.jsx)(_.Z, {
      role: e,
      guildId: d.id,
      disableBorderColor: !0,
      onRemove: () => h(e),
      canRemove: Z ? f.r6(d, i.id, E, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && n.id === i.id
    }, e.id)
  });
  return (0, l.jsx)(a.bG, {
    navigator: A,
    children: (0, l.jsx)(a.SJ, {
      children: e => {
        let {
          ref: n,
          ...i
        } = e;
        return (0, l.jsxs)("div", {
          className: x.root,
          "aria-label": j,
          ref: n,
          ...i,
          children: [p, T && (0, l.jsx)(m.Z, {
            variant: C.length > 0 ? "icon" : "text",
            guild: d,
            guildMember: u,
            highestRole: E,
            onAddRole: S
          })]
        })
      }
    })
  })
}

function g(e) {
  let {
    user: n,
    currentUser: i,
    guild: t,
    scrollIntoView: o
  } = e, {
    trackUserProfileAction: a
  } = (0, Z.KZ)(), I = (0, r.e7)([c.ZP], () => c.ZP.getMember(t.id, n.id)), _ = null == I ? void 0 : I.roles, m = null == _ || 0 === _.length, x = f.e9(t, i.id), [g] = (0, r.Wu)([E.Z], () => [E.Z.can(v.Plq.MANAGE_ROLES, t), null != t ? E.Z.getGuildVersion(t.id) : null]), C = s.useCallback(e => {
    var i, l;
    a({
      action: "REMOVE_ROLE"
    });
    let s = null !== (l = null == _ ? void 0 : _.filter(n => n !== e.id)) && void 0 !== l ? l : [];
    (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : u.Z.updateMemberRoles(t.id, n.id, s, [], [e.id])
  }, [_, t.id, n.id, a]), T = s.useCallback(e => {
    a({
      action: "ADD_ROLE"
    });
    let i = null != _ ? _ : []; - 1 === i.indexOf(e) && (i = i.concat([e])), u.Z.updateMemberRoles(t.id, n.id, i, [e], [])
  }, [_, t.id, n.id, a]);
  return m && !g ? null : (0, l.jsx)(S.Z, {
    title: N.Z.Messages.ROLES,
    scrollIntoView: o,
    children: (0, l.jsx)(h, {
      user: n,
      currentUser: i,
      guild: t,
      guildMember: I,
      userRoles: null != _ ? _ : [],
      highestRole: x,
      canManageRoles: g,
      onAddRole: T,
      onRemoveRole: C
    })
  })
}