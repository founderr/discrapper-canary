i.d(t, {
  Z: function() {
    return d
  }
});
var n = i(735250),
  s = i(470079),
  a = i(481060),
  r = i(924489),
  l = i(950854),
  o = i(491576),
  c = i(605113);

function d(e) {
  var t, i, d, u, h;
  let {
    application: m,
    onClick: p,
    imageSrc: _,
    className: x,
    animatesOnHover: g
  } = e, C = (0, o.Z)({
    application: m
  }), I = null === (t = m.categories) || void 0 === t ? void 0 : t[0], f = (null !== (u = null === (i = m.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== u ? u : 0) > 0 || C.length > 0, N = s.useCallback(() => {
    p({
      mutualGuilds: C
    })
  }, [p, C]), v = (0, n.jsx)(r.Z, {
    application: m,
    textVariant: "text-xs/normal",
    mutualGuilds: C,
    mutualGuildShownMax: 3,
    guildIconSize: r.x.SMALL,
    compact: !0
  });
  return (0, n.jsx)(l.Z, {
    className: x,
    imageSrc: _,
    onClick: N,
    header: m.name,
    subheader: (0, n.jsxs)("div", {
      className: c.subheader,
      children: [null != I && (0, n.jsx)(a.Text, {
        tag: "span",
        color: "header-secondary",
        variant: "text-xs/normal",
        children: I.name
      }), f && (0, n.jsxs)(n.Fragment, {
        children: [null != I && (0, n.jsx)("span", {
          className: c.bullet,
          children: "•"
        }), v]
      })]
    }),
    animatesOnHover: g,
    children: null != m.description && (0, n.jsx)("div", {
      className: c.__invalid_children,
      children: (0, n.jsx)(a.Text, {
        className: c.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (h = null === (d = m.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== h ? h : m.description
      })
    })
  })
}