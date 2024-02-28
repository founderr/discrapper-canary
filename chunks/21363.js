"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  u = n("77078"),
  o = n("178406"),
  d = n("553275"),
  c = n("412013"),
  f = n("305961"),
  h = n("957255"),
  m = n("351825"),
  p = n("136281"),
  E = n("49111"),
  g = n("782340"),
  S = n("865331");

function C(e) {
  let {
    member: t
  } = e, n = (0, r.default)([f.default], () => f.default.getGuild(t.guildId), [t.guildId]), s = a.useMemo(() => {
    var e;
    if (null == n) return [];
    let l = null !== (e = null == n ? void 0 : n.roles) && void 0 !== e ? e : {};
    return null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
      var n, a, s, i;
      return null !== (i = null !== (s = null === (n = l[t]) || void 0 === n ? void 0 : n.position) && void 0 !== s ? s : 0 - (null === (a = l[e]) || void 0 === a ? void 0 : a.position)) && void 0 !== i ? i : 0
    })
  }, [t.roles, t.highestRoleId, n]), C = (0, r.default)([o.default], () => o.default.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), _ = (0, d.useHighestRole)(C), I = (0, d.useContextMenuModerateRoles)(t), T = (0, r.default)([h.default], () => h.default.can(E.Permissions.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, l.jsx)(u.FormItem, {
    title: g.default.Messages.ROLES,
    titleClassName: S.infoTitle,
    children: (0, l.jsx)(p.UserModInfoItemContainer, {
      children: (0, l.jsx)(p.UserModInfoItem, {
        description: (0, l.jsxs)("div", {
          className: S.roleContainer,
          children: [(0, l.jsx)(u.Tooltip, {
            "aria-label": g.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
            tooltipContentClassName: S.permissionTooltip,
            allowOverflow: !0,
            text: g.default.Messages.GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE,
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: a
              } = e;
              return (0, l.jsx)(u.Clickable, {
                onMouseEnter: n,
                onMouseLeave: a,
                children: (0, l.jsx)(c.default, {
                  className: i(S.roleTooltipItem, S.highestRole),
                  role: _,
                  guildId: t.guildId
                })
              })
            }
          }), s.map(e => (0, l.jsx)(c.default, {
            className: i(S.roleTooltipItem),
            role: n.roles[e],
            guildId: t.guildId
          }, e)), T && (0, l.jsx)(u.Tooltip, {
            "aria-label": g.default.Messages.ADD_ROLE_A11Y_LABEL,
            tooltipContentClassName: S.permissionTooltip,
            allowOverflow: !0,
            text: g.default.Messages.ADD_ROLE_A11Y_LABEL,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, l.jsx)(u.Clickable, {
                className: i(S.addRoleContainer),
                onClick: I,
                onMouseEnter: t,
                onMouseLeave: n,
                children: (0, l.jsx)(m.default, {
                  className: i(S.addRoleIcon),
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