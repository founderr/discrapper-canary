"use strict";
s.d(t, {
  F: function() {
    return d
  }
}), s(757143);
var n = s(735250);
s(470079);
var r = s(120356),
  a = s.n(r),
  i = s(481060),
  l = s(937615),
  o = s(884697),
  c = s(713055);
let u = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  d = e => {
    var t;
    let {
      price: {
        amount: s,
        currency: r
      },
      renderPrice: d,
      icon: C,
      className: f,
      discount: p = o.f_,
      variant: E = "heading-md/semibold"
    } = e, g = u((0, l.T4)(s, r)), m = p !== o.f_ && p.discountPercentage >= 5 ? (0, n.jsxs)(n.Fragment, {
      children: [g, (0, n.jsx)(i.Heading, {
        variant: E,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(p.discountPercentage, "%)")
      })]
    }) : g;
    return (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)(i.Heading, {
        variant: E,
        className: a()(c.container, f),
        children: [C, null !== (t = null == d ? void 0 : d(m)) && void 0 !== t ? t : m]
      })
    })
  }