n.d(t, {
    x: function () {
        return p;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(512722),
    r = n.n(s),
    l = n(399606),
    o = n(607070),
    c = n(597688),
    u = n(624377),
    d = n(530618),
    _ = n(331042),
    E = n(372654),
    I = n(987209),
    m = n(598),
    T = n(179118),
    f = n(614277),
    h = n(698708);
function N(e) {
    let { handleClose: t, confettiCanvas: n, hideConfetti: a = !1, analyticsLocations: s } = e,
        { skusById: o, selectedSkuId: u, application: d } = (0, m.usePaymentContext)(),
        E = (0, l.e7)([c.Z], () => c.Z.getProduct(u));
    r()(null != u, 'Expected selectedSkuId'), r()(null != d, 'Expected application');
    let I = o[u];
    return (r()(null != I, 'Expected sku'), null == E)
        ? null
        : (0, i.jsxs)(f.C3, {
              children: [
                  (0, i.jsx)(h.Z, {}),
                  (0, i.jsx)(_.CollectiblesCollectedModalInner, {
                      product: E,
                      onClose: t,
                      confettiCanvas: n,
                      analyticsLocations: s,
                      hideConfetti: a
                  })
              ]
          });
}
function p(e) {
    let { isGift: t, giftCode: n, selectedGiftStyle: s, hasSentMessage: r, giftRecipient: _, giftMessageError: f, isSendingMessage: h } = (0, I.wD)(),
        p = (0, l.e7)([o.Z], () => o.Z.useReducedMotion),
        C = a.useRef(null),
        { selectedSkuId: g } = (0, m.usePaymentContext)(),
        S = (0, l.e7)([c.Z], () => c.Z.getProduct(g)),
        { confettiColors: A } = (0, u.Z)(null == S ? void 0 : S.styles);
    return t
        ? (0, i.jsxs)('div', {
              ref: C,
              children: [
                  (0, i.jsx)(T.Z, {
                      giftCode: n,
                      onClose: e.handleClose,
                      selectedGiftStyle: s,
                      hasSentMessage: r,
                      giftRecipient: _,
                      giftMessageError: f,
                      isSendingMessage: h
                  }),
                  !e.hideConfetti &&
                      !p &&
                      (0, i.jsx)(d.Z, {
                          confettiTarget: C.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, E.vK)(null == S ? void 0 : S.categorySkuId),
                          colors: null == A ? void 0 : A.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(N, { ...e });
}
