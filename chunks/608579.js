t.d(n, {
  Z: function() {
    return A
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  i = t(120356),
  l = t.n(i),
  r = t(887024),
  o = t(100527),
  d = t(906732),
  c = t(987209),
  u = t(598),
  E = t(409813),
  f = t(791785),
  h = t(961830),
  m = t(742956),
  v = t(346790),
  p = t(49308),
  C = t(117652),
  x = t(126982),
  I = t(981631),
  T = t(302800),
  g = t(231338),
  S = t(99178);

function A(e) {
  let {
    onClose: n,
    onComplete: t,
    onStepChange: i,
    transitionState: A,
    loadId: N,
    skuId: _,
    isGift: Z = !1,
    giftRecipient: j,
    giftMessage: P,
    analyticsLocations: y,
    returnRef: O
  } = e, {
    analyticsLocations: M
  } = (0, d.ZP)([...y, o.Z.COLLECTIBLES_PAYMENT_MODAL]), R = s.useRef(new r.qA), [L, k] = s.useState(null), [b, D] = s.useState(!1), w = s.useMemo(() => (0, T.UY)(_), [_]), B = s.useCallback(() => {
    D(!0), null == t || t()
  }, [t]), F = s.useCallback(e => {
    D(!1), n(e)
  }, [n]), G = s.useMemo(() => [h.WA, C.Dd, v.n, ...h.yp, h.wo, {
    key: E.h8.CONFIRM,
    renderStep: e => (0, a.jsx)(p.x, {
      ...e,
      confettiCanvas: L,
      analyticsLocations: M,
      hideConfetti: null != w
    }),
    options: {
      bodyClassName: S.modalOverrideBody,
      sliderBodyClassName: S.modalOverrideSliderBody
    }
  }], [M, L, w]);
  return (0, a.jsxs)(d.Gt, {
    value: M,
    children: [(0, a.jsx)(r.O_, {
      ref: k,
      className: S.confettiCanvas,
      environment: R.current
    }), null != w && (0, a.jsx)("img", {
      src: w.confettiAssetSrc,
      className: l()(S.customConfetti, {
        [S.hidden]: !b
      }),
      style: w.style,
      alt: "",
      "aria-hidden": !0
    }), (0, a.jsx)(u.PaymentContextProvider, {
      loadId: N,
      stepConfigs: G,
      applicationId: I.XAJ,
      skuIDs: [_],
      isGift: Z,
      activeSubscription: null,
      purchaseType: g.GZ.ONE_TIME,
      children: (0, a.jsx)(c.KB, {
        isGift: Z,
        giftRecipient: j,
        giftMessage: P,
        children: (0, a.jsx)(f.PaymentModal, {
          onClose: F,
          onComplete: B,
          applicationId: I.XAJ,
          skuId: _,
          initialPlanId: null,
          analyticsLocations: M,
          transitionState: A,
          renderHeader: (e, n, t) => Z ? (0, a.jsx)(m.Z, {
            step: t,
            onClose: () => n(!1)
          }) : (0, a.jsx)(x.Z, {
            step: t,
            onClose: () => n(!1)
          }),
          returnRef: O,
          onStepChange: i,
          hideShadow: !0
        })
      })
    })]
  })
}