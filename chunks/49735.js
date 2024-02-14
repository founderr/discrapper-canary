"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var r = n("77078"),
  l = n("400307"),
  a = n("646718"),
  i = n("932865");

function u(e) {
  let {
    onClick: t,
    isGift: n
  } = e;
  return (0, s.jsx)(r.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, s.jsx)(l.Tier2Card, {
      className: i.tier2MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n,
      isModal: !0
    })
  })
}

function o(e) {
  let {
    onClick: t,
    isGift: n
  } = e;
  return (0, s.jsx)(r.Clickable, {
    onClick: t,
    style: {
      cursor: "pointer"
    },
    children: (0, s.jsx)(l.Tier0Card, {
      className: i.tier0MarketingCard,
      ctaButton: null,
      showWumpus: !0,
      showYearlyPrice: !0,
      isGift: n
    })
  })
}
var d = function(e) {
  let {
    onSelectSku: t,
    isGift: n
  } = e;
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(u, {
      onClick: () => t(a.PremiumSubscriptionSKUs.TIER_2),
      isGift: n
    }), (0, s.jsx)(o, {
      onClick: () => t(a.PremiumSubscriptionSKUs.TIER_0),
      isGift: n
    })]
  })
}