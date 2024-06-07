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
  c = s("276800"),
  d = s("248042"),
  _ = s("409100"),
  E = s("725727"),
  R = s("474936"),
  T = s("981631"),
  f = s("689938"),
  I = s("90502");
t.default = function(e) {
  let {
    isFullscreen: t,
    buttonClassName: s
  } = e, {
    promotion: r
  } = (0, E.useBogoPromotion)(), S = (0, n.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription());
  if (!(0, d.useIsEligibleForBogoPromotion)()) return null;
  let m = new Date(r.endDate);
  return (0, a.jsx)("div", {
    className: i()(I.banner, {
      [I.bannerFullscreen]: t
    }),
    children: (0, a.jsxs)("div", {
      className: I.bannerContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(l.Heading, {
          variant: "display-sm",
          color: "always-white",
          children: null == S ? f.default.Messages.BOGO_BUY_HEADLINE : f.default.Messages.BOGO_UPGRADE_HEADLINE
        }), (0, a.jsx)(l.Text, {
          className: I.countdown,
          variant: "text-sm/medium",
          children: (0, a.jsx)(c.default, {
            endDate: m
          })
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: null == S ? f.default.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({
            helpCenterLink: u.default.getArticleURL(T.HelpdeskArticles.SUMMER_2023_BOGO)
          }) : f.default.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({
            helpCenterLink: u.default.getArticleURL(T.HelpdeskArticles.SUMMER_2023_BOGO)
          })
        })]
      }), (0, a.jsx)(_.default, {
        buttonText: f.default.Messages.BOGO_CLAIM_OFFER,
        buttonTextClassName: I.subscribeButtonText,
        subscriptionTier: R.PremiumSubscriptionSKUs.TIER_2,
        className: null != s ? s : I.subscribeButton,
        forceInverted: !0
      })]
    })
  })
}