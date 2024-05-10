"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var l = a("735250");
a("470079");
var s = a("120356"),
  r = a.n(s),
  n = a("399606"),
  i = a("663002"),
  o = a("481060"),
  u = a("210887"),
  c = a("594174"),
  d = a("466111"),
  f = a("74538"),
  C = a("884697"),
  m = a("409116"),
  E = a("981631"),
  p = a("689938"),
  h = a("577687");

function g(e) {
  let {
    product: t,
    className: a,
    innerClassName: s,
    disableTooltipPointerEvents: g,
    alwaysWhiteText: x = !0,
    nitroWheelColor: T
  } = e, L = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), v = (0, n.useStateFromStores)([u.default], () => (0, i.isThemeDark)(u.default.theme)), b = (0, C.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == b) return null;
  if (b.amount <= 0) return (0, l.jsx)("div", {
    className: r()(h.priceTagsContainer, a),
    children: (0, l.jsx)(m.default, {
      alwaysWhiteText: x,
      price: b,
      className: s
    })
  });
  let S = (0, C.extractPriceByPurchaseTypes)(t, E.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    I = !f.default.canUseCollectibles(L);
  return (0, l.jsxs)("div", {
    className: r()(h.priceTagsContainer, a),
    children: [(0, l.jsx)(m.default, {
      alwaysWhiteText: x,
      price: b,
      className: r()([s, I ? void 0 : h.strikedPrice])
    }), null != S && (0, l.jsx)(m.default, {
      price: S,
      alwaysWhiteText: x,
      renderPrice: I ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()([s, I ? h.fullPrice : void 0]),
      variant: I ? "text-xs/semibold" : void 0,
      icon: (0, l.jsx)(o.Tooltip, {
        text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: g,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(d.default, {
            ...t,
            className: r()(h.premiumIcon, {
              [h.fullPrice]: I
            }),
            color: null != T ? T : x || v ? "white" : "black"
          })
        }
      })
    })]
  })
}