n.d(t, {
  Z: function() {
    return j
  }
}), n(47120), n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(954955),
  o = n.n(r),
  c = n(399606),
  u = n(481060),
  d = n(605436),
  h = n(79712),
  m = n(285173),
  E = n(434404),
  p = n(422559),
  g = n(271383),
  f = n(430824),
  C = n(496675),
  _ = n(594174),
  I = n(233608),
  x = n(370595),
  T = n(991570),
  N = n(351127),
  Z = n(981631),
  S = n(689938),
  v = n(332513),
  A = n(210712);

function M(e) {
  var t, n, s, r;
  let {
    permission: o,
    roleIds: g,
    guild: _,
    specMap: I,
    categoryTitle: x
  } = e, T = (0, c.e7)([f.Z], () => f.Z.getRoles(_.id)), v = Z.Plq[o], M = null !== (s = null === (t = I[v.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== s ? s : (0, p.wt)(v), R = null !== (r = null === (n = I[v.toString()]) || void 0 === n ? void 0 : n.description) && void 0 !== r ? r : "", j = N._o.has(v), L = N.Qn.includes(o), O = g.length, P = (0, c.e7)([C.Z], () => C.Z.can(Z.Plq.MANAGE_ROLES, _), [_]), y = i.useCallback(async e => {
    if (!!P) await E.Z.open(_.id, Z.pNK.ROLES), await E.Z.selectRole(e)
  }, [P, _.id]);
  return (0, l.jsxs)("div", {
    className: a()(A.permissionItemContainer, {
      [A.elevatedPermission]: j
    }),
    children: [(0, l.jsxs)("div", {
      className: a()(A.permissionItemHeader),
      children: [(0, l.jsxs)("div", {
        className: A.permissionTitle,
        children: [(0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: M
        }), null != x && (0, l.jsxs)("div", {
          className: A.permissionItemSubheader,
          children: [(0, l.jsx)(u.Text, {
            variant: "text-xs/normal",
            color: "header-muted",
            children: x
          }), j && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(h.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: u.tokens.colors.INTERACTIVE_MUTED.css
            }), (0, l.jsx)(u.Tooltip, {
              text: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_TOOLTIP,
              children: e => (0, l.jsxs)(u.Clickable, {
                className: A.elevatedPermissionContainer,
                ...e,
                children: [(0, l.jsx)(u.ShieldLockIcon, {
                  size: "custom",
                  width: 12,
                  height: 12,
                  color: u.tokens.colors.TEXT_BRAND
                }), (0, l.jsx)(u.Text, {
                  variant: "text-xs/normal",
                  color: "text-brand",
                  children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION
                })]
              })
            })]
          }), !j && L && (0, l.jsxs)(l.Fragment, {
            children: [(0, l.jsx)(h.Z, {
              height: 4,
              width: 4,
              "aria-hidden": "true",
              color: u.tokens.colors.INTERACTIVE_MUTED.css
            }), (0, l.jsx)("div", {
              className: A.elevatedPermissionContainer,
              children: (0, l.jsx)(u.Text, {
                variant: "text-xs/normal",
                color: "header-muted",
                children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION
              })
            })]
          })]
        })]
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/medium",
        color: "text-normal",
        children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLE_COUNT.format({
          roleCount: O
        })
      })]
    }), null != R && (0, l.jsx)("div", {
      className: A.permissionItemDescription,
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-secondary",
        children: R
      })
    }), (0, l.jsx)("div", {
      className: A.permissionItemRoleContainer,
      children: g.map(e => (0, l.jsx)(u.Clickable, {
        className: a()(A.roleTooltipItem, {
          [A.editable]: P && !(0, d.pM)(_.id, e) && !(0, N.Ov)(e, _.id)
        }),
        onClick: () => y(e),
        children: (0, N.Ov)(e, _.id) ? (0, l.jsx)("div", {
          className: A.roleChiplet,
          children: (0, l.jsx)(u.Text, {
            variant: "text-xs/medium",
            color: "text-normal",
            children: S.Z.Messages.GUILD_OWNER
          })
        }) : (0, l.jsx)(m.Z, {
          role: T[e],
          guildId: _.id,
          className: A.roleChiplet
        })
      }, e))
    })]
  })
}

function R(e, t) {
  return t.toLowerCase().includes(e.toLowerCase())
}

function j(e) {
  let {
    userId: t,
    guildId: n,
    location: s,
    className: r,
    onNavigate: d
  } = e, h = (0, c.e7)([_.default], () => _.default.getUser(t), [t]), m = (0, c.e7)([f.Z], () => f.Z.getGuild(n), [n]), E = (0, c.e7)([g.ZP], () => g.ZP.getMember(n, t), [n, t]), C = (0, T.f)(t, n), j = (0, N.B2)(t, n, N.pd), L = Object.keys(j).length, O = i.useMemo(() => null != m ? I.Z.getGuildPermissionSpecMap(m) : null, [m]), P = i.useMemo(() => null != m ? I.Z.generateGuildPermissionSpec(m) : null, [m]), [y, b] = i.useState(""), [D, U] = i.useState(""), k = i.useCallback(o()(U, 300), []), w = i.useCallback(e => {
    b(e), k(e)
  }, [k]), H = i.useCallback(() => {
    b(""), U("")
  }, []), G = i.useMemo(() => {
    if (null == m || null == O || null == E) return null;
    if (0 === L) return (0, l.jsx)("div", {
      className: a()(A.__invalid_permissionChiplet, A.__invalid_noModPerms),
      children: (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == P || P.forEach(t => {
      t.permissions.forEach(n => {
        let i = n.flag,
          s = N.pd.find(e => Z.Plq[e] === i);
        if (null == s) return;
        let a = j[s];
        if (null != a) {
          if (D.length > 0) {
            var r, o, c, u, d;
            let e = null !== (u = null === (r = O[i.toString()]) || void 0 === r ? void 0 : r.title) && void 0 !== u ? u : (0, p.wt)(i),
              n = null !== (d = null === (c = O[i.toString()]) || void 0 === c ? void 0 : null === (o = c.description) || void 0 === o ? void 0 : o.toString()) && void 0 !== d ? d : "",
              l = t.title,
              a = N._o.has(i),
              h = N.Qn.includes(s),
              m = a ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION : h ? S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMISSION : null,
              E = R(D, e),
              g = R(D, n),
              f = R(D, l),
              C = null != m && R(D, m);
            if (!E && !g && !f && !C) return
          }
          e.push((0, l.jsx)(M, {
            permission: s,
            roleIds: a,
            guild: m,
            specMap: O,
            categoryTitle: t.title
          }, s))
        }
      })
    }), e
  }, [m, O, E, L, P, j, D]);
  return null == h || null == E ? null : (0, l.jsxs)("div", {
    className: a()(v.container, r),
    style: {
      backgroundColor: C
    },
    children: [(0, l.jsx)(x.Z, {
      guildId: n,
      userId: t,
      onNavigate: d
    }), (0, l.jsx)(u.Scroller, {
      className: A.permissionsGroupContainer,
      children: (0, l.jsx)(u.FormItem, {
        title: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_PANEL_TITLE,
        titleClassName: A.__invalid_infoTitle,
        children: (0, l.jsxs)("div", {
          className: A.permissionsItemContainer,
          children: [(0, l.jsx)(u.SearchBar, {
            className: A.searchBar,
            query: y,
            placeholder: S.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSIONS_SEARCH_PLACEHOLDER,
            onChange: w,
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