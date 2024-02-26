"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("65597"),
  u = n("77078"),
  o = n("454273"),
  d = n("412013"),
  c = n("592407"),
  f = n("978970"),
  h = n("26989"),
  m = n("305961"),
  p = n("957255"),
  E = n("697218"),
  S = n("465305"),
  g = n("473073"),
  C = n("763225"),
  _ = n("914275"),
  I = n("49111"),
  T = n("782340"),
  v = n("865331"),
  x = n("680153");

function N(e) {
  var t, n, s, h;
  let {
    permission: m,
    roleIds: E,
    guild: S,
    specMap: g,
    categoryTitle: C
  } = e, v = I.Permissions[m], N = null !== (s = null === (t = g[v.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== s ? s : (0, f.getPermissionName)(v), A = null !== (h = null === (n = g[v.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== h ? h : "", M = _.ELEVATED_PERMISSIONS.has(v), R = E.length, j = (0, r.default)([p.default], () => p.default.can(I.Permissions.MANAGE_ROLES, S), [S]), L = a.useCallback(async e => {
    j && (await c.default.open(S.id, I.GuildSettingsSections.ROLES), await c.default.selectRole(e))
  }, [j, S.id]);
  return (0, l.jsxs)("div", {
    className: i(x.permissionItemContainer, {
      [x.elevatedPermission]: M
    }),
    children: [(0, l.jsxs)("div", {
      className: i(x.permissionItemHeader),
      children: [(0, l.jsxs)("div", {
        className: x.permissionTitle,
        children: [(0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: M ? "text-danger" : "header-primary",
          children: N
        }), null != C && (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-muted",
          children: C
        })]
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: T.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
          roleCount: R
        })
      })]
    }), null != A && (0, l.jsx)("div", {
      className: x.permissionItemDescription,
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: A
      })
    }), (0, l.jsx)("div", {
      className: x.permissionItemRoleContainer,
      children: E.map(e => (0, l.jsx)(u.Clickable, {
        className: i(x.roleTooltipItem, {
          [x.editable]: j && !(0, o.isEveryoneRoleId)(S.id, e)
        }),
        onClick: () => L(e),
        children: (0, l.jsx)(d.default, {
          role: S.getRole(e),
          guildId: S.id
        })
      }, e))
    })]
  })
}

function A(e) {
  let {
    userId: t,
    guildId: n,
    location: s,
    className: o,
    onNavigate: d
  } = e, c = (0, r.default)([E.default], () => E.default.getUser(t), [t]), f = (0, r.default)([m.default], () => m.default.getGuild(n), [n]), p = (0, r.default)([h.default], () => h.default.getMember(n, t), [n, t]), A = (0, C.useProfileThemedPanelBackground)(t, n), M = (0, _.useUserPermissionsAndRoles)(t, n, _.ALL_PERMISSIONS), R = Object.keys(M).length, j = a.useMemo(() => null != f ? S.default.getGuildPermissionSpecMap(f) : null, [f]), L = a.useMemo(() => null != f ? S.default.generateGuildPermissionSpec(f) : null, [f]), y = a.useMemo(() => {
    if (null == f || null == j || null == p) return null;
    if (0 === R) return (0, l.jsx)("div", {
      className: i(x.permissionChiplet, x.noModPerms),
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: T.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == L || L.forEach(t => {
      t.permissions.forEach(n => {
        let a = n.flag,
          s = _.ALL_PERMISSIONS.find(e => I.Permissions[e] === a);
        if (null == s) return;
        let i = M[s];
        null != i && e.push((0, l.jsx)(N, {
          permission: s,
          roleIds: i,
          guild: f,
          specMap: j,
          categoryTitle: t.title
        }, s))
      })
    }), e
  }, [f, j, p, R, M, L]);
  return null == c || null == p ? null : (0, l.jsxs)("div", {
    className: i(v.container, o),
    style: {
      backgroundColor: A
    },
    children: [(0, l.jsx)(g.default, {
      guildId: n,
      userId: t,
      onNavigate: d
    }), (0, l.jsx)(u.Scroller, {
      className: x.permissionsGroupContainer,
      children: (0, l.jsx)(u.FormItem, {
        title: T.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
        titleClassName: x.infoTitle,
        children: (0, l.jsx)("div", {
          className: x.permissionsItemContainer,
          children: y
        })
      })
    })]
  })
}