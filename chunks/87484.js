"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("153832"),
  s = n("481060"),
  a = n("976255"),
  l = n("667"),
  o = n("626135"),
  c = n("981631");

function d(e) {
  let {
    applicationId: t,
    skuId: d,
    onClose: u,
    onComplete: f,
    analyticsLocations: h,
    analyticsLocationObject: m,
    contextKey: p
  } = e, S = !1, x = (0, r.v4)();
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("58625"), n.e("6416"), n.e("14720"), n.e("63438"), n.e("62511"), n.e("61247"), n.e("58600"), n.e("32776"), n.e("95900"), n.e("41554")]).then(n.bind(n, "409600"));
    return n => {
      let {
        onClose: r,
        ...s
      } = n;
      return (0, i.jsx)(e, {
        ...s,
        loadId: x,
        applicationId: t,
        skuId: d,
        analyticsLocations: h,
        analyticsLocationObject: m,
        onClose: e => {
          r(), null == u || u(e)
        },
        onComplete: e => {
          S = !0, null == f || f(e)
        }
      })
    }
  }, {
    contextKey: p,
    onCloseCallback: () => {
      !S && o.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: x,
        payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
        location: m,
        is_gift: !1,
        application_id: t,
        location_stack: h
      }), (0, a.clearError)(), (0, l.clearPurchaseTokenAuthState)(), null == u || u(S)
    },
    onCloseRequest: c.NOOP
  })
}