"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  i = n("283595"),
  r = n("55563"),
  o = n("780570"),
  u = n("701560"),
  d = n("785547");

function c(e) {
  let {
    application: t,
    fullWidth: n = !1,
    size: c = l.Button.Sizes.LARGE,
    color: f,
    customDisabledColor: E,
    hideNotLaunchable: _,
    tooltipPosition: T,
    onClick: m,
    className: I,
    source: N,
    hover: p,
    innerClassName: h
  } = e, S = {
    fullWidth: n,
    size: c,
    color: f,
    customDisabledColor: E,
    tooltipPosition: T,
    onClick: m,
    className: I,
    hover: p,
    innerClassName: h
  }, C = (0, a.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), A = null != C ? C.sku.id : null, g = null != A ? A : t.primarySkuId, M = (0, a.useStateFromStores)([r.default], () => null != g && !r.default.didFetchingSkuFail(g));
  return null != C && (0, o.isUserEntitledToLibraryApplication)(C) ? (0, s.jsx)(d.default, {
    ...S,
    libraryApplication: C,
    source: N
  }) : M ? (0, s.jsx)("div", {
    children: "deprecated!"
  }) : (0, s.jsx)(u.default, {
    ...S,
    hideNotLaunchable: _,
    applicationId: t.id
  })
}