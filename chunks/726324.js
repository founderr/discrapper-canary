"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("695346"),
  i = n("346656"),
  r = n("506071"),
  o = n("353254"),
  u = n("342833");

function d(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: d,
    description: c,
    children: f
  } = e, E = l.GifAutoPlay.useSetting(), _ = (0, r.useIsWindowFocused)(), [h, C] = (0, o.default)(t, _ && E);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)("div", {
      ref: h,
      className: u.coverImageContainer,
      children: null != C && (0, a.jsx)("img", {
        src: C,
        alt: "",
        className: u.coverImage
      })
    }), (0, a.jsx)("div", {
      className: u.guildIconContainer,
      children: (0, a.jsx)(i.default, {
        guild: d,
        size: i.default.Sizes.XLARGE
      })
    }), (0, a.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: u.ctaTitle,
      children: n
    }), (0, a.jsx)(s.Text, {
      className: u.ctaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: c
    }), f]
  })
}