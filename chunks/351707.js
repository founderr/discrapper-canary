"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
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
  m = l("256226"),
  I = l("678738"),
  _ = l("314172"),
  v = l("981631"),
  g = l("689938"),
  T = l("323353");

function A(e) {
  let {
    user: t,
    currentUser: l,
    guild: o,
    guildMember: u,
    userRoles: d,
    highestRole: f,
    canManageRoles: E,
    onAddRole: I,
    onRemoveRole: A
  } = e, U = (0, r.useStateFromStores)([c.default], () => c.default.getRoles(o.id)), p = a.useMemo(() => Object.values(U).filter(e => d.includes(e.id)).sort((e, t) => {
    var l, s;
    let a = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
      i = (null === (s = t.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [U, d]), x = E && null != u, N = a.useMemo(() => "roles-".concat((0, i.v4)()), []), C = (0, n.default)({
    id: N,
    isEnabled: !0,
    scrollToStart: v.NOOP_PROMISE,
    scrollToEnd: v.NOOP_PROMISE,
    wrap: !0
  }), h = p.length, R = 0 === h ? g.default.Messages.ROLE_LIST_EMPTY : g.default.Messages.ROLES_LIST.format({
    numRoles: h
  }), P = p.map(e => {
    var a;
    return (0, s.jsx)(m.default, {
      role: e,
      guildId: o.id,
      disableBorderColor: !0,
      onRemove: () => A(e),
      canRemove: E ? S.isRoleHigher(o, l.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === l.id
    }, e.id)
  });
  return (0, s.jsx)(n.ListNavigatorProvider, {
    navigator: C,
    children: (0, s.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...l
        } = e;
        return (0, s.jsxs)("div", {
          className: T.root,
          "aria-label": R,
          ref: t,
          ...l,
          children: [P, x && (0, s.jsx)(_.default, {
            guild: o,
            guildMember: u,
            highestRole: f,
            onAddRole: I,
            compact: p.length > 0
          })]
        })
      }
    })
  })
}

function U(e) {
  let {
    user: t,
    currentUser: l,
    guild: i
  } = e, {
    trackUserProfileAction: n
  } = (0, E.useUserProfileAnalyticsContext)(), c = (0, r.useStateFromStores)([d.default], () => d.default.getMember(i.id, t.id)), m = null == c ? void 0 : c.roles, _ = null == m || 0 === m.length, T = S.getHighestRole(i, l.id), [U] = (0, r.useStateFromStoresArray)([f.default], () => [f.default.can(v.Permissions.MANAGE_ROLES, i), null != i ? f.default.getGuildVersion(i.id) : null]), p = a.useCallback(e => {
    var l, s;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (s = null == m ? void 0 : m.filter(t => t !== e.id)) && void 0 !== s ? s : [];
    (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null ? o.default.unassignGuildRoleConnection(i.id, e.id) : u.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [m, i.id, t.id, n]), x = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let l = null != m ? m : []; - 1 === l.indexOf(e) && (l = l.concat([e])), u.default.updateMemberRoles(i.id, t.id, l, [e], [])
  }, [m, i.id, t.id, n]);
  return _ && !U ? null : (0, s.jsx)(I.default, {
    title: g.default.Messages.ROLES,
    children: (0, s.jsx)(A, {
      user: t,
      currentUser: l,
      guild: i,
      guildMember: c,
      userRoles: null != m ? m : [],
      highestRole: T,
      canManageRoles: U,
      onAddRole: x,
      onRemoveRole: p
    })
  })
}