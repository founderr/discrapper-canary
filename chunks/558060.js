"use strict";
a.r(t), a.d(t, {
  default: function() {
    return p
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("481060"),
  i = a("466111"),
  o = a("884697"),
  c = a("409116"),
  u = a("200615"),
  d = a("981631"),
  f = a("689938"),
  C = a("577687");

function p(e) {
  let {
    product: t,
    isPremiumUser: a,
    discount: s,
    className: p,
    nitroUpsell: m = !1
  } = e, g = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, l.jsx)("div", {
    className: r()(C.priceTagsContainer, p),
    children: (0, l.jsx)(c.default, {
      price: g
    })
  });
  let E = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    h = !a && !(0, o.isBundleProduct)(t);
  return (0, l.jsxs)("div", {
    className: r()(C.priceTagsContainer, p),
    children: [(0, l.jsx)(c.default, {
      price: g,
      discount: a ? void 0 : s,
      className: r()(C.price, {
        [C.striked]: a,
        [C.dimmed]: a,
        [C.fullPrice]: h
      })
    }), null != E && (0, l.jsx)(c.default, {
      price: E,
      discount: a ? s : void 0,
      renderPrice: m ? e => (0, l.jsx)(n.Text, {
        variant: "text-xs/medium",
        children: f.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
          price: e,
          subscribeNowHook: e => (0, l.jsx)(u.SubscribeNow, {
            text: e
          })
        })
      }) : h ? e => f.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(C.price, {
        [C.dimmed]: !a,
        [C.fullPrice]: h
      }),
      variant: a ? void 0 : "text-xs/semibold",
      icon: (0, l.jsx)(n.Tooltip, {
        text: f.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": f.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(i.default, {
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