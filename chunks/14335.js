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
  m = n("74538"),
  T = n("163684"),
  I = n("748770"),
  p = n("474936"),
  h = n("981631"),
  N = n("689938"),
  S = n("164032");

function C() {
  let e = (0, i.useStateFromStores)([f.default], () => m.default.isPremium(f.default.getCurrentUser())),
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
    } = (0, u.useAnalyticsContext)(),
    {
      analyticsLocations: g
    } = (0, d.default)(),
    A = a.useCallback(() => {
      (0, c.default)({
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
      o.default.open(h.UserSettingsSections.INVENTORY), I.default.dismissOutboundPromotionNotice()
    }, []),
    R = a.useCallback(() => {
      _.default.track(h.AnalyticEvents.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? A() : M()
    }, [n, A, M]);
  return (0, s.jsxs)(r.Notice, {
    color: r.NoticeColors.PREMIUM_TIER_2,
    children: [(0, s.jsx)(r.NoticeCloseButton, {
      noticeType: h.NoticeTypes.OUTBOUND_PROMOTION,
      onClick: () => {
        I.default.dismissOutboundPromotionNotice()
      }
    }), (0, s.jsx)(E.default, {
      className: S.premiumIcon
    }), t ? n ? (0, s.jsxs)(l.Text, {
      variant: "text-sm/normal",
      className: S.text,
      children: [N.default.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2, " ", N.default.Messages.LEARN_MORE_CLICK.format({
        onClick: M
      })]
    }) : N.default.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE : N.default.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(r.PrimaryCTANoticeButton, {
      noticeType: h.NoticeTypes.OUTBOUND_PROMOTION,
      onClick: R,
      children: n ? N.default.Messages.PREMIUM_UPSELL_GET_NITRO : N.default.Messages.TAKE_ME_THERE
    })]
  })
}