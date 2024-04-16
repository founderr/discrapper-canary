"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var n = s("735250");
s("470079");
var a = s("481060"),
  i = s("230711"),
  o = s("471113"),
  r = s("197115"),
  u = s("474936"),
  l = s("981631"),
  c = s("689938"),
  d = s("944411");

function _(e) {
  let {
    onClose: t,
    section: s
  } = e;
  return (0, n.jsxs)(a.ModalFooter, {
    children: [(0, n.jsx)(r.default, {
      className: d.nitroButton,
      size: a.ButtonSizes.MEDIUM,
      shinyButtonClassName: d.nitroButton,
      subscriptionTier: u.PremiumSubscriptionSKUs.TIER_2,
      buttonText: c.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      premiumModalAnalyticsLocation: {
        section: s
      }
    }), (0, n.jsx)(a.Button, {
      className: d.perksButton,
      look: a.Button.Looks.BLANK,
      color: a.Button.Colors.TRANSPARENT,
      size: a.ButtonSizes.MEDIUM,
      onClick: () => {
        t(), i.default.open(l.UserSettingsSections.PREMIUM)
      },
      children: (0, n.jsx)(o.default, {
        variant: "heading-sm/medium",
        children: c.default.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA
      })
    })]
  })
}