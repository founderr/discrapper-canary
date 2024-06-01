"use strict";
n.r(t), n.d(t, {
  openIAPPurchaseModal: function() {
    return I
  }
});
var s = n("735250");
n("470079");
var a = n("512722"),
  l = n.n(a),
  i = n("481060"),
  r = n("558381"),
  o = n("821849"),
  u = n("15640"),
  d = n("724870"),
  c = n("87484"),
  E = n("928518"),
  f = n("106976"),
  _ = n("689011"),
  T = n("55563"),
  m = n("981631");
async function I(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: a,
    analyticsLocations: I,
    analyticsLocationObject: N
  } = e, p = T.default.get(n);
  if (null == p) {
    let e = (await (0, r.fetchAllStoreListingsForApplication)(t)).find(e => e.sku.id === n);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === m.SKUTypes.SUBSCRIPTION_GROUP && await (0, f.fetchAllSubscriptionListingsDataForApplication)(t, e.id)
  }
  p = null != p ? p : T.default.get(n), l()(null != p && p.applicationId === t, "SKU must belong to application"), p.type === m.SKUTypes.SUBSCRIPTION && !(0, u.getSubscriptionPlansLoaded)([p.id]) && await (0, o.fetchSubscriptionPlansForSKU)(p.id);
  let S = function() {
    let e = E.default.getWindow(m.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
    return null == e || e.closed ? i.DEFAULT_MODAL_CONTEXT : i.POPOUT_MODAL_CONTEXT
  }();
  if (p.type !== m.SKUTypes.SUBSCRIPTION) return new Promise((e, s) => {
    (0, c.default)({
      applicationId: t,
      skuId: n,
      analyticsLocationObject: N,
      analyticsLocations: I,
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

  function(e, t, n, a, l) {
    return (0, d.openActivityApplicationPaymentModal)({
      applicationId: e,
      skuId: t,
      initialPlanId: n,
      analyticsLocationObject: a,
      analyticsLocations: l,
      renderHeader: (e, t, n) => (0, s.jsx)(_.PurchaseHeader, {
        step: n,
        onClose: () => t(!1)
      })
    })
  }(t, n, a, N, I)
}