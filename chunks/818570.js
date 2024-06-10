"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("735250");
n("470079");
var a = n("528560"),
  l = n("426215"),
  i = n("481060"),
  r = n("197115"),
  o = n("702346"),
  u = n("981631"),
  d = n("474936"),
  c = n("689938"),
  f = n("317890");

function E(e) {
  let {
    message: t
  } = e;
  return (0, s.jsx)(o.default, {
    contentClassName: f.messageContentContainer,
    iconContainerClassName: f.iconContainer,
    iconNode: (0, s.jsx)(a.BellIcon, {
      colorClass: f.icon
    }),
    children: (0, s.jsxs)("div", {
      className: f.container,
      children: [(0, s.jsxs)("div", {
        children: [(0, s.jsx)(i.Text, {
          variant: "text-sm/medium",
          children: t.content
        }), (0, s.jsxs)("div", {
          className: f.nitroBadge,
          children: [(0, s.jsx)(l.NitroWheelIcon, {
            width: 16,
            height: 16,
            colorClass: f.nitroBadgeIcon
          }), (0, s.jsx)(i.Text, {
            variant: "text-xs/medium",
            className: f.nitroBadgeText,
            children: c.default.Messages.POWERED_BY_NITRO
          })]
        })]
      }), (0, s.jsx)("div", {
        className: f.buttonContainer,
        children: (0, s.jsx)(r.default, {
          showGradient: !0,
          iconClassName: f.premiumIcon,
          subscriptionTier: d.PremiumSubscriptionSKUs.TIER_2,
          buttonText: c.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
          size: i.Button.Sizes.SMALL,
          premiumModalAnalyticsLocation: {
            section: u.AnalyticsSections.TEXT_IN_VOICE,
            object: u.AnalyticsObjects.MESSAGE
          }
        })
      })]
    })
  })
}