"use strict";
a.r(t), a("757143");
var s = a("735250");
a("470079");
var l = a("120356"),
  r = a.n(l),
  n = a("481060"),
  i = a("937615"),
  o = a("87951");
let c = e => e.length > 5 ? e.replace(/.00$/, "") : e;
t.default = e => {
  var t;
  let {
    price: {
      amount: a,
      currency: l
    },
    renderPrice: u,
    icon: d,
    className: f,
    discount: C,
    variant: p = "heading-md/semibold"
  } = e, m = c((0, i.formatPrice)(a, l)), g = null != C && C >= 5 ? (0, s.jsxs)(s.Fragment, {
    children: [m, (0, s.jsx)(n.Heading, {
      variant: p,
      color: "text-positive",
      className: o.discount,
      children: " (-".concat(C, "%)")
    })]
  }) : m;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(n.Heading, {
      variant: p,
      className: r()(o.container, f),
      children: [d, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
    })
  })
}