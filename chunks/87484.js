"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var s = n("153832"),
  l = n("481060"),
  r = n("976255"),
  a = n("667"),
  o = n("626135"),
  u = n("981631");

function d(e) {
  let {
    applicationId: t,
    skuId: d,
    onClose: c,
    onComplete: f,
    analyticsLocations: h,
    analyticsLocationObject: S,
    contextKey: p
  } = e, m = !1, v = (0, s.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("440"), n.e("6416"), n.e("63438"), n.e("62511"), n.e("58600"), n.e("32776"), n.e("95900"), n.e("32747")]).then(n.bind(n, "409600"));
    return n => {
      let {
        onClose: s,
        ...l
      } = n;
      return (0, i.jsx)(e, {
        ...l,
        loadId: v,
        applicationId: t,
        skuId: d,
        analyticsLocations: h,
        analyticsLocationObject: S,
        onClose: e => {
          s(), null == c || c(e)
        },
        onComplete: e => {
          m = !0, null == f || f(e)
        }
      })
    }
  }, {
    contextKey: p,
    onCloseCallback: () => {
      !m && o.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: v,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: S,
        is_gift: !1,
        application_id: t,
        location_stack: h
      }), (0, r.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == c || c(m)
    },
    onCloseRequest: u.NOOP
  })
}