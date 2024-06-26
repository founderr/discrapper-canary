t.d(n, {
  x: function() {
    return I
  }
});
var a = t(735250),
  s = t(470079),
  i = t(512722),
  l = t.n(i),
  r = t(399606),
  o = t(607070),
  d = t(597688),
  c = t(624377),
  u = t(530618),
  E = t(331042),
  f = t(372654),
  h = t(987209),
  m = t(598),
  v = t(179118),
  p = t(614277),
  C = t(698708);

function x(e) {
  let {
    handleClose: n,
    confettiCanvas: t,
    hideConfetti: s = !1,
    analyticsLocations: i
  } = e, {
    skusById: o,
    selectedSkuId: c,
    application: u
  } = (0, m.usePaymentContext)(), f = (0, r.e7)([d.Z], () => d.Z.getProduct(c));
  l()(null != c, "Expected selectedSkuId"), l()(null != u, "Expected application");
  let h = o[c];
  return (l()(null != h, "Expected sku"), null == f) ? null : (0, a.jsxs)(p.C3, {
    children: [(0, a.jsx)(C.Z, {}), (0, a.jsx)(E.CollectiblesCollectedModalInner, {
      product: f,
      onClose: n,
      confettiCanvas: t,
      analyticsLocations: i,
      hideConfetti: s
    })]
  })
}

function I(e) {
  let {
    isGift: n,
    giftCode: t,
    selectedGiftStyle: i,
    hasSentMessage: l,
    giftRecipient: E,
    giftMessageError: p,
    isSendingMessage: C
  } = (0, h.wD)(), I = (0, r.e7)([o.Z], () => o.Z.useReducedMotion), T = s.useRef(null), {
    selectedSkuId: g
  } = (0, m.usePaymentContext)(), N = (0, r.e7)([d.Z], () => d.Z.getProduct(g)), {
    confettiColors: S
  } = (0, c.Z)(null == N ? void 0 : N.styles);
  return n ? (0, a.jsxs)("div", {
    ref: T,
    children: [(0, a.jsx)(v.Z, {
      giftCode: t,
      onClose: e.handleClose,
      selectedGiftStyle: i,
      hasSentMessage: l,
      giftRecipient: E,
      giftMessageError: p,
      isSendingMessage: C
    }), !e.hideConfetti && !I && (0, a.jsx)(u.Z, {
      confettiTarget: T.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, f.vK)(null == N ? void 0 : N.categorySkuId),
      colors: null == S ? void 0 : S.map(e => e.toHexString())
    })]
  }) : (0, a.jsx)(x, {
    ...e
  })
}