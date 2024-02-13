"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
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
  C = n("104687");

function _(e) {
  var t, n;
  let {
    permission: l,
    roleIds: s,
    guild: r,
    specMap: o
  } = e, f = g.Permissions[l], h = null !== (n = null === (t = o[f.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, c.getPermissionName)(f), m = p.ELEVATED_PERMISSIONS.has(f);
  return (0, a.jsx)(u.Tooltip, {
    "aria-label": S.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
    tooltipClassName: C.roleTooltipContainer,
    tooltipContentClassName: C.roleTooltipContentContainer,
    allowOverflow: !0,
    text: (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: m ? S.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : S.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
      }), s.map(e => (0, a.jsx)("div", {
        className: i(C.roleTooltipItem),
        children: (0, a.jsx)(d.default, {
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
      return (0, a.jsx)(u.Clickable, {
        className: i(C.permissionChiplet, {
          [C.elevatedPermission]: m
        }),
        onMouseEnter: t,
        onMouseLeave: n,
        children: (0, a.jsx)(u.Text, {
          variant: "text-xs/medium",
          color: m ? "text-danger" : "text-normal",
          children: h
        })
      })
    }
  })
}
var I = l.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, s = (0, r.default)([f.default], () => f.default.getGuild(t.guildId), [t.guildId]), d = (0, p.useUserPermissionsAndRoles)(t.userId, t.guildId, p.MOD_PERMISSIONS), c = (0, p.useUserPermissionsAndRoles)(t.userId, t.guildId, p.ALL_PERMISSIONS), I = Object.keys(d).length, T = Object.keys(c).length, v = l.useMemo(() => null != s ? h.default.getGuildPermissionSpecMap(s) : null, [s]), x = l.useMemo(() => null != s ? h.default.generateGuildPermissionSpec(s) : null, [s]), N = l.useMemo(() => {
    if (null == s || null == v) return null;
    if (0 === I) return (0, a.jsx)("div", {
      className: i(C.permissionChiplet, C.noModPerms),
      children: (0, a.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == x || x.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          l = p.ALL_PERMISSIONS.find(e => g.Permissions[e] === n);
        if (null == l) return;
        let i = d[l];
        null != i && e.push((0, a.jsx)(_, {
          permission: l,
          roleIds: i,
          guild: s,
          specMap: v
        }, l))
      })
    }), e
  }, [s, I, d, x, v]);
  return null == s ? null : (0, a.jsx)(u.FormItem, {
    title: (0, a.jsxs)("div", {
      className: C.headerContainer,
      children: [(0, a.jsx)(u.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
      }), (0, a.jsxs)(u.Clickable, {
        className: C.viewAllPermissions,
        onClick: () => null == n ? void 0 : n(E.ModViewPanel.PERMISSIONS),
        children: [(0, a.jsx)(u.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({
            count: T
          })
        }), (0, a.jsx)(o.ChevronSmallRightIcon, {
          width: 16,
          height: 16
        })]
      })]
    }),
    titleClassName: C.infoTitle,
    children: (0, a.jsx)(m.UserModInfoItemContainer, {
      children: (0, a.jsx)(m.UserModInfoItem, {
        description: (0, a.jsx)("div", {
          className: C.permissionsContainer,
          children: N
        })
      })
    })
  })
})