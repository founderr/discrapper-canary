"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
  i = n("283595"),
  r = n("55563"),
  o = n("780570"),
  u = n("404133"),
  d = n("701560"),
  c = n("785547");

function f(e) {
  let {
    application: t,
    fullWidth: n = !1,
    size: f = a.Button.Sizes.LARGE,
    color: E,
    customDisabledColor: _,
    hideNotLaunchable: m,
    tooltipPosition: T,
    onClick: I,
    className: p,
    source: h,
    storeListingAnalyticsProperties: N,
    pauseAnimation: S,
    hover: C,
    innerClassName: A
  } = e, g = {
    fullWidth: n,
    size: f,
    color: E,
    customDisabledColor: _,
    tooltipPosition: T,
    onClick: I,
    className: p,
    hover: C,
    innerClassName: A
  }, M = (0, l.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), R = null != M ? M.sku.id : null, v = null != R ? R : t.primarySkuId, O = (0, l.useStateFromStores)([r.default], () => null != v && !r.default.didFetchingSkuFail(v));
  return null != M && (0, o.isUserEntitledToLibraryApplication)(M) ? (0, s.jsx)(c.default, {
    ...g,
    libraryApplication: M,
    source: h
  }) : O ? (0, s.jsx)(u.default, {
    ...g,
    skuId: null != M ? M.sku.id : null,
    applicationId: t.id,
    pauseAnimation: S,
    storeListingAnalyticsProperties: N
  }) : (0, s.jsx)(d.default, {
    ...g,
    hideNotLaunchable: m,
    applicationId: t.id
  })
}