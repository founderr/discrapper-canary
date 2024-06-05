"use strict";
s.r(t), s.d(t, {
  CollectiblesShopPriceTag: function() {
    return d
  }
}), s("757143");
var a = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  n = s("481060"),
  i = s("937615"),
  o = s("884697"),
  c = s("87951");
let u = e => e.length > 5 ? e.replace(/.00$/, "") : e,
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
      discount: p = o.NoDiscount,
      variant: m = "heading-md/semibold"
    } = e, g = u((0, i.formatPrice)(s, l)), E = p !== o.NoDiscount && p.discountPercentage >= 5 ? (0, a.jsxs)(a.Fragment, {
      children: [g, (0, a.jsx)(n.Heading, {
        variant: m,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(p.discountPercentage, "%)")
      })]
    }) : g;
    return (0, a.jsx)(a.Fragment, {
      children: (0, a.jsxs)(n.Heading, {
        variant: m,
        className: r()(c.container, C),
        children: [f, null !== (t = null == d ? void 0 : d(E)) && void 0 !== t ? t : E]
      })
    })
  }