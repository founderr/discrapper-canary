"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
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

function E(e) {
  let {
    application: t,
    fullWidth: n = !1,
    size: E = l.Button.Sizes.LARGE,
    color: f,
    customDisabledColor: _,
    hideNotLaunchable: T,
    tooltipPosition: I,
    onClick: m,
    className: N,
    source: p,
    storeListingAnalyticsProperties: S,
    pauseAnimation: C,
    hover: A,
    innerClassName: h
  } = e, g = {
    fullWidth: n,
    size: E,
    color: f,
    customDisabledColor: _,
    tooltipPosition: I,
    onClick: m,
    className: N,
    hover: A,
    innerClassName: h
  }, M = (0, a.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), O = null != M ? M.sku.id : null, R = null != O ? O : t.primarySkuId, v = (0, a.useStateFromStores)([r.default], () => null != R && !r.default.didFetchingSkuFail(R));
  return null != M && (0, o.isUserEntitledToLibraryApplication)(M) ? (0, s.jsx)(c.default, {
    ...g,
    libraryApplication: M,
    source: p
  }) : v ? (0, s.jsx)(u.default, {
    ...g,
    skuId: null != M ? M.sku.id : null,
    applicationId: t.id,
    pauseAnimation: C,
    storeListingAnalyticsProperties: S
  }) : (0, s.jsx)(d.default, {
    ...g,
    hideNotLaunchable: T,
    applicationId: t.id
  })
}