"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("442837"),
  l = n("481060"),
  u = n("310752"),
  d = n("594174"),
  _ = n("424218"),
  c = n("74538"),
  E = n("348121"),
  I = n("790527"),
  T = n("474936"),
  f = n("981631"),
  S = n("731994"),
  h = n("689938"),
  A = n("241614");

function m(e) {
  let t, {
      onClose: n,
      fileSize: s,
      ...m
    } = e,
    N = null != s && T.MAX_PREMIUM_TIER_0_ATTACHMENT_SIZE < s,
    {
      isLoading: p,
      suggestedPremiumType: O
    } = (0, E.default)(),
    C = !N && O === T.PremiumTypes.TIER_0,
    R = (0, o.useStateFromStores)([d.default], () => d.default.getCurrentUser()),
    g = (0, i.jsx)(u.default, {
      icons: S.DEFAULT_FILE_UPLOAD_ICONS
    });
  t = C ? h.default.Messages.UPLOAD_AREA_PREMIUM_TIER_UPSELL_BODY_LINE_2.format({
    premiumPlan: (0, c.getPremiumTypeDisplayName)(T.PremiumTypes.TIER_0),
    premiumMaxSize: h.default.Messages.FILE_UPLOAD_LIMIT_PREMIUM_TIER_0_CORRECTED
  }) : h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE;
  let L = r.useMemo(() => {
      let e = c.default.getUserMaxFileSize(R),
        t = (0, _.formatSize)(e / 1024, {
          useKibibytes: !0
        }),
        n = h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
          maxSize: t
        });
      switch (null == R ? void 0 : R.premiumType) {
        case T.PremiumTypes.TIER_0:
          n = h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
            maxSize: t
          });
          break;
        case T.PremiumTypes.TIER_1:
          n = h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
            maxSize: t
          })
      }
      return n
    }, [R]),
    v = (0, i.jsxs)("div", {
      className: A.body,
      children: [(0, i.jsx)("span", {
        children: L
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/medium",
        children: t
      })]
    });
  return (0, i.jsx)(I.default, {
    artElement: g,
    artContainerClassName: a()(A.artContainer),
    enableArtBoxShadow: !1,
    type: T.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
    title: h.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    body: v,
    context: h.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
      maxSize: h.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
    }),
    glowUp: t,
    analyticsLocation: {
      section: f.AnalyticsSections.FILE_UPLOAD_POPOUT
    },
    onClose: n,
    subscriptionTier: C ? T.PremiumSubscriptionSKUs.TIER_0 : T.PremiumSubscriptionSKUs.TIER_2,
    isLoading: p,
    ...m
  })
}