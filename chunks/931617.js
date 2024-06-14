"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
});
var a = l("735250");
l("470079");
var u = l("866442"),
  n = l("442837"),
  s = l("481060"),
  d = l("607070"),
  r = l("605436"),
  i = l("910693"),
  o = l("434404"),
  f = l("271383"),
  c = l("430824"),
  E = l("496675"),
  M = l("823379"),
  S = l("981631"),
  m = l("689938"),
  _ = l("550825");

function g(e, t) {
  var l, n;
  return (0, a.jsxs)("div", {
    className: _.roleRow,
    children: ["dot" === t ? (0, a.jsx)(s.RoleDot, {
      className: _.roleDot,
      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, u.int2hex)(S.DEFAULT_ROLE_COLOR),
      background: !1,
      tooltip: !1
    }) : (0, a.jsx)(s.RoleCircle, {
      className: _.roleDot,
      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, u.int2hex)(S.DEFAULT_ROLE_COLOR)
    }), (0, a.jsx)("div", {
      children: e.name
    })]
  })
}

function R(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    _ = (0, n.useStateFromStores)([c.default], () => c.default.getGuild(t)),
    R = (0, n.useStateFromStores)([c.default], () => c.default.getRoles(t)),
    C = (0, n.useStateFromStores)([d.default], () => d.default.roleStyle),
    A = (0, i.useTrackModerationAction)(t, {
      location: u,
      targetUserId: e
    }),
    {
      userRoles: N,
      isGuildMember: O,
      canManageRoles: h
    } = (0, n.useStateFromStoresObject)([f.default, E.default], () => {
      let l = f.default.getMember(t, e);
      return {
        userRoles: null != l ? l.roles : [],
        isGuildMember: null != l,
        canManageRoles: null != _ && E.default.can(S.Permissions.MANAGE_ROLES, _)
      }
    }, [e, t, _]);
  if (__OVERLAY__ || null == N || null == _ || !O) return null;
  let p = E.default.getHighestRole(_),
    I = Object.values(R).filter(e => !(0, r.isEveryoneRoleId)(_.id, e.id)),
    T = h ? I.map(l => {
      let u = l.managed || !E.default.isRoleHigher(_, p, l),
        n = -1 !== N.indexOf(l.id);
      return u && !n ? null : (0, a.jsx)(s.MenuCheckboxItem, {
        id: l.id,
        label: () => g(l, C),
        disabled: u,
        action: () => {
          var a;
          return a = l, void(N.includes(a.id) ? (o.default.updateMemberRoles(t, e, N.filter(e => e !== a.id), [], [a.id]), A(i.ModerationActionType.REMOVE_ROLE)) : (o.default.updateMemberRoles(t, e, N.concat([a.id]), [a.id], []), A(i.ModerationActionType.ADD_ROLE)))
        },
        checked: n
      }, l.id)
    }) : I.filter(e => -1 !== N.indexOf(e.id)).map(e => (0, r.isEveryoneRoleId)(_.id, e.id) ? null : (0, a.jsx)(s.MenuItem, {
      id: e.id,
      label: () => g(e, C)
    }, e.id));
  return 0 === T.filter(M.isNotNullish).length ? null : l ? T : (0, a.jsx)(s.MenuItem, {
    id: "roles",
    label: m.default.Messages.ROLES_LIST.format({
      numRoles: T.length
    }),
    children: T
  })
}