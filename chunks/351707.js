s.d(i, {
  Z: function() {
    return g
  }
}), s(47120);
var n = s(735250),
  l = s(470079),
  t = s(772848),
  o = s(924826),
  r = s(91192),
  a = s(442837),
  d = s(749210),
  c = s(434404),
  u = s(271383),
  I = s(430824),
  E = s(496675),
  Z = s(700785),
  f = s(785717),
  _ = s(256226),
  S = s(678738),
  v = s(314172),
  m = s(981631),
  x = s(689938),
  h = s(500478);

function N(e) {
  let {
    user: i,
    currentUser: s,
    guild: d,
    guildMember: c,
    userRoles: u,
    highestRole: E,
    canManageRoles: f,
    onAddRole: S,
    onRemoveRole: N
  } = e, g = (0, a.e7)([I.Z], () => I.Z.getRoles(d.id)), T = l.useMemo(() => Object.values(g).filter(e => u.includes(e.id)).sort((e, i) => {
    var s, n;
    let l = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      t = (null === (n = i.tags) || void 0 === n ? void 0 : n.guild_connections) !== null;
    return l && !t ? 1 : !l && t ? -1 : 0
  }), [g, u]), C = f && null != c, R = l.useMemo(() => "roles-".concat((0, t.Z)()), []), A = (0, o.ZP)({
    id: R,
    isEnabled: !0,
    scrollToStart: m.Cyb,
    scrollToEnd: m.Cyb,
    wrap: !0
  }), M = T.length, p = 0 === M ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({
    numRoles: M
  }), j = T.map(e => {
    var l;
    return (0, n.jsx)(_.Z, {
      role: e,
      guildId: d.id,
      disableBorderColor: !0,
      onRemove: () => N(e),
      canRemove: f ? Z.r6(d, s.id, E, e) : (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null && i.id === s.id
    }, e.id)
  });
  return (0, n.jsx)(r.bG, {
    navigator: A,
    children: (0, n.jsx)(r.SJ, {
      children: e => {
        let {
          ref: i,
          ...s
        } = e;
        return (0, n.jsxs)("div", {
          className: h.root,
          "aria-label": p,
          ref: i,
          ...s,
          children: [j, C && (0, n.jsx)(v.Z, {
            variant: T.length > 0 ? "icon" : "text",
            guild: d,
            guildMember: c,
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
    user: i,
    currentUser: s,
    guild: t,
    scrollIntoView: o
  } = e, {
    trackUserProfileAction: r
  } = (0, f.KZ)(), I = (0, a.e7)([u.ZP], () => u.ZP.getMember(t.id, i.id)), _ = null == I ? void 0 : I.roles, v = null == _ || 0 === _.length, h = Z.e9(t, s.id), [g] = (0, a.Wu)([E.Z], () => [E.Z.can(m.Plq.MANAGE_ROLES, t), null != t ? E.Z.getGuildVersion(t.id) : null]), T = l.useCallback(e => {
    var s, n;
    r({
      action: "REMOVE_ROLE"
    });
    let l = null !== (n = null == _ ? void 0 : _.filter(i => i !== e.id)) && void 0 !== n ? n : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? d.Z.unassignGuildRoleConnection(t.id, e.id) : c.Z.updateMemberRoles(t.id, i.id, l, [], [e.id])
  }, [_, t.id, i.id, r]), C = l.useCallback(e => {
    r({
      action: "ADD_ROLE"
    });
    let s = null != _ ? _ : []; - 1 === s.indexOf(e) && (s = s.concat([e])), c.Z.updateMemberRoles(t.id, i.id, s, [e], [])
  }, [_, t.id, i.id, r]);
  return v && !g ? null : (0, n.jsx)(S.Z, {
    title: x.Z.Messages.ROLES,
    scrollIntoView: o,
    children: (0, n.jsx)(N, {
      user: i,
      currentUser: s,
      guild: t,
      guildMember: I,
      userRoles: null != _ ? _ : [],
      highestRole: h,
      canManageRoles: g,
      onAddRole: C,
      onRemoveRole: T
    })
  })
}