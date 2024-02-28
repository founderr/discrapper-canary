"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  a = n("516555"),
  r = n("812204"),
  l = n("685665"),
  o = n("635357"),
  u = n("642906"),
  d = n("85336"),
  c = n("385179"),
  f = n("292215"),
  p = n("639137"),
  E = n("526139"),
  S = n("158184"),
  _ = n("385890"),
  m = n("337978"),
  I = n("49111"),
  C = n("843455"),
  T = n("773232");

function x(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: x,
    loadId: h,
    skuId: g,
    isGift: P = !1,
    giftRecipient: N,
    giftMessage: A,
    analyticsLocations: v,
    returnRef: O
  } = e, {
    analyticsLocations: L,
    AnalyticsLocationProvider: M
  } = (0, l.default)([...v, r.default.COLLECTIBLES_PAYMENT_MODAL]), y = i.useRef(new a.Environment), [j, b] = i.useState(null), R = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, _.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
    key: d.Step.CONFIRM,
    renderStep: e => (0, s.jsx)(S.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: j,
      analyticsLocations: L
    }),
    options: {
      bodyClassName: T.modalOverrideBody,
      sliderBodyClassName: T.modalOverrideSliderBody
    }
  }];
  return (0, s.jsxs)(M, {
    children: [(0, s.jsx)(a.ConfettiCanvas, {
      ref: b,
      className: T.confettiCanvas,
      environment: y.current
    }), (0, s.jsx)(u.PaymentContextProvider, {
      stepConfigs: R,
      applicationId: I.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [g],
      isGift: P,
      activeSubscription: null,
      purchaseType: C.PurchaseTypes.ONE_TIME,
      children: (0, s.jsx)(o.GiftContextProvider, {
        isGift: P,
        giftRecipient: N,
        giftMessage: A,
        children: (0, s.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: n,
          loadId: h,
          applicationId: I.COLLECTIBLES_APPLICATION_ID,
          skuId: g,
          initialPlanId: null,
          analyticsLocations: L,
          transitionState: x,
          renderHeader: (e, t, n) => P ? (0, s.jsx)(p.default, {
            step: n,
            onClose: () => t(!1)
          }) : (0, s.jsx)(m.default, {
            step: n,
            onClose: () => t(!1)
          }),
          returnRef: O,
          hideShadow: !0
        })
      })
    })]
  })
}