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
  n = a("979554"),
  i = a("399606"),
  o = a("481060"),
  c = a("594174"),
  u = a("466111"),
  d = a("74538"),
  f = a("884697"),
  C = a("409116"),
  m = a("981631"),
  p = a("689938"),
  g = a("577687");

function E(e) {
  let {
    product: t,
    className: a,
    renderNitroPrice: s
  } = e, E = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser()), h = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == h) return null;
  if (h.amount <= 0) return (0, l.jsx)("div", {
    className: r()(g.priceTagsContainer, a),
    children: (0, l.jsx)(C.default, {
      price: h
    })
  });
  let b = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    x = d.default.canUseCollectibles(E),
    v = !x && t.type !== n.CollectiblesItemType.BUNDLE;
  return (0, l.jsxs)("div", {
    className: r()(g.priceTagsContainer, a),
    children: [(0, l.jsx)(C.default, {
      price: h,
      discount: x ? void 0 : (0, f.getProductDiscount)(t, x),
      className: r()(g.price, {
        [g.striked]: x,
        [g.dimmed]: x,
        [g.fullPrice]: v
      })
    }), null != b && (0, l.jsx)(C.default, {
      price: b,
      discount: x ? (0, f.getProductDiscount)(t, x) : void 0,
      renderPrice: null != s ? s : v ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(g.price, {
        [g.dimmed]: !x,
        [g.fullPrice]: v
      }),
      variant: x ? void 0 : "text-xs/semibold",
      icon: (0, l.jsx)(o.Tooltip, {
        text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(u.default, {
            ...t,
            className: r()(g.premiumIcon, {
              [g.fullPrice]: v
            })
          })
        }
      })
    })]
  })
}