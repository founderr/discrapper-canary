t.d(n, {
    x: function () {
        return T;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(512722),
    a = t.n(r),
    s = t(399606),
    o = t(607070),
    d = t(597688),
    c = t(1870),
    u = t(429368),
    h = t(624377),
    m = t(530618),
    x = t(331042),
    f = t(372654),
    v = t(987209),
    p = t(563132),
    g = t(179118),
    C = t(614277),
    j = t(698708);
function I(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: l = !1, analyticsLocations: r } = e,
        o = (0, s.e7)([c.Z], () => c.Z.purchases),
        { skusById: h, selectedSkuId: m, application: f } = (0, p.usePaymentContext)(),
        v = (0, s.e7)([d.Z], () => d.Z.getProduct(m)),
        g = (0, u.o)(v, o);
    a()(null != m, 'Expected selectedSkuId'), a()(null != f, 'Expected application');
    let I = h[m];
    return (a()(null != I, 'Expected sku'), null == v)
        ? null
        : (0, i.jsxs)(C.C3, {
              children: [
                  (0, i.jsx)(j.Z, {}),
                  (0, i.jsx)(x.CollectiblesCollectedModalInner, {
                      product: v,
                      onClose: n,
                      confettiCanvas: t,
                      analyticsLocations: r,
                      hideConfetti: l,
                      selectedVariantIndex: g
                  })
              ]
          });
}
function T(e) {
    let { isGift: n, giftCode: t, selectedGiftStyle: r, hasSentMessage: a, giftRecipient: c, giftMessageError: u, isSendingMessage: x } = (0, v.wD)(),
        C = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        j = l.useRef(null),
        { selectedSkuId: T } = (0, p.usePaymentContext)(),
        E = (0, s.e7)([d.Z], () => d.Z.getProduct(T)),
        { confettiColors: N } = (0, h.Z)(null == E ? void 0 : E.styles);
    return n
        ? (0, i.jsxs)('div', {
              ref: j,
              children: [
                  (0, i.jsx)(g.Z, {
                      giftCode: t,
                      onClose: e.handleClose,
                      selectedGiftStyle: r,
                      hasSentMessage: a,
                      giftRecipient: c,
                      giftMessageError: u,
                      isSendingMessage: x
                  }),
                  !e.hideConfetti &&
                      !C &&
                      (0, i.jsx)(m.Z, {
                          confettiTarget: j.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, f.vK)(null == E ? void 0 : E.categorySkuId),
                          colors: null == N ? void 0 : N.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(I, { ...e });
}
