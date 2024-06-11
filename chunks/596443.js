"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
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
  T = n("233608"),
  I = n("370595"),
  A = n("991570"),
  v = n("351127"),
  x = n("981631"),
  N = n("689938"),
  M = n("806338"),
  y = n("718208");

function R(e) {
  var t, n, s, r;
  let {
    permission: o,
    roleIds: C,
    guild: _,
    specMap: T,
    categoryTitle: I
  } = e, A = (0, u.useStateFromStores)([g.default], () => g.default.getRoles(_.id)), M = x.Permissions[o], R = null !== (s = null === (t = T[M.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== s ? s : (0, E.getPermissionName)(M), L = null !== (r = null === (n = T[M.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : "", O = v.ELEVATED_PERMISSIONS.has(M), j = v.MOD_PERMISSIONS.includes(o), P = C.length, D = (0, u.useStateFromStores)([S.default], () => S.default.can(x.Permissions.MANAGE_ROLES, _), [_]), b = l.useCallback(async e => {
    D && (await p.default.open(_.id, x.GuildSettingsSections.ROLES), await p.default.selectRole(e))
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
              text: N.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
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
                  children: N.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
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
                children: N.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
              })
            })]
          })]
        })]
      }), (0, a.jsx)(c.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: N.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
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
          [y.editable]: D && !(0, f.isEveryoneRoleId)(_.id, e) && !(0, v.isOwnerRole)(e, _.id)
        }),
        onClick: () => b(e),
        children: (0, v.isOwnerRole)(e, _.id) ? (0, a.jsx)("div", {
          className: y.roleChiplet,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: N.default.Messages.GUILD_OWNER
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

function L(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function O(e) {
  let {
    userId: t,
    guildId: n,
    location: s,
    className: r,
    onNavigate: d
  } = e, f = (0, u.useStateFromStores)([_.default], () => _.default.getUser(t), [t]), h = (0, u.useStateFromStores)([g.default], () => g.default.getGuild(n), [n]), m = (0, u.useStateFromStores)([C.default], () => C.default.getMember(n, t), [n, t]), p = (0, A.useProfileThemedPanelBackground)(t, n), S = (0, v.useUserPermissionsAndRoles)(t, n, v.ALL_PERMISSIONS), O = Object.keys(S).length, j = l.useMemo(() => null != h ? T.default.getGuildPermissionSpecMap(h) : null, [h]), P = l.useMemo(() => null != h ? T.default.generateGuildPermissionSpec(h) : null, [h]), [D, b] = l.useState(""), [U, F] = l.useState(""), w = l.useCallback(o()(F, 300), []), k = l.useCallback(e => {
    b(e), w(e)
  }, [w]), H = l.useCallback(() => {
    b(""), F("")
  }, []), G = l.useMemo(() => {
    if (null == h || null == j || null == m) return null;
    if (0 === O) return (0, a.jsx)("div", {
      className: i()(y.__invalid_permissionChiplet, y.__invalid_noModPerms),
      children: (0, a.jsx)(c.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: N.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == P || P.forEach(t => {
      t.permissions.forEach(n => {
        let l = n.flag,
          s = v.ALL_PERMISSIONS.find(e => x.Permissions[e] === l);
        if (null == s) return;
        let i = S[s];
        if (null != i) {
          if (U.length > 0) {
            var r, o, u, d, c;
            let e = null !== (d = null === (r = j[l.toString()]) || void 0 === r ? void 0 : r.title) && void 0 !== d ? d : (0, E.getPermissionName)(l),
              n = null !== (c = null === (u = j[l.toString()]) || void 0 === u ? void 0 : null === (o = u.description) || void 0 === o ? void 0 : o.toString()) && void 0 !== c ? c : "",
              a = t.title,
              i = v.ELEVATED_PERMISSIONS.has(l),
              f = v.MOD_PERMISSIONS.includes(s),
              h = i ? N.default.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : f ? N.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null,
              m = L(U, e),
              p = L(U, n),
              C = L(U, a),
              g = null != h && L(U, h);
            if (!m && !p && !C && !g) return
          }
          e.push((0, a.jsx)(R, {
            permission: s,
            roleIds: i,
            guild: h,
            specMap: j,
            categoryTitle: t.title
          }, s))
        }
      })
    }), e
  }, [h, j, m, O, P, S, U]);
  return null == f || null == m ? null : (0, a.jsxs)("div", {
    className: i()(M.container, r),
    style: {
      backgroundColor: p
    },
    children: [(0, a.jsx)(I.default, {
      guildId: n,
      userId: t,
      onNavigate: d
    }), (0, a.jsx)(c.Scroller, {
      className: y.permissionsGroupContainer,
      children: (0, a.jsx)(c.FormItem, {
        title: N.default.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
        titleClassName: y.__invalid_infoTitle,
        children: (0, a.jsxs)("div", {
          className: y.permissionsItemContainer,
          children: [(0, a.jsx)(c.SearchBar, {
            className: y.searchBar,
            query: D,
            placeholder: N.default.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
            onChange: k,
            onClear: H,
            autoComplete: "off",
            inputProps: {
              autoCapitalize: "none",
              autoCorrect: "off",
              spellCheck: "false"
            }
          }), G]
        })
      })
    })]
  })
}