"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
});
var l = a("735250");
a("470079");
var n = a("866442"),
  u = a("442837"),
  s = a("481060"),
  d = a("607070"),
  r = a("605436"),
  i = a("910693"),
  o = a("434404"),
  f = a("271383"),
  c = a("430824"),
  m = a("496675"),
  M = a("823379"),
  E = a("981631"),
  S = a("689938"),
  _ = a("139877");

function g(e, t) {
  var a, u;
  return (0, l.jsxs)("div", {
    className: _.roleRow,
    children: ["dot" === t ? (0, l.jsx)(s.RoleDot, {
      className: _.roleDot,
      color: null !== (a = e.colorString) && void 0 !== a ? a : (0, n.int2hex)(E.DEFAULT_ROLE_COLOR),
      background: !1,
      tooltip: !1
    }) : (0, l.jsx)(s.RoleCircle, {
      className: _.roleDot,
      color: null !== (u = e.colorString) && void 0 !== u ? u : (0, n.int2hex)(E.DEFAULT_ROLE_COLOR)
    }), (0, l.jsx)("div", {
      children: e.name
    })]
  })
}

function I(e, t) {
  let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    _ = (0, u.useStateFromStores)([c.default], () => c.default.getGuild(t)),
    I = (0, u.useStateFromStores)([c.default], () => c.default.getRoles(t)),
    C = (0, u.useStateFromStores)([d.default], () => d.default.roleStyle),
    R = (0, i.useTrackModerationAction)(t, {
      location: n,
      targetUserId: e
    }),
    {
      userRoles: N,
      isGuildMember: A,
      canManageRoles: T
    } = (0, u.useStateFromStoresObject)([f.default, m.default], () => {
      let a = f.default.getMember(t, e);
      return {
        userRoles: null != a ? a.roles : [],
        isGuildMember: null != a,
        canManageRoles: null != _ && m.default.can(E.Permissions.MANAGE_ROLES, _)
      }
    }, [e, t, _]);
  if (__OVERLAY__ || null == N || null == _ || !A) return null;
  let v = m.default.getHighestRole(_),
    O = Object.values(I).filter(e => !(0, r.isEveryoneRoleId)(_.id, e.id)),
    h = T ? O.map(a => {
      let n = a.managed || !m.default.isRoleHigher(_, v, a),
        u = -1 !== N.indexOf(a.id);
      return n && !u ? null : (0, l.jsx)(s.MenuCheckboxItem, {
        id: a.id,
        label: () => g(a, C),
        disabled: n,
        action: () => {
          var l;
          return l = a, void(N.includes(l.id) ? (o.default.updateMemberRoles(t, e, N.filter(e => e !== l.id), [], [l.id]), R(i.ModerationActionType.REMOVE_ROLE)) : (o.default.updateMemberRoles(t, e, N.concat([l.id]), [l.id], []), R(i.ModerationActionType.ADD_ROLE)))
        },
        checked: u
      }, a.id)
    }) : O.filter(e => -1 !== N.indexOf(e.id)).map(e => (0, r.isEveryoneRoleId)(_.id, e.id) ? null : (0, l.jsx)(s.MenuItem, {
      id: e.id,
      label: () => g(e, C)
    }, e.id));
  return 0 === h.filter(M.isNotNullish).length ? null : a ? h : (0, l.jsx)(s.MenuItem, {
    id: "roles",
    label: S.default.Messages.ROLES_LIST.format({
      numRoles: h.length
    }),
    children: h
  })
}