"use strict";
s.d(t, {
  G: function() {
    return m
  }
});
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  i = s(442837),
  l = s(481060),
  o = s(607070),
  c = s(873268),
  u = s(196798),
  d = s(660348),
  C = s(872044),
  f = s(671581),
  p = s(830487),
  g = s(602476);

function E() {
  return (0, n.jsxs)("div", {
    className: c.attributionLogos,
    "aria-label": "Discord x Pocketpair",
    children: [(0, n.jsx)(l.ClydeIcon, {
      size: "custom",
      color: "currentColor",
      height: 22,
      "aria-hidden": !0
    }), (0, n.jsx)(l.Text, {
      variant: "heading-sm/extrabold",
      tag: "div",
      children: "|"
    }), (0, n.jsx)("img", {
      src: d,
      alt: "",
      "aria-hidden": !0
    })]
  })
}

function m(e) {
  let {
    category: t
  } = e, s = (0, i.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, n.jsxs)("div", {
    className: a()(c.banner),
    "aria-label": t.name,
    children: [(0, n.jsxs)("div", {
      className: c.mainContent,
      children: [(0, n.jsx)("img", {
        src: C,
        className: c.bannerImage,
        alt: t.name,
        "aria-hidden": !0
      }), (0, n.jsx)(E, {}), (0, n.jsx)("img", {
        src: f,
        className: c.categoryLogo,
        alt: t.name,
        "aria-hidden": !0
      }), !s && (0, n.jsx)("img", {
        src: u,
        className: c.animatedLayer,
        alt: "",
        "aria-hidden": !0
      }), (0, n.jsx)(l.Text, {
        className: c.summary,
        variant: "text-md/normal",
        children: t.summary
      })]
    }), (0, n.jsx)("img", {
      src: g,
      className: a()(c.overflowImage, c.overflowRight),
      alt: "",
      "aria-hidden": !0
    }), (0, n.jsx)("img", {
      src: p,
      className: a()(c.overflowImage, c.overflowLeft),
      alt: "",
      "aria-hidden": !0
    })]
  })
}