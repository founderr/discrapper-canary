"use strict";
n.r(t), n.d(t, {
  CollectiblesPaymentModalConfirmStep: function() {
    return T
  }
});
var s = n("37983"),
  i = n("884691"),
  r = n("627445"),
  l = n.n(r),
  a = n("65597"),
  u = n("206230"),
  o = n("853987"),
  d = n("923702"),
  c = n("658756"),
  f = n("408381"),
  p = n("177586"),
  S = n("635357"),
  E = n("642906"),
  m = n("891865"),
  _ = n("650484"),
  I = n("367767");

function C(e) {
  let {
    handleClose: t,
    confettiCanvas: n,
    analyticsLocations: i
  } = e, {
    skusById: r,
    selectedSkuId: u,
    application: d
  } = (0, E.usePaymentContext)(), f = (0, a.default)([o.default], () => o.default.getProduct(u));
  l(null != u, "Expected selectedSkuId"), l(null != d, "Expected application");
  let p = r[u];
  return (l(null != p, "Expected sku"), null == f) ? null : (0, s.jsxs)(_.PaymentPortalBody, {
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
    selectedGiftStyle: r,
    hasSentMessage: l,
    giftRecipient: c,
    giftMessageError: _,
    isSendingMessage: I
  } = (0, S.useGiftContext)(), T = (0, a.default)([u.default], () => u.default.useReducedMotion), x = i.useRef(null), {
    selectedSkuId: h
  } = (0, E.usePaymentContext)(), g = (0, a.default)([o.default], () => o.default.getProduct(h)), {
    confettiColors: P
  } = (0, p.default)(null == g ? void 0 : g.styles);
  return t ? (0, s.jsxs)("div", {
    ref: x,
    children: [(0, s.jsx)(m.default, {
      giftCode: n,
      onClose: e.handleClose,
      selectedGiftStyle: r,
      hasSentMessage: l,
      giftRecipient: c,
      giftMessageError: _,
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