"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("399606"),
  r = s("481060"),
  l = s("78839"),
  n = s("63063"),
  o = s("958589"),
  u = s("276800"),
  d = s("409100"),
  c = s("474936"),
  _ = s("981631"),
  E = s("689938"),
  C = s("810623");
t.default = function() {
  let e = (0, i.useStateFromStores)([l.default], () => l.default.getPremiumTypeSubscription());
  if (!o.default.useExperiment({
      location: "April2024MarketingBanner"
    }).enabled) return null;
  let t = new Date("2024-05-02T06:59:59Z");
  return (0, a.jsx)("div", {
    className: C.banner,
    children: (0, a.jsxs)("div", {
      className: C.bannerContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.Heading, {
          variant: "display-sm",
          color: "always-white",
          children: E.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER
        }), (0, a.jsx)(r.Text, {
          className: C.countdown,
          variant: "text-sm/medium",
          children: (0, a.jsx)(u.default, {
            endDate: t
          })
        }), (0, a.jsx)(r.Text, {
          className: C.bannerSubheader,
          variant: "text-sm/medium",
          color: "always-white",
          children: null == e ? E.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_NON_SUB.format({
            helpCenterLink: n.default.getArticleURL(_.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
          }) : E.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_UPGRADE.format({
            helpCenterLink: n.default.getArticleURL(_.HelpdeskArticles.PREMIUM_APRIL_2024_MARKETING_MOMENT)
          })
        })]
      }), (0, a.jsx)(d.default, {
        buttonText: null == e ? E.default.Messages.BOGO_CLAIM_OFFER : E.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_BUTTON_CTA_NON_TIER_2_SUB,
        buttonTextClassName: C.subscribeButtonText,
        subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
        className: C.subscribeButton,
        showIcon: !1,
        forceInverted: !0
      })]
    })
  })
}