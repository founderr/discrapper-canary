"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  n = s.n(l),
  r = s("481060"),
  i = s("466111"),
  o = s("884697"),
  u = s("409116"),
  c = s("200615"),
  d = s("981631"),
  f = s("689938"),
  C = s("577687");

function E(e) {
  let {
    product: t,
    isPremiumUser: s,
    discount: l,
    className: E,
    nitroUpsell: p = !1
  } = e, m = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == m) return null;
  if (m.amount <= 0) return (0, a.jsx)("div", {
    className: n()(C.priceTagsContainer, E),
    children: (0, a.jsx)(u.CollectiblesShopPriceTag, {
      price: m
    })
  });
  let g = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    h = !s && !(0, o.isBundleProduct)(t),
    S = (0, o.isBundleProduct)(t) && s ? {
      ...m,
      amount: l.original
    } : m;
  return (0, a.jsxs)("div", {
    className: n()(C.priceTagsContainer, E),
    children: [(0, a.jsx)(u.CollectiblesShopPriceTag, {
      price: S,
      discount: s ? o.NoDiscount : l,
      className: n()(C.price, {
        [C.striked]: s,
        [C.dimmed]: s,
        [C.fullPrice]: h
      })
    }), null != g && (0, a.jsx)(u.CollectiblesShopPriceTag, {
      price: g,
      discount: s ? l : o.NoDiscount,
      renderPrice: p ? e => (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        children: f.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, a.jsx)(c.SubscribeNow, {
            text: e
          })
        })
      }) : h ? e => f.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: n()(C.price, {
        [C.dimmed]: !s,
        [C.fullPrice]: h
      }),
      variant: s ? void 0 : "text-xs/semibold",
      icon: (0, a.jsx)(r.Tooltip, {
        text: f.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": f.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, a.jsx)(i.default, {
            ...t,
            className: n()(C.premiumIcon, {
              [C.fullPrice]: h
            })
          })
        }
      })
    })]
  })
}