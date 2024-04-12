"use strict";
a.r(t), a.d(t, {
  default: function() {
    return E
  }
});
var l = a("735250");
a("470079");
var s = a("803997"),
  r = a.n(s),
  n = a("399606"),
  o = a("663002"),
  i = a("481060"),
  u = a("210887"),
  c = a("594174"),
  d = a("466111"),
  f = a("74538"),
  m = a("884697"),
  C = a("409116"),
  h = a("981631"),
  g = a("689938"),
  p = a("951841");

function E(e) {
  let {
    product: t,
    className: a,
    innerClassName: s,
    disableTooltipPointerEvents: E,
    alwaysWhiteText: b = !0,
    nitroWheelColor: S
  } = e, T = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), x = (0, n.useStateFromStores)([u.default], () => (0, o.isThemeDark)(u.default.theme)), v = (0, m.extractPriceByPurchaseTypes)(t, h.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == v) return null;
  if (v.amount <= 0) return (0, l.jsx)("div", {
    className: r()(p.priceTagsContainer, a),
    children: (0, l.jsx)(C.default, {
      alwaysWhiteText: b,
      price: v,
      className: s
    })
  });
  let L = (0, m.extractPriceByPurchaseTypes)(t, h.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    I = !f.default.canUseCollectibles(T);
  return (0, l.jsxs)("div", {
    className: r()(p.priceTagsContainer, a),
    children: [(0, l.jsx)(C.default, {
      alwaysWhiteText: b,
      price: v,
      className: r()([s, I ? void 0 : p.strikedPrice])
    }), null != L && (0, l.jsx)(C.default, {
      price: L,
      alwaysWhiteText: b,
      renderPrice: I ? e => g.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()([s, I ? p.fullPrice : void 0]),
      variant: I ? "text-xs/semibold" : void 0,
      icon: (0, l.jsx)(i.Tooltip, {
        text: g.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": g.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: E,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(d.default, {
            ...t,
            className: r()(p.premiumIcon, {
              [p.fullPrice]: I
            }),
            color: null != S ? S : b || x ? "white" : "black"
          })
        }
      })
    })]
  })
}