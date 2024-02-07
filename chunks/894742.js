"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  r = n("516555"),
  l = n("812204"),
  a = n("685665"),
  u = n("635357"),
  o = n("642906"),
  d = n("85336"),
  c = n("385179"),
  f = n("292215"),
  p = n("639137"),
  S = n("526139"),
  E = n("158184"),
  m = n("385890"),
  _ = n("337978"),
  I = n("49111"),
  C = n("843455"),
  T = n("322859");

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
    analyticsLocations: M,
    AnalyticsLocationProvider: y
  } = (0, a.default)([...v, l.default.COLLECTIBLES_PAYMENT_MODAL]), L = i.useRef(new r.Environment), [b, j] = i.useState(null), R = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, m.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, S.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
    key: d.Step.CONFIRM,
    renderStep: e => (0, s.jsx)(E.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: b,
      analyticsLocations: M
    }),
    options: {
      bodyClassName: T.modalOverrideBody,
      sliderBodyClassName: T.modalOverrideSliderBody
    }
  }];
  return (0, s.jsxs)(y, {
    children: [(0, s.jsx)(r.ConfettiCanvas, {
      ref: j,
      className: T.confettiCanvas,
      environment: L.current
    }), (0, s.jsx)(o.PaymentContextProvider, {
      stepConfigs: R,
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
          analyticsLocations: M,
          transitionState: x,
          renderHeader: (e, t, n) => P ? (0, s.jsx)(p.default, {
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