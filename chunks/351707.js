"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
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
  I = s("700785"),
  E = s("785717"),
  v = s("192591"),
  _ = s("981631"),
  x = s("689938"),
  T = s("914672");

function U(e) {
  let {
    user: t,
    currentUser: s,
    guild: u,
    userRoles: c,
    highestRole: f,
    canManageRoles: m,
    onAddRole: E,
    onRemoveRole: v
  } = e, U = (0, r.useStateFromStores)([S.default], () => S.default.getRoles(u.id)), A = a.useMemo(() => Object.values(U).filter(e => c.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [U, c]), N = a.useMemo(() => "roles-".concat((0, i.v4)()), []), g = (0, n.default)({
    id: N,
    isEnabled: !0,
    scrollToStart: _.NOOP_PROMISE,
    scrollToEnd: _.NOOP_PROMISE,
    wrap: !0
  }), C = A.map(e => {
    var a;
    return (0, l.jsx)(d.MemberRole, {
      className: T.role,
      role: e,
      guildId: u.id,
      canRemove: m ? I.isRoleHigher(u, s.id, f, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id,
      onRemove: () => v(e),
      disableBorderColor: !0
    }, e.id)
  });
  return (0, l.jsx)(n.ListNavigatorProvider, {
    navigator: g,
    children: (0, l.jsx)(n.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...a
        } = e;
        return (0, l.jsxs)("div", {
          className: T.root,
          "aria-label": 0 === c.length ? x.default.Messages.ROLE_LIST_EMPTY : x.default.Messages.ROLES_LIST.format({
            numRoles: c.length
          }),
          ref: s,
          ...a,
          children: [C, m && (0, l.jsx)(o.Tooltip, {
            text: x.default.Messages.USER_PROFILE_ADD_ROLE,
            children: e => (0, l.jsx)("div", {
              ...e,
              children: (0, l.jsx)(d.OverflowAddRolesButton, {
                user: t,
                guild: u,
                userRoles: null != c ? c : [],
                handleAddRole: E,
                addButtonClassName: T.addButton,
                addButtonIconClassName: T.addButtonIcon
              })
            })
          })]
        })
      }
    })
  })
}

function A(e) {
  let {
    user: t,
    currentUser: s,
    guild: i
  } = e, {
    trackUserProfileAction: n
  } = (0, E.useUserProfileAnalyticsContext)(), o = (0, r.useStateFromStores)([f.default], () => {
    var e;
    return null === (e = f.default.getMember(i.id, t.id)) || void 0 === e ? void 0 : e.roles
  }), d = null == o || 0 === o.length, S = I.getHighestRole(i, s.id), [T] = (0, r.useStateFromStoresArray)([m.default], () => [m.default.can(_.Permissions.MANAGE_ROLES, i), null != i ? m.default.getGuildVersion(i.id) : null]), A = a.useCallback(e => {
    var s, l;
    n({
      action: "REMOVE_ROLE"
    });
    let a = null !== (l = null == o ? void 0 : o.filter(t => t !== e.id)) && void 0 !== l ? l : [];
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? u.default.unassignGuildRoleConnection(i.id, e.id) : c.default.updateMemberRoles(i.id, t.id, a, [], [e.id])
  }, [o, i.id, t.id, n]), N = a.useCallback(e => {
    n({
      action: "ADD_ROLE"
    });
    let s = null != o ? o : []; - 1 === s.indexOf(e) && (s = s.concat([e])), c.default.updateMemberRoles(i.id, t.id, s, [e], [])
  }, [o, i.id, t.id, n]);
  return d && !T ? null : (0, l.jsx)(v.default, {
    title: x.default.Messages.ROLES,
    children: (0, l.jsx)(U, {
      user: t,
      currentUser: s,
      guild: i,
      userRoles: null != o ? o : [],
      highestRole: S,
      canManageRoles: T,
      onAddRole: N,
      onRemoveRole: A
    })
  })
}