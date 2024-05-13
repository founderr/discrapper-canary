"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("153832"),
  n = s("924826"),
  r = s("442837"),
  o = s("749210"),
  u = s("412899"),
  d = s("434404"),
  c = s("271383"),
  f = s("430824"),
  S = s("496675"),
  m = s("700785"),
  E = s("785717"),
  I = s("314172"),
  v = s("192591"),
  _ = s("981631"),
  g = s("689938"),
  A = s("323353");

function T(e) {
  let {
    user: t,
    currentUser: s,
    guild: o,
    guildMember: d,
    userRoles: c,
    highestRole: S,
    canManageRoles: E,
    onAddRole: v,
    onRemoveRole: T
  } = e, x = (0, r.useStateFromStores)([f.default], () => f.default.getRoles(o.id)), N = a.useMemo(() => Object.values(x).filter(e => c.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [x, c]), U = E && null != d, C = a.useMemo(() => "roles-".concat((0, i.v4)()), []), h = (0, n.default)({
    id: C,
    isEnabled: !0,
    scrollToStart: _.NOOP_PROMISE,
    scrollToEnd: _.NOOP_PROMISE,
    wrap: !0
  }), p = N.length, R = 0 === p ? g.default.Messages.ROLE_LIST_EMPTY : g.default.Messages.ROLES_LIST.format({
    numRoles: p
  }), M = N.map(e => {
    var a;
    return (0, l.jsx)(u.MemberRole, {
      className: A.role,
      role: e,
      guildId: o.id,
      disableBorderColor: !0,
      onRemove: () => T(e),
      canRemove: E ? m.isRoleHigher(o, s.id, S, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id
    }, e.id)
  });
  return (0, l.jsx)(n.ListNavigatorProvider, {
    navigator: h,
    children: (0, l.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...s
        } = e;
        return (0, l.jsxs)("div", {
          className: A.root,
          "aria-label": R,
          ref: t,
          ...s,
          children: [M, U && (0, l.jsx)(I.default, {
            guild: o,
            guildMember: d,
            highestRole: S,
            onAddRole: v,
            compact: N.length > 0
          })]
        })
      }
    })
  })
}

function x(e) {
  let {
    user: t,
    currentUser: s,
    guild: i
  } = e, {
    trackUserProfileAction: n
  } = (0, E.useUserProfileAnalyticsContext)(), u = (0, r.useStateFromStores)([c.default], () => c.default.getMember(i.id, t.id)), f = null == u ? void 0 : u.roles, I = null == f || 0 === f.length, A = m.getHighestRole(i, s.id), [x] = (0, r.useStateFromStoresArray)([S.default], () => [S.default.can(_.Permissions.MANAGE_ROLES, i), null != i ? S.default.getGuildVersion(i.id) : null]), N = a.useCallback(e => {
    var s, l;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (l = null == f ? void 0 : f.filter(t => t !== e.id)) && void 0 !== l ? l : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? o.default.unassignGuildRoleConnection(i.id, e.id) : d.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [f, i.id, t.id, n]), U = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let s = null != f ? f : []; - 1 === s.indexOf(e) && (s = s.concat([e])), d.default.updateMemberRoles(i.id, t.id, s, [e], [])
  }, [f, i.id, t.id, n]);
  return I && !x ? null : (0, l.jsx)(v.default, {
    title: g.default.Messages.ROLES,
    children: (0, l.jsx)(T, {
      user: t,
      currentUser: s,
      guild: i,
      guildMember: u,
      userRoles: null != f ? f : [],
      highestRole: A,
      canManageRoles: x,
      onAddRole: U,
      onRemoveRole: N
    })
  })
}