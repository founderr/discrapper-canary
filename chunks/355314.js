"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
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
  E = n("790527"),
  I = n("474936"),
  T = n("981631"),
  f = n("731994"),
  S = n("689938"),
  h = n("241614");

function A(e) {
  let {
    onClose: t,
    ...n
  } = e, s = (0, o.useStateFromStores)([d.default], () => d.default.getCurrentUser()), A = (0, i.jsx)(u.default, {
    icons: f.DEFAULT_FILE_UPLOAD_ICONS
  }), m = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE, N = r.useMemo(() => {
    let e = c.default.getUserMaxFileSize(s),
      t = (0, _.formatSize)(e / 1024, {
        useKibibytes: !0
      }),
      n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
        maxSize: t
      });
    switch (null == s ? void 0 : s.premiumType) {
      case I.PremiumTypes.TIER_0:
        n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
          maxSize: t
        });
        break;
      case I.PremiumTypes.TIER_1:
        n = S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
          maxSize: t
        })
    }
    return n
  }, [s]), p = (0, i.jsxs)("div", {
    className: h.body,
    children: [(0, i.jsx)("span", {
      children: N
    }), (0, i.jsx)(l.Text, {
      variant: "text-md/medium",
      children: m
    })]
  });
  return (0, i.jsx)(E.default, {
    artElement: A,
    artContainerClassName: a()(h.artContainer),
    enableArtBoxShadow: !1,
    type: I.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
    title: S.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    body: p,
    context: S.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
      maxSize: S.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
    }),
    glowUp: m,
    analyticsLocation: {
      section: T.AnalyticsSections.FILE_UPLOAD_POPOUT
    },
    onClose: t,
    subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
    ...n
  })
}