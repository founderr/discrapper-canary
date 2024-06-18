"use strict";
n.d(t, {
  Z: function() {
    return E
  }
});
var l = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  i = n(481060),
  r = n(197115),
  o = n(672752),
  u = n(981631),
  c = n(474936),
  d = n(689938),
  m = n(441157);

function E(e) {
  let {
    message: t,
    onClose: n,
    openStreamUpsellModal: s,
    glow: E = !1
  } = e, _ = {
    section: u.jXE.STREAM_SETTINGS,
    object: u.qAy.PREMIUM_UPSELL_BANNER,
    objectType: u.Qqv.BUY
  };
  return (0, l.jsxs)("div", {
    className: a()(m.upsellBanner, m.enhancedBanner, {
      [m.gradientGlow]: E
    }),
    children: [(0, l.jsxs)("div", {
      className: m.iconTextContainer,
      children: [(0, l.jsx)(i.NitroWheelIcon, {
        size: "md",
        color: o.JX.PREMIUM_TIER_2
      }), (0, l.jsx)(i.Text, {
        variant: "text-sm/medium",
        className: a()(m.upsellText, m.enhancedUpsellText),
        children: null != t ? t : d.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
          onClick: () => s({
            analyticsLocation: _,
            onClose: n
          })
        })
      })]
    }), (0, l.jsx)("div", {
      className: m.enhancedCTAs,
      children: (0, l.jsx)(r.Z, {
        className: a()(m.enhancedCTA, m.ctaGradientBackground),
        iconClassName: m.premiumIcon,
        subscriptionTier: c.Si.TIER_2,
        buttonText: d.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA,
        size: i.Button.Sizes.TINY,
        premiumModalAnalyticsLocation: _
      })
    })]
  })
}