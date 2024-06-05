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
  f = n("928518"),
  E = n("106976"),
  _ = n("689011"),
  m = n("55563"),
  T = n("981631");
async function I(e) {
  let {
    applicationId: t,
    skuId: n,
    initialPlanId: a,
    analyticsLocations: I,
    analyticsLocationObject: p
  } = e, h = m.default.get(n);
  if (null == h) {
    let e = (await (0, r.fetchAllStoreListingsForApplication)(t)).find(e => e.sku.id === n);
    l()(null != e, "Could not find store listing for sku"), e.sku.type === T.SKUTypes.SUBSCRIPTION_GROUP && await (0, E.fetchAllSubscriptionListingsDataForApplication)(t, e.id)
  }
  h = null != h ? h : m.default.get(n), l()(null != h && h.applicationId === t, "SKU must belong to application"), h.type === T.SKUTypes.SUBSCRIPTION && !(0, u.getSubscriptionPlansLoaded)([h.id]) && await (0, o.fetchSubscriptionPlansForSKU)(h.id);
  let N = function() {
    let e = f.default.getWindow(T.PopoutWindowKeys.CHANNEL_CALL_POPOUT);
    return null == e || e.closed ? i.DEFAULT_MODAL_CONTEXT : i.POPOUT_MODAL_CONTEXT
  }();
  if (h.type !== T.SKUTypes.SUBSCRIPTION) return new Promise((e, s) => {
    (0, c.default)({
      applicationId: t,
      skuId: n,
      analyticsLocationObject: p,
      analyticsLocations: I,
      contextKey: N,
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
  }(t, n, a, p, I)
}