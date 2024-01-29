"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  i = n("516555"),
  l = n("812204"),
  a = n("685665"),
  u = n("635357"),
  o = n("642906"),
  d = n("85336"),
  c = n("385179"),
  f = n("292215"),
  p = n("639137"),
  E = n("526139"),
  S = n("158184"),
  h = n("385890"),
  m = n("337978"),
  I = n("49111"),
  _ = n("843455"),
  C = n("322859");

function T(e) {
  let {
    onClose: t,
    onComplete: n,
    transitionState: T,
    loadId: x,
    skuId: g,
    isGift: v = !1,
    giftRecipient: P,
    giftMessage: A,
    analyticsLocations: N,
    returnRef: O
  } = e, {
    analyticsLocations: M,
    AnalyticsLocationProvider: R
  } = (0, a.default)([...N, l.default.COLLECTIBLES_PAYMENT_MODAL]), L = r.useRef(new i.Environment), [y, j] = r.useState(null), b = [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, h.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, E.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
    key: d.Step.CONFIRM,
    renderStep: e => (0, s.jsx)(S.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: y,
      analyticsLocations: M
    }),
    options: {
      bodyClassName: C.modalOverrideBody,
      sliderBodyClassName: C.modalOverrideSliderBody
    }
  }];
  return (0, s.jsxs)(R, {
    children: [(0, s.jsx)(i.ConfettiCanvas, {
      ref: j,
      className: C.confettiCanvas,
      environment: L.current
    }), (0, s.jsx)(o.PaymentContextProvider, {
      stepConfigs: b,
      applicationId: I.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [g],
      isGift: v,
      activeSubscription: null,
      purchaseType: _.PurchaseTypes.ONE_TIME,
      children: (0, s.jsx)(u.GiftContextProvider, {
        isGift: v,
        giftRecipient: P,
        giftMessage: A,
        children: (0, s.jsx)(c.PaymentModal, {
          onClose: t,
          onComplete: n,
          loadId: x,
          applicationId: I.COLLECTIBLES_APPLICATION_ID,
          skuId: g,
          initialPlanId: null,
          analyticsLocations: M,
          transitionState: T,
          renderHeader: (e, t, n) => v ? (0, s.jsx)(p.default, {
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