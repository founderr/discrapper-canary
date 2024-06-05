"use strict";
n.r(t), n.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return R
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return L
  },
  useDismissWhatsNewCardDCs: function() {
    return x
  },
  useShouldShowAppStylesBadge: function() {
    return C
  },
  useShouldShowWhatsNewBadge: function() {
    return A
  },
  useWhatsNewBadgeCount: function() {
    return I
  }
});
var i = n("442837"),
  a = n("704215"),
  l = n("605236"),
  s = n("594174"),
  o = n("74538"),
  r = n("331119"),
  d = n("575595"),
  u = n("528865"),
  c = n("650032"),
  f = n("781922"),
  h = n("885462"),
  p = n("474936"),
  E = n("921944");
let m = "getWhatsNewBadgeCount",
  g = "useShouldShowWhatsNewBadge",
  S = () => {
    let e = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
      t = o.default.isPremiumExactly(e, p.PremiumTypes.TIER_2),
      {
        enabled: n
      } = c.ReferralProgramRecipient.useExperiment({
        location: m
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = d.DiscountModelDataCollection.useExperiment({
        location: m
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: l
      } = r.CannibalizationModelDataCollection.useExperiment({
        location: m
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !a && !l
  },
  v = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = s.default.getCurrentUser(),
      n = o.default.isPremiumExactly(t, p.PremiumTypes.TIER_2),
      {
        enabled: i
      } = c.ReferralProgramRecipient.getCurrentConfig({
        location: m
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = d.DiscountModelDataCollection.getCurrentConfig({
        location: m
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: l
      } = r.CannibalizationModelDataCollection.getCurrentConfig({
        location: m
      }, {
        autoTrackExposure: !1
      });
    return (e || !n) && i && !a && !l
  },
  C = () => {
    let {
      canFlipCard: e
    } = u.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
      location: m
    }, {
      autoTrackExposure: !1
    }), t = (0, l.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  y = () => {
    let {
      canFlipCard: e
    } = u.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: m
    }, {
      autoTrackExposure: !1
    }), t = (0, l.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  _ = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.useExperiment({
      location: m
    }, {
      autoTrackExposure: !1
    }), t = S(), n = (0, l.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  T = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: m
    }, {
      autoTrackExposure: !1
    }), t = v(), n = (0, l.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  O = () => {
    let {
      canFlipCard: e
    } = h.ServerProfilesExperiment.useExperiment({
      location: m
    }, {
      autoTrackExposure: !1
    }), t = (0, l.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  N = () => {
    let {
      canFlipCard: e
    } = h.ServerProfilesExperiment.getCurrentConfig({
      location: m
    }, {
      autoTrackExposure: !1
    }), t = (0, l.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  I = () => {
    let e = C(),
      t = _(),
      n = O();
    return e || t || n ? 1 : 0
  },
  A = () => {
    let e = C(),
      t = _(),
      n = O();
    return e ? u.June2024NewAppStylesWhatsNewCardExperiment.trackExposure({
      location: g
    }) : (t && f.ReferralProgramWhatsNewCardExperiment.trackExposure({
      location: g
    }), n && h.ServerProfilesExperiment.trackExposure({
      location: g
    })), e || t || n
  },
  x = () => {
    let e = C(),
      t = _(),
      n = O();
    e && (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE, {
      dismissAction: E.ContentDismissActionType.TAKE_ACTION
    }), t && (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: E.ContentDismissActionType.TAKE_ACTION
    }), n && (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: E.ContentDismissActionType.TAKE_ACTION
    })
  },
  R = () => {
    let e = y(),
      t = T(),
      n = N();
    return e || t || n
  },
  L = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return v(!0) && e
  }