"use strict";
l.r(t), l("757143");
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("481060"),
  i = l("937615"),
  o = l("87951");
let c = e => e.length > 5 ? e.replace(/.00$/, "") : e;
t.default = e => {
  var t;
  let {
    price: {
      amount: l,
      currency: s
    },
    renderPrice: u,
    icon: d,
    className: f,
    discount: C,
    variant: p = "heading-md/semibold"
  } = e, m = c((0, i.formatPrice)(l, s)), g = null != C && C >= 5 ? (0, a.jsxs)(a.Fragment, {
    children: [m, (0, a.jsx)(n.Heading, {
      variant: p,
      color: "text-positive",
      className: o.discount,
      children: " (-".concat(C, "%)")
    })]
  }) : m;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(n.Heading, {
      variant: p,
      className: r()(o.container, f),
      children: [d, null !== (t = null == u ? void 0 : u(g)) && void 0 !== t ? t : g]
    })
  })
}