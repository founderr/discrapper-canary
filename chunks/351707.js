"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  i = l("153832"),
  n = l("924826"),
  r = l("442837"),
  o = l("749210"),
  u = l("434404"),
  d = l("271383"),
  c = l("430824"),
  f = l("496675"),
  S = l("700785"),
  E = l("785717"),
  I = l("256226"),
  m = l("678738"),
  _ = l("314172"),
  v = l("981631"),
  T = l("689938"),
  g = l("323353");

function A(e) {
  let {
    user: t,
    currentUser: l,
    guild: o,
    guildMember: u,
    userRoles: d,
    highestRole: f,
    canManageRoles: E,
    onAddRole: m,
    onRemoveRole: A
  } = e, p = (0, r.useStateFromStores)([c.default], () => c.default.getRoles(o.id)), U = a.useMemo(() => Object.values(p).filter(e => d.includes(e.id)).sort((e, t) => {
    var l, s;
    let a = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
      i = (null === (s = t.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [p, d]), x = E && null != u, C = a.useMemo(() => "roles-".concat((0, i.v4)()), []), N = (0, n.default)({
    id: C,
    isEnabled: !0,
    scrollToStart: v.NOOP_PROMISE,
    scrollToEnd: v.NOOP_PROMISE,
    wrap: !0
  }), h = U.length, R = 0 === h ? T.default.Messages.ROLE_LIST_EMPTY : T.default.Messages.ROLES_LIST.format({
    numRoles: h
  }), P = U.map(e => {
    var a;
    return (0, s.jsx)(I.default, {
      role: e,
      guildId: o.id,
      disableBorderColor: !0,
      onRemove: () => A(e),
      canRemove: E ? S.isRoleHigher(o, l.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === l.id
    }, e.id)
  });
  return (0, s.jsx)(n.ListNavigatorProvider, {
    navigator: N,
    children: (0, s.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...l
        } = e;
        return (0, s.jsxs)("div", {
          className: g.root,
          "aria-label": R,
          ref: t,
          ...l,
          children: [P, x && (0, s.jsx)(_.default, {
            guild: o,
            guildMember: u,
            highestRole: f,
            onAddRole: m,
            compact: U.length > 0
          })]
        })
      }
    })
  })
}

function p(e) {
  let {
    user: t,
    currentUser: l,
    guild: i
  } = e, {
    trackUserProfileAction: n
  } = (0, E.useUserProfileAnalyticsContext)(), c = (0, r.useStateFromStores)([d.default], () => d.default.getMember(i.id, t.id)), I = null == c ? void 0 : c.roles, _ = null == I || 0 === I.length, g = S.getHighestRole(i, l.id), [p] = (0, r.useStateFromStoresArray)([f.default], () => [f.default.can(v.Permissions.MANAGE_ROLES, i), null != i ? f.default.getGuildVersion(i.id) : null]), U = a.useCallback(e => {
    var l, s;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (s = null == I ? void 0 : I.filter(t => t !== e.id)) && void 0 !== s ? s : [];
    (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null ? o.default.unassignGuildRoleConnection(i.id, e.id) : u.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [I, i.id, t.id, n]), x = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let l = null != I ? I : []; - 1 === l.indexOf(e) && (l = l.concat([e])), u.default.updateMemberRoles(i.id, t.id, l, [e], [])
  }, [I, i.id, t.id, n]);
  return _ && !p ? null : (0, s.jsx)(m.default, {
    title: T.default.Messages.ROLES,
    children: (0, s.jsx)(A, {
      user: t,
      currentUser: l,
      guild: i,
      guildMember: c,
      userRoles: null != I ? I : [],
      highestRole: g,
      canManageRoles: p,
      onAddRole: x,
      onRemoveRole: U
    })
  })
}