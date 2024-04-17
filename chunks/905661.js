"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  r = s("230711"),
  u = s("471113"),
  i = s("197115"),
  l = s("474936"),
  E = s("981631"),
  _ = s("689938"),
  o = s("944411");

function S(e) {
  let {
    onClose: t,
    section: s
  } = e;
  return (0, a.jsxs)(n.ModalFooter, {
    children: [(0, a.jsx)(i.default, {
      className: o.nitroButton,
      size: n.ButtonSizes.MEDIUM,
      shinyButtonClassName: o.nitroButton,
      subscriptionTier: l.PremiumSubscriptionSKUs.TIER_2,
      buttonText: _.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      premiumModalAnalyticsLocation: {
        section: s
      }
    }), (0, a.jsx)(n.Button, {
      className: o.perksButton,
      look: n.Button.Looks.BLANK,
      color: n.Button.Colors.TRANSPARENT,
      size: n.ButtonSizes.MEDIUM,
      onClick: () => {
        t(), r.default.open(E.UserSettingsSections.PREMIUM)
      },
      children: (0, a.jsx)(u.default, {
        variant: "heading-sm/medium",
        children: _.default.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA
      })
    })]
  })
}