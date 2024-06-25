t.d(n, {
  Z: function() {
    return u
  }
});
var i = t(735250),
  a = t(470079),
  r = t(481060),
  o = t(768581),
  l = t(924489),
  s = t(950854),
  c = t(491576),
  d = t(717279);

function u(e) {
  var n, t, u, _, p;
  let {
    application: m,
    className: I,
    childrenClassName: f,
    animatesOnHover: g,
    onClick: h,
    ...C
  } = e, v = o.ZP.getApplicationIconURL({
    id: m.id,
    icon: m.icon,
    size: 48
  }), E = (0, c.Z)({
    application: m
  }), x = null === (n = m.categories) || void 0 === n ? void 0 : n[0], b = (null !== (_ = null === (t = m.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== _ ? _ : 0) > 0 || E.length > 0, A = a.useCallback(() => {
    h({
      mutualGuilds: E
    })
  }, [h, E]), P = (0, i.jsx)(l.Z, {
    application: m,
    textVariant: "text-xs/normal",
    mutualGuilds: E,
    mutualGuildShownMax: 3,
    guildIconSize: l.x.SMALL,
    compact: !0
  });
  return (0, i.jsxs)(s.Z, {
    className: I,
    onClick: A,
    iconSrc: v,
    header: m.name,
    subheader: null != x && (0, i.jsx)(r.Text, {
      tag: "span",
      color: "header-secondary",
      variant: "text-xs/normal",
      children: x.name
    }),
    animatesOnHover: g,
    ...C,
    children: [(null != m.description || null != f) && (0, i.jsx)("div", {
      className: f,
      children: (0, i.jsx)(r.Text, {
        className: d.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (p = null === (u = m.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : m.description
      })
    }), b && (0, i.jsx)("div", {
      className: d.bottomGuildCountContainer,
      children: P
    })]
  })
}