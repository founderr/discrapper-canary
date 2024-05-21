"use strict";
a.r(t), a.d(t, {
  default: function() {
    return h
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("979554"),
  i = a("399606"),
  o = a("481060"),
  u = a("594174"),
  c = a("466111"),
  d = a("74538"),
  f = a("884697"),
  C = a("409116"),
  m = a("981631"),
  p = a("689938"),
  E = a("577687");

function h(e) {
  let {
    product: t,
    className: a,
    renderNitroPrice: s
  } = e, h = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser()), g = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, l.jsx)("div", {
    className: r()(E.priceTagsContainer, a),
    children: (0, l.jsx)(C.default, {
      price: g
    })
  });
  let x = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    v = d.default.canUseCollectibles(h),
    b = !v && t.type !== n.CollectiblesItemType.BUNDLE;
  return (0, l.jsxs)("div", {
    className: r()(E.priceTagsContainer, a),
    children: [(0, l.jsx)(C.default, {
      price: g,
      discount: v ? void 0 : (0, f.getProductDiscount)(t, v),
      className: r()(E.price, {
        [E.striked]: v,
        [E.dimmed]: v,
        [E.fullPrice]: b
      })
    }), null != x && (0, l.jsx)(C.default, {
      price: x,
      discount: v ? (0, f.getProductDiscount)(t, v) : void 0,
      renderPrice: null != s ? s : b ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(E.price, {
        [E.dimmed]: !v,
        [E.fullPrice]: b
      }),
      variant: v ? void 0 : "text-xs/semibold",
      icon: (0, l.jsx)(o.Tooltip, {
        text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(c.default, {
            ...t,
            className: r()(E.premiumIcon, {
              [E.fullPrice]: b
            })
          })
        }
      })
    })]
  })
}