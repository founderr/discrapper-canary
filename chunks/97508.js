"use strict";
l.r(t), l.d(t, {
  default: function() {
    return R
  }
});
var n = l("37983");
l("884691");
var u = l("509043"),
  i = l("446674"),
  r = l("77078"),
  o = l("206230"),
  d = l("454273"),
  a = l("130037"),
  s = l("592407"),
  c = l("26989"),
  f = l("305961"),
  M = l("957255"),
  O = l("449008"),
  h = l("49111"),
  E = l("782340"),
  p = l("235324");

function x(e, t) {
  var l, i;
  return (0, n.jsxs)("div", {
    className: p.roleRow,
    children: ["dot" === t ? (0, n.jsx)(r.RoleDot, {
      className: p.roleDot,
      color: null !== (l = e.colorString) && void 0 !== l ? l : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR),
      background: !1,
      tooltip: !1
    }) : (0, n.jsx)(r.RoleCircle, {
      className: p.roleDot,
      color: null !== (i = e.colorString) && void 0 !== i ? i : (0, u.int2hex)(h.DEFAULT_ROLE_COLOR)
    }), (0, n.jsx)("div", {
      children: e.name
    })]
  })
}

function R(e, t) {
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
    p = (0, i.useStateFromStores)([f.default], () => f.default.getGuild(t), [t]),
    R = (0, i.useStateFromStores)([o.default], () => o.default.roleStyle),
    _ = (0, a.useTrackModerationAction)(t, {
      location: u,
      targetUserId: e
    }),
    {
      userRoles: v,
      isGuildMember: m,
      canManageRoles: g
    } = (0, i.useStateFromStoresObject)([c.default, M.default], () => {
      let l = c.default.getMember(t, e);
      return {
        userRoles: null != l ? l.roles : [],
        isGuildMember: null != l,
        canManageRoles: null != p && M.default.can(h.Permissions.MANAGE_ROLES, p)
      }
    }, [e, t, p]);
  if (__OVERLAY__ || null == v || null == p || !m) return null;
  let S = M.default.getHighestRole(p),
    b = Object.values(p.roles).filter(e => !(0, d.isEveryoneRoleId)(p.id, e.id)),
    j = g ? b.map(l => {
      let u = l.managed || !M.default.isRoleHigher(p, S, l),
        i = -1 !== v.indexOf(l.id);
      return u && !i ? null : (0, n.jsx)(r.MenuCheckboxItem, {
        id: l.id,
        label: () => x(l, R),
        disabled: u,
        action: () => {
          var n;
          return n = l, void(v.includes(n.id) ? (s.default.updateMemberRoles(t, e, v.filter(e => e !== n.id), [], [n.id]), _(a.ModerationActionType.REMOVE_ROLE)) : (s.default.updateMemberRoles(t, e, v.concat([n.id]), [n.id], []), _(a.ModerationActionType.ADD_ROLE)))
        },
        checked: i
      }, l.id)
    }) : b.filter(e => -1 !== v.indexOf(e.id)).map(e => (0, d.isEveryoneRoleId)(p.id, e.id) ? null : (0, n.jsx)(r.MenuItem, {
      id: e.id,
      label: () => x(e, R)
    }, e.id));
  return 0 === j.filter(O.isNotNullish).length ? null : l ? j : (0, n.jsx)(r.MenuItem, {
    id: "roles",
    label: E.default.Messages.ROLES_LIST.format({
      numRoles: j.length
    }),
    children: j
  })
}