"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("399606"),
  i = a("481060"),
  o = a("594174"),
  u = a("466111"),
  c = a("74538"),
  d = a("884697"),
  f = a("409116"),
  C = a("981631"),
  m = a("689938"),
  p = a("577687");

function E(e) {
  let {
    product: t,
    className: a,
    renderNitroPrice: s
  } = e, E = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = (0, d.extractPriceByPurchaseTypes)(t, C.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == h) return null;
  if (h.amount <= 0) return (0, l.jsx)("div", {
    className: r()(p.priceTagsContainer, a),
    children: (0, l.jsx)(f.default, {
      price: h
    })
  });
  let g = (0, d.extractPriceByPurchaseTypes)(t, C.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    x = !c.default.canUseCollectibles(E);
  return (0, l.jsxs)("div", {
    className: r()(p.priceTagsContainer, a),
    children: [(0, l.jsx)(f.default, {
      price: h,
      className: x ? p.defaultPrice : p.strikedPrice
    }), null != g && (0, l.jsx)(f.default, {
      price: g,
      renderPrice: null != s ? s : x ? e => m.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: x ? p.fullPrice : void 0,
      variant: x ? "text-xs/semibold" : void 0,
      icon: (0, l.jsx)(i.Tooltip, {
        text: m.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": m.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(u.default, {
            ...t,
            className: r()(p.premiumIcon, {
              [p.fullPrice]: x
            })
          })
        }
      })
    })]
  })
}