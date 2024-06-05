"use strict";
s.r(t);
var a = s("735250");
s("470079");
var r = s("120356"),
  i = s.n(r),
  n = s("399606"),
  l = s("481060"),
  o = s("78839"),
  u = s("63063"),
  d = s("276800"),
  c = s("248042"),
  _ = s("409100"),
  E = s("725727"),
  T = s("474936"),
  I = s("981631"),
  R = s("689938"),
  f = s("500810");
t.default = function(e) {
  let {
    isFullscreen: t
  } = e, {
    promotion: s
  } = (0, E.useBogoPromotion)(), r = (0, n.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription());
  if (!(0, c.useIsEligibleForBogoPromotion)()) return null;
  let S = new Date(s.endDate);
  return (0, a.jsx)("div", {
    className: i()(f.banner, {
      [f.bannerFullscreen]: t
    }),
    children: (0, a.jsxs)("div", {
      className: f.bannerContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(l.Heading, {
          variant: "display-sm",
          color: "always-white",
          children: null == r ? R.default.Messages.BOGO_BUY_HEADLINE : R.default.Messages.BOGO_UPGRADE_HEADLINE
        }), (0, a.jsx)(l.Text, {
          className: f.countdown,
          variant: "text-sm/medium",
          children: (0, a.jsx)(d.default, {
            endDate: S
          })
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: null == r ? R.default.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({
            helpCenterLink: u.default.getArticleURL(I.HelpdeskArticles.SUMMER_2023_BOGO)
          }) : R.default.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({
            helpCenterLink: u.default.getArticleURL(I.HelpdeskArticles.SUMMER_2023_BOGO)
          })
        })]
      }), (0, a.jsx)(_.default, {
        buttonText: R.default.Messages.BOGO_CLAIM_OFFER,
        buttonTextClassName: f.subscribeButtonText,
        subscriptionTier: T.PremiumSubscriptionSKUs.TIER_2,
        className: f.subscribeButton,
        forceInverted: !0
      })]
    })
  })
}