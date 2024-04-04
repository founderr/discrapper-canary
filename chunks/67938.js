"use strict";
a.r(t), a.d(t, {
  ShyBanner: function() {
    return p
  }
});
var l = a("735250");
a("470079");
var s = a("803997"),
  r = a.n(s),
  n = a("442837"),
  o = a("481060"),
  i = a("607070"),
  u = a("68972"),
  c = a("442479"),
  d = a("373008"),
  f = a("383416"),
  m = a("26213"),
  C = a("249174"),
  h = a("767247"),
  g = a("621881");

function p(e) {
  let {
    category: t
  } = e, a = (0, n.useStateFromStores)([i.default], () => i.default.useReducedMotion);
  return (0, l.jsxs)("div", {
    className: r()(c.banner, c.shyBanner),
    "aria-label": t.name,
    children: [(0, l.jsxs)("div", {
      className: c.noOverflow,
      children: [(0, l.jsx)("img", {
        src: a ? C : m,
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
      src: h,
      className: c.shyBannerLogo,
      alt: t.name,
      "aria-hidden": !0
    }), (0, l.jsxs)("div", {
      className: c.attributionLogos,
      "aria-label": "Valorant x Discord",
      children: [(0, l.jsx)("img", {
        src: g,
        alt: "",
        "aria-hidden": !0
      }), (0, l.jsx)(o.Text, {
        variant: "heading-sm/extrabold",
        tag: "div",
        children: "|"
      }), (0, l.jsx)(u.default, {
        height: 22,
        "aria-hidden": !0
      })]
    }), (0, l.jsx)(o.Text, {
      className: c.summary,
      variant: "text-md/normal",
      children: t.summary
    })]
  })
}