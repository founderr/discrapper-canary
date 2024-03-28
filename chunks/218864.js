"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
});
var i = l("735250"),
  a = l("470079"),
  n = l("481060"),
  s = l("924489"),
  r = l("950854"),
  c = l("491576"),
  o = l("240098");

function d(e) {
  var t, l, d, u, _;
  let {
    application: m,
    onClick: p,
    imageSrc: f,
    className: h,
    animatesOnHover: C
  } = e, g = (0, c.default)({
    application: m
  }), I = null === (t = m.categories) || void 0 === t ? void 0 : t[0], A = (null !== (u = null === (l = m.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== u ? u : 0) > 0 || g.length > 0, E = a.useCallback(() => {
    p({
      mutualGuilds: g
    })
  }, [p, g]), v = (0, i.jsx)(s.default, {
    application: m,
    textVariant: "text-xs/normal",
    mutualGuilds: g,
    mutualGuildShownMax: 3,
    guildIconSize: s.GuildIconSize.SMALL,
    compact: !0
  });
  return (0, i.jsx)(r.default, {
    className: h,
    imageSrc: f,
    onClick: E,
    header: m.name,
    subheader: (0, i.jsxs)("div", {
      className: o.subheader,
      children: [null != I && (0, i.jsx)(n.Text, {
        tag: "span",
        color: "header-secondary",
        variant: "text-xs/normal",
        children: I.name
      }), A && (0, i.jsxs)(i.Fragment, {
        children: [null != I && (0, i.jsx)("span", {
          className: o.bullet,
          children: "•"
        }), v]
      })]
    }),
    animatesOnHover: C,
    children: null != m.description && (0, i.jsx)("div", {
      className: o.__invalid_children,
      children: (0, i.jsx)(n.Text, {
        className: o.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (_ = null === (d = m.directory_entry) || void 0 === d ? void 0 : d.short_description) && void 0 !== _ ? _ : m.description
      })
    })
  })
}