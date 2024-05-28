"use strict";
a.r(t);
var s = a("735250");
a("470079");
var r = a("120356"),
  n = a.n(r),
  l = a("481060"),
  o = a("937615"),
  i = a("87951");
t.default = e => {
  var t;
  let {
    price: {
      amount: a,
      currency: r
    },
    renderPrice: c,
    icon: u,
    className: d,
    discount: f,
    variant: C = "heading-md/semibold"
  } = e, p = (0, o.formatPrice)(a, r), m = null != f && f > 0 ? (0, s.jsxs)(s.Fragment, {
    children: [p, (0, s.jsx)(l.Heading, {
      variant: C,
      color: "text-positive",
      children: " (-".concat(f, "%)")
    })]
  }) : p;
  return (0, s.jsx)(s.Fragment, {
    children: (0, s.jsxs)(l.Heading, {
      variant: C,
      className: n()(i.heading, d),
      children: [u, null !== (t = null == c ? void 0 : c(m)) && void 0 !== t ? t : m]
    })
  })
}