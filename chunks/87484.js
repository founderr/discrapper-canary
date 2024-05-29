"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("735250");
n("470079");
var r = n("153832"),
  l = n("481060"),
  a = n("976255"),
  s = n("667"),
  o = n("626135"),
  u = n("981631");

function d(e) {
  let {
    applicationId: t,
    skuId: d,
    onClose: c,
    onComplete: f,
    analyticsLocations: S,
    analyticsLocationObject: p,
    contextKey: m
  } = e, h = !1, T = (0, r.v4)();
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("96427"), n.e("40326"), n.e("23357"), n.e("15972"), n.e("6416"), n.e("38674"), n.e("43906"), n.e("54167"), n.e("32776"), n.e("95900"), n.e("32747")]).then(n.bind(n, "409600"));
    return n => {
      let {
        onClose: r,
        ...l
      } = n;
      return (0, i.jsx)(e, {
        ...l,
        loadId: T,
        applicationId: t,
        skuId: d,
        analyticsLocations: S,
        analyticsLocationObject: p,
        onClose: e => {
          r(), null == c || c(e)
        },
        onComplete: e => {
          h = !0, null == f || f(e)
        }
      })
    }
  }, {
    contextKey: m,
    onCloseCallback: () => {
      !h && o.default.track(u.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: T,
        payment_type: u.PurchaseTypeToAnalyticsPaymentType[u.PurchaseTypes.ONE_TIME],
        location: p,
        is_gift: !1,
        application_id: t,
        location_stack: S
      }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == c || c(h)
    },
    onCloseRequest: u.NOOP
  })
}