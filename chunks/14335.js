n.d(t, {
  Z: function() {
    return A
  }
});
var s = n(735250),
  i = n(470079),
  l = n(793030),
  a = n(442837),
  r = n(481060),
  o = n(230711),
  c = n(2052),
  u = n(906732),
  d = n(963249),
  E = n(594174),
  _ = n(626135),
  I = n(74538),
  T = n(163684),
  m = n(748770),
  N = n(474936),
  h = n(981631),
  C = n(689938),
  S = n(921186);

function A() {
  let e = (0, a.e7)([E.default], () => I.ZP.isPremium(E.default.getCurrentUser())),
    {
      enabled: t,
      getNitroCTA: n
    } = T.g.useExperiment({
      location: "OutboundPromotionNotice"
    }, {
      autoTrackExposure: !e,
      disable: e
    }),
    {
      location: A
    } = (0, c.O)(),
    {
      analyticsLocations: g
    } = (0, u.ZP)(),
    p = i.useCallback(() => {
      (0, d.Z)({
        subscriptionTier: I.ZP.getSkuIdForPremiumType(N.p9.TIER_2),
        analyticsLocations: g,
        analyticsObject: {
          ...A,
          object: h.qAy.BUTTON_CTA,
          objectType: h.Qqv.TIER_2
        }
      })
    }, [g, A]),
    f = i.useCallback(() => {
      o.Z.open(h.oAB.INVENTORY), m.ZP.dismissOutboundPromotionNotice()
    }, []),
    R = i.useCallback(() => {
      _.default.track(h.rMx.OUTBOUND_PROMOTION_NOTICE_CLICKED), n ? p() : f()
    }, [n, p, f]);
  return (0, s.jsxs)(r.Notice, {
    color: r.NoticeColors.PREMIUM_TIER_2,
    children: [(0, s.jsx)(r.NoticeCloseButton, {
      noticeType: h.kVF.OUTBOUND_PROMOTION,
      onClick: () => {
        m.ZP.dismissOutboundPromotionNotice()
      }
    }), (0, s.jsx)(r.NitroWheelIcon, {
      size: "md",
      color: "currentColor",
      className: S.premiumIcon
    }), t ? n ? (0, s.jsxs)(l.x, {
      variant: "text-sm/normal",
      className: S.text,
      children: [C.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE_V2, " ", C.Z.Messages.LEARN_MORE_CLICK.format({
        onClick: f
      })]
    }) : C.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_NAG_BAR_TITLE : C.Z.Messages.OUTBOUND_PROMOTION_NOTICE, (0, s.jsx)(r.PrimaryCTANoticeButton, {
      noticeType: h.kVF.OUTBOUND_PROMOTION,
      onClick: R,
      children: n ? C.Z.Messages.PREMIUM_UPSELL_GET_NITRO : C.Z.Messages.TAKE_ME_THERE
    })]
  })
}