"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
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
  I = l("785717"),
  E = l("256226"),
  m = l("678738"),
  v = l("314172"),
  _ = l("981631"),
  T = l("689938"),
  p = l("323353");

function x(e) {
  let {
    user: t,
    currentUser: l,
    guild: r,
    guildMember: u,
    userRoles: d,
    highestRole: f,
    canManageRoles: I,
    onAddRole: m,
    onRemoveRole: x
  } = e, g = (0, o.useStateFromStores)([c.default], () => c.default.getRoles(r.id)), N = i.useMemo(() => Object.values(g).filter(e => d.includes(e.id)).sort((e, t) => {
    var l, s;
    let i = (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) !== null,
      a = (null === (s = t.tags) || void 0 === s ? void 0 : s.guild_connections) !== null;
    return i && !a ? 1 : !i && a ? -1 : 0
  }), [g, d]), C = I && null != u, A = i.useMemo(() => "roles-".concat((0, a.v4)()), []), U = (0, n.default)({
    id: A,
    isEnabled: !0,
    scrollToStart: _.NOOP_PROMISE,
    scrollToEnd: _.NOOP_PROMISE,
    wrap: !0
  }), P = N.length, h = 0 === P ? T.default.Messages.ROLE_LIST_EMPTY : T.default.Messages.ROLES_LIST.format({
    numRoles: P
  }), R = N.map(e => {
    var i;
    return (0, s.jsx)(E.default, {
      role: e,
      guildId: r.id,
      disableBorderColor: !0,
      onRemove: () => x(e),
      canRemove: I ? S.isRoleHigher(r, l.id, f, e) : (null === (i = e.tags) || void 0 === i ? void 0 : i.guild_connections) === null && t.id === l.id
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
          className: p.root,
          "aria-label": h,
          ref: t,
          ...l,
          children: [R, C && (0, s.jsx)(v.default, {
            variant: N.length > 0 ? "icon" : "text",
            guild: r,
            guildMember: u,
            highestRole: f,
            onAddRole: m
          })]
        })
      }
    })
  })
}

function g(e) {
  let {
    user: t,
    currentUser: l,
    guild: a,
    scrollIntoView: n
  } = e, {
    trackUserProfileAction: c
  } = (0, I.useUserProfileAnalyticsContext)(), E = (0, o.useStateFromStores)([d.default], () => d.default.getMember(a.id, t.id)), v = null == E ? void 0 : E.roles, p = null == v || 0 === v.length, g = S.getHighestRole(a, l.id), [N] = (0, o.useStateFromStoresArray)([f.default], () => [f.default.can(_.Permissions.MANAGE_ROLES, a), null != a ? f.default.getGuildVersion(a.id) : null]), C = i.useCallback(e => {
    var l, s;
    c({
      action: "REMOVE_ROLE"
    });
    let i = null !== (s = null == v ? void 0 : v.filter(t => t !== e.id)) && void 0 !== s ? s : [];
    (null === (l = e.tags) || void 0 === l ? void 0 : l.guild_connections) === null ? r.default.unassignGuildRoleConnection(a.id, e.id) : u.default.updateMemberRoles(a.id, t.id, i, [], [e.id])
  }, [v, a.id, t.id, c]), A = i.useCallback(e => {
    c({
      action: "ADD_ROLE"
    });
    let l = null != v ? v : []; - 1 === l.indexOf(e) && (l = l.concat([e])), u.default.updateMemberRoles(a.id, t.id, l, [e], [])
  }, [v, a.id, t.id, c]);
  return p && !N ? null : (0, s.jsx)(m.default, {
    title: T.default.Messages.ROLES,
    scrollIntoView: n,
    children: (0, s.jsx)(x, {
      user: t,
      currentUser: l,
      guild: a,
      guildMember: E,
      userRoles: null != v ? v : [],
      highestRole: g,
      canManageRoles: N,
      onAddRole: A,
      onRemoveRole: C
    })
  })
}