"use strict";
l.r(t), l.d(t, {
  default: function() {
    return A
  }
}), l("47120");
var s = l("735250"),
  i = l("470079"),
  a = l("153832"),
  n = l("924826"),
  o = l("442837"),
  r = l("749210"),
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
  p = l("689938"),
  T = l("323353");

function g(e) {
  let {
    user: t,
    currentUser: l,
    guild: r,
    guildMember: u,
    userRoles: d,
    highestRole: f,
    canManageRoles: E,
    onAddRole: m,
    onRemoveRole: g
  } = e, A = (0, o.useStateFromStores)([c.default], () => c.default.getRoles(r.id)), x = i.useMemo(() => Object.values(A).filter(e => d.includes(e.id)).sort((e, t) => {
    var l, s;
    let i = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
      a = (null === (s = t.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
    return i && !a ? 1 : !i && a ? -1 : 0
  }), [A, d]), N = E && null != u, C = i.useMemo(() => "roles-".concat((0, a.v4)()), []), U = (0, n.default)({
    id: C,
    isEnabled: !0,
    scrollToStart: v.NOOP_PROMISE,
    scrollToEnd: v.NOOP_PROMISE,
    wrap: !0
  }), h = x.length, P = 0 === h ? p.default.Messages.ROLE_LIST_EMPTY : p.default.Messages.ROLES_LIST.format({
    numRoles: h
  }), R = x.map(e => {
    var i;
    return (0, s.jsx)(I.default, {
      role: e,
      guildId: r.id,
      disableBorderColor: !0,
      onRemove: () => g(e),
      canRemove: E ? S.isRoleHigher(r, l.id, f, e) : (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null && t.id === l.id
    }, e.id)
  });
  return (0, s.jsx)(n.ListNavigatorProvider, {
    navigator: U,
    children: (0, s.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: t,
          ...l
        } = e;
        return (0, s.jsxs)("div", {
          className: T.root,
          "aria-label": P,
          ref: t,
          ...l,
          children: [R, N && (0, s.jsx)(_.default, {
            guild: r,
            guildMember: u,
            highestRole: f,
            onAddRole: m,
            compact: x.length > 0
          })]
        })
      }
    })
  })
}

function A(e) {
  let {
    user: t,
    currentUser: l,
    guild: a
  } = e, {
    trackUserProfileAction: n
  } = (0, E.useUserProfileAnalyticsContext)(), c = (0, o.useStateFromStores)([d.default], () => d.default.getMember(a.id, t.id)), I = null == c ? void 0 : c.roles, _ = null == I || 0 === I.length, T = S.getHighestRole(a, l.id), [A] = (0, o.useStateFromStoresArray)([f.default], () => [f.default.can(v.Permissions.MANAGE_ROLES, a), null != a ? f.default.getGuildVersion(a.id) : null]), x = i.useCallback(e => {
    var l, s;
    n({
      action: "REMOVE_ROLE"
    });
    let i = null !== (s = null == I ? void 0 : I.filter(t => t !== e.id)) && void 0 !== s ? s : [];
    (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null ? r.default.unassignGuildRoleConnection(a.id, e.id) : u.default.updateMemberRoles(a.id, t.id, i, [], [e.id])
  }, [I, a.id, t.id, n]), N = i.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let l = null != I ? I : []; - 1 === l.indexOf(e) && (l = l.concat([e])), u.default.updateMemberRoles(a.id, t.id, l, [e], [])
  }, [I, a.id, t.id, n]);
  return _ && !A ? null : (0, s.jsx)(m.default, {
    title: p.default.Messages.ROLES,
    children: (0, s.jsx)(g, {
      user: t,
      currentUser: l,
      guild: a,
      guildMember: c,
      userRoles: null != I ? I : [],
      highestRole: T,
      canManageRoles: A,
      onAddRole: N,
      onRemoveRole: x
    })
  })
}