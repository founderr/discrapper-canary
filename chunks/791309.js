"use strict";
a.r(t), a.d(t, {
  default: function() {
    return c
  }
});
var s = a("37983");
a("884691");
var r = a("414456"),
  l = a.n(r),
  n = a("77078"),
  i = a("153160"),
  o = a("468437"),
  c = e => {
    var t;
    let {
      price: {
        amount: a,
        currency: r
      },
      renderPrice: c,
      icon: u,
      className: d,
      variant: f = "heading-md/semibold",
      alwaysWhiteText: m = !0
    } = e, p = (0, i.formatPrice)(a, r);
    return (0, s.jsxs)(n.Heading, {
      variant: f,
      color: m ? "always-white" : "none",
      className: l(o.heading, d),
      children: [u, null !== (t = null == c ? void 0 : c(p)) && void 0 !== t ? t : p]
    })
  }