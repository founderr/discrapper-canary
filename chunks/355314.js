"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("310752"),
  l = n("174609"),
  u = n("703656"),
  d = n("210887"),
  _ = n("594174"),
  c = n("626135"),
  E = n("424218"),
  I = n("74538"),
  T = n("104494"),
  f = n("639119"),
  S = n("631771"),
  h = n("790527"),
  A = n("474936"),
  m = n("981631"),
  N = n("731994"),
  p = n("689938"),
  O = n("241614");

function C(e) {
  let {
    onClose: t,
    ...n
  } = e, C = (0, s.useStateFromStores)([_.default], () => _.default.getCurrentUser()), R = (0, s.useStateFromStores)([d.default], () => d.default.theme), g = (0, f.usePremiumTrialOffer)(), L = (0, T.usePremiumDiscountOffer)(), v = null != g || null != L, {
    enabled: D
  } = S.DesktopFileUploadUpsellExperiment.useExperiment({
    location: "File Upload Roadblock"
  }, {
    autoTrackExposure: !v,
    disable: v
  }), M = R === m.ThemeTypes.LIGHT ? "light" : "dark", y = D ? (0, i.jsx)("img", {
    className: O.updatedArt,
    alt: "File Upload Nitro Perk",
    src: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_".concat(M, ".png")
  }) : (0, i.jsx)(o.default, {
    icons: N.DEFAULT_FILE_UPLOAD_ICONS
  }), P = r.useMemo(() => {
    let e = I.default.getUserMaxFileSize(C),
      t = (0, E.formatSize)(e / 1024, {
        useKibibytes: !0
      }),
      n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
        maxSize: t
      });
    switch (null == C ? void 0 : C.premiumType) {
      case A.PremiumTypes.TIER_0:
        n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
          maxSize: t
        });
        break;
      case A.PremiumTypes.TIER_1:
        n = p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
          maxSize: t
        })
    }
    return n
  }, [C]), U = D ? p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2 : p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE, b = D ? (0, i.jsx)("div", {
    className: O.body,
    children: (0, i.jsx)(a.Text, {
      variant: "text-sm/medium",
      children: U
    })
  }) : (0, i.jsxs)("div", {
    className: O.body,
    children: [(0, i.jsx)("span", {
      children: P
    }), (0, i.jsx)(a.Text, {
      variant: "text-md/medium",
      children: U
    })]
  });
  return (0, i.jsx)(h.default, {
    artElement: y,
    artContainerClassName: D ? O.updatedArtContainer : O.artContainer,
    enableArtBoxShadow: !1,
    type: A.PremiumUpsellTypes.UPLOAD_ERROR_UPSELL,
    title: p.default.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    body: b,
    context: p.default.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
      maxSize: p.default.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
    }),
    glowUp: U,
    analyticsLocation: {
      section: m.AnalyticsSections.FILE_UPLOAD_POPOUT
    },
    onClose: t,
    subscriptionTier: A.PremiumSubscriptionSKUs.TIER_2,
    secondaryCTA: D ? p.default.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
    onSecondaryClick: D ? function() {
      (0, l.default)(), t(), c.default.track(m.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
        location_section: m.AnalyticsSections.FILE_UPLOAD_UPSELL_MODAL,
        location_object: m.AnalyticsObjects.NAVIGATION_LINK
      }), (0, u.transitionTo)(m.Routes.APPLICATION_STORE)
    } : void 0,
    showEnhancedUpsell: D,
    ...n
  })
}