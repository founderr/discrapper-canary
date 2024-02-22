"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  o = n("748802"),
  u = n("77078"),
  d = n("412013"),
  c = n("978970"),
  f = n("305961"),
  h = n("465305"),
  m = n("136281"),
  p = n("914275"),
  E = n("789150"),
  g = n("49111"),
  S = n("782340"),
  C = n("206845");

function _(e) {
  var t, n;
  let {
    permission: a,
    roleIds: s,
    guild: r,
    specMap: o
  } = e, f = g.Permissions[a], h = null !== (n = null === (t = o[f.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, c.getPermissionName)(f), m = p.ELEVATED_PERMISSIONS.has(f);
  return (0, l.jsx)(u.Tooltip, {
    "aria-label": S.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
    tooltipClassName: C.roleTooltipContainer,
    tooltipContentClassName: C.roleTooltipContentContainer,
    allowOverflow: !0,
    text: (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: m ? S.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : S.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
      }), s.map(e => (0, l.jsx)("div", {
        className: i(C.roleTooltipItem),
        children: (0, l.jsx)(d.default, {
          role: r.getRole(e),
          guildId: r.id
        })
      }, e))]
    }),
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, l.jsx)(u.Clickable, {
        className: i(C.permissionChiplet, {
          [C.elevatedPermission]: m
        }),
        onMouseEnter: t,
        onMouseLeave: n,
        children: (0, l.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: m ? "text-danger" : "text-normal",
          children: h
        })
      })
    }
  })
}
var I = a.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, s = (0, r.default)([f.default], () => f.default.getGuild(t.guildId), [t.guildId]), d = (0, p.useUserPermissionsAndRoles)(t.userId, t.guildId, p.MOD_PERMISSIONS), c = (0, p.useUserPermissionsAndRoles)(t.userId, t.guildId, p.ALL_PERMISSIONS), I = Object.keys(d).length, T = Object.keys(c).length, v = a.useMemo(() => null != s ? h.default.getGuildPermissionSpecMap(s) : null, [s]), x = a.useMemo(() => null != s ? h.default.generateGuildPermissionSpec(s) : null, [s]), N = a.useMemo(() => {
    if (null == s || null == v) return null;
    if (0 === I) return (0, l.jsx)("div", {
      className: i(C.permissionChiplet, C.noModPerms),
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == x || x.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          a = p.ALL_PERMISSIONS.find(e => g.Permissions[e] === n);
        if (null == a) return;
        let i = d[a];
        null != i && e.push((0, l.jsx)(_, {
          permission: a,
          roleIds: i,
          guild: s,
          specMap: v
        }, a))
      })
    }), e
  }, [s, I, d, x, v]);
  return null == s ? null : (0, l.jsx)(u.FormItem, {
    title: (0, l.jsxs)("div", {
      className: C.headerContainer,
      children: [(0, l.jsx)(u.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
      }), (0, l.jsxs)(u.Clickable, {
        className: C.viewAllPermissions,
        onClick: () => n(E.ModViewPanel.PERMISSIONS),
        children: [(0, l.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({
            count: T
          })
        }), (0, l.jsx)(o.ChevronSmallRightIcon, {
          width: 16,
          height: 16
        })]
      })]
    }),
    titleClassName: C.infoTitle,
    children: (0, l.jsx)(m.UserModInfoItemContainer, {
      children: (0, l.jsx)(m.UserModInfoItem, {
        description: (0, l.jsx)("div", {
          className: C.permissionsContainer,
          children: N
        })
      })
    })
  })
})