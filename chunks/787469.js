n.d(t, {
  Z: function() {
    return C
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(399606),
  o = n(481060),
  c = n(893966),
  u = n(472596),
  d = n(285173),
  h = n(430824),
  m = n(496675),
  p = n(776767),
  E = n(981631),
  g = n(689938),
  f = n(332513);

function C(e) {
  let {
    member: t
  } = e, n = (0, r.e7)([h.Z], () => h.Z.getGuild(t.guildId)), s = (0, r.e7)([h.Z], () => h.Z.getRoles(t.guildId)), C = i.useMemo(() => null == n ? [] : null == t.highestRoleId ? t.roles : t.roles.filter(e => null != e && e !== t.highestRoleId).sort((e, t) => {
    var n, l, i, a;
    return null !== (a = null !== (i = null === (n = s[t]) || void 0 === n ? void 0 : n.position) && void 0 !== i ? i : 0 - (null === (l = s[e]) || void 0 === l ? void 0 : l.position)) && void 0 !== a ? a : 0
  }), [t.roles, t.highestRoleId, n, s]), _ = (0, r.e7)([c.Z], () => c.Z.getEnhancedMember(t.guildId, t.userId), [t.guildId, t.userId]), I = (0, u.zq)(_), x = (0, u.qr)(t), T = (0, r.e7)([m.Z], () => m.Z.can(E.Plq.MANAGE_ROLES, n), [n]);
  return null == n ? null : (0, l.jsx)(o.FormItem, {
    title: g.Z.Messages.ROLES,
    titleClassName: f.infoTitle,
    children: (0, l.jsx)(p.WM, {
      children: (0, l.jsx)(p._2, {
        description: (0, l.jsxs)("div", {
          className: f.roleContainer,
          children: [(0, l.jsx)(o.Tooltip, {
            "aria-label": g.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
            tooltipContentClassName: f.__invalid_permissionTooltip,
            allowOverflow: !0,
            text: g.Z.Messages.GUILD_MEMBER_MOD_VIEW_HIGHEST_ROLE,
            children: e => {
              let {
                onMouseEnter: n,
                onMouseLeave: i
              } = e;
              return (0, l.jsx)(o.Clickable, {
                onMouseEnter: n,
                onMouseLeave: i,
                children: (0, l.jsx)(d.Z, {
                  className: a()(f.roleTooltipItem, f.highestRole),
                  role: I,
                  guildId: t.guildId
                })
              })
            }
          }), C.map(e => (0, l.jsx)(d.Z, {
            className: a()(f.roleTooltipItem),
            role: s[e],
            guildId: t.guildId
          }, e)), T && (0, l.jsx)(o.Tooltip, {
            "aria-label": g.Z.Messages.ADD_ROLE_A11Y_LABEL,
            tooltipContentClassName: f.__invalid_permissionTooltip,
            allowOverflow: !0,
            text: g.Z.Messages.ADD_ROLE_A11Y_LABEL,
            children: e => {
              let {
                onMouseEnter: t,
                onMouseLeave: n
              } = e;
              return (0, l.jsx)(o.Clickable, {
                className: a()(f.addRoleContainer),
                onClick: x,
                onMouseEnter: t,
                onMouseLeave: n,
                children: (0, l.jsx)(o.CirclePlusIcon, {
                  size: "custom",
                  color: "currentColor",
                  className: a()(f.addRoleIcon),
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