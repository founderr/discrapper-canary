"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a = s("735250");
s("470079");
var n = s("153832"),
  l = s("481060"),
  i = s("976255"),
  r = s("667"),
  o = s("335131"),
  d = s("626135"),
  u = s("409813"),
  c = s("981631");
let S = "payment-modal";

function E(e) {
  let t;
  let {
    skuId: E,
    isGift: T = !1,
    giftMessage: _,
    onClose: f,
    onComplete: m,
    analyticsLocations: g,
    analyticsObject: I
  } = e, N = !1, h = (0, n.v4)(), C = e => {
    t = e
  };
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([s.e("49237"), s.e("99387"), s.e("96427"), s.e("40326"), s.e("23357"), s.e("15972"), s.e("6416"), s.e("38674"), s.e("43906"), s.e("54167"), s.e("32776"), s.e("95900"), s.e("65866"), s.e("87624"), s.e("69935")]).then(s.bind(s, "608579"));
    return t => {
      let {
        onClose: s,
        returnRef: n,
        ...l
      } = t;
      return (0, a.jsx)(e, {
        ...l,
        loadId: h,
        skuId: E,
        isGift: T,
        giftMessage: _,
        analyticsLocations: g,
        onClose: e => {
          s(), null == f || f(e)
        },
        onComplete: () => {
          N = !0, null == m || m()
        },
        returnRef: n,
        onStepChange: C
      })
    }
  }, {
    modalKey: S,
    onCloseCallback: () => {
      !N && d.default.track(c.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: h,
        payment_type: c.PurchaseTypeToAnalyticsPaymentType[c.PurchaseTypes.ONE_TIME],
        location: I,
        is_gift: T,
        location_stack: g
      }), (0, i.clearError)(), (0, r.clearPurchaseTokenAuthState)(), null == f || f(N), N && (0, o.fetchCollectiblesPurchases)()
    },
    onCloseRequest: () => {
      t === u.Step.REVIEW && (0, l.closeModal)(S)
    }
  })
}