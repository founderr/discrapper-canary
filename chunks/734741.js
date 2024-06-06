"use strict";
s.r(t), s.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return h
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return L
  },
  useDismissWhatsNewCardDCs: function() {
    return M
  },
  useShouldShowServerProfileBadge: function() {
    return C
  },
  useShouldShowWhatsNewBadge: function() {
    return O
  }
});
var a = s("442837"),
  r = s("704215"),
  i = s("605236"),
  n = s("594174"),
  l = s("74538"),
  o = s("331119"),
  u = s("575595"),
  d = s("528865"),
  c = s("650032"),
  _ = s("781922"),
  E = s("885462"),
  T = s("474936"),
  I = s("921944");
let R = "getWhatsNewBadgeCount",
  f = "useShouldShowWhatsNewBadge",
  S = () => {
    let e = (0, a.useStateFromStores)([n.default], () => n.default.getCurrentUser()),
      t = l.default.isPremiumExactly(e, T.PremiumTypes.TIER_2),
      {
        enabled: s
      } = c.ReferralProgramRecipient.useExperiment({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = u.DiscountModelDataCollection.useExperiment({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: i
      } = o.CannibalizationModelDataCollection.useExperiment({
        location: R
      }, {
        autoTrackExposure: !1
      });
    return !t && s && !r && !i
  },
  m = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = n.default.getCurrentUser(),
      s = l.default.isPremiumExactly(t, T.PremiumTypes.TIER_2),
      {
        enabled: a
      } = c.ReferralProgramRecipient.getCurrentConfig({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = u.DiscountModelDataCollection.getCurrentConfig({
        location: R
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: i
      } = o.CannibalizationModelDataCollection.getCurrentConfig({
        location: R
      }, {
        autoTrackExposure: !1
      });
    return (e || !s) && a && !r && !i
  },
  A = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, i.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  N = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, i.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  p = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = S(), s = (0, i.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !s
  },
  g = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = m(), s = (0, i.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !s
  },
  C = () => {
    let {
      canFlipCard: e
    } = E.ServerProfilesExperiment.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, i.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  P = () => {
    let {
      canFlipCard: e
    } = E.ServerProfilesExperiment.getCurrentConfig({
      location: R
    }, {
      autoTrackExposure: !1
    }), t = (0, i.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  O = () => {
    let e = A(),
      t = p(),
      s = C();
    return s ? E.ServerProfilesExperiment.trackExposure({
      location: f
    }) : e ? d.June2024NewAppStylesWhatsNewCardExperiment.trackExposure({
      location: f
    }) : t && _.ReferralProgramWhatsNewCardExperiment.trackExposure({
      location: f
    }), e || t || s
  },
  M = () => {
    let e = A(),
      t = p(),
      s = C();
    e && (0, i.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE, {
      dismissAction: I.ContentDismissActionType.TAKE_ACTION
    }), t && (0, i.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: I.ContentDismissActionType.TAKE_ACTION
    }), s && (0, i.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: I.ContentDismissActionType.TAKE_ACTION
    })
  },
  h = () => {
    let e = N(),
      t = g(),
      s = P();
    return e || t || s
  },
  L = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return m(!0) && e
  }