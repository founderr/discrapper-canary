"use strict";
n.r(t), n.d(t, {
  useShouldShowLegacyPricingNotice: function() {
    return I
  },
  default: function() {
    return p
  }
});
var s = n("37983");
n("884691");
var r = n("414456"),
  a = n.n(r),
  l = n("627445"),
  i = n.n(l),
  u = n("423487"),
  c = n("701909"),
  o = n("35188"),
  d = n("391533"),
  f = n("296253"),
  m = n("49111"),
  _ = n("782340"),
  E = n("816461");

function I() {
  let e = (0, f.default)(),
    {
      enabled: t
    } = o.default.useExperiment({
      location: "5ebfcf_1"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: n
    } = d.default.useExperiment({
      location: "5ebfcf_2"
    }, {
      autoTrackExposure: !1
    });
  return null != e && ("PL" === e ? t : "TR" === e && n)
}
var p = e => {
  var t, n;
  let {
    fromBoostCancelModal: r,
    className: l
  } = e, o = (0, f.default)(), d = I();
  if (!d) return null;
  return i(null != o, "Subscription billing country should not be null"), (0, s.jsxs)("div", {
    className: a(E.noticeRoot, l),
    children: [(0, s.jsx)("div", {
      className: E.iconContainer,
      children: (0, s.jsx)(u.default, {
        className: E.infoIcon
      })
    }), (0, s.jsx)("div", {
      className: E.text,
      children: (t = o, n = r, "PL" === t ? n ? _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? n ? _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : n ? _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : _.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
        helpCenterLink: c.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
      })
    })]
  })
}