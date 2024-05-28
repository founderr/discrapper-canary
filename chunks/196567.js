"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("735250");
n("470079");
var i = n("120356"),
  r = n.n(i),
  l = n("481060"),
  a = n("559629"),
  C = n("398005");

function o(e) {
  let {
    className: t,
    copy: n,
    bannerImage: i,
    textColor: o = "always-white"
  } = e;
  return (0, s.jsxs)("div", {
    className: r()(C.bannerContainer, t),
    children: [null == i ? null : (0, s.jsx)("img", {
      alt: "",
      className: C.banner,
      src: i
    }), (0, s.jsxs)("div", {
      className: C.textContainer,
      children: [(0, s.jsx)(a.default, {
        className: C.giftIcon
      }), (0, s.jsx)(l.Heading, {
        className: C.textHeader,
        color: o,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}