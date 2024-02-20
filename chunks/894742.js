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
  u = n("635357"),
  o = n("642906"),
  d = n("85336"),
  c = n("385179"),
  f = n("292215"),
  E = n("639137"),
  p = n("526139"),
  S = n("158184"),
  m = n("385890"),
  _ = n("337978"),
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
    giftRecipient: A,
    giftMessage: N,
    analyticsLocations: v,
    returnRef: O
  } = e, {
    analyticsLocations: L,
    AnalyticsLocationProvider: M
  } = (0, l.default)([...v, r.default.COLLECTIBLES_PAYMENT_MODAL]), y = i.useRef(new a.Environment), [j, R] = i.useState(null), b = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, m.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, p.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
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
      ref: R,
      className: T.confettiCanvas,
      environment: y.current
    }), (0, s.jsx)(o.PaymentContextProvider, {
      stepConfigs: b,
      applicationId: I.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [g],
      isGift: P,
      activeSubscription: null,
      purchaseType: C.PurchaseTypes.ONE_TIME,
      children: (0, s.jsx)(u.GiftContextProvider, {
        isGift: P,
        giftRecipient: A,
        giftMessage: N,
        children: (0, s.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: n,
          loadId: h,
          applicationId: I.COLLECTIBLES_APPLICATION_ID,
          skuId: g,
          initialPlanId: null,
          analyticsLocations: L,
          transitionState: x,
          renderHeader: (e, t, n) => P ? (0, s.jsx)(E.default, {
            step: n,
            onClose: () => t(!1)
          }) : (0, s.jsx)(_.default, {
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