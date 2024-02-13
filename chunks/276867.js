"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("424973");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  o = n("77078"),
  u = n("412013"),
  d = n("592407"),
  c = n("978970"),
  f = n("26989"),
  h = n("305961"),
  m = n("957255"),
  p = n("697218"),
  E = n("465305"),
  g = n("473073"),
  S = n("763225"),
  C = n("914275"),
  _ = n("49111"),
  I = n("782340"),
  T = n("63893"),
  v = n("924342");

function x(e) {
  var t, n, s, f;
  let {
    permission: h,
    roleIds: p,
    guild: E,
    specMap: g,
    categoryTitle: S
  } = e, T = _.Permissions[h], x = null !== (s = null === (t = g[T.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== s ? s : (0, c.getPermissionName)(T), N = null !== (f = null === (n = g[T.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== f ? f : "", A = C.ELEVATED_PERMISSIONS.has(T), M = p.length, R = (0, r.default)([m.default], () => m.default.can(_.Permissions.MANAGE_ROLES, E), [E]), j = l.useCallback(async e => {
    R && (await d.default.open(E.id, _.GuildSettingsSections.ROLES), await d.default.selectRole(e))
  }, [R, E.id]);
  return (0, a.jsxs)("div", {
    className: i(v.permissionItemContainer, {
      [v.elevatedPermission]: A
    }),
    children: [(0, a.jsxs)("div", {
      className: i(v.permissionItemHeader),
      children: [(0, a.jsxs)("div", {
        className: v.permissionTitle,
        children: [(0, a.jsx)(o.Text, {
          variant: "text-md/medium",
          color: A ? "text-danger" : "header-primary",
          children: x
        }), null != S && (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "header-muted",
          children: S
        })]
      }), (0, a.jsx)(o.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
          roleCount: M
        })
      })]
    }), null != N && (0, a.jsx)("div", {
      className: v.permissionItemDescription,
      children: (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: N
      })
    }), (0, a.jsx)("div", {
      className: v.permissionItemRoleContainer,
      children: p.map(e => (0, a.jsx)(o.Clickable, {
        className: i(v.roleTooltipItem, {
          [v.editable]: R && e !== E.id
        }),
        onClick: () => j(e),
        children: (0, a.jsx)(u.default, {
          role: E.getRole(e),
          guildId: E.id
        })
      }, e))
    })]
  })
}

function N(e) {
  let {
    userId: t,
    guildId: n,
    location: s,
    className: u,
    onNavigate: d
  } = e, c = (0, r.default)([p.default], () => p.default.getUser(t), [t]), m = (0, r.default)([h.default], () => h.default.getGuild(n), [n]), N = (0, r.default)([f.default], () => f.default.getMember(n, t), [n, t]), A = (0, S.useProfileThemedPanelBackground)(t, n), M = (0, C.useUserPermissionsAndRoles)(t, n, C.ALL_PERMISSIONS), R = Object.keys(M).length, j = l.useMemo(() => null != m ? E.default.getGuildPermissionSpecMap(m) : null, [m]), L = l.useMemo(() => null != m ? E.default.generateGuildPermissionSpec(m) : null, [m]), O = l.useMemo(() => {
    if (null == m || null == j || null == N) return null;
    if (0 === R) return (0, a.jsx)("div", {
      className: i(v.permissionChiplet, v.noModPerms),
      children: (0, a.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: I.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == L || L.forEach(t => {
      t.permissions.forEach(n => {
        let l = n.flag,
          s = C.ALL_PERMISSIONS.find(e => _.Permissions[e] === l);
        if (null == s) return;
        let i = M[s];
        null != i && e.push((0, a.jsx)(x, {
          permission: s,
          roleIds: i,
          guild: m,
          specMap: j,
          categoryTitle: t.title
        }, s))
      })
    }), e
  }, [m, j, N, R, M, L]);
  return null == c || null == N ? null : (0, a.jsxs)("div", {
    className: i(T.container, u),
    style: {
      backgroundColor: A
    },
    children: [(0, a.jsx)(g.default, {
      guildId: n,
      userId: t,
      onNavigate: d
    }), (0, a.jsx)(o.Scroller, {
      className: v.permissionsGroupContainer,
      children: (0, a.jsx)(o.FormItem, {
        title: I.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
        titleClassName: v.infoTitle,
        children: (0, a.jsx)("div", {
          className: v.permissionsItemContainer,
          children: O
        })
      })
    })]
  })
}