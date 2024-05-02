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
  m = a("884697"),
  C = a("409116"),
  p = a("981631"),
  h = a("689938"),
  E = a("663316");

function g(e) {
  let {
    product: t,
    className: a,
    innerClassName: s,
    disableTooltipPointerEvents: g,
    alwaysWhiteText: x = !0,
    nitroWheelColor: S
  } = e, b = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), T = (0, n.useStateFromStores)([u.default], () => (0, i.isThemeDark)(u.default.theme)), v = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == v) return null;
  if (v.amount <= 0) return (0, l.jsx)("div", {
    className: r()(E.priceTagsContainer, a),
    children: (0, l.jsx)(C.default, {
      alwaysWhiteText: x,
      price: v,
      className: s
    })
  });
  let L = (0, m.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    I = !f.default.canUseCollectibles(b);
  return (0, l.jsxs)("div", {
    className: r()(E.priceTagsContainer, a),
    children: [(0, l.jsx)(C.default, {
      alwaysWhiteText: x,
      price: v,
      className: r()([s, I ? void 0 : E.strikedPrice])
    }), null != L && (0, l.jsx)(C.default, {
      price: L,
      alwaysWhiteText: x,
      renderPrice: I ? e => h.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()([s, I ? E.fullPrice : void 0]),
      variant: I ? "text-xs/semibold" : void 0,
      icon: (0, l.jsx)(o.Tooltip, {
        text: h.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": h.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: g,
        children: e => {
          let {
            ...t
          } = e;
          return (0, l.jsx)(d.default, {
            ...t,
            className: r()(E.premiumIcon, {
              [E.fullPrice]: I
            }),
            color: null != S ? S : x || T ? "white" : "black"
          })
        }
      })
    })]
  })
}