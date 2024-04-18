"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
}), s("47120");
var i = s("735250"),
  a = s("470079"),
  n = s("481060"),
  l = s("230711"),
  r = s("2052"),
  d = s("434650"),
  o = s("906732"),
  u = s("499150"),
  c = s("297087"),
  h = s("626135"),
  S = s("197115"),
  N = s("474936"),
  g = s("981631"),
  f = s("689938"),
  m = s("578808");

function E(e) {
  let {
    onClose: t
  } = e, s = (0, r.useAnalyticsContext)(), {
    analyticsLocations: E
  } = (0, o.default)(), [_, T] = a.useState(!1), x = a.useCallback(e => {
    !_ && e && (h.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_SETTINGS_UPSELL,
      location: s.location,
      location_stack: E
    }), T(!0))
  }, [s.location, E, _]), I = (0, d.useIsVisible)(x, .8, !0);
  return (0, i.jsxs)("div", {
    ref: I,
    className: m.container,
    children: [(0, i.jsx)(c.default, {
      className: m.nitroWheel
    }), (0, i.jsx)(n.Text, {
      className: m.text,
      variant: "text-sm/normal",
      children: f.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_NOTIFICATION_SETTINGS_UPSELL
    }), (0, i.jsx)(n.Text, {
      className: m.text,
      variant: "text-sm/normal",
      children: (0, i.jsx)(u.default, {
        onClick: () => {
          t(), l.default.open(g.UserSettingsSections.PREMIUM)
        },
        children: f.default.Messages.LEARN_MORE
      })
    }), (0, i.jsx)(S.default, {
      className: m.nitroButton,
      buttonText: f.default.Messages.PREMIUM_UPSELL_GET_NITRO,
      size: n.Button.Sizes.SMALL,
      shinyButtonClassName: m.nitroButton,
      subscriptionTier: N.PremiumSubscriptionSKUs.TIER_2,
      premiumModalAnalyticsLocation: {
        section: g.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPSELL
      }
    })]
  })
}