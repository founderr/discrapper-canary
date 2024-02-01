"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var n = l("37983");
l("884691");
var a = l("414456"),
  s = l.n(a),
  r = l("77078"),
  i = l("216422"),
  u = l("49111"),
  o = l("782340"),
  d = l("139191");

function c(e) {
  let {
    message: t,
    onClose: l,
    openStreamUpsellModal: a
  } = e, c = {
    section: u.AnalyticsSections.STREAM_SETTINGS,
    object: u.AnalyticsObjects.PREMIUM_UPSELL_BANNER,
    objectType: u.AnalyticsObjectTypes.BUY
  };
  return (0, n.jsxs)(r.Clickable, {
    onClick: () => a({
      analyticsLocation: c,
      onClose: l
    }),
    className: s(d.upsellBanner, d.gradientBackground),
    children: [(0, n.jsxs)("div", {
      className: d.iconTextContainer,
      children: [(0, n.jsx)(i.default, {
        className: d.iconColor
      }), (0, n.jsx)(r.Text, {
        variant: "text-sm/medium",
        className: d.upsellText,
        children: null != t ? t : o.default.Messages.STREAM_PREMIUM_UPSELL_BANNER
      })]
    }), (0, n.jsx)(r.Text, {
      variant: "text-sm/medium",
      className: d.textLink,
      children: o.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_CTA
    })]
  })
}