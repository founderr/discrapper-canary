"use strict";
n.r(t), n.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return M
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return y
  },
  useDismissWhatsNewCardDCs: function() {
    return R
  },
  useShouldShowAppStylesBadge: function() {
    return S
  },
  useShouldShowWhatsNewBadge: function() {
    return v
  },
  useWhatsNewBadgeCount: function() {
    return x
  }
});
var l = n("442837"),
  a = n("704215"),
  s = n("605236"),
  i = n("594174"),
  r = n("74538"),
  o = n("331119"),
  u = n("575595"),
  d = n("528865"),
  c = n("650032"),
  f = n("781922"),
  h = n("885462"),
  m = n("474936"),
  p = n("921944");
let C = "getWhatsNewBadgeCount",
  g = "useShouldShowWhatsNewBadge",
  E = () => {
    let e = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
      t = r.default.isPremiumExactly(e, m.PremiumTypes.TIER_2),
      {
        enabled: n
      } = c.ReferralProgramRecipient.useExperiment({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = u.DiscountModelDataCollection.useExperiment({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: s
      } = o.CannibalizationModelDataCollection.useExperiment({
        location: C
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !a && !s
  },
  _ = function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = i.default.getCurrentUser(),
      n = r.default.isPremiumExactly(t, m.PremiumTypes.TIER_2),
      {
        enabled: l
      } = c.ReferralProgramRecipient.getCurrentConfig({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = u.DiscountModelDataCollection.getCurrentConfig({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: s
      } = o.CannibalizationModelDataCollection.getCurrentConfig({
        location: C
      }, {
        autoTrackExposure: !1
      });
    return (e || !n) && l && !a && !s
  },
  S = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  I = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  N = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.useExperiment({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = E(), n = (0, s.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  T = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = _(), n = (0, s.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  A = () => {
    let {
      canFlipCard: e
    } = h.ServerProfilesExperiment.useExperiment({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  L = () => {
    let {
      canFlipCard: e
    } = h.ServerProfilesExperiment.getCurrentConfig({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  x = () => {
    let e = S(),
      t = N(),
      n = A();
    return e || t || n ? 1 : 0
  },
  v = () => {
    let e = S(),
      t = N(),
      n = A();
    return e ? d.June2024NewAppStylesWhatsNewCardExperiment.trackExposure({
      location: g
    }) : (t && f.ReferralProgramWhatsNewCardExperiment.trackExposure({
      location: g
    }), n && h.ServerProfilesExperiment.trackExposure({
      location: g
    })), e || t || n
  },
  R = () => {
    let e = S(),
      t = N(),
      n = A();
    e && (0, s.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE, {
      dismissAction: p.ContentDismissActionType.TAKE_ACTION
    }), t && (0, s.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: p.ContentDismissActionType.TAKE_ACTION
    }), n && (0, s.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: p.ContentDismissActionType.TAKE_ACTION
    })
  },
  M = () => {
    let e = I(),
      t = T(),
      n = L();
    return e || t || n
  },
  y = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return _(!0) && e
  }