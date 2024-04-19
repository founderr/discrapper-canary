"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var n = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  l = s("481060"),
  a = s("559629"),
  o = s("833141");

function C(e) {
  let {
    className: t,
    copy: s,
    bannerImage: i,
    textColor: C = "always-white"
  } = e;
  return (0, n.jsxs)("div", {
    className: r()(o.bannerContainer, t),
    children: [null == i ? null : (0, n.jsx)("img", {
      alt: "",
      className: o.banner,
      src: i
    }), (0, n.jsxs)("div", {
      className: o.textContainer,
      children: [(0, n.jsx)(a.default, {
        className: o.giftIcon
      }), (0, n.jsx)(l.Heading, {
        className: o.textHeader,
        color: C,
        variant: "eyebrow",
        children: s
      })]
    })]
  })
}