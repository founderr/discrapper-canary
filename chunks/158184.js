"use strict";
n.r(t), n.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return C
  }
});
var s = n("37983"),
  r = n("884691"),
  l = n("627445"),
  i = n.n(l),
  a = n("65597"),
  o = n("206230"),
  u = n("853987"),
  d = n("923702"),
  c = n("658756"),
  f = n("408381"),
  E = n("177586"),
  p = n("635357"),
  _ = n("642906"),
  I = n("891865"),
  S = n("650484"),
  h = n("367767");

function m(e) {
  let {
    handleClose: t,
    confettiCanvas: n,
    analyticsLocations: r
  } = e, {
    skusById: l,
    selectedSkuId: o,
    application: d
  } = (0, _.usePaymentContext)(), f = (0, a.default)([u.default], () => u.default.getProduct(o));
  i(null != o, "Expected selectedSkuId"), i(null != d, "Expected application");
  let E = l[o];
  return (i(null != E, "Expected sku"), null == f) ? null : (0, s.jsxs)(S.PaymentPortalBody, {
    children: [(0, s.jsx)(h.default, {}), (0, s.jsx)(c.CollectiblesCollectedModalInner, {
      product: f,
      onClose: t,
      confettiCanvas: n,
      analyticsLocations: r
    })]
  })
}

function C(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: l,
    hasSentMessage: i,
    giftRecipient: c,
    giftMessageError: S,
    isSendingMessage: h
  } = (0, p.useGiftContext)(), C = (0, a.default)([o.default], () => o.default.useReducedMotion), T = r.useRef(null), {
    selectedSkuId: x
  } = (0, _.usePaymentContext)(), P = (0, a.default)([u.default], () => u.default.getProduct(x)), {
    confettiColors: R
  } = (0, E.default)(null == P ? void 0 : P.styles);
  return t ? (0, s.jsxs)("div", {
    ref: T,
    children: [(0, s.jsx)(I.default, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: l,
      hasSentMessage: i,
      giftRecipient: c,
      giftMessageError: S,
      isSendingMessage: h
    }), !C && (0, s.jsx)(d.default, {
      confettiTarget: T.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, f.getConfettiSprites)(null == P ? void 0 : P.categorySkuId),
      colors: null == R ? void 0 : R.map(e => e.toHexString())
    })]
  }) : (0, s.jsx)(m, {
    ...e
  })
}