t.d(n, {
    x: function () {
        return I;
    }
});
var s = t(735250),
    a = t(470079),
    l = t(512722),
    r = t.n(l),
    i = t(399606),
    o = t(607070),
    d = t(597688),
    c = t(624377),
    u = t(530618),
    E = t(331042),
    h = t(372654),
    C = t(987209),
    f = t(598),
    x = t(179118),
    p = t(614277),
    m = t(698708);
function T(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: a = !1, analyticsLocations: l } = e,
        { skusById: o, selectedSkuId: c, application: u } = (0, f.usePaymentContext)(),
        h = (0, i.e7)([d.Z], () => d.Z.getProduct(c));
    r()(null != c, 'Expected selectedSkuId'), r()(null != u, 'Expected application');
    let C = o[c];
    return (r()(null != C, 'Expected sku'), null == h)
        ? null
        : (0, s.jsxs)(p.C3, {
              children: [
                  (0, s.jsx)(m.Z, {}),
                  (0, s.jsx)(E.CollectiblesCollectedModalInner, {
                      product: h,
                      onClose: n,
                      confettiCanvas: t,
                      analyticsLocations: l,
                      hideConfetti: a
                  })
              ]
          });
}
function I(e) {
    let { isGift: n, giftCode: t, selectedGiftStyle: l, hasSentMessage: r, giftRecipient: E, giftMessageError: p, isSendingMessage: m } = (0, C.wD)(),
        I = (0, i.e7)([o.Z], () => o.Z.useReducedMotion),
        S = a.useRef(null),
        { selectedSkuId: v } = (0, f.usePaymentContext)(),
        g = (0, i.e7)([d.Z], () => d.Z.getProduct(v)),
        { confettiColors: _ } = (0, c.Z)(null == g ? void 0 : g.styles);
    return n
        ? (0, s.jsxs)('div', {
              ref: S,
              children: [
                  (0, s.jsx)(x.Z, {
                      giftCode: t,
                      onClose: e.handleClose,
                      selectedGiftStyle: l,
                      hasSentMessage: r,
                      giftRecipient: E,
                      giftMessageError: p,
                      isSendingMessage: m
                  }),
                  !e.hideConfetti &&
                      !I &&
                      (0, s.jsx)(u.Z, {
                          confettiTarget: S.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, h.vK)(null == g ? void 0 : g.categorySkuId),
                          colors: null == _ ? void 0 : _.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, s.jsx)(T, { ...e });
}
