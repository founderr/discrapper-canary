t.d(n, {
    x: function () {
        return I;
    }
});
var i = t(200651),
    a = t(192379),
    r = t(512722),
    o = t.n(r),
    l = t(399606),
    s = t(607070),
    d = t(597688),
    c = t(1870),
    u = t(429368),
    f = t(624377),
    p = t(530618),
    m = t(331042),
    _ = t(372654),
    g = t(987209),
    b = t(563132),
    h = t(179118),
    x = t(614277),
    C = t(698708);
function v(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: a = !1, analyticsLocations: r } = e,
        s = (0, l.e7)([c.Z], () => c.Z.purchases),
        { skusById: f, selectedSkuId: p, application: _ } = (0, b.usePaymentContext)(),
        g = (0, l.e7)([d.Z], () => d.Z.getProduct(p)),
        h = (0, u.o)(g, s);
    o()(null != p, 'Expected selectedSkuId'), o()(null != _, 'Expected application');
    let v = f[p];
    return (o()(null != v, 'Expected sku'), null == g)
        ? null
        : (0, i.jsxs)(x.C3, {
              children: [
                  (0, i.jsx)(C.Z, {}),
                  (0, i.jsx)(m.CollectiblesCollectedModalInner, {
                      product: g,
                      onClose: n,
                      confettiCanvas: t,
                      analyticsLocations: r,
                      hideConfetti: a,
                      selectedVariantIndex: h
                  })
              ]
          });
}
function I(e) {
    let { isGift: n, giftCode: t, selectedGiftStyle: r, hasSentMessage: o, giftRecipient: c, giftMessageError: u, isSendingMessage: m } = (0, g.wD)(),
        x = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
        C = a.useRef(null),
        { selectedSkuId: I } = (0, b.usePaymentContext)(),
        S = (0, l.e7)([d.Z], () => d.Z.getProduct(I)),
        { confettiColors: T } = (0, f.Z)(null == S ? void 0 : S.styles);
    return n
        ? (0, i.jsxs)('div', {
              ref: C,
              children: [
                  (0, i.jsx)(h.Z, {
                      giftCode: t,
                      onClose: e.handleClose,
                      selectedGiftStyle: r,
                      hasSentMessage: o,
                      giftRecipient: c,
                      giftMessageError: u,
                      isSendingMessage: m
                  }),
                  !e.hideConfetti &&
                      !x &&
                      (0, i.jsx)(p.Z, {
                          confettiTarget: C.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, _.vK)(null == S ? void 0 : S.categorySkuId),
                          colors: null == T ? void 0 : T.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(v, { ...e });
}
