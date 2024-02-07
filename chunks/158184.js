"use strict";
s.r(t), s.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return C
  }
});
var n = s("37983"),
  r = s("884691"),
  l = s("627445"),
  i = s.n(l),
  a = s("65597"),
  o = s("206230"),
  u = s("853987"),
  d = s("923702"),
  c = s("658756"),
  f = s("408381"),
  E = s("177586"),
  _ = s("635357"),
  p = s("642906"),
  I = s("891865"),
  S = s("650484"),
  h = s("367767");

function m(e) {
  let {
    handleClose: t,
    confettiCanvas: s,
    analyticsLocations: r
  } = e, {
    skusById: l,
    selectedSkuId: o,
    application: d
  } = (0, p.usePaymentContext)(), f = (0, a.default)([u.default], () => u.default.getProduct(o));
  i(null != o, "Expected selectedSkuId"), i(null != d, "Expected application");
  let E = l[o];
  return (i(null != E, "Expected sku"), null == f) ? null : (0, n.jsxs)(S.PaymentPortalBody, {
    children: [(0, n.jsx)(h.default, {}), (0, n.jsx)(c.CollectiblesCollectedModalInner, {
      product: f,
      onClose: t,
      confettiCanvas: s,
      analyticsLocations: r
    })]
  })
}

function C(e) {
  let {
    isGift: t,
    giftCode: s,
    selectedGiftStyle: l,
    hasSentMessage: i,
    giftRecipient: c,
    giftMessageError: S,
    isSendingMessage: h
  } = (0, _.useGiftContext)(), C = (0, a.default)([o.default], () => o.default.useReducedMotion), T = r.useRef(null), {
    selectedSkuId: x
  } = (0, p.usePaymentContext)(), P = (0, a.default)([u.default], () => u.default.getProduct(x)), {
    confettiColors: R
  } = (0, E.default)(null == P ? void 0 : P.styles);
  return t ? (0, n.jsxs)("div", {
    ref: T,
    children: [(0, n.jsx)(I.default, {
      giftCode: s,
      onClose: e.handleClose,
      selectedGiftStyle: l,
      hasSentMessage: i,
      giftRecipient: c,
      giftMessageError: S,
      isSendingMessage: h
    }), !C && (0, n.jsx)(d.default, {
      confettiTarget: T.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, f.getConfettiSprites)(null == P ? void 0 : P.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })]
  }) : (0, n.jsx)(m, {
    ...e
  })
}