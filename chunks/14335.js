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
  r = n("481060"),
  o = n("230711"),
  u = n("2052"),
  d = n("906732"),
  c = n("963249"),
  f = n("594174"),
  E = n("466111"),
  _ = n("626135"),
  T = n("74538"),
  m = n("163684"),
  I = n("748770"),
  N = n("474936"),
  p = n("981631"),
  h = n("689938"),
  S = n("164032");

function C() {
  let e = (0, i.useStateFromStores)([f.default], () => T.default.isPremium(f.default.getCurrentUser())),
    {
      enabled: t,
      getNitroCTA: n
    } = m.OutboundPromoDesktopUpsellExperiment.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !e,
      disable: e
    }),
    {
      location: C
    } = (0, u.useAnalyticsContext)(),
    {
      analyticsLocations: A
    } = (0, d.default)(),
    g = a.useCallback(() => {
      (0, c.default)({
        subscriptionTier: T.default.getSkuIdForPremiumType(N.PremiumTypes.TIER_2),
        analyticsLocations: A,
        analyticsObject: {
          ...C,
          object: p.AnalyticsObjects.BUTTON_CTA,
          objectType: p.AnalyticsObjectTypes.TIER_2
        }
      })
    }, [A, C]),
    M = a.useCallback(() => {
      o.default.open(p.UserSettingsSections.INVENTORY), I.default.dismissOutboundPromotionNotice()
    }, []),
    R = a.useCallback(() => {
      _.default.track(p.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? g() : M()
    }, [n, g, M]);
  return (0, s.jsxs)(r.Notice, {
    color: r.NoticeColors.PREMIUM_TIER_2,
    children: [(0, s.jsx)(r.NoticeCloseButton, {
      noticeType: p.NoticeTypes.OUTBOUND_PROMOTION,
      onClick: () => {
        I.default.dismissOutboundPromotionNotice()
      }
    }), (0, s.jsx)(E.default, {
      className: S.premiumIcon
    }), t ? n ? (0, s.jsxs)(l.Text, {
      variant: "text-sm/normal",
      className: S.text,
      children: [h.default.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2, " ", h.default.Messages.LEARN_MORE_CLICK.format({
        onClick: M
      })]
    }) : h.default.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE : h.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(r.PrimaryCTANoticeButton, {
      noticeType: p.NoticeTypes.OUTBOUND_PROMOTION,
      onClick: R,
      children: n ? h.default.Messages.PREMIUM_UPSELL_GET_NITRO : h.default.Messages.TAKE_ME_THERE
    })]
  })
}