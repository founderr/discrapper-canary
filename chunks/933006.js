"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  r = s("481060"),
  _ = s("230711"),
  l = s("2052"),
  u = s("906732"),
  E = s("174609"),
  i = s("626135"),
  S = s("790527"),
  o = s("940165"),
  M = s("474936"),
  d = s("981631"),
  I = s("689938"),
  T = s("677804");

function O(e) {
  let {
    onClose: t,
    ...O
  } = e, N = (0, l.useAnalyticsContext)(), {
    analyticsLocations: c
  } = (0, u.default)(), [A, g] = n.useState(!1);
  return n.useEffect(() => {
    !A && (i.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: M.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: N.location,
      location_stack: c
    }), g(!0))
  }, [N.location, c, A]), (0, a.jsx)(S.default, {
    type: M.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: T.image,
    artURL: s("98165"),
    title: I.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    glowUp: I.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    body: I.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_DESCRIPTION,
    showEnhancedUpsell: !0,
    analyticsLocation: {
      section: d.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    },
    enableArtBoxShadow: !1,
    onSubscribeClick: E.default,
    secondaryCTA: I.default.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
    onSecondaryClick: () => {
      t(), _.default.open(d.UserSettingsSections.PREMIUM)
    },
    onClose: t,
    ...O,
    children: (0, a.jsx)(r.FormItem, {
      title: I.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
      className: T.optionsContainerWrapper,
      children: (0, a.jsxs)("div", {
        className: T.optionsContainer,
        children: [(0, a.jsx)(o.default, {
          showGradient: !0
        }), (0, a.jsx)(o.default, {
          showGradient: !1
        }), (0, a.jsx)(o.default, {
          showGradient: !1
        }), (0, a.jsx)(o.default, {
          showGradient: !1
        })]
      })
    })
  })
}