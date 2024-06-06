"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("793030"),
  i = n("442837"),
  r = n("230711"),
  o = n("2052"),
  u = n("906732"),
  d = n("963249"),
  c = n("594174"),
  f = n("466111"),
  E = n("644766"),
  _ = n("626135"),
  m = n("74538"),
  T = n("163684"),
  I = n("748770"),
  p = n("474936"),
  h = n("981631"),
  N = n("689938"),
  S = n("164032");

function C() {
  let e = (0, i.useStateFromStores)([c.default], () => m.default.isPremium(c.default.getCurrentUser())),
    {
      enabled: t,
      getNitroCTA: n
    } = T.OutboundPromoDesktopUpsellExperiment.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !e,
      disable: e
    }),
    {
      location: C
    } = (0, o.useAnalyticsContext)(),
    {
      analyticsLocations: g
    } = (0, u.default)(),
    A = a.useCallback(() => {
      (0, d.default)({
        subscriptionTier: m.default.getSkuIdForPremiumType(p.PremiumTypes.TIER_2),
        analyticsLocations: g,
        analyticsObject: {
          ...C,
          object: h.AnalyticsObjects.BUTTON_CTA,
          objectType: h.AnalyticsObjectTypes.TIER_2
        }
      })
    }, [g, C]),
    M = a.useCallback(() => {
      r.default.open(h.UserSettingsSections.INVENTORY), I.default.dismissOutboundPromotionNotice()
    }, []),
    R = a.useCallback(() => {
      _.default.track(h.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? A() : M()
    }, [n, A, M]);
  return (0, s.jsxs)(E.default, {
    color: E.NoticeColors.PREMIUM_TIER_2,
    children: [(0, s.jsx)(E.NoticeCloseButton, {
      noticeType: h.NoticeTypes.OUTBOUND_PROMOTION,
      onClick: () => {
        I.default.dismissOutboundPromotionNotice()
      }
    }), (0, s.jsx)(f.default, {
      className: S.premiumIcon
    }), t ? n ? (0, s.jsxs)(l.Text, {
      variant: "text-sm/normal",
      className: S.text,
      children: [N.default.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2, " ", N.default.Messages.LEARN_MORE_CLICK.format({
        onClick: M
      })]
    }) : N.default.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE : N.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(E.PrimaryCTANoticeButton, {
      noticeType: h.NoticeTypes.OUTBOUND_PROMOTION,
      onClick: R,
      children: n ? N.default.Messages.PREMIUM_UPSELL_GET_NITRO : N.default.Messages.TAKE_ME_THERE
    })]
  })
}