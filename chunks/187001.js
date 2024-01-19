"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var n = l("37983"),
  s = l("884691"),
  a = l("77078"),
  r = l("997289"),
  i = l("685665"),
  u = l("649844"),
  o = l("599110"),
  d = l("49111"),
  c = l("646718"),
  f = l("782340"),
  m = l("999125"),
  S = l("770420"),
  h = () => {
    let e = (0, r.useAnalyticsContext)(),
      {
        analyticsLocations: t
      } = (0, i.default)();
    return s.useEffect(() => {
      o.default.track(d.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
        type: c.PremiumUpsellTypes.CLIPS_GO_LIVE_PREMIUM_EARLY_ACCESS_ROADBLOCK_UPSELL,
        location: e.location,
        location_stack: t
      })
    }, []), (0, n.jsx)(a.FormItem, {
      className: S.modalContent,
      children: (0, n.jsxs)("div", {
        className: m.nitroUpsellContainer,
        children: [(0, n.jsxs)("div", {
          children: [(0, n.jsx)(a.Heading, {
            variant: "heading-lg/bold",
            color: "always-white",
            className: m.nitroUpsellTitle,
            children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_TITLE
          }), (0, n.jsx)(a.Text, {
            className: m.nitroUpsellSubtitle,
            variant: "text-sm/normal",
            color: "always-white",
            children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_BODY.format()
          })]
        }), (0, n.jsx)(a.Button, {
          look: a.Button.Looks.INVERTED,
          onClick: () => {
            (0, u.default)({
              subscriptionTier: c.PremiumSubscriptionSKUs.TIER_2,
              analyticsLocations: t
            })
          },
          children: f.default.Messages.CLIPS_GO_LIVE_EA_UPSELL_CTA
        })]
      })
    })
  }