"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250");
n("470079");
var l = n("153832"),
  s = n("481060"),
  r = n("976255"),
  i = n("667"),
  o = n("335131"),
  d = n("626135"),
  u = n("409813"),
  c = n("608579"),
  f = n("981631");
let E = "payment-modal";

function S(e) {
  let t;
  let {
    skuId: n,
    isGift: S = !1,
    giftMessage: C,
    onClose: p,
    onComplete: T,
    analyticsLocations: m,
    analyticsObject: I
  } = e, _ = !1, x = (0, l.v4)(), N = e => {
    t = e
  };
  (0, s.openModalLazy)(async () => e => {
    let {
      onClose: t,
      returnRef: l,
      ...s
    } = e;
    return (0, a.jsx)(c.default, {
      ...s,
      loadId: x,
      skuId: n,
      isGift: S,
      giftMessage: C,
      analyticsLocations: m,
      onClose: e => {
        t(), null == p || p(e)
      },
      onComplete: () => {
        _ = !0, null == T || T()
      },
      returnRef: l,
      onStepChange: N
    })
  }, {
    modalKey: E,
    onCloseCallback: () => {
      !_ && d.default.track(f.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
        load_id: x,
        payment_type: f.PurchaseTypeToAnalyticsPaymentType[f.PurchaseTypes.ONE_TIME],
        location: I,
        is_gift: S,
        location_stack: m
      }), (0, r.clearError)(), (0, i.clearPurchaseTokenAuthState)(), null == p || p(_), _ && (0, o.fetchCollectiblesPurchases)()
    },
    onCloseRequest: () => {
      t === u.Step.REVIEW && (0, s.closeModal)(E)
    }
  })
}