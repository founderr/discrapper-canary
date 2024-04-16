"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var n = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  l = s("481060"),
  a = s("559629"),
  o = s("833141");

function C(e) {
  let {
    className: t,
    copy: s,
    bannerImage: r,
    textColor: C = "always-white"
  } = e;
  return (0, n.jsxs)("div", {
    className: i()(o.bannerContainer, t),
    children: [null == r ? null : (0, n.jsx)("img", {
      alt: "",
      className: o.banner,
      src: r
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