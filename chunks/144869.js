"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
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
  I = s("785717"),
  E = s("981631"),
  x = s("689938"),
  A = s("609005");

function _(e) {
  let {
    user: t,
    currentUser: s,
    guild: u,
    userRoles: c,
    highestRole: f,
    canManageRoles: m,
    onAddRole: I,
    onRemoveRole: _
  } = e, T = (0, r.useStateFromStores)([S.default], () => S.default.getRoles(u.id)), N = a.useMemo(() => Object.values(T).filter(e => c.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [T, c]), U = a.useMemo(() => "roles-".concat((0, i.v4)()), []), C = (0, n.default)({
    id: U,
    isEnabled: !0,
    scrollToStart: E.NOOP_PROMISE,
    scrollToEnd: E.NOOP_PROMISE,
    wrap: !0
  }), g = N.map(e => {
    var a;
    return (0, l.jsx)(d.MemberRole, {
      className: A.role,
      role: e,
      guildId: u.id,
      canRemove: m ? v.isRoleHigher(u, s.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id,
      onRemove: () => _(e),
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
          className: A.root,
          "aria-label": 0 === c.length ? x.default.Messages.ROLE_LIST_EMPTY : x.default.Messages.ROLES_LIST.format({
            numRoles: c.length
          }),
          ref: s,
          ...a,
          children: [g, m && (0, l.jsx)(o.Tooltip, {
            text: x.default.Messages.USER_PROFILE_ADD_ROLE,
            children: e => (0, l.jsx)("div", {
              ...e,
              children: (0, l.jsx)(d.OverflowAddRolesButton, {
                user: t,
                guild: u,
                userRoles: null != c ? c : [],
                handleAddRole: I,
                addButtonClassName: A.addButton,
                addButtonIconClassName: A.addButtonIcon
              })
            })
          })]
        })
      }
    })
  })
}

function T(e) {
  let {
    user: t,
    currentUser: s,
    guild: i
  } = e, {
    trackUserProfileAction: n
  } = (0, I.useUserProfileAnalyticsContext)(), o = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getMember(i.id, t.id)) || void 0 === e ? void 0 : e.roles
  }), d = v.getHighestRole(i, s.id), [S] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.can(E.Permissions.MANAGE_ROLES, i), null != i ? m.default.getGuildVersion(i.id) : null]), x = a.useCallback(e => {
    var s, l;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (l = null == o ? void 0 : o.filter(t => t !== e.id)) && void 0 !== l ? l : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? u.default.unassignGuildRoleConnection(i.id, e.id) : c.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [o, i.id, t.id, n]), A = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let s = null != o ? o : []; - 1 === s.indexOf(e) && (s = s.concat([e])), c.default.updateMemberRoles(i.id, t.id, s, [e], [])
  }, [o, i.id, t.id, n]);
  return (0, l.jsx)(_, {
    user: t,
    currentUser: s,
    guild: i,
    userRoles: null != o ? o : [],
    highestRole: d,
    canManageRoles: S,
    onAddRole: A,
    onRemoveRole: x
  })
}