"use strict";
a.r(t), a("757143");
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("481060"),
  i = a("937615"),
  o = a("87951");
let c = e => e.length > 5 ? e.replace(/.00$/, "") : e;
t.default = e => {
  var t;
  let {
    price: {
      amount: a,
      currency: s
    },
    renderPrice: u,
    icon: d,
    className: f,
    discount: C,
    variant: p = "heading-md/semibold"
  } = e, m = c((0, i.formatPrice)(a, s)), g = null != C && C > 0 ? (0, l.jsxs)(l.Fragment, {
    children: [m, (0, l.jsx)(n.Heading, {
      variant: p,
      color: "text-positive",
      children: " (-".concat(C, "%)")
    })]
  }) : m;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)(n.Heading, {
      variant: p,
      className: r()(o.heading, f),
      children: [d, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
    })
  })
}