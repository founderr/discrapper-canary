"use strict";
l.r(t);
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("481060"),
  i = l("937615"),
  o = l("87951");
t.default = e => {
  var t;
  let {
    price: {
      amount: l,
      currency: s
    },
    renderPrice: c,
    icon: u,
    className: d,
    discount: f,
    variant: C = "heading-md/semibold"
  } = e, m = (0, i.formatPrice)(l, s), p = null != f && f > 0 ? (0, a.jsxs)(a.Fragment, {
    children: [m, (0, a.jsx)(n.Heading, {
      variant: C,
      color: "text-positive",
      children: " (-".concat(f, "%)")
    })]
  }) : m;
  return (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)(n.Heading, {
      variant: C,
      className: r()(o.heading, d),
      children: [u, null !== (t = null == c ? void 0 : c(p)) && void 0 !== t ? t : p]
    })
  })
}