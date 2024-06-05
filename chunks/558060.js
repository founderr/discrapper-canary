"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  n = s("481060"),
  i = s("466111"),
  o = s("884697"),
  c = s("409116"),
  u = s("200615"),
  d = s("981631"),
  f = s("689938"),
  C = s("577687");

function p(e) {
  let {
    product: t,
    isPremiumUser: s,
    discount: l,
    className: p,
    nitroUpsell: m = !1
  } = e, g = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, a.jsx)("div", {
    className: r()(C.priceTagsContainer, p),
    children: (0, a.jsx)(c.CollectiblesShopPriceTag, {
      price: g
    })
  });
  let E = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    h = !s && !(0, o.isBundleProduct)(t),
    b = (0, o.isBundleProduct)(t) && s ? {
      ...g,
      amount: l.original
    } : g;
  return (0, a.jsxs)("div", {
    className: r()(C.priceTagsContainer, p),
    children: [(0, a.jsx)(c.CollectiblesShopPriceTag, {
      price: b,
      discount: s ? o.NoDiscount : l,
      className: r()(C.price, {
        [C.striked]: s,
        [C.dimmed]: s,
        [C.fullPrice]: h
      })
    }), null != E && (0, a.jsx)(c.CollectiblesShopPriceTag, {
      price: E,
      discount: s ? l : o.NoDiscount,
      renderPrice: m ? e => (0, a.jsx)(n.Text, {
        variant: "text-xs/medium",
        children: f.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, a.jsx)(u.SubscribeNow, {
            text: e
          })
        })
      }) : h ? e => f.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(C.price, {
        [C.dimmed]: !s,
        [C.fullPrice]: h
      }),
      variant: s ? void 0 : "text-xs/semibold",
      icon: (0, a.jsx)(n.Tooltip, {
        text: f.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": f.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, a.jsx)(i.default, {
            ...t,
            className: r()(C.premiumIcon, {
              [C.fullPrice]: h
            })
          })
        }
      })
    })]
  })
}