"use strict";
t.d(s, {
  F: function() {
    return d
  }
}), t(757143);
var n = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  i = t(481060),
  l = t(937615),
  o = t(884697),
  c = t(713055);
let u = e => e.length > 5 ? e.replace(/\.00$/, "") : e,
  d = e => {
    var s;
    let {
      price: {
        amount: t,
        currency: a
      },
      renderPrice: d,
      icon: C,
      className: f,
      discount: E = o.f_,
      variant: p = "heading-md/semibold"
    } = e, g = u((0, l.T4)(t, a)), m = E !== o.f_ && E.discountPercentage >= 5 ? (0, n.jsxs)(n.Fragment, {
      children: [g, (0, n.jsx)(i.Heading, {
        variant: p,
        color: "text-positive",
        className: c.discount,
        children: " (-".concat(E.discountPercentage, "%)")
      })]
    }) : g;
    return (0, n.jsx)(n.Fragment, {
      children: (0, n.jsxs)(i.Heading, {
        variant: p,
        className: r()(c.container, f),
        children: [C, null !== (s = null == d ? void 0 : d(m)) && void 0 !== s ? s : m]
      })
    })
  }