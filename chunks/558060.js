"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("481060"),
  i = l("466111"),
  o = l("884697"),
  c = l("409116"),
  u = l("200615"),
  d = l("981631"),
  f = l("689938"),
  C = l("577687");

function p(e) {
  let {
    product: t,
    isPremiumUser: l,
    discount: s,
    className: p,
    nitroUpsell: m = !1
  } = e, g = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == g) return null;
  if (g.amount <= 0) return (0, a.jsx)("div", {
    className: r()(C.priceTagsContainer, p),
    children: (0, a.jsx)(c.default, {
      price: g
    })
  });
  let E = (0, o.extractPriceByPurchaseTypes)(t, d.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    h = !l && !(0, o.isBundleProduct)(t);
  return (0, a.jsxs)("div", {
    className: r()(C.priceTagsContainer, p),
    children: [(0, a.jsx)(c.default, {
      price: g,
      discount: l ? void 0 : s,
      className: r()(C.price, {
        [C.striked]: l,
        [C.dimmed]: l,
        [C.fullPrice]: h
      })
    }), null != E && (0, a.jsx)(c.default, {
      price: E,
      discount: l ? s : void 0,
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
        [C.dimmed]: !l,
        [C.fullPrice]: h
      }),
      variant: l ? void 0 : "text-xs/semibold",
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