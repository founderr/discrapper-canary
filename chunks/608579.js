t.d(n, {
  Z: function() {
    return _
  }
}), t(47120);
var s = t(735250),
  a = t(470079),
  l = t(120356),
  i = t.n(l),
  r = t(887024),
  o = t(100527),
  d = t(906732),
  c = t(987209),
  u = t(598),
  E = t(409813),
  C = t(791785),
  f = t(961830),
  h = t(742956),
  p = t(346790),
  x = t(49308),
  T = t(117652),
  m = t(126982),
  I = t(981631),
  v = t(302800),
  S = t(231338),
  g = t(99178);

function _(e) {
  let {
    onClose: n,
    onComplete: t,
    onStepChange: l,
    transitionState: _,
    loadId: N,
    skuId: A,
    isGift: j = !1,
    giftRecipient: O,
    giftMessage: Z,
    analyticsLocations: M,
    returnRef: P
  } = e, {
    analyticsLocations: L
  } = (0, d.ZP)([...M, o.Z.COLLECTIBLES_PAYMENT_MODAL]), y = a.useRef(new r.qA), [R, D] = a.useState(null), [F, k] = a.useState(!1), b = a.useMemo(() => (0, v.UY)(A), [A]), w = a.useCallback(() => {
    k(!0), null == t || t()
  }, [t]), G = a.useCallback(e => {
    k(!1), n(e)
  }, [n]), B = a.useMemo(() => [f.WA, T.Dd, p.n, ...f.yp, f.wo, {
    key: E.h8.CONFIRM,
    renderStep: e => (0, s.jsx)(x.x, {
      ...e,
      confettiCanvas: R,
      analyticsLocations: L,
      hideConfetti: null != b
    }),
    options: {
      bodyClassName: g.modalOverrideBody,
      sliderBodyClassName: g.modalOverrideSliderBody
    }
  }], [L, R, b]);
  return (0, s.jsxs)(d.Gt, {
    value: L,
    children: [(0, s.jsx)(r.O_, {
      ref: D,
      className: g.confettiCanvas,
      environment: y.current
    }), null != b && (0, s.jsx)("img", {
      src: b.confettiAssetSrc,
      className: i()(g.customConfetti, {
        [g.hidden]: !F
      }),
      style: b.style,
      alt: "",
      "aria-hidden": !0
    }), (0, s.jsx)(u.PaymentContextProvider, {
      loadId: N,
      stepConfigs: B,
      applicationId: I.XAJ,
      skuIDs: [A],
      isGift: j,
      activeSubscription: null,
      purchaseType: S.GZ.ONE_TIME,
      children: (0, s.jsx)(c.KB, {
        isGift: j,
        giftRecipient: O,
        giftMessage: Z,
        children: (0, s.jsx)(C.PaymentModal, {
          onClose: G,
          onComplete: w,
          applicationId: I.XAJ,
          skuId: A,
          initialPlanId: null,
          analyticsLocations: L,
          transitionState: _,
          renderHeader: (e, n, t) => j ? (0, s.jsx)(h.Z, {
            step: t,
            onClose: () => n(!1)
          }) : (0, s.jsx)(m.Z, {
            step: t,
            onClose: () => n(!1)
          }),
          returnRef: P,
          onStepChange: l,
          hideShadow: !0
        })
      })
    })]
  })
}