n.d(t, {
  Z: function() {
    return d
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(283595),
  r = n(55563),
  o = n(780570),
  c = n(701560),
  u = n(785547);

function d(e) {
  let {
    application: t,
    fullWidth: n = !1,
    size: d = l.Button.Sizes.LARGE,
    color: E,
    customDisabledColor: _,
    hideNotLaunchable: I,
    tooltipPosition: T,
    onClick: m,
    className: N,
    source: h,
    hover: C,
    innerClassName: S
  } = e, A = {
    fullWidth: n,
    size: d,
    color: E,
    customDisabledColor: _,
    tooltipPosition: T,
    onClick: m,
    className: N,
    hover: C,
    innerClassName: S
  }, g = (0, i.e7)([a.Z], () => a.Z.getActiveLibraryApplication(t.id)), p = null != g ? g.sku.id : null, f = null != p ? p : t.primarySkuId, R = (0, i.e7)([r.Z], () => null != f && !r.Z.didFetchingSkuFail(f));
  return null != g && (0, o.Je)(g) ? (0, s.jsx)(u.Z, {
    ...A,
    libraryApplication: g,
    source: h
  }) : R ? (0, s.jsx)("div", {
    children: "deprecated!"
  }) : (0, s.jsx)(c.Z, {
    ...A,
    hideNotLaunchable: I,
    applicationId: t.id
  })
}