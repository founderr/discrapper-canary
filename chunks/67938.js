"use strict";
a.r(t), a.d(t, {
  ShyBanner: function() {
    return h
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("442837"),
  i = a("481060"),
  o = a("607070"),
  u = a("68972"),
  c = a("149961"),
  d = a("338231"),
  f = a("383416"),
  C = a("26213"),
  m = a("249174"),
  E = a("767247"),
  p = a("621881");

function h(e) {
  let {
    category: t
  } = e, a = (0, n.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, l.jsxs)("div", {
    className: r()(c.banner, c.shyBanner),
    "aria-label": t.name,
    children: [(0, l.jsxs)("div", {
      className: c.noOverflow,
      children: [(0, l.jsx)("img", {
        src: a ? m : C,
        className: c.shyGrid,
        alt: t.name,
        "aria-hidden": !0
      }), (0, l.jsx)("img", {
        src: f,
        className: r()(c.shyBannerImage, c.shyBannerRight),
        alt: "",
        "aria-hidden": !0
      })]
    }), (0, l.jsx)("img", {
      src: d,
      className: r()(c.shyBannerImage, c.shyBannerLeft),
      alt: ""
    }), (0, l.jsx)("img", {
      src: E,
      className: c.shyBannerLogo,
      alt: t.name,
      "aria-hidden": !0
    }), (0, l.jsxs)("div", {
      className: c.attributionLogos,
      "aria-label": "Valorant x Discord",
      children: [(0, l.jsx)("img", {
        src: p,
        alt: "",
        "aria-hidden": !0
      }), (0, l.jsx)(i.Text, {
        variant: "heading-sm/extrabold",
        tag: "div",
        children: "|"
      }), (0, l.jsx)(u.default, {
        height: 22,
        "aria-hidden": !0
      })]
    }), (0, l.jsx)(i.Text, {
      className: c.summary,
      variant: "text-md/normal",
      children: t.summary
    })]
  })
}