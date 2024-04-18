"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
}), a("47120");
var n = a("735250");
a("470079");
var s = a("481060"),
  l = a("695346"),
  i = a("346656"),
  r = a("506071"),
  o = a("353254"),
  u = a("342833");

function d(e) {
  let {
    coverImageAsset: t,
    title: a,
    guild: d,
    description: c,
    children: f
  } = e, E = l.GifAutoPlay.useSetting(), h = (0, r.useIsWindowFocused)(), [_, C] = (0, o.default)(t, h && E);
  return (0, n.jsxs)("div", {
    className: u.container,
    children: [(0, n.jsx)("div", {
      ref: _,
      className: u.coverImageContainer,
      children: null != C && (0, n.jsx)("img", {
        src: C,
        alt: "",
        className: u.coverImage
      })
    }), (0, n.jsx)("div", {
      className: u.guildIconContainer,
      children: (0, n.jsx)(i.default, {
        guild: d,
        size: i.default.Sizes.XLARGE
      })
    }), (0, n.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: u.ctaTitle,
      children: a
    }), (0, n.jsx)(s.Text, {
      className: u.ctaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: c
    }), f]
  })
}