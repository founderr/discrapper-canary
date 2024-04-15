"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var s = n("735250");
n("470079");
var r = n("120356"),
  i = n.n(r),
  l = n("481060"),
  a = n("559629"),
  o = n("833141");

function C(e) {
  let {
    className: t,
    copy: n,
    bannerImage: r,
    textColor: C = "always-white"
  } = e;
  return (0, s.jsxs)("div", {
    className: i()(o.bannerContainer, t),
    children: [null == r ? null : (0, s.jsx)("img", {
      alt: "",
      className: o.banner,
      src: r
    }), (0, s.jsxs)("div", {
      className: o.textContainer,
      children: [(0, s.jsx)(a.default, {
        className: o.giftIcon
      }), (0, s.jsx)(l.Heading, {
        className: o.textHeader,
        color: C,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}