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
    tooltipPosition: m,
    onClick: T,
    className: I,
    source: p,
    hover: h,
    innerClassName: N
  } = e, S = {
    fullWidth: n,
    size: c,
    color: f,
    customDisabledColor: E,
    tooltipPosition: m,
    onClick: T,
    className: I,
    hover: h,
    innerClassName: N
  }, C = (0, a.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), g = null != C ? C.sku.id : null, A = null != g ? g : t.primarySkuId, M = (0, a.useStateFromStores)([r.default], () => null != A && !r.default.didFetchingSkuFail(A));
  return null != C && (0, o.isUserEntitledToLibraryApplication)(C) ? (0, s.jsx)(d.default, {
    ...S,
    libraryApplication: C,
    source: p
  }) : M ? (0, s.jsx)("div", {
    children: "deprecated!"
  }) : (0, s.jsx)(u.default, {
    ...S,
    hideNotLaunchable: _,
    applicationId: t.id
  })
}