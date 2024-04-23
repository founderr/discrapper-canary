"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("481060"),
  o = n("230711"),
  i = n("2052"),
  c = n("906732"),
  r = n("174609"),
  u = n("626135"),
  d = n("790527"),
  O = n("940165"),
  C = n("474936"),
  I = n("981631"),
  _ = n("871465"),
  T = n("689938"),
  S = n("677804");

function N(e) {
  let {
    onClose: t,
    ...N
  } = e, U = (0, i.useAnalyticsContext)(), {
    analyticsLocations: p
  } = (0, c.default)(), [M, f] = a.useState(!1);
  a.useEffect(() => {
    !M && (u.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: C.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: U.location,
      location_stack: p
    }), f(!0))
  }, [U.location, p, M]);
  let E = (0, _.getCustomNotificationSoundpackOptions)();
  return (0, s.jsx)(d.default, {
    type: C.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: S.image,
    artURL: n("98165"),
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
    ...N,
    children: (0, s.jsx)(l.FormItem, {
      title: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
      className: S.optionsContainerWrapper,
      children: (0, s.jsx)("div", {
        className: S.optionsContainer,
        children: E.map((e, t) => {
          let n = e.value;
          return n === _.Soundpacks.CLASSIC ? null : (0, s.jsx)(O.default, {
            label: e.label,
            soundpack: n,
            description: e.description
          }, t)
        })
      })
    })
  })
}