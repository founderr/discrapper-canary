"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("65597"),
  i = a("755854"),
  o = a("77078"),
  u = a("161778"),
  c = a("697218"),
  d = a("216422"),
  f = a("719923"),
  m = a("491232"),
  C = a("791309"),
  E = a("49111"),
  h = a("782340"),
  p = a("193527");

function g(e) {
  let {
    product: t,
    className: a,
    disableTooltipPointerEvents: s,
    alwaysWhiteText: g = !0
  } = e, T = (0, n.default)([c.default], () => c.default.getCurrentUser()), L = (0, n.default)([u.default], () => (0, i.isThemeDark)(u.default.theme)), x = (0, m.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == x) return null;
  if (x.amount <= 0) return (0, l.jsx)("div", {
    className: r(p.priceTagsContainer, a),
    children: (0, l.jsx)(C.default, {
      alwaysWhiteText: g,
      price: x
    })
  });
  let b = (0, m.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    v = !f.default.canUseCollectibles(T);
  return (0, l.jsxs)("div", {
    className: r(p.priceTagsContainer, a),
    children: [(0, l.jsx)(C.default, {
      alwaysWhiteText: g,
      price: x,
      className: v ? void 0 : p.strikedPrice
    }), null != b && (0, l.jsx)(C.default, {
      price: b,
      alwaysWhiteText: g,
      renderPrice: v ? e => h.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: v ? p.fullPrice : void 0,
      variant: v ? "text-xs/semibold" : void 0,
      icon: (0, l.jsx)(o.Tooltip, {
        text: h.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": h.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: s,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(d.default, {
            ...t,
            className: r(p.premiumIcon, {
              [p.fullPrice]: v
            }),
            color: g || L ? "white" : "black"
          })
        }
      })
    })]
  })
}