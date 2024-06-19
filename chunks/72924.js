n.d(t, {
  S: function() {
    return m
  }
});
var s = n(735250);
n(470079);
var i = n(512722),
  l = n.n(i),
  a = n(481060),
  r = n(558381),
  o = n(821849),
  c = n(15640),
  u = n(724870),
  d = n(87484),
  E = n(928518),
  _ = n(106976),
  I = n(689011),
  T = n(55563),
  N = n(981631);
async function m(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: i,
    analyticsLocations: m,
    analyticsLocationObject: h
  } = e, C = T.Z.get(n);
  if (null == C) {
    let e = (await (0, r.oJ)(t)).find(e => e.sku.id === n);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === N.epS.SUBSCRIPTION_GROUP && await (0, _.rx)(t, e.id)
  }
  C = null != C ? C : T.Z.get(n), l()(null != C && C.applicationId === t, "SKU must belong to application"), C.type === N.epS.SUBSCRIPTION && !(0, c.a)([C.id]) && await (0, o.GZ)(C.id);
  let S = function() {
    let e = E.Z.getWindow(N.KJ3.CHANNEL_CALL_POPOUT);
    return null == e || e.closed ? a.DEFAULT_MODAL_CONTEXT : a.POPOUT_MODAL_CONTEXT
  }();
  if (C.type !== N.epS.SUBSCRIPTION) return new Promise((e, s) => {
    (0, d.Z)({
      applicationId: t,
      skuId: n,
      analyticsLocationObject: h,
      analyticsLocations: m,
      contextKey: S,
      onComplete: t => {
        var n;
        e(null !== (n = null == t ? void 0 : t.entitlements) && void 0 !== n ? n : [])
      },
      onClose: e => {
        !e && s()
      }
    })
  });
  await

  function(e, t, n, i, l) {
    return (0, u.m)({
      applicationId: e,
      skuId: t,
      initialPlanId: n,
      analyticsLocationObject: i,
      analyticsLocations: l,
      renderHeader: (e, t, n) => (0, s.jsx)(I.t, {
        step: n,
        onClose: () => t(!1)
      })
    })
  }(t, n, i, h, m)
}