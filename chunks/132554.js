"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  l = n("77078"),
  u = n("978679"),
  a = n("249121");

function o(e) {
  let {
    className: t,
    copy: n,
    bannerImage: i,
    textColor: o = "always-white"
  } = e;
  return (0, r.jsxs)("div", {
    className: s(a.bannerContainer, t),
    children: [null == i ? null : (0, r.jsx)("img", {
      alt: "",
      className: a.banner,
      src: i
    }), (0, r.jsxs)("div", {
      className: a.textContainer,
      children: [(0, r.jsx)(u.default, {
        className: a.giftIcon
      }), (0, r.jsx)(l.Heading, {
        className: a.textHeader,
        color: o,
        variant: "eyebrow",
        children: n
      })]
    })]
  })
}