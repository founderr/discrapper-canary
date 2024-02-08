"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("235855"),
  o = n("77078"),
  u = n("997289"),
  d = n("685665"),
  c = n("649844"),
  f = n("552917"),
  p = n("843647"),
  m = n("791106"),
  h = n("945330"),
  E = n("216422"),
  S = n("599110"),
  g = n("719923"),
  C = n("49111"),
  T = n("646718"),
  v = n("782340"),
  I = n("624698"),
  _ = function(e) {
    let {
      bodyCopy: t = v.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_BODY,
      className: n,
      onDismiss: a,
      onCtaClick: _
    } = e, {
      location: y
    } = (0, u.useAnalyticsContext)(), {
      analyticsLocations: A
    } = (0, d.default)(), {
      isLoading: N,
      suggestedPremiumType: x
    } = (0, p.default)({
      autoTrackExposure: !0,
      experiment: f.default,
      location: T.PremiumUpsellTypes.EMOJI_PICKER_SEARCH
    }), O = i.useRef(!1), R = i.useCallback(() => {
      (0, c.default)({
        subscriptionTier: g.default.getSkuIdForPremiumType(x),
        analyticsLocations: A,
        analyticsObject: {
          ...y,
          object: C.AnalyticsObjects.BUTTON_CTA,
          objectType: C.AnalyticsObjectTypes.TIER_2
        }
      }), null == _ || _()
    }, [A, y, _, x]), M = x === T.PremiumTypes.TIER_0;
    return (0, l.jsx)("div", {
      className: s(I.wrapper, n),
      children: N ? (0, l.jsx)(o.Spinner, {
        type: o.SpinnerTypes.PULSING_ELLIPSIS
      }) : (0, l.jsx)(r.default, {
        onChange: e => {
          e && !O.current && (S.default.track(C.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
            type: T.PremiumUpsellTypes.EMOJI_PICKER_SEARCH,
            location: y,
            location_stack: A,
            sku_id: g.default.getSkuIdForPremiumType(x)
          }), O.current = !0)
        },
        children: (0, l.jsxs)("div", {
          className: I.upsell,
          children: [(0, l.jsx)(E.default, {
            color: M ? m.GradientCssUrls.PREMIUM_TIER_0 : m.GradientCssUrls.PREMIUM_TIER_2,
            className: I.premiumIcon
          }), (0, l.jsx)(o.Text, {
            color: "interactive-normal",
            className: I.body,
            variant: "text-sm/normal",
            children: M ? v.default.Messages.EMOJI_PICKER_PREMIUM_TIER_0_UPSELL_BODY.format({
              planName: (0, g.getTierDisplayName)(T.SubscriptionPlans.PREMIUM_MONTH_TIER_0)
            }) : t
          }), (0, l.jsx)(o.Button, {
            look: o.Button.Looks.LINK,
            color: o.Button.Colors.LINK,
            onClick: R,
            children: M ? v.default.Messages.PREMIUM_SETTINGS_GET_TIER_0 : v.default.Messages.EMOJI_PICKER_PREMIUM_UPSELL_CTA
          }), null != a && (0, l.jsx)(o.Button, {
            onClick: a,
            className: I.dismissButton,
            look: o.Button.Looks.BLANK,
            size: o.Button.Sizes.ICON,
            children: (0, l.jsx)(h.default, {
              className: I.dismissIcon
            })
          })]
        })
      })
    })
  }