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
    renderPrice: u,
    icon: c,
    className: d,
    variant: f = "heading-md/semibold",
    alwaysWhiteText: C = !0
  } = e, m = (0, i.formatPrice)(l, s);
  return (0, a.jsxs)(n.Heading, {
    variant: f,
    color: C ? "always-white" : "none",
    className: r()(o.heading, d),
    children: [c, null !== (t = null == u ? void 0 : u(m)) && void 0 !== t ? t : m]
  })
}