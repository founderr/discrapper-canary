t.d(n, {
    x: function () {
        return m;
    }
});
var s = t(735250),
    a = t(470079),
    l = t(512722),
    i = t.n(l),
    r = t(399606),
    o = t(607070),
    d = t(597688),
    c = t(624377),
    u = t(530618),
    E = t(331042),
    C = t(372654),
    h = t(987209),
    x = t(598),
    f = t(179118),
    T = t(614277),
    p = t(698708);
function I(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: a = !1, analyticsLocations: l } = e,
        { skusById: o, selectedSkuId: c, application: u } = (0, x.usePaymentContext)(),
        C = (0, r.e7)([d.Z], () => d.Z.getProduct(c));
    i()(null != c, 'Expected selectedSkuId'), i()(null != u, 'Expected application');
    let h = o[c];
    return (i()(null != h, 'Expected sku'), null == C)
        ? null
        : (0, s.jsxs)(T.C3, {
              children: [
                  (0, s.jsx)(p.Z, {}),
                  (0, s.jsx)(E.CollectiblesCollectedModalInner, {
                      product: C,
                      onClose: n,
                      confettiCanvas: t,
                      analyticsLocations: l,
                      hideConfetti: a
                  })
              ]
          });
}
function m(e) {
    let { isGift: n, giftCode: t, selectedGiftStyle: l, hasSentMessage: i, giftRecipient: E, giftMessageError: T, isSendingMessage: p } = (0, h.wD)(),
        m = (0, r.e7)([o.Z], () => o.Z.useReducedMotion),
        S = a.useRef(null),
        { selectedSkuId: g } = (0, x.usePaymentContext)(),
        _ = (0, r.e7)([d.Z], () => d.Z.getProduct(g)),
        { confettiColors: N } = (0, c.Z)(null == _ ? void 0 : _.styles);
    return n
        ? (0, s.jsxs)('div', {
              ref: S,
              children: [
                  (0, s.jsx)(f.Z, {
                      giftCode: t,
                      onClose: e.handleClose,
                      selectedGiftStyle: l,
                      hasSentMessage: i,
                      giftRecipient: E,
                      giftMessageError: T,
                      isSendingMessage: p
                  }),
                  !e.hideConfetti &&
                      !m &&
                      (0, s.jsx)(u.Z, {
                          confettiTarget: S.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, C.vK)(null == _ ? void 0 : _.categorySkuId),
                          colors: null == N ? void 0 : N.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, s.jsx)(I, { ...e });
}
