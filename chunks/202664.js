"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  a = n.n(l),
  s = n("446674"),
  o = n("77078"),
  u = n("109036"),
  c = n("697218"),
  d = n("993105"),
  f = n("719923"),
  m = n("552917"),
  _ = n("843647"),
  E = n("789946"),
  T = n("646718"),
  I = n("49111"),
  C = n("527382"),
  p = n("782340"),
  P = n("348133");

function S(e) {
  let t, {
      onClose: n,
      fileSize: l,
      ...S
    } = e,
    R = null != l && T.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < l,
    {
      isLoading: O,
      suggestedPremiumType: M
    } = (0, _.default)({
      autoTrackExposure: !R,
      experiment: m.default,
      location: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL
    }),
    L = !R && M === T.PremiumTypes.TIER_0,
    g = (0, s.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
    h = (0, i.jsx)(u.default, {
      icons: C.DEFAULT_FILE_UPLOAD_ICONS
    });
  t = L ? p.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
    premiumPlan: (0, f.getPremiumTypeDisplayName)(T.PremiumTypes.TIER_0),
    premiumMaxSize: p.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
  }) : p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
  let x = r.useMemo(() => {
      let e = f.default.getUserMaxFileSize(g),
        t = (0, d.formatSize)(e / 1024, {
          useKibibytes: !0
        }),
        n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
          maxSize: t
        });
      switch (null == g ? void 0 : g.premiumType) {
        case T.PremiumTypes.TIER_0:
          n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
            maxSize: t
          });
          break;
        case T.PremiumTypes.TIER_1:
          n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
            maxSize: t
          })
      }
      return n
    }, [g]),
    N = (0, i.jsxs)("div", {
      className: P.body,
      children: [(0, i.jsx)("span", {
        children: x
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/medium",
        children: t
      })]
    });
  return (0, i.jsx)(E.default, {
    artElement: h,
    artContainerClassName: a(P.artContainer),
    enableArtBoxShadow: !1,
    type: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
    title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    body: N,
    context: p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
      maxSize: p.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
    }),
    glowUp: t,
    analyticsLocation: {
      section: I.AnalyticsSections.FILE_UPLOAD_POPOUT
    },
    onClose: n,
    subscriptionTier: L ? T.PremiumSubscriptionSKUs.TIER_0 : T.PremiumSubscriptionSKUs.TIER_2,
    isLoading: O,
    ...S
  })
}