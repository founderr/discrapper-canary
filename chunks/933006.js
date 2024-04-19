"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  r = n("481060"),
  i = n("230711"),
  o = n("2052"),
  u = n("906732"),
  l = n("174609"),
  c = n("626135"),
  _ = n("790527"),
  d = n("940165"),
  S = n("474936"),
  E = n("981631"),
  O = n("689938"),
  f = n("677804");

function I(e) {
  let {
    onClose: t,
    ...I
  } = e, C = (0, o.useAnalyticsContext)(), {
    analyticsLocations: M
  } = (0, u.default)(), [T, N] = a.useState(!1);
  return a.useEffect(() => {
    !T && (c.default.track(E.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: S.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: C.location,
      location_stack: M
    }), N(!0))
  }, [C.location, M, T]), (0, s.jsx)(_.default, {
    type: S.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: f.image,
    artURL: n("98165"),
    title: O.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    glowUp: O.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    body: O.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_DESCRIPTION,
    showEnhancedUpsell: !0,
    analyticsLocation: {
      section: E.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    },
    enableArtBoxShadow: !1,
    onSubscribeClick: l.default,
    secondaryCTA: O.default.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
    onSecondaryClick: () => {
      t(), i.default.open(E.UserSettingsSections.PREMIUM)
    },
    onClose: t,
    ...I,
    children: (0, s.jsx)(r.FormItem, {
      title: O.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
      className: f.optionsContainerWrapper,
      children: (0, s.jsxs)("div", {
        className: f.optionsContainer,
        children: [(0, s.jsx)(d.default, {
          showGradient: !0
        }), (0, s.jsx)(d.default, {
          showGradient: !1
        }), (0, s.jsx)(d.default, {
          showGradient: !1
        }), (0, s.jsx)(d.default, {
          showGradient: !1
        })]
      })
    })
  })
}