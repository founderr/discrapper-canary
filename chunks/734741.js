"use strict";
s.r(t), s.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return O
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return x
  },
  useDismissWhatsNewCardDCs: function() {
    return P
  },
  useShouldShowServerProfileBadge: function() {
    return C
  },
  useShouldShowWhatsNewBadge: function() {
    return N
  }
});
var a = s("442837"),
  r = s("704215"),
  i = s("605236"),
  n = s("594174"),
  l = s("74538"),
  o = s("331119"),
  u = s("575595"),
  c = s("528865"),
  d = s("650032"),
  _ = s("781922"),
  E = s("885462"),
  R = s("474936"),
  T = s("921944");
let I = "getWhatsNewBadgeCount",
  f = "useShouldShowWhatsNewBadge",
  S = () => {
    let e = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
      t = l.default.isPremiumExactly(e, R.PremiumTypes.TIER_2),
      {
        enabled: s
      } = d.ReferralProgramRecipient.useExperiment({
        location: I
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = u.DiscountModelDataCollection.useExperiment({
        location: I
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: i
      } = o.CannibalizationModelDataCollection.useExperiment({
        location: I
      }, {
        autoTrackExposure: !1
      });
    return !t && s && !r && !i
  },
  m = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = n.default.getCurrentUser(),
      s = l.default.isPremiumExactly(t, R.PremiumTypes.TIER_2),
      {
        enabled: a
      } = d.ReferralProgramRecipient.getCurrentConfig({
        location: I
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = u.DiscountModelDataCollection.getCurrentConfig({
        location: I
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: i
      } = o.CannibalizationModelDataCollection.getCurrentConfig({
        location: I
      }, {
        autoTrackExposure: !1
      });
    return (e || !s) && a && !r && !i
  },
  p = () => {
    let {
      canFlipCard: e
    } = c.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: I
    }, {
      autoTrackExposure: !1
    }), t = (0, i.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  A = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.useExperiment({
      location: I
    }, {
      autoTrackExposure: !1
    }), t = S(), s = (0, i.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !s
  },
  M = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: I
    }, {
      autoTrackExposure: !1
    }), t = m(), s = (0, i.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !s
  },
  C = () => {
    let {
      canFlipCard: e
    } = E.ServerProfilesExperiment.useExperiment({
      location: I
    }, {
      autoTrackExposure: !1
    }), t = (0, i.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  g = () => {
    let {
      canFlipCard: e
    } = E.ServerProfilesExperiment.getCurrentConfig({
      location: I
    }, {
      autoTrackExposure: !1
    }), t = (0, i.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  N = () => {
    let e = A(),
      t = C();
    return t ? (E.ServerProfilesExperiment.trackExposure({
      location: f
    }), c.June2024NewAppStylesWhatsNewCardExperiment.trackExposure({
      location: f
    })) : e && _.ReferralProgramWhatsNewCardExperiment.trackExposure({
      location: f
    }), e || t
  },
  P = () => {
    let e = A(),
      t = C();
    e && (0, i.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: T.ContentDismissActionType.TAKE_ACTION
    }), t && (0, i.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: T.ContentDismissActionType.TAKE_ACTION
    })
  },
  O = () => {
    let e = p(),
      t = M(),
      s = g();
    return e || t || s
  },
  x = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return m(!0) && e
  }