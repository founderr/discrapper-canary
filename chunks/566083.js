"use strict";
n.r(t);
var i = n("735250"),
  r = n("470079"),
  s = n("120356"),
  a = n.n(s),
  o = n("622535"),
  l = n("481060"),
  u = n("2052"),
  d = n("906732"),
  _ = n("963249"),
  c = n("672752"),
  E = n("465670"),
  I = n("466111"),
  T = n("626135"),
  f = n("74538"),
  S = n("981631"),
  h = n("474936"),
  A = n("689938"),
  m = n("356623");
t.default = function(e) {
  let {
    bodyCopy: t = A.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY,
    className: n,
    onDismiss: s,
    onCtaClick: N
  } = e, {
    location: p
  } = (0, u.useAnalyticsContext)(), {
    analyticsLocations: O
  } = (0, d.default)(), C = r.useRef(!1), R = r.useCallback(() => {
    (0, _.default)({
      subscriptionTier: f.default.getSkuIdForPremiumType(h.PremiumTypes.TIER_2),
      analyticsLocations: O,
      analyticsObject: {
        ...p,
        object: S.AnalyticsObjects.BUTTON_CTA,
        objectType: S.AnalyticsObjectTypes.TIER_2
      }
    }), null == N || N()
  }, [O, p, N]);
  return (0, i.jsx)("div", {
    className: a()(m.wrapper, n),
    children: (0, i.jsx)(o.VisibilitySensor, {
      onChange: e => {
        e && !C.current && (T.default.track(S.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
          type: h.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
          location: p,
          location_stack: O,
          sku_id: f.default.getSkuIdForPremiumType(h.PremiumTypes.TIER_2)
        }), C.current = !0)
      },
      children: (0, i.jsxs)("div", {
        className: m.upsell,
        children: [(0, i.jsx)(I.default, {
          color: c.GradientCssUrls.PREMIUM_TIER_2,
          className: m.premiumIcon
        }), (0, i.jsx)(l.Text, {
          color: "interactive-normal",
          className: m.body,
          variant: "text-sm/normal",
          children: t
        }), (0, i.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          onClick: R,
          children: A.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA
        }), null != s && (0, i.jsx)(l.Button, {
          onClick: s,
          className: m.dismissButton,
          look: l.Button.Looks.BLANK,
          size: l.Button.Sizes.ICON,
          children: (0, i.jsx)(E.default, {
            className: m.dismissIcon
          })
        })]
      })
    })
  })
}