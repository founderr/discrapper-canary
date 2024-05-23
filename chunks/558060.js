"use strict";
l.r(t), l.d(t, {
  default: function() {
    return E
  }
});
var a = l("735250");
l("470079");
var s = l("120356"),
  r = l.n(s),
  n = l("979554"),
  i = l("399606"),
  o = l("481060"),
  c = l("594174"),
  u = l("466111"),
  d = l("74538"),
  f = l("884697"),
  C = l("409116"),
  m = l("981631"),
  p = l("689938"),
  g = l("577687");

function E(e) {
  let {
    product: t,
    className: l,
    renderNitroPrice: s
  } = e, E = (0, i.useStateFromStores)([c.default], () => c.default.getCurrentUser()), h = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.DEFAULT);
  if (null == h) return null;
  if (h.amount <= 0) return (0, a.jsx)("div", {
    className: r()(g.priceTagsContainer, l),
    children: (0, a.jsx)(C.default, {
      price: h
    })
  });
  let b = (0, f.extractPriceByPurchaseTypes)(t, m.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2),
    x = d.default.canUseCollectibles(E),
    v = !x && t.type !== n.CollectiblesItemType.BUNDLE;
  return (0, a.jsxs)("div", {
    className: r()(g.priceTagsContainer, l),
    children: [(0, a.jsx)(C.default, {
      price: h,
      discount: x ? void 0 : (0, f.getProductDiscount)(t, x),
      className: r()(g.price, {
        [g.striked]: x,
        [g.dimmed]: x,
        [g.fullPrice]: v
      })
    }), null != b && (0, a.jsx)(C.default, {
      price: b,
      discount: x ? (0, f.getProductDiscount)(t, x) : void 0,
      renderPrice: null != s ? s : v ? e => p.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE.format({
        price: e
      }) : void 0,
      className: r()(g.price, {
        [g.dimmed]: !x,
        [g.fullPrice]: v
      }),
      variant: x ? void 0 : "text-xs/semibold",
      icon: (0, a.jsx)(o.Tooltip, {
        text: p.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
        "aria-label": p.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
        children: e => {
          let {
            ...t
          } = e;
          return (0, a.jsx)(u.default, {
            ...t,
            className: r()(g.premiumIcon, {
              [g.fullPrice]: v
            })
          })
        }
      })
    })]
  })
}