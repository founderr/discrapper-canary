"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
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
    size: f = l.Button.Sizes.LARGE,
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
    innerClassName: g
  } = e, A = {
    fullWidth: n,
    size: f,
    color: E,
    customDisabledColor: _,
    tooltipPosition: T,
    onClick: I,
    className: p,
    hover: C,
    innerClassName: g
  }, M = (0, a.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), R = null != M ? M.sku.id : null, v = null != R ? R : t.primarySkuId, O = (0, a.useStateFromStores)([r.default], () => null != v && !r.default.didFetchingSkuFail(v));
  return null != M && (0, o.isUserEntitledToLibraryApplication)(M) ? (0, s.jsx)(c.default, {
    ...A,
    libraryApplication: M,
    source: h
  }) : O ? (0, s.jsx)(u.default, {
    ...A,
    skuId: null != M ? M.sku.id : null,
    applicationId: t.id,
    pauseAnimation: S,
    storeListingAnalyticsProperties: N
  }) : (0, s.jsx)(d.default, {
    ...A,
    hideNotLaunchable: m,
    applicationId: t.id
  })
}