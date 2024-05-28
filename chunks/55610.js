"use strict";
r.r(t), r.d(t, {
  useShouldShowLegacyPricingNotice: function() {
    return E
  }
});
var n = r("735250");
r("470079");
var a = r("120356"),
  s = r.n(a),
  l = r("512722"),
  u = r.n(l),
  i = r("759231"),
  c = r("63063"),
  d = r("631818"),
  o = r("987033"),
  f = r("53900"),
  m = r("981631"),
  p = r("689938"),
  N = r("424187");

function E() {
  let e = (0, f.default)(),
    {
      enabled: t
    } = d.default.useExperiment({
      location: "5ebfcf_1"
    }, {
      autoTrackExposure: !1
    }),
    {
      enabled: r
    } = o.default.useExperiment({
      location: "5ebfcf_2"
    }, {
      autoTrackExposure: !1
    });
  return null != e && ("PL" === e ? t : "TR" === e && r)
}
t.default = e => {
  var t, r;
  let {
    fromBoostCancelModal: a,
    className: l
  } = e, d = (0, f.default)();
  if (!E()) return null;
  return u()(null != d, "Subscription billing country should not be null"), (0, n.jsxs)("div", {
    className: s()(N.noticeRoot, l),
    children: [(0, n.jsx)("div", {
      className: N.iconContainer,
      children: (0, n.jsx)(i.default, {
        className: N.infoIcon
      })
    }), (0, n.jsx)("div", {
      className: N.text,
      children: (t = d, r = a, "PL" === t ? r ? p.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_PLN_LEGACY_PRICING_WARNING : "TR" === t ? r ? p.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_TRY_LEGACY_PRICING_WARNING : r ? p.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_BOOST_WARNING : p.default.Messages.LOCALIZED_PRICING_LEGACY_PRICING_WARNING).format({
        helpCenterLink: c.default.getArticleURL(m.HelpdeskArticles.LOCALIZED_PRICING)
      })
    })]
  })
}