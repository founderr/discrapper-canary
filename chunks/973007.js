"use strict";
s.r(t);
var n = s("735250");
s("470079");
var r = s("481060"),
  i = s("823188"),
  l = s("474936"),
  a = s("531128");

function o(e) {
  let {
    onClick: t,
    isGift: s,
    priceOptions: l
  } = e;
  return (0, n.jsx)(r.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, n.jsx)(i.Tier2Card, {
      className: a.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: s,
      isModal: !0,
      priceOptions: l
    })
  })
}

function C(e) {
  let {
    onClick: t,
    isGift: s,
    priceOptions: l
  } = e;
  return (0, n.jsx)(r.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, n.jsx)(i.Tier0Card, {
      className: a.tier0MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: s,
      priceOptions: l
    })
  })
}
t.default = function(e) {
  let {
    onSelectSku: t,
    isGift: s,
    priceOptions: r
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(o, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_2),
      isGift: s,
      priceOptions: r
    }), (0, n.jsx)(C, {
      onClick: () => t(l.PremiumSubscriptionSKUs.TIER_0),
      isGift: s,
      priceOptions: r
    })]
  })
}