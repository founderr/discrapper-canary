"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  l = s("399606"),
  n = s("481060"),
  o = s("78839"),
  u = s("63063"),
  d = s("958589"),
  c = s("276800"),
  _ = s("409100"),
  E = s("474936"),
  C = s("981631"),
  f = s("689938"),
  T = s("810623");
t.default = function(e) {
  let {
    isFullscreen: t
  } = e, s = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription());
  if (!d.default.useExperiment({
      location: "April2024MarketingBanner"
    }).enabled) return null;
  let i = new Date;
  return (0, a.jsx)("div", {
    className: r()(T.banner, {
      [T.bannerFullscreen]: t
    }),
    children: (0, a.jsxs)("div", {
      className: T.bannerContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(n.Heading, {
          className: r()({
            [T.bannerHeaderNarrow]: !t
          }),
          variant: "display-sm",
          color: "always-white",
          children: f.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_HEADER
        }), (0, a.jsx)(n.Text, {
          className: T.countdown,
          variant: "text-sm/medium",
          children: (0, a.jsx)(c.default, {
            endDate: i
          })
        }), (0, a.jsx)(n.Text, {
          className: T.bannerSubheader,
          variant: "text-sm/medium",
          color: "always-white",
          children: null == s ? f.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_NON_SUB.format({
            helpCenterLink: u.default.getArticleURL(C.HelpdeskArticles.SUMMER_2023_BOGO)
          }) : f.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_BANNER_BODY_UPGRADE.format({
            helpCenterLink: u.default.getArticleURL(C.HelpdeskArticles.SUMMER_2023_BOGO)
          })
        })]
      }), (0, a.jsx)(_.default, {
        buttonText: null == s ? f.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_BUTTON_CTA_NON_SUB : f.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_BUTTON_CTA_NON_TIER_2_SUB,
        buttonTextClassName: T.subscribeButtonText,
        subscriptionTier: E.PremiumSubscriptionSKUs.TIER_2,
        className: T.subscribeButton,
        showIcon: !1,
        forceInverted: !0
      })]
    })
  })
}