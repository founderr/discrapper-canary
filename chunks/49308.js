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
    d = t(597688),
    c = t(624377),
    u = t(530618),
    f = t(331042),
    p = t(372654),
    m = t(987209),
    _ = t(563132),
    g = t(179118),
    b = t(614277),
    h = t(698708);
function x(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: a = !1, analyticsLocations: r } = e,
        { skusById: s, selectedSkuId: c, application: u } = (0, _.usePaymentContext)(),
        p = (0, l.e7)([d.Z], () => d.Z.getProduct(c));
    o()(null != c, 'Expected selectedSkuId'), o()(null != u, 'Expected application');
    let m = s[c];
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
        { selectedSkuId: I } = (0, _.usePaymentContext)(),
        S = (0, l.e7)([d.Z], () => d.Z.getProduct(I)),
        { confettiColors: T } = (0, c.Z)(null == S ? void 0 : S.styles);
    return n
        ? (0, i.jsxs)('div', {
              ref: v,
              children: [
                  (0, i.jsx)(g.Z, {
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
                          sprites: (0, p.vK)(null == S ? void 0 : S.categorySkuId),
                          colors: null == T ? void 0 : T.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(x, { ...e });
}
