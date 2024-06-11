"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  l = s("283029"),
  r = s("981874");
t.default = function(e) {
  let {
    className: t,
    hasCooldown: n,
    isCanceled: o,
    useReducedMotion: d
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(r.boostIconContainer, t),
    children: [o ? (0, a.jsx)("img", {
      className: i()(r.boostIcon, r.boostIconCanceled),
      src: s("457026"),
      alt: ""
    }) : (0, a.jsx)(l.default, {
      className: r.boostIcon,
      boostInCooldown: n,
      useReducedMotion: d
    }), !o && n && (0, a.jsx)("img", {
      className: r.snowflake,
      src: s("765028"),
      alt: ""
    })]
  })
}