"use strict";
a.r(t);
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("481060"),
  i = a("937615"),
  o = a("87951");
t.default = e => {
  var t;
  let {
    price: {
      amount: a,
      currency: s
    },
    renderPrice: c,
    icon: u,
    className: d,
    discount: f,
    variant: C = "heading-md/semibold"
  } = e, m = (0, i.formatPrice)(a, s), p = null != f && f > 0 ? (0, l.jsxs)(l.Fragment, {
    children: [m, (0, l.jsx)(n.Heading, {
      variant: C,
      color: "text-positive",
      children: " (-".concat(f, "%)")
    })]
  }) : m;
  return (0, l.jsx)(l.Fragment, {
    children: (0, l.jsxs)(n.Heading, {
      variant: C,
      className: r()(o.heading, d),
      children: [u, null !== (t = null == c ? void 0 : c(p)) && void 0 !== t ? t : p]
    })
  })
}