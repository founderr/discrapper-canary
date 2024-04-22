"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  r = n("481060"),
  i = n("230711"),
  o = n("2052"),
  u = n("906732"),
  l = n("174609"),
  _ = n("626135"),
  c = n("790527"),
  S = n("940165"),
  d = n("474936"),
  E = n("981631"),
  O = n("689938"),
  I = n("677804");

function f(e) {
  let {
    onClose: t,
    ...f
  } = e, C = (0, o.useAnalyticsContext)(), {
    analyticsLocations: M
  } = (0, u.default)(), [N, T] = a.useState(!1);
  return a.useEffect(() => {
    !N && (_.default.track(E.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: d.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: C.location,
      location_stack: M
    }), T(!0))
  }, [C.location, M, N]), (0, s.jsx)(c.default, {
    type: d.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: I.image,
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
    ...f,
    children: (0, s.jsx)(r.FormItem, {
      title: O.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
      className: I.optionsContainerWrapper,
      children: (0, s.jsxs)("div", {
        className: I.optionsContainer,
        children: [(0, s.jsx)(S.default, {
          showGradient: !0
        }), (0, s.jsx)(S.default, {
          showGradient: !1
        }), (0, s.jsx)(S.default, {
          showGradient: !1
        }), (0, s.jsx)(S.default, {
          showGradient: !1
        })]
      })
    })
  })
}