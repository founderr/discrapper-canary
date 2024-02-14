"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  a = n("77078"),
  i = n("978679"),
  u = n("249121");

function o(e) {
  let {
    className: t,
    copy: n,
    bannerImage: r,
    textColor: o = "always-white"
  } = e;
  return (0, s.jsxs)("div", {
    className: l(u.bannerContainer, t),
    children: [null == r ? null : (0, s.jsx)("img", {
      alt: "",
      className: u.banner,
      src: r
    }), (0, s.jsxs)("div", {
      className: u.textContainer,
      children: [(0, s.jsx)(i.default, {
        className: u.giftIcon
      }), (0, s.jsx)(a.Heading, {
        className: u.textHeader,
        color: o,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}