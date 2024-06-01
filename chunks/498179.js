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
    color: E,
    customDisabledColor: f,
    hideNotLaunchable: _,
    tooltipPosition: T,
    onClick: m,
    className: I,
    source: N,
    hover: p,
    innerClassName: S
  } = e, C = {
    fullWidth: n,
    size: c,
    color: E,
    customDisabledColor: f,
    tooltipPosition: T,
    onClick: m,
    className: I,
    hover: p,
    innerClassName: S
  }, A = (0, a.useStateFromStores)([i.default], () => i.default.getActiveLibraryApplication(t.id)), h = null != A ? A.sku.id : null, g = null != h ? h : t.primarySkuId, M = (0, a.useStateFromStores)([r.default], () => null != g && !r.default.didFetchingSkuFail(g));
  return null != A && (0, o.isUserEntitledToLibraryApplication)(A) ? (0, s.jsx)(d.default, {
    ...C,
    libraryApplication: A,
    source: N
  }) : M ? (0, s.jsx)("div", {
    children: "deprecated!"
  }) : (0, s.jsx)(u.default, {
    ...C,
    hideNotLaunchable: _,
    applicationId: t.id
  })
}