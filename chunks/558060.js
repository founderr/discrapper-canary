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
    nitroUpsell: s = !1
  } = e, E = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser()), h = (0, d.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == h) return null;
  if (h.amount <= 0) return (0, l.jsx)("div", {
    className: r()(g.priceTagsContainer, a),
    children: (0, l.jsx)(f.default, {
      price: h
    })
  });
  let b = (0, d.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    x = u.default.canUseCollectibles(E),
    S = !x && !(0, d.isBundleProduct)(t);
  return (0, l.jsxs)("div", {
    className: r()(g.priceTagsContainer, a),
    children: [(0, l.jsx)(f.default, {
      price: h,
      discount: x ? void 0 : (0, d.getProductDiscount)(t, x),
      className: r()(g.price, {
        [g.striked]: x,
        [g.dimmed]: x,
        [g.fullPrice]: S
      })
    }), null != b && (0, l.jsx)(f.default, {
      price: b,
      discount: x ? (0, d.getProductDiscount)(t, x) : void 0,
      renderPrice: s ? e => (0, l.jsx)(i.Text, {
        variant: "text-xs/medium",
        children: m.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, l.jsx)(C.SubscribeNow, {
            text: e
          })
        })
      }) : S ? e => m.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(g.price, {
        [g.dimmed]: !x,
        [g.fullPrice]: S
      }),
      variant: x ? void 0 : "text-xs/semibold",
      icon: (0, l.jsx)(i.Tooltip, {
        text: m.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": m.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(c.default, {
            ...t,
            className: r()(g.premiumIcon, {
              [g.fullPrice]: S
            })
          })
        }
      })
    })]
  })
}