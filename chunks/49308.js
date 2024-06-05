"use strict";
n.r(t), n.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return _
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("512722"),
  r = n.n(s),
  i = n("399606"),
  o = n("607070"),
  d = n("597688"),
  u = n("624377"),
  c = n("530618"),
  f = n("331042"),
  E = n("372654"),
  S = n("987209"),
  C = n("598"),
  p = n("179118"),
  T = n("614277"),
  m = n("698708");

function I(e) {
  let {
    handleClose: t,
    confettiCanvas: n,
    hideConfetti: l = !1,
    analyticsLocations: s
  } = e, {
    skusById: o,
    selectedSkuId: u,
    application: c
  } = (0, C.usePaymentContext)(), E = (0, i.useStateFromStores)([d.default], () => d.default.getProduct(u));
  r()(null != u, "Expected selectedSkuId"), r()(null != c, "Expected application");
  let S = o[u];
  return (r()(null != S, "Expected sku"), null == E) ? null : (0, a.jsxs)(T.PaymentPortalBody, {
    children: [(0, a.jsx)(m.default, {}), (0, a.jsx)(f.CollectiblesCollectedModalInner, {
      product: E,
      onClose: t,
      confettiCanvas: n,
      analyticsLocations: s,
      hideConfetti: l
    })]
  })
}

function _(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: s,
    hasSentMessage: r,
    giftRecipient: f,
    giftMessageError: T,
    isSendingMessage: m
  } = (0, S.useGiftContext)(), _ = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), x = l.useRef(null), {
    selectedSkuId: N
  } = (0, C.usePaymentContext)(), P = (0, i.useStateFromStores)([d.default], () => d.default.getProduct(N)), {
    confettiColors: A
  } = (0, u.default)(null == P ? void 0 : P.styles);
  return t ? (0, a.jsxs)("div", {
    ref: x,
    children: [(0, a.jsx)(p.default, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: s,
      hasSentMessage: r,
      giftRecipient: f,
      giftMessageError: T,
      isSendingMessage: m
    }), !e.hideConfetti && !_ && (0, a.jsx)(c.default, {
      confettiTarget: x.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, E.getConfettiSprites)(null == P ? void 0 : P.categorySkuId),
      colors: null == A ? void 0 : A.map(e => e.toHexString())
    })]
  }) : (0, a.jsx)(I, {
    ...e
  })
}