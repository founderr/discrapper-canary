"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("735250"),
  a = i("470079"),
  l = i("481060"),
  s = i("924489"),
  r = i("950854"),
  o = i("491576"),
  c = i("145197");

function d(e) {
  var t, i, d, u, h;
  let {
    application: p,
    onClick: f,
    imageSrc: m,
    className: C,
    animatesOnHover: x
  } = e, _ = (0, o.default)({
    application: p
  }), g = null === (t = p.categories) || void 0 === t ? void 0 : t[0], I = (null !== (u = null === (i = p.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== u ? u : 0) > 0 || _.length > 0, v = a.useCallback(() => {
    f({
      mutualGuilds: _
    })
  }, [f, _]), A = (0, n.jsx)(s.default, {
    application: p,
    textVariant: "text-xs/normal",
    mutualGuilds: _,
    mutualGuildShownMax: 3,
    guildIconSize: s.GuildIconSize.SMALL,
    compact: !0
  });
  return (0, n.jsx)(r.default, {
    className: C,
    imageSrc: m,
    onClick: v,
    header: p.name,
    subheader: (0, n.jsxs)("div", {
      className: c.subheader,
      children: [null != g && (0, n.jsx)(l.Text, {
        tag: "span",
        color: "header-secondary",
        variant: "text-xs/normal",
        children: g.name
      }), I && (0, n.jsxs)(n.Fragment, {
        children: [null != g && (0, n.jsx)("span", {
          className: c.bullet,
          children: "•"
        }), A]
      })]
    }),
    animatesOnHover: x,
    children: null != p.description && (0, n.jsx)("div", {
      className: c.__invalid_children,
      children: (0, n.jsx)(l.Text, {
        className: c.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (h = null === (d = p.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== h ? h : p.description
      })
    })
  })
}