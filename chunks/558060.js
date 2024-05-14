"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
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
  g = l("577687");

function h(e) {
  let {
    product: t,
    className: l,
    innerClassName: s,
    disableTooltipPointerEvents: h,
    alwaysWhiteText: b = !0,
    nitroWheelColor: x
  } = e, v = (0, n.useStateFromStores)([c.default], () => c.default.getCurrentUser()), T = (0, n.useStateFromStores)([u.default], () => (0, i.isThemeDark)(u.default.theme)), L = (0, C.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == L) return null;
  if (L.amount <= 0) return (0, a.jsx)("div", {
    className: r()(g.priceTagsContainer, l),
    children: (0, a.jsx)(m.default, {
      alwaysWhiteText: b,
      price: L,
      className: s
    })
  });
  let S = (0, C.extractPriceByPurchaseTypes)(t, p.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    I = !f.default.canUseCollectibles(v);
  return (0, a.jsxs)("div", {
    className: r()(g.priceTagsContainer, l),
    children: [(0, a.jsx)(m.default, {
      alwaysWhiteText: b,
      price: L,
      className: r()([s, I ? void 0 : g.strikedPrice])
    }), null != S && (0, a.jsx)(m.default, {
      price: S,
      alwaysWhiteText: b,
      renderPrice: I ? e => E.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()([s, I ? g.fullPrice : void 0]),
      variant: I ? "text-xs/semibold" : void 0,
      icon: (0, a.jsx)(o.Tooltip, {
        text: E.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": E.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        disableTooltipPointerEvents: h,
        children: e => {
          let {
            ...t
          } = e;
          return (0, a.jsx)(d.default, {
            ...t,
            className: r()(g.premiumIcon, {
              [g.fullPrice]: I
            }),
            color: null != x ? x : b || T ? "white" : "black"
          })
        }
      })
    })]
  })
}