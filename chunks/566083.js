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
  c = n("348121"),
  E = n("672752"),
  I = n("465670"),
  T = n("466111"),
  f = n("626135"),
  S = n("74538"),
  h = n("981631"),
  A = n("474936"),
  m = n("689938"),
  N = n("356623");
t.default = function(e) {
  let {
    bodyCopy: t = m.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY,
    className: n,
    onDismiss: s,
    onCtaClick: p
  } = e, {
    location: O
  } = (0, u.useAnalyticsContext)(), {
    analyticsLocations: C
  } = (0, d.default)(), {
    isLoading: R,
    suggestedPremiumType: g
  } = (0, c.default)(), L = r.useRef(!1), v = r.useCallback(() => {
    (0, _.default)({
      subscriptionTier: S.default.getSkuIdForPremiumType(g),
      analyticsLocations: C,
      analyticsObject: {
        ...O,
        object: h.AnalyticsObjects.BUTTON_CTA,
        objectType: h.AnalyticsObjectTypes.TIER_2
      }
    }), null == p || p()
  }, [C, O, p, g]), D = g === A.PremiumTypes.TIER_0;
  return (0, i.jsx)("div", {
    className: a()(N.wrapper, n),
    children: R ? (0, i.jsx)(l.Spinner, {
      type: l.SpinnerTypes.PULSING_ELLIPSIS
    }) : (0, i.jsx)(o.VisibilitySensor, {
      onChange: e => {
        e && !L.current && (f.default.track(h.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
          type: A.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
          location: O,
          location_stack: C,
          sku_id: S.default.getSkuIdForPremiumType(g)
        }), L.current = !0)
      },
      children: (0, i.jsxs)("div", {
        className: N.upsell,
        children: [(0, i.jsx)(T.default, {
          color: D ? E.GradientCssUrls.PREMIUM_TIER_0 : E.GradientCssUrls.PREMIUM_TIER_2,
          className: N.premiumIcon
        }), (0, i.jsx)(l.Text, {
          color: "interactive-normal",
          className: N.body,
          variant: "text-sm/normal",
          children: D ? m.default.Messages.EMOJI_PICKER_PREMIUM_TIER_0_UPSELL_BODY.format({
            planName: (0, S.getTierDisplayName)(A.SubscriptionPlans.PREMIUM_MONTH_TIER_0)
          }) : t
        }), (0, i.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.LINK,
          onClick: v,
          children: D ? m.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : m.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA
        }), null != s && (0, i.jsx)(l.Button, {
          onClick: s,
          className: N.dismissButton,
          look: l.Button.Looks.BLANK,
          size: l.Button.Sizes.ICON,
          children: (0, i.jsx)(I.default, {
            className: N.dismissIcon
          })
        })]
      })
    })
  })
}