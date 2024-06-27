i.d(n, {
  Z: function() {
    return N
  }
}), i(47120);
var t = i(735250),
  s = i(470079),
  o = i(772848),
  l = i(924826),
  a = i(91192),
  r = i(442837),
  d = i(749210),
  c = i(434404),
  u = i(271383),
  I = i(430824),
  f = i(496675),
  E = i(700785),
  _ = i(785717),
  Z = i(256226),
  m = i(678738),
  S = i(314172),
  v = i(981631),
  x = i(689938),
  h = i(500478);

function g(e) {
  let {
    user: n,
    currentUser: i,
    guild: d,
    guildMember: c,
    userRoles: u,
    highestRole: f,
    canManageRoles: _,
    onAddRole: m,
    onRemoveRole: g
  } = e, N = (0, r.e7)([I.Z], () => I.Z.getRoles(d.id)), p = s.useMemo(() => Object.values(N).filter(e => u.includes(e.id)).sort((e, n) => {
    var i, t;
    let s = (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) !== null,
      o = (null === (t = n.tags) || void 0 === t ? void 0 : t.guild_connections) !== null;
    return s && !o ? 1 : !s && o ? -1 : 0
  }), [N, u]), C = _ && null != c, T = s.useMemo(() => "roles-".concat((0, o.Z)()), []), R = (0, l.ZP)({
    id: T,
    isEnabled: !0,
    scrollToStart: v.Cyb,
    scrollToEnd: v.Cyb,
    wrap: !0
  }), A = p.length, M = 0 === A ? x.Z.Messages.ROLE_LIST_EMPTY : x.Z.Messages.ROLES_LIST.format({
    numRoles: A
  }), j = p.map(e => {
    var s;
    return (0, t.jsx)(Z.Z, {
      role: e,
      guildId: d.id,
      disableBorderColor: !0,
      onRemove: () => g(e),
      canRemove: _ ? E.r6(d, i.id, f, e) : (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null && n.id === i.id
    }, e.id)
  });
  return (0, t.jsx)(a.bG, {
    navigator: R,
    children: (0, t.jsx)(a.SJ, {
      children: e => {
        let {
          ref: n,
          ...i
        } = e;
        return (0, t.jsxs)("div", {
          className: h.root,
          "aria-label": M,
          ref: n,
          ...i,
          children: [j, C && (0, t.jsx)(S.Z, {
            variant: p.length > 0 ? "icon" : "text",
            guild: d,
            guildMember: c,
            highestRole: f,
            onAddRole: m
          })]
        })
      }
    })
  })
}

function N(e) {
  let {
    user: n,
    currentUser: i,
    guild: o,
    scrollIntoView: l
  } = e, {
    trackUserProfileAction: a
  } = (0, _.KZ)(), I = (0, r.e7)([u.ZP], () => u.ZP.getMember(o.id, n.id)), Z = null == I ? void 0 : I.roles, S = null == Z || 0 === Z.length, h = E.e9(o, i.id), [N] = (0, r.Wu)([f.Z], () => [f.Z.can(v.Plq.MANAGE_ROLES, o), null != o ? f.Z.getGuildVersion(o.id) : null]), p = s.useCallback(e => {
    var i, t;
    a({
      action: "REMOVE_ROLE"
    });
    let s = null !== (t = null == Z ? void 0 : Z.filter(n => n !== e.id)) && void 0 !== t ? t : [];
    (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? d.Z.unassignGuildRoleConnection(o.id, e.id) : c.Z.updateMemberRoles(o.id, n.id, s, [], [e.id])
  }, [Z, o.id, n.id, a]), C = s.useCallback(e => {
    a({
      action: "ADD_ROLE"
    });
    let i = null != Z ? Z : []; - 1 === i.indexOf(e) && (i = i.concat([e])), c.Z.updateMemberRoles(o.id, n.id, i, [e], [])
  }, [Z, o.id, n.id, a]);
  return S && !N ? null : (0, t.jsx)(m.Z, {
    title: x.Z.Messages.ROLES,
    scrollIntoView: l,
    children: (0, t.jsx)(g, {
      user: n,
      currentUser: i,
      guild: o,
      guildMember: I,
      userRoles: null != Z ? Z : [],
      highestRole: h,
      canManageRoles: N,
      onAddRole: C,
      onRemoveRole: p
    })
  })
}