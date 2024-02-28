"use strict";
n.r(t), n.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return T
  }
});
var s = n("37983"),
  i = n("884691"),
  a = n("627445"),
  r = n.n(a),
  l = n("65597"),
  o = n("206230"),
  u = n("853987"),
  d = n("923702"),
  c = n("658756"),
  f = n("408381"),
  p = n("177586"),
  E = n("635357"),
  S = n("642906"),
  _ = n("891865"),
  m = n("650484"),
  I = n("367767");

function C(e) {
  let {
    handleClose: t,
    confettiCanvas: n,
    analyticsLocations: i
  } = e, {
    skusById: a,
    selectedSkuId: o,
    application: d
  } = (0, S.usePaymentContext)(), f = (0, l.default)([u.default], () => u.default.getProduct(o));
  r(null != o, "Expected selectedSkuId"), r(null != d, "Expected application");
  let p = a[o];
  return (r(null != p, "Expected sku"), null == f) ? null : (0, s.jsxs)(m.PaymentPortalBody, {
    children: [(0, s.jsx)(I.default, {}), (0, s.jsx)(c.CollectiblesCollectedModalInner, {
      product: f,
      onClose: t,
      confettiCanvas: n,
      analyticsLocations: i
    })]
  })
}

function T(e) {
  let {
    isGift: t,
    giftCode: n,
    selectedGiftStyle: a,
    hasSentMessage: r,
    giftRecipient: c,
    giftMessageError: m,
    isSendingMessage: I
  } = (0, E.useGiftContext)(), T = (0, l.default)([o.default], () => o.default.useReducedMotion), x = i.useRef(null), {
    selectedSkuId: h
  } = (0, S.usePaymentContext)(), g = (0, l.default)([u.default], () => u.default.getProduct(h)), {
    confettiColors: P
  } = (0, p.default)(null == g ? void 0 : g.styles);
  return t ? (0, s.jsxs)("div", {
    ref: x,
    children: [(0, s.jsx)(_.default, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: a,
      hasSentMessage: r,
      giftRecipient: c,
      giftMessageError: m,
      isSendingMessage: I
    }), !T && (0, s.jsx)(d.default, {
      confettiTarget: x.current,
      confettiCanvas: e.confettiCanvas,
      sprites: (0, f.getConfettiSprites)(null == g ? void 0 : g.categorySkuId),
      colors: null == P ? void 0 : P.map(e => e.toHexString())
    })]
  }) : (0, s.jsx)(C, {
    ...e
  })
}