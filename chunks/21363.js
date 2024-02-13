"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  o = n("77078"),
  u = n("178406"),
  d = n("553275"),
  c = n("412013"),
  f = n("305961"),
  h = n("957255"),
  m = n("351825"),
  p = n("136281"),
  E = n("49111"),
  S = n("782340"),
  g = n("63893");

function C(e) {
  let {
    member: t
  } = e, n = (0, r.default)([f.default], () => f.default.getGuild(t.guildId), [t.guildId]), s = l.useMemo(() => {
    var e;
    if (null == n) return [];
    let a = null !== (e = null == n ? void 0 : n.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var n, l, s, i;
      return null !== (i = null !== (s = null === (n = a[t]) || void 0 === n ? void 0 : n.position) && void 0 !== s ? s : 0 - (null === (l = a[e]) || void 0 === l ? void 0 : l.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, n]), C = (0, r.default)([u.default], () => u.default.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), _ = (0, d.useHighestRole)(C), I = (0, d.useContextMenuModerateRoles)(t), T = (0, r.default)([h.default], () => h.default.can(E.Permissions.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, a.jsx)(o.FormItem, {
    title: S.default.Messages.ROLES,
    titleClassName: g.infoTitle,
    children: (0, a.jsx)(p.UserModInfoItemContainer, {
      children: (0, a.jsx)(p.UserModInfoItem, {
        description: (0, a.jsxs)("div", {
          className: g.roleContainer,
          children: [(0, a.jsx)(o.Tooltip, {
            "aria-label": S.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
            tooltipContentClassName: g.permissionTooltip,
            allowOverflow: !0,
            text: S.default.Messages.GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE,
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: l
              } = e;
              return (0, a.jsx)(o.Clickable, {
                onMouseEnter: n,
                onMouseLeave: l,
                children: (0, a.jsx)(c.default, {
                  className: i(g.roleTooltipItem, g.highestRole),
                  role: _,
                  guildId: t.guildId
                })
              })
            }
          }), s.map(e => (0, a.jsx)(c.default, {
            className: i(g.roleTooltipItem),
            role: n.roles[e],
            guildId: t.guildId
          }, e)), T && (0, a.jsx)(o.Tooltip, {
            "aria-label": S.default.Messages.ADD_ROLE_A11Y_LABEL,
            tooltipContentClassName: g.permissionTooltip,
            allowOverflow: !0,
            text: S.default.Messages.ADD_ROLE_A11Y_LABEL,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, a.jsx)(o.Clickable, {
                className: i(g.addRoleContainer),
                onClick: I,
                onMouseEnter: t,
                onMouseLeave: n,
                children: (0, a.jsx)(m.default, {
                  className: i(g.addRoleIcon),
                  width: 20,
                  height: 20
                })
              })
            }
          })]
        })
      })
    })
  })
}