"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983");
s("884691");
var n = s("446674"),
  l = s("77078"),
  i = s("626301"),
  r = s("400307"),
  o = s("697218"),
  d = s("719923"),
  u = s("646718"),
  c = s("782340"),
  E = s("157997");
let _ = e => {
  let {
    onOpenPremiumClick: t
  } = e, s = (0, a.jsx)(l.Button, {
    className: E.tier0Button,
    color: l.Button.Colors.BRAND,
    look: l.Button.Looks.INVERTED,
    onClick: () => {
      (0, i.navigateToPremiumMarketingPage)(), null != t && t()
    },
    children: c.default.Messages.LEARN_MORE
  });
  return (0, a.jsxs)("div", {
    className: E.tier0Container,
    children: [(0, a.jsx)(l.Heading, {
      className: E.tier0Heading,
      variant: "heading-xxl/extrabold",
      children: c.default.Messages.GUILD_SETTINGS_PREMIUM_UPSELL_HEADING_SECONDARY
    }), (0, a.jsx)(r.Tier2Card, {
      className: E.tier0Card,
      ctaButton: s,
      featureSet: r.Tier2FeatureSet.BOOSTING,
      showWumpus: !0,
      showYearlyPrice: !0
    })]
  })
};
var T = e => {
  let {
    onOpenPremiumClick: t
  } = e, s = (0, n.useStateFromStores)([o.default], () => o.default.getCurrentUser());
  return d.default.isPremium(s, u.PremiumTypes.TIER_2) ? null : (0, a.jsx)(_, {
    onOpenPremiumClick: t
  })
}