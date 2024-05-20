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
    renderPrice: u,
    icon: c,
    className: d,
    variant: f = "heading-md/semibold"
  } = e, C = (0, i.formatPrice)(a, s);
  return (0, l.jsxs)(n.Heading, {
    variant: f,
    className: r()(o.heading, d),
    children: [c, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
  })
}