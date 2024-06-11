"use strict";
n.r(t), n.d(t, {
  StorefrontButton: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("555730"),
  s = n("481060"),
  a = n("359610"),
  o = n("689938"),
  l = n("502249");

function u(e) {
  return (0, i.jsx)(a.default, {
    size: s.ButtonSizes.MEDIUM,
    ...e,
    children: (0, i.jsxs)("div", {
      className: l.storeBtn,
      children: [(0, i.jsx)(r.ShopSparkleIcon, {
        width: 16,
        height: 16,
        color: "#fff"
      }), (0, i.jsx)(s.Spacer, {
        size: 4,
        horizontal: !0
      }), o.default.Messages.STOREFRONT]
    })
  })
}