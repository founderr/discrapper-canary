"use strict";
s.r(t);
var a = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  l = s("399606"),
  n = s("481060"),
  o = s("78839"),
  u = s("63063"),
  d = s("276800"),
  c = s("248042"),
  _ = s("409100"),
  E = s("725727"),
  C = s("474936"),
  f = s("981631"),
  T = s("689938"),
  I = s("743986");
t.default = function(e) {
  let {
    isFullscreen: t
  } = e, {
    promotion: s
  } = (0, E.useBogoPromotion)(), i = (0, l.useStateFromStores)([o.default], () => o.default.getPremiumTypeSubscription());
  if (!(0, c.useIsEligibleForBogoPromotion)()) return null;
  let R = new Date(s.endDate);
  return (0, a.jsx)("div", {
    className: r()(I.banner, {
      [I.bannerFullscreen]: t
    }),
    children: (0, a.jsxs)("div", {
      className: I.bannerContent,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(n.Heading, {
          variant: "display-sm",
          color: "always-white",
          children: null == i ? T.default.Messages.BOGO_BUY_HEADLINE : T.default.Messages.BOGO_UPGRADE_HEADLINE
        }), (0, a.jsx)(n.Text, {
          className: I.countdown,
          variant: "text-sm/medium",
          children: (0, a.jsx)(d.default, {
            endDate: R
          })
        }), (0, a.jsx)(n.Text, {
          variant: "text-sm/medium",
          color: "always-white",
          children: null == i ? T.default.Messages.BOGO_PERKS_SUBTITLE_NON_SUB_FORMATTED.format({
            helpCenterLink: u.default.getArticleURL(f.HelpdeskArticles.SUMMER_2023_BOGO)
          }) : T.default.Messages.BOGO_PERKS_SUBTITLE_SUB_FORMATTED.format({
            helpCenterLink: u.default.getArticleURL(f.HelpdeskArticles.SUMMER_2023_BOGO)
          })
        })]
      }), (0, a.jsx)(_.default, {
        buttonText: T.default.Messages.BOGO_CLAIM_OFFER,
        buttonTextClassName: I.subscribeButtonText,
        subscriptionTier: C.PremiumSubscriptionSKUs.TIER_2,
        className: I.subscribeButton,
        forceInverted: !0
      })]
    })
  })
}