"use strict";
s.r(t), s.d(t, {
  CollectiblesShopPriceTag: function() {
    return d
  }
}), s("757143");
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  r = s("481060"),
  i = s("937615"),
  o = s("884697"),
  u = s("87951");
let c = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  d = e => {
    var t;
    let {
      price: {
        amount: s,
        currency: l
      },
      renderPrice: d,
      icon: f,
      className: C,
      discount: E = o.NoDiscount,
      variant: m = "heading-md/semibold"
    } = e, p = c((0, i.formatPrice)(s, l)), S = E !== o.NoDiscount && E.discountPercentage >= 5 ? (0, a.jsxs)(a.Fragment, {
      children: [p, (0, a.jsx)(r.Heading, {
        variant: m,
        color: "text-positive",
        className: u.discount,
        children: " (-".concat(E.discountPercentage, "%)")
      })]
    }) : p;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(r.Heading, {
        variant: m,
        className: n()(u.container, C),
        children: [f, null !== (t = null == d ? void 0 : d(S)) && void 0 !== t ? t : S]
      })
    })
  }