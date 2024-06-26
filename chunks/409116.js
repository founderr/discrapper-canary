"use strict";
n.d(t, {
  F: function() {
    return u
  }
}), n(757143);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(937615),
  c = n(884697),
  l = n(713055);
let d = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  u = e => {
    var t;
    let {
      price: {
        amount: n,
        currency: i
      },
      renderPrice: u,
      icon: p,
      className: f,
      discount: g = c.f_,
      variant: _ = "heading-md/semibold"
    } = e, C = d((0, s.T4)(n, i)), b = g !== c.f_ && g.discountPercentage >= 5 ? (0, r.jsxs)(r.Fragment, {
      children: [C, (0, r.jsx)(o.Heading, {
        variant: _,
        color: "text-positive",
        className: l.discount,
        children: " (-".concat(g.discountPercentage, "%)")
      })]
    }) : C;
    return (0, r.jsx)(r.Fragment, {
      children: (0, r.jsxs)(o.Heading, {
        variant: _,
        className: a()(l.container, f),
        children: [p, null !== (t = null == u ? void 0 : u(b)) && void 0 !== t ? t : b]
      })
    })
  }