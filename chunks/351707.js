"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
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
  I = s("785717"),
  E = s("314172"),
  v = s("192591"),
  _ = s("981631"),
  T = s("689938"),
  x = s("914672");

function A(e) {
  let {
    user: t,
    currentUser: s,
    guild: o,
    guildMember: d,
    userRoles: c,
    highestRole: S,
    canManageRoles: I,
    onAddRole: v,
    onRemoveRole: A
  } = e, N = (0, r.useStateFromStores)([f.default], () => f.default.getRoles(o.id)), U = a.useMemo(() => Object.values(N).filter(e => c.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [N, c]), g = a.useMemo(() => "roles-".concat((0, i.v4)()), []), C = (0, n.default)({
    id: g,
    isEnabled: !0,
    scrollToStart: _.NOOP_PROMISE,
    scrollToEnd: _.NOOP_PROMISE,
    wrap: !0
  }), h = U.map(e => {
    var a;
    return (0, l.jsx)(u.MemberRole, {
      className: x.role,
      role: e,
      guildId: o.id,
      canRemove: I ? m.isRoleHigher(o, s.id, S, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id,
      onRemove: () => A(e),
      disableBorderColor: !0
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
          className: x.root,
          "aria-label": 0 === c.length ? T.default.Messages.ROLE_LIST_EMPTY : T.default.Messages.ROLES_LIST.format({
            numRoles: c.length
          }),
          ref: t,
          ...s,
          children: [h, I && null != d && (0, l.jsx)(E.default, {
            guild: o,
            guildMember: d,
            highestRole: S,
            onAddRole: v,
            compact: c.length > 0
          })]
        })
      }
    })
  })
}

function N(e) {
  let {
    user: t,
    currentUser: s,
    guild: i
  } = e, {
    trackUserProfileAction: n
  } = (0, I.useUserProfileAnalyticsContext)(), u = (0, r.useStateFromStores)([c.default], () => c.default.getMember(i.id, t.id)), f = null == u ? void 0 : u.roles, E = null == f || 0 === f.length, x = m.getHighestRole(i, s.id), [N] = (0, r.useStateFromStoresArray)([S.default], () => [S.default.can(_.Permissions.MANAGE_ROLES, i), null != i ? S.default.getGuildVersion(i.id) : null]), U = a.useCallback(e => {
    var s, l;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (l = null == f ? void 0 : f.filter(t => t !== e.id)) && void 0 !== l ? l : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? o.default.unassignGuildRoleConnection(i.id, e.id) : d.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [f, i.id, t.id, n]), g = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let s = null != f ? f : []; - 1 === s.indexOf(e) && (s = s.concat([e])), d.default.updateMemberRoles(i.id, t.id, s, [e], [])
  }, [f, i.id, t.id, n]);
  return E && !N ? null : (0, l.jsx)(v.default, {
    title: T.default.Messages.ROLES,
    children: (0, l.jsx)(A, {
      user: t,
      currentUser: s,
      guild: i,
      guildMember: u,
      userRoles: null != f ? f : [],
      highestRole: x,
      canManageRoles: N,
      onAddRole: g,
      onRemoveRole: U
    })
  })
}