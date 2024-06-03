"use strict";
n.r(t), n.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return F
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return w
  },
  useDismissWhatsNewCardDCs: function() {
    return P
  },
  useShouldShowAppStylesBadge: function() {
    return h
  },
  useShouldShowWhatsNewBadge: function() {
    return g
  },
  useWhatsNewBadgeCount: function() {
    return I
  }
});
var i = n("442837"),
  r = n("524437"),
  s = n("605236"),
  o = n("594174"),
  a = n("74538"),
  l = n("331119"),
  u = n("575595"),
  d = n("528865"),
  c = n("650032"),
  _ = n("781922"),
  E = n("885462"),
  f = n("474936"),
  C = n("921944");
let p = "getWhatsNewBadgeCount",
  m = "useShouldShowWhatsNewBadge",
  R = () => {
    let e = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
      t = a.default.isPremiumExactly(e, f.PremiumTypes.TIER_2),
      {
        enabled: n
      } = c.ReferralProgramRecipient.useExperiment({
        location: p
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = u.DiscountModelDataCollection.useExperiment({
        location: p
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: s
      } = l.CannibalizationModelDataCollection.useExperiment({
        location: p
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !r && !s
  },
  T = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = o.default.getCurrentUser(),
      n = a.default.isPremiumExactly(t, f.PremiumTypes.TIER_2),
      {
        enabled: i
      } = c.ReferralProgramRecipient.getCurrentConfig({
        location: p
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = u.DiscountModelDataCollection.getCurrentConfig({
        location: p
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: s
      } = l.CannibalizationModelDataCollection.getCurrentConfig({
        location: p
      }, {
        autoTrackExposure: !1
      });
    return (e || !n) && i && !r && !s
  },
  h = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
      location: p
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  D = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: p
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  A = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.useExperiment({
      location: p
    }, {
      autoTrackExposure: !1
    }), t = R(), n = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  S = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: p
    }, {
      autoTrackExposure: !1
    }), t = T(), n = (0, s.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  N = () => {
    let {
      canFlipCard: e
    } = E.ServerProfilesExperiment.useExperiment({
      location: p
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  b = () => {
    let {
      canFlipCard: e
    } = E.ServerProfilesExperiment.getCurrentConfig({
      location: p
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  I = () => {
    let e = h(),
      t = A(),
      n = N();
    return e || t || n ? 1 : 0
  },
  g = () => {
    let e = h(),
      t = A(),
      n = N();
    return e ? d.June2024NewAppStylesWhatsNewCardExperiment.trackExposure({
      location: m
    }) : (t && _.ReferralProgramWhatsNewCardExperiment.trackExposure({
      location: m
    }), n && E.ServerProfilesExperiment.trackExposure({
      location: m
    })), e || t || n
  },
  P = () => {
    let e = h(),
      t = A(),
      n = N();
    e && (0, s.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE, {
      dismissAction: C.ContentDismissActionType.TAKE_ACTION
    }), t && (0, s.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: C.ContentDismissActionType.TAKE_ACTION
    }), n && (0, s.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: C.ContentDismissActionType.TAKE_ACTION
    })
  },
  F = () => {
    let e = D(),
      t = S(),
      n = b();
    return e || t || n
  },
  w = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return T(!0) && e
  }