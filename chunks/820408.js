"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var i = s("735250");
s("470079");
var n = s("481060"),
  a = s("230711"),
  l = s("499150"),
  r = s("297087"),
  o = s("197115"),
  d = s("474936"),
  u = s("981631"),
  c = s("689938"),
  h = s("578808");

function S(e) {
  let {
    onClose: t
  } = e;
  return (0, i.jsxs)("div", {
    className: h.container,
    children: [(0, i.jsx)(r.default, {
      className: h.nitroWheel
    }), (0, i.jsx)(n.Text, {
      className: h.text,
      variant: "text-sm/normal",
      children: "Set custom notification sounds with Nitro."
    }), (0, i.jsx)(n.Text, {
      className: h.text,
      variant: "text-sm/normal",
      children: (0, i.jsx)(l.default, {
        onClick: () => {
          t(), a.default.open(u.UserSettingsSections.PREMIUM)
        },
        children: c.default.Messages.LEARN_MORE
      })
    }), (0, i.jsx)(o.default, {
      className: h.nitroButton,
      buttonText: c.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      size: n.Button.Sizes.SMALL,
      shinyButtonClassName: h.nitroButton,
      subscriptionTier: d.PremiumSubscriptionSKUs.TIER_2,
      premiumModalAnalyticsLocation: {
        section: u.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL
      }
    })]
  })
}