i.d(t, {
  Z: function() {
    return u
  }
});
var n = i(735250),
  s = i(470079),
  a = i(481060),
  r = i(768581),
  l = i(924489),
  o = i(950854),
  c = i(491576),
  d = i(717279);

function u(e) {
  var t, i, u, h, m;
  let {
    application: p,
    className: _,
    childrenClassName: x,
    animatesOnHover: g,
    onClick: C,
    ...I
  } = e, f = r.ZP.getApplicationIconURL({
    id: p.id,
    icon: p.icon,
    size: 48
  }), N = (0, c.Z)({
    application: p
  }), v = null === (t = p.categories) || void 0 === t ? void 0 : t[0], E = (null !== (h = null === (i = p.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== h ? h : 0) > 0 || N.length > 0, T = s.useCallback(() => {
    C({
      mutualGuilds: N
    })
  }, [C, N]), R = (0, n.jsx)(l.Z, {
    application: p,
    textVariant: "text-xs/normal",
    mutualGuilds: N,
    mutualGuildShownMax: 3,
    guildIconSize: l.x.SMALL,
    compact: !0
  });
  return (0, n.jsxs)(o.Z, {
    className: _,
    onClick: T,
    iconSrc: f,
    header: p.name,
    subheader: null != v && (0, n.jsx)(a.Text, {
      tag: "span",
      color: "header-secondary",
      variant: "text-xs/normal",
      children: v.name
    }),
    animatesOnHover: g,
    ...I,
    children: [(null != p.description || null != x) && (0, n.jsx)("div", {
      className: x,
      children: (0, n.jsx)(a.Text, {
        className: d.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (m = null === (u = p.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== m ? m : p.description
      })
    }), E && (0, n.jsx)("div", {
      className: d.bottomGuildCountContainer,
      children: R
    })]
  })
}