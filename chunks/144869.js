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
  o = s("481060"),
  u = s("749210"),
  d = s("412899"),
  c = s("434404"),
  f = s("271383"),
  S = s("430824"),
  m = s("496675"),
  v = s("700785"),
  E = s("785717"),
  I = s("981631"),
  x = s("689938"),
  _ = s("609005");

function A(e) {
  let {
    user: t,
    currentUser: s,
    guild: u,
    userRoles: c,
    canManageRoles: f,
    onAddRole: m,
    onRemoveRole: E
  } = e, A = (0, r.useStateFromStores)([S.default], () => S.default.getRoles(u.id)), N = v.getHighestRole(u, s.id), T = a.useMemo(() => Object.values(A).filter(e => c.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [A, c]), U = a.useMemo(() => "roles-".concat((0, i.v4)()), []), C = (0, n.default)({
    id: U,
    isEnabled: !0,
    scrollToStart: I.NOOP_PROMISE,
    scrollToEnd: I.NOOP_PROMISE,
    wrap: !0
  }), g = T.map(e => {
    var a;
    return (0, l.jsx)(d.MemberRole, {
      className: _.role,
      role: e,
      guildId: u.id,
      canRemove: f ? v.isRoleHigher(u, s.id, N, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id,
      onRemove: () => E(e),
      disableBorderColor: !0
    }, e.id)
  });
  return (0, l.jsx)(n.ListNavigatorProvider, {
    navigator: C,
    children: (0, l.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...a
        } = e;
        return (0, l.jsxs)("div", {
          className: _.root,
          "aria-label": 0 === c.length ? x.default.Messages.ROLE_LIST_EMPTY : x.default.Messages.ROLES_LIST.format({
            numRoles: c.length
          }),
          ref: s,
          ...a,
          children: [g, f && (0, l.jsx)(o.Tooltip, {
            text: x.default.Messages.USER_PROFILE_ADD_ROLE,
            children: e => (0, l.jsx)("div", {
              ...e,
              children: (0, l.jsx)(d.OverflowAddRolesButton, {
                user: t,
                guild: u,
                userRoles: null != c ? c : [],
                handleAddRole: m,
                addButtonClassName: _.addButton,
                addButtonIconClassName: _.addButtonIcon
              })
            })
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
  } = (0, E.useUserProfileAnalyticsContext)(), o = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getMember(i.id, t.id)) || void 0 === e ? void 0 : e.roles
  }), [d] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.can(I.Permissions.MANAGE_ROLES, i), null != i ? m.default.getGuildVersion(i.id) : null]), S = a.useCallback(e => {
    var s, l;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (l = null == o ? void 0 : o.filter(t => t !== e.id)) && void 0 !== l ? l : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? u.default.unassignGuildRoleConnection(i.id, e.id) : c.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [o, i.id, t.id, n]), v = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let s = null != o ? o : []; - 1 === s.indexOf(e) && (s = s.concat([e])), c.default.updateMemberRoles(i.id, t.id, s, [e], [])
  }, [o, i.id, t.id, n]);
  return (0, l.jsx)(A, {
    user: t,
    currentUser: s,
    guild: i,
    userRoles: null != o ? o : [],
    canManageRoles: d,
    onAddRole: v,
    onRemoveRole: S
  })
}