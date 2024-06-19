t.d(n, {
  Z: function() {
    return E
  }
});
var l = t(735250);
t(470079);
var s = t(120356),
  a = t.n(s),
  i = t(481060),
  r = t(197115),
  o = t(672752),
  u = t(981631),
  c = t(474936),
  d = t(689938),
  m = t(323021);

function E(e) {
  let {
    message: n,
    onClose: t,
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
        children: null != n ? n : d.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_LEARN_MORE_V3.format({
          onClick: () => s({
            analyticsLocation: _,
            onClose: t
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