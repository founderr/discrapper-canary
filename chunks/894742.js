"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
}), s("222007");
var n = s("37983"),
  r = s("884691"),
  l = s("516555"),
  i = s("812204"),
  a = s("685665"),
  o = s("635357"),
  u = s("642906"),
  d = s("85336"),
  c = s("385179"),
  f = s("292215"),
  E = s("639137"),
  _ = s("526139"),
  p = s("158184"),
  I = s("385890"),
  S = s("337978"),
  h = s("49111"),
  m = s("843455"),
  C = s("322859");

function T(e) {
  let {
    onClose: t,
    onComplete: s,
    transitionState: T,
    loadId: x,
    skuId: P,
    isGift: R = !1,
    giftRecipient: v,
    giftMessage: g,
    analyticsLocations: M,
    returnRef: A
  } = e, {
    analyticsLocations: N,
    AnalyticsLocationProvider: O
  } = (0, a.default)([...M, i.default.COLLECTIBLES_PAYMENT_MODAL]), L = r.useRef(new l.Environment), [j, U] = r.useState(null), D = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, I.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, _.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
    key: d.Step.CONFIRM,
    renderStep: e => (0, n.jsx)(p.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: j,
      analyticsLocations: N
    }),
    options: {
      bodyClassName: C.modalOverrideBody,
      sliderBodyClassName: C.modalOverrideSliderBody
    }
  }];
  return (0, n.jsxs)(O, {
    children: [(0, n.jsx)(l.ConfettiCanvas, {
      ref: U,
      className: C.confettiCanvas,
      environment: L.current
    }), (0, n.jsx)(u.PaymentContextProvider, {
      stepConfigs: D,
      applicationId: h.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [P],
      isGift: R,
      activeSubscription: null,
      purchaseType: m.PurchaseTypes.ONE_TIME,
      children: (0, n.jsx)(o.GiftContextProvider, {
        isGift: R,
        giftRecipient: v,
        giftMessage: g,
        children: (0, n.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: s,
          loadId: x,
          applicationId: h.COLLECTIBLES_APPLICATION_ID,
          skuId: P,
          initialPlanId: null,
          analyticsLocations: N,
          transitionState: T,
          renderHeader: (e, t, s) => R ? (0, n.jsx)(E.default, {
            step: s,
            onClose: () => t(!1)
          }) : (0, n.jsx)(S.default, {
            step: s,
            onClose: () => t(!1)
          }),
          returnRef: A,
          hideShadow: !0
        })
      })
    })]
  })
}