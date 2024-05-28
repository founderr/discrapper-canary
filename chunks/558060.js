"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var s = a("735250");
a("470079");
var r = a("120356"),
  n = a.n(r),
  l = a("399606"),
  o = a("481060"),
  i = a("594174"),
  c = a("466111"),
  u = a("74538"),
  d = a("884697"),
  f = a("409116"),
  C = a("200615"),
  p = a("981631"),
  m = a("689938"),
  g = a("577687");

function E(e) {
  let {
    product: t,
    className: a,
    nitroUpsell: r = !1
  } = e, E = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser()), b = (0, d.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == b) return null;
  if (b.amount <= 0) return (0, s.jsx)("div", {
    className: n()(g.priceTagsContainer, a),
    children: (0, s.jsx)(f.default, {
      price: b
    })
  });
  let h = (0, d.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    S = u.default.canUseCollectibles(E),
    T = !S && !(0, d.isBundleProduct)(t);
  return (0, s.jsxs)("div", {
    className: n()(g.priceTagsContainer, a),
    children: [(0, s.jsx)(f.default, {
      price: b,
      discount: S ? void 0 : (0, d.getProductDiscount)(t, S),
      className: n()(g.price, {
        [g.striked]: S,
        [g.dimmed]: S,
        [g.fullPrice]: T
      })
    }), null != h && (0, s.jsx)(f.default, {
      price: h,
      discount: S ? (0, d.getProductDiscount)(t, S) : void 0,
      renderPrice: r ? e => (0, s.jsx)(o.Text, {
        variant: "text-xs/medium",
        children: m.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, s.jsx)(C.SubscribeNow, {
            text: e
          })
        })
      }) : T ? e => m.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: n()(g.price, {
        [g.dimmed]: !S,
        [g.fullPrice]: T
      }),
      variant: S ? void 0 : "text-xs/semibold",
      icon: (0, s.jsx)(o.Tooltip, {
        text: m.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": m.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, s.jsx)(c.default, {
            ...t,
            className: n()(g.premiumIcon, {
              [g.fullPrice]: T
            })
          })
        }
      })
    })]
  })
}