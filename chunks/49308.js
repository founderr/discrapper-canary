t.d(n, {
    x: function () {
        return C;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(512722),
    o = t.n(r),
    l = t(399606),
    s = t(607070),
    c = t(597688),
    d = t(624377),
    u = t(530618),
    f = t(331042),
    p = t(372654),
    m = t(987209),
    g = t(563132),
    _ = t(179118),
    b = t(614277),
    h = t(698708);
function x(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: a = !1, analyticsLocations: r } = e,
        { skusById: s, selectedSkuId: d, application: u } = (0, g.usePaymentContext)(),
        p = (0, l.e7)([c.Z], () => c.Z.getProduct(d));
    o()(null != d, 'Expected selectedSkuId'), o()(null != u, 'Expected application');
    let m = s[d];
    return (o()(null != m, 'Expected sku'), null == p)
        ? null
        : (0, i.jsxs)(b.C3, {
              children: [
                  (0, i.jsx)(h.Z, {}),
                  (0, i.jsx)(f.CollectiblesCollectedModalInner, {
                      product: p,
                      onClose: n,
                      confettiCanvas: t,
                      analyticsLocations: r,
                      hideConfetti: a
                  })
              ]
          });
}
function C(e) {
    let { isGift: n, giftCode: t, selectedGiftStyle: r, hasSentMessage: o, giftRecipient: f, giftMessageError: b, isSendingMessage: h } = (0, m.wD)(),
        C = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        v = a.useRef(null),
        { selectedSkuId: S } = (0, g.usePaymentContext)(),
        I = (0, l.e7)([c.Z], () => c.Z.getProduct(S)),
        { confettiColors: T } = (0, d.Z)(null == I ? void 0 : I.styles);
    return n
        ? (0, i.jsxs)('div', {
              ref: v,
              children: [
                  (0, i.jsx)(_.Z, {
                      giftCode: t,
                      onClose: e.handleClose,
                      selectedGiftStyle: r,
                      hasSentMessage: o,
                      giftRecipient: f,
                      giftMessageError: b,
                      isSendingMessage: h
                  }),
                  !e.hideConfetti &&
                      !C &&
                      (0, i.jsx)(u.Z, {
                          confettiTarget: v.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, p.vK)(null == I ? void 0 : I.categorySkuId),
                          colors: null == T ? void 0 : T.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(x, { ...e });
}
