"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var n = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  i = s("481060"),
  a = s("559629"),
  o = s("398005");

function u(e) {
  let {
    className: t,
    copy: s,
    bannerImage: l,
    textColor: u = "always-white"
  } = e;
  return (0, n.jsxs)("div", {
    className: r()(o.bannerContainer, t),
    children: [null == l ? null : (0, n.jsx)("img", {
      alt: "",
      className: o.banner,
      src: l
    }), (0, n.jsxs)("div", {
      className: o.textContainer,
      children: [(0, n.jsx)(a.default, {
        className: o.giftIcon
      }), (0, n.jsx)(i.Heading, {
        className: o.textHeader,
        color: u,
        variant: "eyebrow",
        children: s
      })]
    })]
  })
}