"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  l = n("516555"),
  i = n("812204"),
  a = n("685665"),
  o = n("635357"),
  u = n("642906"),
  d = n("85336"),
  c = n("385179"),
  f = n("292215"),
  E = n("639137"),
  p = n("526139"),
  _ = n("158184"),
  I = n("385890"),
  S = n("337978"),
  h = n("49111"),
  m = n("843455"),
  C = n("322859");

function T(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: T,
    loadId: x,
    skuId: P,
    isGift: R = !1,
    giftRecipient: g,
    giftMessage: v,
    analyticsLocations: M,
    returnRef: A
  } = e, {
    analyticsLocations: N,
    AnalyticsLocationProvider: O
  } = (0, a.default)([...M, i.default.COLLECTIBLES_PAYMENT_MODAL]), L = r.useRef(new l.Environment), [U, j] = r.useState(null), y = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, I.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, p.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
    key: d.Step.CONFIRM,
    renderStep: e => (0, s.jsx)(_.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: U,
      analyticsLocations: N
    }),
    options: {
      bodyClassName: C.modalOverrideBody,
      sliderBodyClassName: C.modalOverrideSliderBody
    }
  }];
  return (0, s.jsxs)(O, {
    children: [(0, s.jsx)(l.ConfettiCanvas, {
      ref: j,
      className: C.confettiCanvas,
      environment: L.current
    }), (0, s.jsx)(u.PaymentContextProvider, {
      stepConfigs: y,
      applicationId: h.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [P],
      isGift: R,
      activeSubscription: null,
      purchaseType: m.PurchaseTypes.ONE_TIME,
      children: (0, s.jsx)(o.GiftContextProvider, {
        isGift: R,
        giftRecipient: g,
        giftMessage: v,
        children: (0, s.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: n,
          loadId: x,
          applicationId: h.COLLECTIBLES_APPLICATION_ID,
          skuId: P,
          initialPlanId: null,
          analyticsLocations: N,
          transitionState: T,
          renderHeader: (e, t, n) => R ? (0, s.jsx)(E.default, {
            step: n,
            onClose: () => t(!1)
          }) : (0, s.jsx)(S.default, {
            step: n,
            onClose: () => t(!1)
          }),
          returnRef: A,
          hideShadow: !0
        })
      })
    })]
  })
}