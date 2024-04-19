"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
}), s("47120");
var l = s("735250"),
  a = s("470079"),
  i = s("153832"),
  o = s("924826"),
  r = s("442837"),
  n = s("481060"),
  u = s("749210"),
  d = s("412899"),
  c = s("434404"),
  f = s("430824"),
  S = s("496675"),
  m = s("700785"),
  E = s("785717"),
  I = s("981631"),
  v = s("689938"),
  x = s("198515");

function N(e) {
  let {
    user: t,
    currentUser: s,
    guild: N,
    userRoles: _
  } = e, {
    trackUserProfileAction: A
  } = (0, E.useUserProfileAnalyticsContext)(), T = m.getHighestRole(N, s.id), U = (0, r.useStateFromStores)([f.default], () => f.default.getRoles(N.id)), [h] = (0, r.useStateFromStoresArray)([S.default], () => [S.default.can(I.Permissions.MANAGE_ROLES, N), null != N ? S.default.getGuildVersion(N.id) : null]), p = a.useCallback(e => {
    var s;
    A({
      action: "REMOVE_ROLE"
    });
    let l = _.filter(t => t !== e.id);
    (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) === null ? u.default.unassignGuildRoleConnection(N.id, e.id) : c.default.updateMemberRoles(N.id, t.id, l, [], [e.id])
  }, [_, N.id, t.id, A]), j = a.useCallback(e => {
    A({
      action: "ADD_ROLE"
    });
    let s = _; - 1 === s.indexOf(e) && (s = s.concat([e])), c.default.updateMemberRoles(N.id, t.id, s, [e], [])
  }, [_, N.id, t.id, A]), g = a.useMemo(() => Object.values(U).filter(e => _.includes(e.id)).sort((e, t) => {
    var s, l;
    let a = (null === (s = e.tags) || void 0 === s ? void 0 : s.guild_connections) !== null,
      i = (null === (l = t.tags) || void 0 === l ? void 0 : l.guild_connections) !== null;
    return a && !i ? 1 : !a && i ? -1 : 0
  }), [U, _]), R = a.useMemo(() => "roles-".concat((0, i.v4)()), []), P = (0, o.default)({
    id: R,
    isEnabled: !0,
    scrollToStart: I.NOOP_PROMISE,
    scrollToEnd: I.NOOP_PROMISE,
    wrap: !0
  }), C = g.map(e => {
    var a;
    return (0, l.jsx)(d.MemberRole, {
      className: x.role,
      role: e,
      guildId: N.id,
      canRemove: h ? m.isRoleHigher(N, s.id, T, e) : (null === (a = e.tags) || void 0 === a ? void 0 : a.guild_connections) === null && t.id === s.id,
      onRemove: () => p(e),
      disableBorderColor: !0
    }, e.id)
  });
  return (0, l.jsx)(o.ListNavigatorProvider, {
    navigator: P,
    children: (0, l.jsx)(o.ListNavigatorContainer, {
      children: e => {
        let {
          ref: s,
          ...a
        } = e;
        return (0, l.jsxs)("div", {
          className: x.root,
          "aria-label": v.default.Messages.ROLES_LIST.format({
            numRoles: _.length
          }),
          ref: s,
          ...a,
          children: [C, h && (0, l.jsx)(n.Tooltip, {
            text: v.default.Messages.USER_PROFILE_ADD_ROLE,
            children: e => (0, l.jsx)("div", {
              ...e,
              children: (0, l.jsx)(d.OverflowAddRolesButton, {
                user: t,
                guild: N,
                userRoles: _,
                handleAddRole: j,
                addButtonClassName: x.addButton,
                addButtonIconClassName: x.addButtonIcon
              })
            })
          })]
        })
      }
    })
  })
}