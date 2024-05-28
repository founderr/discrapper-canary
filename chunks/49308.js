"use strict";
s.r(t), s.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return A
  }
});
var a = s("735250"),
  l = s("470079"),
  n = s("512722"),
  i = s.n(n),
  r = s("399606"),
  d = s("607070"),
  u = s("597688"),
  o = s("624377"),
  c = s("530618"),
  S = s("331042"),
  E = s("372654"),
  f = s("987209"),
  I = s("598"),
  _ = s("179118"),
  T = s("614277"),
  C = s("698708");

function N(e) {
  let {
    handleClose: t,
    confettiCanvas: s,
    hideConfetti: l = !1,
    analyticsLocations: n
  } = e, {
    skusById: d,
    selectedSkuId: o,
    application: c
  } = (0, I.usePaymentContext)(), E = (0, r.useStateFromStores)([u.default], () => u.default.getProduct(o));
  i()(null != o, "Expected selectedSkuId"), i()(null != c, "Expected application");
  let f = d[o];
  return (i()(null != f, "Expected sku"), null == E) ? null : (0, a.jsxs)(T.PaymentPortalBody, {
    children: [(0, a.jsx)(C.default, {}), (0, a.jsx)(S.CollectiblesCollectedModalInner, {
      product: E,
      onClose: t,
      confettiCanvas: s,
      analyticsLocations: n,
      hideConfetti: l
    })]
  })
}

function A(e) {
  let {
    isGift: t,
    giftCode: s,
    selectedGiftStyle: n,
    hasSentMessage: i,
    giftRecipient: S,
    giftMessageError: T,
    isSendingMessage: C
  } = (0, f.useGiftContext)(), A = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), p = l.useRef(null), {
    selectedSkuId: m
  } = (0, I.usePaymentContext)(), P = (0, r.useStateFromStores)([u.default], () => u.default.getProduct(m)), {
    confettiColors: O
  } = (0, o.default)(null == P ? void 0 : P.styles);
  return t ? (0, a.jsxs)("div", {
    ref: p,
    children: [(0, a.jsx)(_.default, {
      giftCode: s,
      onClose: e.handleClose,
      selectedGiftStyle: n,
      hasSentMessage: i,
      giftRecipient: S,
      giftMessageError: T,
      isSendingMessage: C
    }), !e.hideConfetti && !A && (0, a.jsx)(c.default, {
      confettiTarget: p.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, E.getConfettiSprites)(null == P ? void 0 : P.categorySkuId),
      colors: null == O ? void 0 : O.map(e => e.toHexString())
    })]
  }) : (0, a.jsx)(N, {
    ...e
  })
}