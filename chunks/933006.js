"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
}), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("481060"),
  o = s("230711"),
  i = s("2052"),
  c = s("906732"),
  r = s("174609"),
  u = s("626135"),
  d = s("790527"),
  C = s("940165"),
  O = s("474936"),
  I = s("981631"),
  _ = s("871465"),
  T = s("689938"),
  N = s("975444");

function S(e) {
  let {
    onClose: t,
    ...S
  } = e, U = (0, i.useAnalyticsContext)(), {
    analyticsLocations: M
  } = (0, c.default)(), [f, p] = n.useState(!1);
  n.useEffect(() => {
    !f && (u.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: O.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: U.location,
      location_stack: M
    }), p(!0))
  }, [U.location, M, f]);
  let A = (0, _.getCustomNotificationSoundpackOptions)();
  return (0, a.jsx)(d.default, {
    type: O.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: N.image,
    artURL: s("98165"),
    title: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    glowUp: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    body: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_DESCRIPTION,
    showEnhancedUpsell: !0,
    analyticsLocation: {
      section: I.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    },
    enableArtBoxShadow: !1,
    onSubscribeClick: r.default,
    secondaryCTA: T.default.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
    onSecondaryClick: () => {
      t(), o.default.open(I.UserSettingsSections.PREMIUM)
    },
    onClose: t,
    ...S,
    children: (0, a.jsx)(l.FormItem, {
      title: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
      className: N.optionsContainerWrapper,
      children: (0, a.jsx)("div", {
        className: N.optionsContainer,
        children: A.map((e, t) => {
          let s = e.value;
          return s === _.Soundpacks.CLASSIC ? null : (0, a.jsx)(C.default, {
            label: e.label,
            soundpack: s,
            description: e.description
          }, t)
        })
      })
    })
  })
}