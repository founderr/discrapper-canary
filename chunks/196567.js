"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
  }
});
var i = s("735250");
s("470079");
var n = s("120356"),
  r = s.n(n),
  l = s("481060"),
  a = s("559629"),
  o = s("398005");

function C(e) {
  let {
    className: t,
    copy: s,
    bannerImage: n,
    textColor: C = "always-white"
  } = e;
  return (0, i.jsxs)("div", {
    className: r()(o.bannerContainer, t),
    children: [null == n ? null : (0, i.jsx)("img", {
      alt: "",
      className: o.banner,
      src: n
    }), (0, i.jsxs)("div", {
      className: o.textContainer,
      children: [(0, i.jsx)(a.default, {
        className: o.giftIcon
      }), (0, i.jsx)(l.Heading, {
        className: o.textHeader,
        color: C,
        variant: "eyebrow",
        children: s
      })]
    })]
  })
}