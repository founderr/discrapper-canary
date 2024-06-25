"use strict";
n.d(t, {
  G: function() {
    return b
  }
});
var r = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  o = n(442837),
  s = n(481060),
  c = n(607070),
  l = n(873268),
  d = n(196798),
  u = n(660348),
  p = n(872044),
  f = n(671581),
  g = n(830487),
  _ = n(602476);

function C() {
  return (0, r.jsxs)("div", {
    className: l.attributionLogos,
    "aria-label": "Discord x Pocketpair",
    children: [(0, r.jsx)(s.ClydeIcon, {
      size: "custom",
      color: "currentColor",
      height: 22,
      "aria-hidden": !0
    }), (0, r.jsx)(s.Text, {
      variant: "heading-sm/extrabold",
      tag: "div",
      children: "|"
    }), (0, r.jsx)("img", {
      src: u,
      alt: "",
      "aria-hidden": !0
    })]
  })
}

function b(e) {
  let {
    category: t
  } = e, n = (0, o.e7)([c.Z], () => c.Z.useReducedMotion);
  return (0, r.jsxs)("div", {
    className: i()(l.banner),
    "aria-label": t.name,
    children: [(0, r.jsxs)("div", {
      className: l.mainContent,
      children: [(0, r.jsx)("img", {
        src: p,
        className: l.bannerImage,
        alt: t.name,
        "aria-hidden": !0
      }), (0, r.jsx)(C, {}), (0, r.jsx)("img", {
        src: f,
        className: l.categoryLogo,
        alt: t.name,
        "aria-hidden": !0
      }), !n && (0, r.jsx)("img", {
        src: d,
        className: l.animatedLayer,
        alt: "",
        "aria-hidden": !0
      }), (0, r.jsx)(s.Text, {
        className: l.summary,
        variant: "text-md/normal",
        children: t.summary
      })]
    }), (0, r.jsx)("img", {
      src: _,
      className: i()(l.overflowImage, l.overflowRight),
      alt: "",
      "aria-hidden": !0
    }), (0, r.jsx)("img", {
      src: g,
      className: i()(l.overflowImage, l.overflowLeft),
      alt: "",
      "aria-hidden": !0
    })]
  })
}