"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var a = l("37983");
l("884691");
var n = l("414456"),
  s = l.n(n),
  r = l("77078"),
  i = l("216422"),
  u = l("49111"),
  o = l("782340"),
  d = l("139191");

function c(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: n
  } = e, c = {
    section: u.AnalyticsSections.STREAM_SETTINGS,
    object: u.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: u.AnalyticsObjectTypes.BUY
  };
  return (0, a.jsxs)(r.Clickable, {
    onClick: () => n({
      analyticsLocation: c,
      onClose: l
    }),
    className: s(d.upsellBanner, d.gradientBackground),
    children: [(0, a.jsxs)("div", {
      className: d.iconTextContainer,
      children: [(0, a.jsx)(i.default, {
        className: d.iconColor
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: d.upsellText,
        children: null != t ? t : o.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, a.jsx)(r.Text, {
      variant: "text-sm/medium",
      className: d.textLink,
      children: o.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}