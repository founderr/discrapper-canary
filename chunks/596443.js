"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("47120"), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("954955"),
  o = n.n(r),
  u = n("399606"),
  d = n("836957"),
  c = n("481060"),
  f = n("605436"),
  h = n("79712"),
  m = n("285173"),
  p = n("434404"),
  E = n("422559"),
  C = n("271383"),
  g = n("430824"),
  S = n("496675"),
  _ = n("594174"),
  T = n("6048"),
  I = n("233608"),
  A = n("370595"),
  v = n("991570"),
  x = n("351127"),
  N = n("981631"),
  M = n("689938"),
  R = n("806338"),
  y = n("718208");

function L(e) {
  var t, n, s, r;
  let {
    permission: o,
    roleIds: C,
    guild: _,
    specMap: T,
    categoryTitle: I
  } = e, A = (0, u.useStateFromStores)([g.default], () => g.default.getRoles(_.id)), v = N.Permissions[o], R = null !== (s = null === (t = T[v.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== s ? s : (0, E.getPermissionName)(v), L = null !== (r = null === (n = T[v.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : "", O = x.ELEVATED_PERMISSIONS.has(v), j = x.MOD_PERMISSIONS.includes(o), P = C.length, D = (0, u.useStateFromStores)([S.default], () => S.default.can(N.Permissions.MANAGE_ROLES, _), [_]), b = l.useCallback(async e => {
    D && (await p.default.open(_.id, N.GuildSettingsSections.ROLES), await p.default.selectRole(e))
  }, [D, _.id]);
  return (0, a.jsxs)("div", {
    className: i()(y.permissionItemContainer, {
      [y.elevatedPermission]: O
    }),
    children: [(0, a.jsxs)("div", {
      className: i()(y.permissionItemHeader),
      children: [(0, a.jsxs)("div", {
        className: y.permissionTitle,
        children: [(0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: R
        }), null != I && (0, a.jsxs)("div", {
          className: y.permissionItemSubheader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: I
          }), O && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.tokens.colors.INTERACTIVE_MUTED.css
            }), (0, a.jsx)(c.Tooltip, {
              text: M.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
              children: e => (0, a.jsxs)(c.Clickable, {
                className: y.elevatedPermissionContainer,
                ...e,
                children: [(0, a.jsx)(d.ShieldLockIcon, {
                  width: 12,
                  height: 12,
                  color: c.tokens.colors.TEXT_BRAND
                }), (0, a.jsx)(c.Text, {
                  variant: "text-xs/normal",
                  color: "text-brand",
                  children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
                })]
              })
            })]
          }), !O && j && (0, a.jsxs)(a.Fragment, {
            children: [(0, a.jsx)(h.default, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: c.tokens.colors.INTERACTIVE_MUTED.css
            }), (0, a.jsx)("div", {
              className: y.elevatedPermissionContainer,
              children: (0, a.jsx)(c.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
                children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
              })
            })]
          })]
        })]
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
          roleCount: P
        })
      })]
    }), null != L && (0, a.jsx)("div", {
      className: y.permissionItemDescription,
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: L
      })
    }), (0, a.jsx)("div", {
      className: y.permissionItemRoleContainer,
      children: C.map(e => (0, a.jsx)(c.Clickable, {
        className: i()(y.roleTooltipItem, {
          [y.editable]: D && !(0, f.isEveryoneRoleId)(_.id, e) && !(0, x.isOwnerRole)(e, _.id)
        }),
        onClick: () => b(e),
        children: (0, x.isOwnerRole)(e, _.id) ? (0, a.jsx)("div", {
          className: y.roleChiplet,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: M.default.Messages.GUILD_OWNER
          })
        }) : (0, a.jsx)(m.default, {
          role: A[e],
          guildId: _.id,
          className: y.roleChiplet
        })
      }, e))
    })]
  })
}

function O(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function j(e) {
  let {
    userId: t,
    guildId: n,
    location: s,
    className: r,
    onNavigate: d
  } = e, f = (0, u.useStateFromStores)([_.default], () => _.default.getUser(t), [t]), h = (0, u.useStateFromStores)([g.default], () => g.default.getGuild(n), [n]), m = (0, u.useStateFromStores)([C.default], () => C.default.getMember(n, t), [n, t]), p = (0, v.useProfileThemedPanelBackground)(t, n), S = (0, x.useUserPermissionsAndRoles)(t, n, x.ALL_PERMISSIONS), j = Object.keys(S).length, P = l.useMemo(() => null != h ? I.default.getGuildPermissionSpecMap(h) : null, [h]), D = l.useMemo(() => null != h ? I.default.generateGuildPermissionSpec(h) : null, [h]), [b, U] = l.useState(""), [F, w] = l.useState(""), k = l.useCallback(o()(w, 300), []), H = l.useCallback(e => {
    U(e), k(e)
  }, [k]), G = l.useCallback(() => {
    U(""), w("")
  }, []), B = l.useMemo(() => {
    if (null == h || null == P || null == m) return null;
    if (0 === j) return (0, a.jsx)("div", {
      className: i()(y.__invalid_permissionChiplet, y.__invalid_noModPerms),
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == D || D.forEach(t => {
      t.permissions.forEach(n => {
        let l = n.flag,
          s = x.ALL_PERMISSIONS.find(e => N.Permissions[e] === l);
        if (null == s) return;
        let i = S[s];
        if (null != i) {
          if (F.length > 0) {
            var r, o, u, d, c;
            let e = null !== (d = null === (r = P[l.toString()]) || void 0 === r ? void 0 : r.title) && void 0 !== d ? d : (0, E.getPermissionName)(l),
              n = null !== (c = null === (u = P[l.toString()]) || void 0 === u ? void 0 : null === (o = u.description) || void 0 === o ? void 0 : o.toString()) && void 0 !== c ? c : "",
              a = t.title,
              i = x.ELEVATED_PERMISSIONS.has(l),
              f = x.MOD_PERMISSIONS.includes(s),
              h = i ? M.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : f ? M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null,
              m = O(F, e),
              p = O(F, n),
              C = O(F, a),
              g = null != h && O(F, h);
            if (!m && !p && !C && !g) return
          }
          e.push((0, a.jsx)(L, {
            permission: s,
            roleIds: i,
            guild: h,
            specMap: P,
            categoryTitle: t.title
          }, s))
        }
      })
    }), e
  }, [h, P, m, j, D, S, F]);
  return null == f || null == m ? null : (0, a.jsxs)("div", {
    className: i()(R.container, r),
    style: {
      backgroundColor: p
    },
    children: [(0, a.jsx)(A.default, {
      guildId: n,
      userId: t,
      onNavigate: d
    }), (0, a.jsx)(c.Scroller, {
      className: y.permissionsGroupContainer,
      children: (0, a.jsx)(c.FormItem, {
        title: M.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
        titleClassName: y.__invalid_infoTitle,
        children: (0, a.jsxs)("div", {
          className: y.permissionsItemContainer,
          children: [(0, a.jsx)(T.default, {
            className: y.searchBar,
            query: b,
            placeholder: M.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
            onChange: H,
            onClear: G,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), B]
        })
      })
    })]
  })
}