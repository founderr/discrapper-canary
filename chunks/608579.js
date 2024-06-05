"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  r = n.n(s),
  i = n("887024"),
  o = n("100527"),
  d = n("906732"),
  u = n("987209"),
  c = n("598"),
  f = n("409813"),
  E = n("791785"),
  S = n("961830"),
  C = n("742956"),
  p = n("346790"),
  T = n("49308"),
  m = n("117652"),
  I = n("126982"),
  _ = n("981631"),
  x = n("302800"),
  N = n("231338"),
  P = n("257450");

function A(e) {
  let {
    onClose: t,
    onComplete: n,
    onStepChange: s,
    transitionState: A,
    loadId: h,
    skuId: v,
    isGift: O = !1,
    giftRecipient: g,
    giftMessage: M,
    analyticsLocations: y,
    returnRef: L
  } = e, {
    analyticsLocations: j
  } = (0, d.default)([...y, o.default.COLLECTIBLES_PAYMENT_MODAL]), R = l.useRef(new i.Environment), [F, D] = l.useState(null), [G, b] = l.useState(!1), k = l.useMemo(() => (0, x.getCustomConfettiDisplayOptions)(v), [v]), B = l.useCallback(() => {
    b(!0), null == n || n()
  }, [n]), H = l.useCallback(e => {
    b(!1), t(e)
  }, [t]), w = l.useMemo(() => [S.ONE_TIME_PAYMENT_PREDICATE_STEP_CONFIG, m.COLLECTIBLES_GIFT_CUSTOMIZATION_STEP, p.COLLECTIBLES_ADD_PAYMENT_STEP_CONFIG, ...S.SHARED_STEP_CONFIGS, S.REVIEW_STEP_CONFIG, {
    key: f.Step.CONFIRM,
    renderStep: e => (0, a.jsx)(T.CollectiblesPaymentModalConfirmStep, {
      ...e,
      confettiCanvas: F,
      analyticsLocations: j,
      hideConfetti: null != k
    }),
    options: {
      bodyClassName: P.modalOverrideBody,
      sliderBodyClassName: P.modalOverrideSliderBody
    }
  }], [j, F, k]);
  return (0, a.jsxs)(d.AnalyticsLocationProvider, {
    value: j,
    children: [(0, a.jsx)(i.ConfettiCanvas, {
      ref: D,
      className: P.confettiCanvas,
      environment: R.current
    }), null != k && (0, a.jsx)("img", {
      src: k.confettiAssetSrc,
      className: r()(P.customConfetti, {
        [P.hidden]: !G
      }),
      style: k.style,
      alt: "",
      "aria-hidden": !0
    }), (0, a.jsx)(c.PaymentContextProvider, {
      loadId: h,
      stepConfigs: w,
      applicationId: _.COLLECTIBLES_APPLICATION_ID,
      skuIDs: [v],
      isGift: O,
      activeSubscription: null,
      purchaseType: N.PurchaseTypes.ONE_TIME,
      children: (0, a.jsx)(u.GiftContextProvider, {
        isGift: O,
        giftRecipient: g,
        giftMessage: M,
        children: (0, a.jsx)(E.PaymentModal, {
          onClose: H,
          onComplete: B,
          applicationId: _.COLLECTIBLES_APPLICATION_ID,
          skuId: v,
          initialPlanId: null,
          analyticsLocations: j,
          transitionState: A,
          renderHeader: (e, t, n) => O ? (0, a.jsx)(C.default, {
            step: n,
            onClose: () => t(!1)
          }) : (0, a.jsx)(I.default, {
            step: n,
            onClose: () => t(!1)
          }),
          returnRef: L,
          onStepChange: s,
          hideShadow: !0
        })
      })
    })]
  })
}