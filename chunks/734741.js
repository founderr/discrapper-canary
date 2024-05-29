"use strict";
n.r(t), n.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return F
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return P
  },
  useDismissWhatsNewCardDCs: function() {
    return g
  },
  useShouldShowAppStylesBadge: function() {
    return R
  },
  useShouldShowWhatsNewBadge: function() {
    return I
  },
  useWhatsNewBadgeCount: function() {
    return b
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
  f = n("885462"),
  E = n("921944");
let C = "getWhatsNewBadgeCount",
  p = "useShouldShowWhatsNewBadge",
  m = () => {
    let e = (0, i.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
      t = a.default.isPremium(e),
      {
        enabled: n
      } = c.ReferralProgramRecipient.useExperiment({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = u.DiscountModelDataCollection.useExperiment({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: s
      } = l.CannibalizationModelDataCollection.useExperiment({
        location: C
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !r && !s
  },
  h = () => {
    let e = o.default.getCurrentUser(),
      t = a.default.isPremium(e),
      {
        enabled: n
      } = c.ReferralProgramRecipient.getCurrentConfig({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: i
      } = u.DiscountModelDataCollection.getCurrentConfig({
        location: C
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: r
      } = l.CannibalizationModelDataCollection.getCurrentConfig({
        location: C
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !i && !r
  },
  R = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.useExperiment({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  D = () => {
    let {
      canFlipCard: e
    } = d.June2024NewAppStylesWhatsNewCardExperiment.getCurrentConfig({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  T = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.useExperiment({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = m(), n = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  A = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = h(), n = (0, s.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  S = () => {
    let {
      canFlipCard: e
    } = f.ServerProfilesExperiment.useExperiment({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  N = () => {
    let {
      canFlipCard: e
    } = f.ServerProfilesExperiment.getCurrentConfig({
      location: C
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE);
    return e && !t
  },
  b = () => {
    let e = R(),
      t = T(),
      n = S();
    return e || t || n ? 1 : 0
  },
  I = () => {
    let e = R(),
      t = T(),
      n = S();
    return e ? f.ServerProfilesExperiment.trackExposure({
      location: p
    }) : (t && _.ReferralProgramWhatsNewCardExperiment.trackExposure({
      location: p
    }), n && d.June2024NewAppStylesWhatsNewCardExperiment.trackExposure({
      location: p
    })), e || t || n
  },
  g = () => {
    let e = R(),
      t = T(),
      n = S();
    e && (0, s.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE, {
      dismissAction: E.ContentDismissActionType.TAKE_ACTION
    }), t && (0, s.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: E.ContentDismissActionType.TAKE_ACTION
    }), n && (0, s.markDismissibleContentAsDismissed)(r.DismissibleContent.WHATS_NEW_SERVER_PROFILE_BADGE, {
      dismissAction: E.ContentDismissActionType.TAKE_ACTION
    })
  },
  F = () => {
    let e = D(),
      t = A(),
      n = N();
    return e || t || n
  },
  P = () => {
    let {
      canFlipCard: e
    } = _.ReferralProgramWhatsNewCardExperiment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return h() && e
  }