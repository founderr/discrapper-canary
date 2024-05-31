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
  u = s("434404"),
  d = s("271383"),
  c = s("430824"),
  f = s("496675"),
  S = s("700785"),
  E = s("785717"),
  m = s("256226"),
  I = s("314172"),
  _ = s("192591"),
  v = s("981631"),
  g = s("689938"),
  T = s("323353");

function A(e) {
  let {
    user: t,
    currentUser: s,
    guild: o,
    guildMember: u,
    userRoles: d,
    highestRole: f,
    canManageRoles: E,
    onAddRole: _,
    onRemoveRole: A
  } = e, x = (0, r.useStateFromStores)([c.default], () => c.default.getRoles(o.id)), U = a.useMemo(() => Object.values(x).filter(e => d.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [x, d]), p = E && null != u, N = a.useMemo(() => "roles-".concat((0, i.v4)()), []), C = (0, n.default)({
    id: N,
    isEnabled: !0,
    scrollToStart: v.NOOP_PROMISE,
    scrollToEnd: v.NOOP_PROMISE,
    wrap: !0
  }), h = U.length, R = 0 === h ? g.default.Messages.ROLE_LIST_EMPTY : g.default.Messages.ROLES_LIST.format({
    numRoles: h
  }), P = U.map(e => {
    var a;
    return (0, l.jsx)(m.default, {
      role: e,
      guildId: o.id,
      disableBorderColor: !0,
      onRemove: () => A(e),
      canRemove: E ? S.isRoleHigher(o, s.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id
    }, e.id)
  });
  return (0, l.jsx)(n.ListNavigatorProvider, {
    navigator: C,
    children: (0, l.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...s
        } = e;
        return (0, l.jsxs)("div", {
          className: T.root,
          "aria-label": R,
          ref: t,
          ...s,
          children: [P, p && (0, l.jsx)(I.default, {
            guild: o,
            guildMember: u,
            highestRole: f,
            onAddRole: _,
            compact: U.length > 0
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
  } = (0, E.useUserProfileAnalyticsContext)(), c = (0, r.useStateFromStores)([d.default], () => d.default.getMember(i.id, t.id)), m = null == c ? void 0 : c.roles, I = null == m || 0 === m.length, T = S.getHighestRole(i, s.id), [x] = (0, r.useStateFromStoresArray)([f.default], () => [f.default.can(v.Permissions.MANAGE_ROLES, i), null != i ? f.default.getGuildVersion(i.id) : null]), U = a.useCallback(e => {
    var s, l;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (l = null == m ? void 0 : m.filter(t => t !== e.id)) && void 0 !== l ? l : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? o.default.unassignGuildRoleConnection(i.id, e.id) : u.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [m, i.id, t.id, n]), p = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let s = null != m ? m : []; - 1 === s.indexOf(e) && (s = s.concat([e])), u.default.updateMemberRoles(i.id, t.id, s, [e], [])
  }, [m, i.id, t.id, n]);
  return I && !x ? null : (0, l.jsx)(_.default, {
    title: g.default.Messages.ROLES,
    children: (0, l.jsx)(A, {
      user: t,
      currentUser: s,
      guild: i,
      guildMember: c,
      userRoles: null != m ? m : [],
      highestRole: T,
      canManageRoles: x,
      onAddRole: p,
      onRemoveRole: U
    })
  })
}