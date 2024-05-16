"use strict";
l.r(t), l.d(t, {
  default: function() {
    return g
  }
});
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("399606"),
  i = l("663002"),
  o = l("481060"),
  u = l("210887"),
  c = l("594174"),
  d = l("466111"),
  f = l("74538"),
  C = l("884697"),
  m = l("409116"),
  p = l("981631"),
  E = l("689938"),
  h = l("577687");

function g(e) {
  let {
    product: t,
    className: l,
    innerClassName: s,
    disableTooltipPointerEvents: g,
    alwaysWhiteText: x = !0,
    nitroWheelColor: b
  } = e, T = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), L = (0, n.useStateFromStores)([u.default], () => (0, i.isThemeDark)(u.default.theme)), v = (0, C.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == v) return null;
  if (v.amount <= 0) return (0, a.jsx)("div", {
    className: r()(h.priceTagsContainer, l),
    children: (0, a.jsx)(m.default, {
      alwaysWhiteText: x,
      price: v,
      className: s
    })
  });
  let S = (0, C.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    I = !f.default.canUseCollectibles(T);
  return (0, a.jsxs)("div", {
    className: r()(h.priceTagsContainer, l),
    children: [(0, a.jsx)(m.default, {
      alwaysWhiteText: x,
      price: v,
      className: r()([s, I ? void 0 : h.strikedPrice])
    }), null != S && (0, a.jsx)(m.default, {
      price: S,
      alwaysWhiteText: x,
      renderPrice: I ? e => E.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()([s, I ? h.fullPrice : void 0]),
      variant: I ? "text-xs/semibold" : void 0,
      icon: (0, a.jsx)(o.Tooltip, {
        text: E.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": E.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: g,
        children: e => {
          let {
            ...t
          } = e;
          return (0, a.jsx)(d.default, {
            ...t,
            className: r()(h.premiumIcon, {
              [h.fullPrice]: I
            }),
            color: null != b ? b : x || L ? "white" : "black"
          })
        }
      })
    })]
  })
}