"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var s = n("153832"),
  a = n("481060"),
  l = n("976255"),
  r = n("667"),
  o = n("626135"),
  c = n("981631");

function d(e) {
  let {
    applicationId: t,
    skuId: d,
    onClose: u,
    onComplete: h,
    analyticsLocations: f,
    analyticsLocationObject: m,
    contextKey: x
  } = e, v = !1, p = (0, s.v4)();
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("58625"), n.e("6416"), n.e("14720"), n.e("63438"), n.e("62511"), n.e("61247"), n.e("58600"), n.e("32776"), n.e("95900"), n.e("21015")]).then(n.bind(n, "409600"));
    return n => {
      let {
        onClose: s,
        ...a
      } = n;
      return (0, i.jsx)(e, {
        ...a,
        loadId: p,
        applicationId: t,
        skuId: d,
        analyticsLocations: f,
        analyticsLocationObject: m,
        onClose: e => {
          s(), null == u || u(e)
        },
        onComplete: e => {
          v = !0, null == h || h(e)
        }
      })
    }
  }, {
    contextKey: x,
    onCloseCallback: () => {
      !v && o.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: p,
        payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
        location: m,
        is_gift: !1,
        application_id: t,
        location_stack: f
      }), (0, l.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == u || u(v)
    },
    onCloseRequest: c.NOOP
  })
}