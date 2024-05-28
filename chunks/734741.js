"use strict";
n.r(t), n.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return x
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return R
  },
  useDismissWhatsNewCardDCs: function() {
    return A
  },
  useShouldShowAppStylesBadge: function() {
    return v
  },
  useShouldShowWhatsNewBadge: function() {
    return I
  },
  useWhatsNewBadgeCount: function() {
    return N
  }
});
var i = n("442837"),
  a = n("524437"),
  l = n("605236"),
  s = n("594174"),
  o = n("74538"),
  r = n("331119"),
  d = n("575595"),
  u = n("528865"),
  c = n("650032"),
  f = n("781922"),
  h = n("885462"),
  p = n("921944");
let E = "getWhatsNewBadgeCount",
  m = "useShouldShowWhatsNewBadge",
  g = () => {
    let e = (0, i.useStateFromStores)([s.default], () => s.default.getCurrentUser()),
      t = o.default.isPremium(e),
      {
        enabled: n
      } = c.ReferralProgramRecipient.useExperiment({
        location: E
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = d.DiscountModelDataCollection.useExperiment({
        location: E
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: l
      } = r.CannibalizationModelDataCollection.useExperiment({
        location: E
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !a && !l
  },
  S = () => {
    let e = s.default.getCurrentUser(),
      t = o.default.isPremium(e),
      {
        enabled: n
      } = c.ReferralProgramRecipient.getCurrentConfig({
        location: E
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: i
      } = d.DiscountModelDataCollection.getCurrentConfig({
        location: E
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = r.CannibalizationModelDataCollection.getCurrentConfig({
        location: E
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !i && !a
  },
  v = () => {
    let {
      canFlipCard: e
    } = u.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
      location: E
    }, {
      autoTrackExposure: !1
    }), t = (0, l.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  C = () => {
    let {
      canFlipCard: e
    } = u.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: E
    }, {
      autoTrackExposure: !1
    }), t = (0, l.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  y = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.useExperiment({
      location: E
    }, {
      autoTrackExposure: !1
    }), t = g(), n = (0, l.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  _ = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: E
    }, {
      autoTrackExposure: !1
    }), t = S(), n = (0, l.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  O = () => {
    let {
      canFlipCard: e
    } = h.ServerProfilesExperiment.useExperiment({
      location: E
    }, {
      autoTrackExposure: !1
    }), t = (0, l.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  T = () => {
    let {
      canFlipCard: e
    } = h.ServerProfilesExperiment.getCurrentConfig({
      location: E
    }, {
      autoTrackExposure: !1
    }), t = (0, l.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  N = () => {
    let e = v(),
      t = y(),
      n = O();
    return e || t || n ? 1 : 0
  },
  I = () => {
    let e = v(),
      t = y(),
      n = O();
    return e ? h.ServerProfilesExperiment.trackExposure({
      location: m
    }) : (t && f.ReferralProgramWhatsNewCardExperiment.trackExposure({
      location: m
    }), n && u.June2024NewAppStylesWhatsNewCardExperiment.trackExposure({
      location: m
    })), e || t || n
  },
  A = () => {
    let e = v(),
      t = y(),
      n = O();
    e && (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE, {
      dismissAction: p.ContentDismissActionType.TAKE_ACTION
    }), t && (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: p.ContentDismissActionType.TAKE_ACTION
    }), n && (0, l.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: p.ContentDismissActionType.TAKE_ACTION
    })
  },
  x = () => {
    let e = C(),
      t = _(),
      n = T();
    return e || t || n
  },
  R = () => {
    let {
      canFlipCard: e
    } = f.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return S() && e
  }