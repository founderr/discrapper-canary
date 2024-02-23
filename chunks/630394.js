"use strict";
n.r(t), n.d(t, {
  ProductCard: function() {
    return l
  }
});
var i = n("37983");
n("884691");
var r = n("700052"),
  a = n("502026"),
  s = n("370621");

function l(e) {
  let {
    imgSrc: t,
    title: n,
    description: l,
    purchaseButton: o
  } = e;
  return (0, i.jsxs)("div", {
    className: s.productCard,
    children: [(0, i.jsx)("div", {
      className: s.cardHeaderImg,
      style: null != t ? {
        backgroundImage: "url(".concat(t.toString(), ")")
      } : void 0,
      children: null == t && (0, i.jsx)(r.BadgeIcon, {
        color: "white",
        height: 128,
        width: 128
      })
    }), (0, i.jsxs)("div", {
      className: s.details,
      children: [(0, i.jsx)(a.Text, {
        color: "header-primary",
        variant: "text-md/semibold",
        children: n
      }), (0, i.jsx)(a.Text, {
        className: s.description,
        color: "text-muted",
        variant: "text-sm/normal",
        children: l
      })]
    }), o && (0, i.jsxs)("div", {
      className: s.footer,
      children: [(0, i.jsx)("div", {}), o]
    })]
  })
}