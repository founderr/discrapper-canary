"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("77078"),
  i = a("153160"),
  o = a("468437"),
  u = e => {
    var t;
    let {
      price: {
        amount: a,
        currency: s
      },
      renderPrice: u,
      icon: c,
      className: d,
      variant: f = "heading-md/semibold",
      alwaysWhiteText: m = !0
    } = e, C = (0, i.formatPrice)(a, s);
    return (0, l.jsxs)(n.Heading, {
      variant: f,
      color: m ? "always-white" : "none",
      className: r(o.heading, d),
      children: [c, null !== (t = null == u ? void 0 : u(C)) && void 0 !== t ? t : C]
    })
  }