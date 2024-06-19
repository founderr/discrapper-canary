n(653041);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  a = n.n(s),
  r = n(399606),
  o = n(481060),
  c = n(285173),
  u = n(422559),
  d = n(430824),
  h = n(233608),
  m = n(776767),
  p = n(351127),
  E = n(50493),
  g = n(981631),
  f = n(689938),
  C = n(926452);

function _(e) {
  var t, n;
  let {
    permission: i,
    roleIds: s,
    guild: h,
    specMap: m
  } = e, E = g.Plq[i], _ = null !== (n = null === (t = m[E.toString()]) || void 0 === t ? void 0 : t.title) && void 0 !== n ? n : (0, u.wt)(E), I = p._o.has(E), x = (0, r.e7)([d.Z], () => d.Z.getRoles(h.id));
  return (0, l.jsx)(o.Tooltip, {
    "aria-label": f.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY_ARIA_LABEL,
    tooltipClassName: C.roleTooltipContainer,
    tooltipContentClassName: C.roleTooltipContentContainer,
    allowOverflow: !0,
    text: (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        children: I ? f.Z.Messages.GUILD_MEMBER_MOD_VIEW_ELEVATED_PERMISSION_GRANTED_BY : f.Z.Messages.GUILD_MEMBER_MOD_VIEW_PERMISSION_GRANTED_BY
      }), s.map(e => (0, l.jsx)("div", {
        className: a()(C.roleTooltipItem),
        children: (0, l.jsx)(c.Z, {
          role: x[e],
          guildId: h.id
        })
      }, e))]
    }),
    children: e => {
      let {
        onMouseEnter: t,
        onMouseLeave: n
      } = e;
      return (0, l.jsxs)(o.Clickable, {
        className: a()(C.permissionChiplet, {
          [C.elevatedPermission]: I
        }),
        onMouseEnter: t,
        onMouseLeave: n,
        children: [I && (0, l.jsx)(o.ShieldLockIcon, {
          size: "custom",
          width: 16,
          height: 16,
          color: o.tokens.colors.TEXT_BRAND
        }), (0, l.jsx)(o.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: _
        })]
      })
    }
  })
}
t.Z = i.memo(function(e) {
  let {
    member: t,
    onNavigate: n
  } = e, s = (0, r.e7)([d.Z], () => d.Z.getGuild(t.guildId), [t.guildId]), c = (0, p.B2)(t.userId, t.guildId, p.Qn), u = (0, p.B2)(t.userId, t.guildId, p.pd), I = Object.keys(c).length, x = Object.keys(u).length, T = i.useMemo(() => null != s ? h.Z.getGuildPermissionSpecMap(s) : null, [s]), N = i.useMemo(() => null != s ? h.Z.generateGuildPermissionSpec(s) : null, [s]), Z = i.useMemo(() => {
    if (null == s || null == T) return null;
    if (0 === I) return (0, l.jsx)("div", {
      className: a()(C.permissionChiplet, C.noModPerms),
      children: (0, l.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "text-positive",
        children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_NO_MOD_PERMS_FOUND
      })
    });
    let e = [];
    return null == N || N.forEach(t => {
      t.permissions.forEach(t => {
        let n = t.flag,
          i = p.pd.find(e => g.Plq[e] === n);
        if (null == i) return;
        let a = c[i];
        if (null != a) e.push((0, l.jsx)(_, {
          permission: i,
          roleIds: a,
          guild: s,
          specMap: T
        }, i))
      })
    }), e
  }, [s, I, c, N, T]);
  return null == s ? null : (0, l.jsx)(o.FormItem, {
    title: (0, l.jsxs)("div", {
      className: C.headerContainer,
      children: [(0, l.jsx)(o.Text, {
        variant: "eyebrow",
        color: "header-secondary",
        children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_MOD_PERMSSISONS_TITLE
      }), (0, l.jsxs)(o.Clickable, {
        className: C.viewAllPermissions,
        onClick: () => n(E.k.PERMISSIONS),
        children: [(0, l.jsx)(o.Text, {
          variant: "eyebrow",
          color: "interactive-normal",
          children: f.Z.Messages.GUILD_MEMBER_MOD_VIEW_VIEW_ALL_PERMISSIONS.format({
            count: x
          })
        }), (0, l.jsx)(o.ChevronSmallRightIcon, {
          size: "custom",
          width: 16,
          height: 16
        })]
      })]
    }),
    titleClassName: C.__invalid_infoTitle,
    children: (0, l.jsx)(m.WM, {
      children: (0, l.jsx)(m._2, {
        description: (0, l.jsx)("div", {
          className: C.permissionsContainer,
          children: Z
        })
      })
    })
  })
})