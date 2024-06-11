"use strict";
s.r(t);
var i = s("735250");
s("470079");
var n = s("442837"),
  r = s("481060"),
  l = s("78839"),
  a = s("730314"),
  o = s("639119"),
  C = s("197115"),
  u = s("823188"),
  d = s("474936"),
  _ = s("231338"),
  p = s("69769");

function c(e) {
  let {
    subscriptionTier: t,
    onClick: s
  } = e, n = (0, o.usePremiumTrialOffer)(), l = null == n ? void 0 : n.subscription_trial;
  return (0, i.jsx)(C.default, {
    color: r.ButtonColors.BRAND_INVERTED,
    buttonShineClassName: p.buttonShine,
    trialId: null == l ? void 0 : l.id,
    className: p.subButton,
    buttonTextClassName: p.subscribeButtonText,
    onlyShineOnHover: !0,
    subscriptionTier: t,
    onClickOverride: s,
    showIcon: !1
  })
}

function f(e) {
  let {
    onClick: t,
    isGift: s,
    priceOptions: n,
    shouldUseModifiedTierCards: l,
    isPremium: a,
    subscriptionTier: o
  } = e;
  return (0, i.jsx)(r.Clickable, {
    onClick: l && !a ? _.NOOP_NULL : t,
    style: l && !a ? void 0 : {
      cursor: "pointer"
    },
    children: (0, i.jsx)(u.Tier2Card, {
      className: p.tier2MarketingCard,
      ctaButton: l && !a ? (0, i.jsx)(c, {
        subscriptionTier: o,
        onClick: t
      }) : void 0,
      showWumpus: !l,
      showYearlyPrice: !0,
      isGift: s,
      isModal: !0,
      priceOptions: n,
      shouldUseModifiedCopy: l
    })
  })
}

function x(e) {
  let {
    onClick: t,
    isGift: s,
    priceOptions: n,
    shouldUseModifiedTierCards: l,
    isPremium: a,
    subscriptionTier: o
  } = e;
  return (0, i.jsx)(r.Clickable, {
    onClick: l && !a ? _.NOOP_NULL : t,
    style: l && !a ? void 0 : {
      cursor: "pointer"
    },
    children: (0, i.jsx)(u.Tier0Card, {
      className: p.tier0MarketingCard,
      ctaButton: l && !a ? (0, i.jsx)(c, {
        subscriptionTier: o,
        onClick: t
      }) : void 0,
      showWumpus: !l,
      showYearlyPrice: !0,
      isGift: s,
      priceOptions: n,
      shouldUseModifiedCopy: l
    })
  })
}
t.default = function(e) {
  let {
    onSelectSku: t,
    isGift: s,
    priceOptions: r
  } = e, {
    bucket: o
  } = (0, a.usePremiumTierCardsExperiment)("PremiumMarketingHome"), C = (0, n.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription()), u = o > 0;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(f, {
      onClick: () => t(d.PremiumSubscriptionSKUs.TIER_2),
      isGift: s,
      priceOptions: r,
      shouldUseModifiedTierCards: u,
      isPremium: null != C,
      subscriptionTier: d.PremiumSubscriptionSKUs.TIER_2
    }), (0, i.jsx)(x, {
      onClick: () => t(d.PremiumSubscriptionSKUs.TIER_0),
      isGift: s,
      priceOptions: r,
      shouldUseModifiedTierCards: u,
      isPremium: null != C,
      subscriptionTier: d.PremiumSubscriptionSKUs.TIER_0
    })]
  })
}