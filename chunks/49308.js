t.d(n, {
  x: function() {
    return I
  }
});
var s = t(735250),
  a = t(470079),
  l = t(512722),
  i = t.n(l),
  r = t(399606),
  o = t(607070),
  d = t(597688),
  c = t(624377),
  u = t(530618),
  E = t(331042),
  C = t(372654),
  f = t(987209),
  h = t(598),
  p = t(179118),
  x = t(614277),
  T = t(698708);

function m(e) {
  let {
    handleClose: n,
    confettiCanvas: t,
    hideConfetti: a = !1,
    analyticsLocations: l
  } = e, {
    skusById: o,
    selectedSkuId: c,
    application: u
  } = (0, h.usePaymentContext)(), C = (0, r.e7)([d.Z], () => d.Z.getProduct(c));
  i()(null != c, "Expected selectedSkuId"), i()(null != u, "Expected application");
  let f = o[c];
  return (i()(null != f, "Expected sku"), null == C) ? null : (0, s.jsxs)(x.C3, {
    children: [(0, s.jsx)(T.Z, {}), (0, s.jsx)(E.CollectiblesCollectedModalInner, {
      product: C,
      onClose: n,
      confettiCanvas: t,
      analyticsLocations: l,
      hideConfetti: a
    })]
  })
}

function I(e) {
  let {
    isGift: n,
    giftCode: t,
    selectedGiftStyle: l,
    hasSentMessage: i,
    giftRecipient: E,
    giftMessageError: x,
    isSendingMessage: T
  } = (0, f.wD)(), I = (0, r.e7)([o.Z], () => o.Z.useReducedMotion), v = a.useRef(null), {
    selectedSkuId: S
  } = (0, h.usePaymentContext)(), g = (0, r.e7)([d.Z], () => d.Z.getProduct(S)), {
    confettiColors: _
  } = (0, c.Z)(null == g ? void 0 : g.styles);
  return n ? (0, s.jsxs)("div", {
    ref: v,
    children: [(0, s.jsx)(p.Z, {
      giftCode: t,
      onClose: e.handleClose,
      selectedGiftStyle: l,
      hasSentMessage: i,
      giftRecipient: E,
      giftMessageError: x,
      isSendingMessage: T
    }), !e.hideConfetti && !I && (0, s.jsx)(u.Z, {
      confettiTarget: v.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, C.vK)(null == g ? void 0 : g.categorySkuId),
      colors: null == _ ? void 0 : _.map(e => e.toHexString())
    })]
  }) : (0, s.jsx)(m, {
    ...e
  })
}