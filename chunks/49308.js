n.d(t, {
    x: function () {
        return I;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(399606),
    s = n(607070),
    c = n(597688),
    d = n(624377),
    u = n(530618),
    m = n(331042),
    h = n(372654),
    f = n(987209),
    p = n(563132),
    g = n(179118),
    _ = n(614277),
    C = n(698708);
function E(e) {
    let { handleClose: t, confettiCanvas: n, hideConfetti: r = !1, analyticsLocations: l } = e,
        { skusById: s, selectedSkuId: d, application: u } = (0, p.usePaymentContext)(),
        h = (0, o.e7)([c.Z], () => c.Z.getProduct(d));
    a()(null != d, 'Expected selectedSkuId'), a()(null != u, 'Expected application');
    let f = s[d];
    return (a()(null != f, 'Expected sku'), null == h)
        ? null
        : (0, i.jsxs)(_.C3, {
              children: [
                  (0, i.jsx)(C.Z, {}),
                  (0, i.jsx)(m.CollectiblesCollectedModalInner, {
                      product: h,
                      onClose: t,
                      confettiCanvas: n,
                      analyticsLocations: l,
                      hideConfetti: r
                  })
              ]
          });
}
function I(e) {
    let { isGift: t, giftCode: n, selectedGiftStyle: l, hasSentMessage: a, giftRecipient: m, giftMessageError: _, isSendingMessage: C } = (0, f.wD)(),
        I = (0, o.e7)([s.Z], () => s.Z.useReducedMotion),
        x = r.useRef(null),
        { selectedSkuId: v } = (0, p.usePaymentContext)(),
        N = (0, o.e7)([c.Z], () => c.Z.getProduct(v)),
        { confettiColors: T } = (0, d.Z)(null == N ? void 0 : N.styles);
    return t
        ? (0, i.jsxs)('div', {
              ref: x,
              children: [
                  (0, i.jsx)(g.Z, {
                      giftCode: n,
                      onClose: e.handleClose,
                      selectedGiftStyle: l,
                      hasSentMessage: a,
                      giftRecipient: m,
                      giftMessageError: _,
                      isSendingMessage: C
                  }),
                  !e.hideConfetti &&
                      !I &&
                      (0, i.jsx)(u.Z, {
                          confettiTarget: x.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, h.vK)(null == N ? void 0 : N.categorySkuId),
                          colors: null == T ? void 0 : T.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(E, { ...e });
}
