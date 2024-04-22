"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
});
var i = n("735250");
n("470079");
var s = n("120356"),
  l = n.n(s),
  r = n("442837"),
  o = n("524437"),
  a = n("605236"),
  c = n("328882"),
  u = n("650032"),
  d = n("104494"),
  m = n("639119"),
  h = n("655525"),
  p = n("52188"),
  f = n("248042"),
  b = n("924540"),
  S = n("649765"),
  g = n("886654"),
  T = n("487980"),
  x = n("351402"),
  v = n("170671"),
  N = n("921944"),
  C = n("474936"),
  j = n("689938"),
  E = n("556973");
let R = "UserSettingsPremiumLabel";

function A(e) {
  let t, {
      decoration: n,
      label: s,
      isSelected: A
    } = e,
    I = (0, m.usePremiumTrialOffer)(),
    P = (0, d.usePremiumDiscountOffer)(),
    _ = (0, f.useIsEligibleForBogoPromotion)(),
    M = (0, r.useStateFromStores)([x.default], () => x.default.isLocalizedPromoEnabled) && null == I && null == n,
    O = (0, c.useShouldShowNewOfferBadgeForAprilMarketingMoment)(R),
    y = (0, T.useIsEligibleSenderForReferralProgramTabBadge)(R),
    {
      enabled: D
    } = u.ReferralProgramRecipient.useExperiment({
      location: R
    }, {
      autoTrackExposure: !1
    }),
    B = D && (null == I ? void 0 : I.trial_id) === C.PREMIUM_TIER_2_REFERRAL_TRIAL_ID;
  return t = _ ? (0, i.jsx)(h.default, {}) : O ? (0, i.jsx)(g.default, {
    copy: j.default.Messages.PREMIUM_2024_APRIL_NITRO_OFFER_MODAL_MODAL_TOP_PILL,
    isSelected: A,
    onSelect: () => (0, a.markDismissibleContentAsDismissed)(o.DismissibleContent.PREMIUM_2024_APRIL_MARKETING_BADGE, {
      dismissAction: N.ContentDismissActionType.TAKE_ACTION
    })
  }) : null != P ? (0, i.jsx)(b.PremiumDiscountOfferTabBadge, {
    isTabSelected: A,
    userDiscount: P,
    includesAmountOff: !1
  }) : null == I || B ? null != n ? n : M ? (0, i.jsx)(p.LocalizedPricingBadgeIcon, {
    entryPoint: p.BadgeEntryPoint.SettingsMenu
  }) : y ? (0, i.jsx)(S.default, {
    isSelected: A,
    onSelect: () => (0, a.markDismissibleContentAsDismissed)(o.DismissibleContent.REFERRAL_PROGRAM_PREMIUM_TAB_BADGE, {
      dismissAction: N.ContentDismissActionType.TAKE_ACTION
    })
  }) : (0, i.jsx)(v.default, {
    isSelected: A
  }) : (0, i.jsx)(b.PremiumTrialOfferTabBadge, {
    isTabSelected: A,
    trialOffer: I
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: l()(E.premiumLabel, {
        [E.selected]: (A || M) && !_
      }),
      children: [s, t]
    }), (0, i.jsx)("div", {
      className: l()(E.background, {
        [E.auPromo]: M && !A,
        [E.auPromoSelected]: M && A,
        [E.selectedBackground]: !M && !_ && A
      })
    })]
  })
}