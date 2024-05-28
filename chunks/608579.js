"use strict";
s.r(t), s.d(t, {
  default: function() {
    return O
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("120356"),
  i = s.n(n),
  r = s("887024"),
  d = s("100527"),
  u = s("906732"),
  o = s("987209"),
  c = s("598"),
  S = s("409813"),
  E = s("791785"),
  f = s("961830"),
  I = s("742956"),
  _ = s("346790"),
  T = s("49308"),
  C = s("117652"),
  N = s("126982"),
  A = s("981631"),
  p = s("302800"),
  m = s("231338"),
  P = s("257450");

function O(e) {
  let {
    onClose: t,
    onComplete: s,
    onStepChange: n,
    transitionState: O,
    loadId: g,
    skuId: R,
    isGift: x = !1,
    giftRecipient: L,
    giftMessage: h,
    analyticsLocations: v,
    returnRef: M
  } = e, {
    analyticsLocations: F
  } = (0, u.default)([...v, d.default.COLLECTIBLES_PAYMENT_MODAL]), j = l.useRef(new r.Environment), [y, G] = l.useState(null), [D, U] = l.useState(!1), b = l.useMemo(() => (0, p.getCustomConfettiDisplayOptions)(R), [R]), B = l.useCallback(() => {
    U(!0), null == s || s()
  }, [s]), H = l.useCallback(e => {
    U(!1), t(e)
  }, [t]), k = l.useMemo(() => [f.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, C.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, _.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...f.SHARED_STEP_CONFIGS, f.REVIEW_STEP_CONFIG, {
    key: S.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(T.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: y,
      analyticsLocations: F,
      hideConfetti: null != b
    }),
    options: {
      bodyClassName: P.modalOverrideBody,
      sliderBodyClassName: P.modalOverrideSliderBody
    }
  }], [F, y, b]);
  return (0, a.jsxs)(u.AnalyticsLocationProvider, {
    value: F,
    children: [(0, a.jsx)(r.ConfettiCanvas, {
      ref: G,
      className: P.confettiCanvas,
      environment: j.current
    }), null != b && (0, a.jsx)("img", {
      src: b.confettiAssetSrc,
      className: i()(P.customConfetti, {
        [P.hidden]: !D
      }),
      style: b.style,
      alt: "",
      "aria-hidden": !0
    }), (0, a.jsx)(c.PaymentContextProvider, {
      loadId: g,
      stepConfigs: k,
      applicationId: A.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [R],
      isGift: x,
      activeSubscription: null,
      purchaseType: m.PurchaseTypes.ONE_TIME,
      children: (0, a.jsx)(o.GiftContextProvider, {
        isGift: x,
        giftRecipient: L,
        giftMessage: h,
        children: (0, a.jsx)(E.PaymentModal, {
          onClose: H,
          onComplete: B,
          applicationId: A.COLLECTIBLES_APPLICATION_ID,
          skuId: R,
          initialPlanId: null,
          analyticsLocations: F,
          transitionState: O,
          renderHeader: (e, t, s) => x ? (0, a.jsx)(I.default, {
            step: s,
            onClose: () => t(!1)
          }) : (0, a.jsx)(N.default, {
            step: s,
            onClose: () => t(!1)
          }),
          returnRef: M,
          onStepChange: n,
          hideShadow: !0
        })
      })
    })]
  })
}