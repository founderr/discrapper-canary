t.d(n, {
    x: function () {
        return j;
    }
});
var i = t(200651),
    l = t(192379),
    r = t(512722),
    a = t.n(r),
    s = t(399606),
    o = t(607070),
    d = t(597688),
    c = t(624377),
    u = t(530618),
    h = t(331042),
    m = t(372654),
    f = t(987209),
    x = t(563132),
    v = t(179118),
    p = t(614277),
    g = t(698708);
function C(e) {
    let { handleClose: n, confettiCanvas: t, hideConfetti: l = !1, analyticsLocations: r } = e,
        { skusById: o, selectedSkuId: c, application: u } = (0, x.usePaymentContext)(),
        m = (0, s.e7)([d.Z], () => d.Z.getProduct(c));
    a()(null != c, 'Expected selectedSkuId'), a()(null != u, 'Expected application');
    let f = o[c];
    return (a()(null != f, 'Expected sku'), null == m)
        ? null
        : (0, i.jsxs)(p.C3, {
              children: [
                  (0, i.jsx)(g.Z, {}),
                  (0, i.jsx)(h.CollectiblesCollectedModalInner, {
                      product: m,
                      onClose: n,
                      confettiCanvas: t,
                      analyticsLocations: r,
                      hideConfetti: l
                  })
              ]
          });
}
function j(e) {
    let { isGift: n, giftCode: t, selectedGiftStyle: r, hasSentMessage: a, giftRecipient: h, giftMessageError: p, isSendingMessage: g } = (0, f.wD)(),
        j = (0, s.e7)([o.Z], () => o.Z.useReducedMotion),
        I = l.useRef(null),
        { selectedSkuId: T } = (0, x.usePaymentContext)(),
        E = (0, s.e7)([d.Z], () => d.Z.getProduct(T)),
        { confettiColors: N } = (0, c.Z)(null == E ? void 0 : E.styles);
    return n
        ? (0, i.jsxs)('div', {
              ref: I,
              children: [
                  (0, i.jsx)(v.Z, {
                      giftCode: t,
                      onClose: e.handleClose,
                      selectedGiftStyle: r,
                      hasSentMessage: a,
                      giftRecipient: h,
                      giftMessageError: p,
                      isSendingMessage: g
                  }),
                  !e.hideConfetti &&
                      !j &&
                      (0, i.jsx)(u.Z, {
                          confettiTarget: I.current,
                          confettiCanvas: e.confettiCanvas,
                          sprites: (0, m.vK)(null == E ? void 0 : E.categorySkuId),
                          colors: null == N ? void 0 : N.map((e) => e.toHexString())
                      })
              ]
          })
        : (0, i.jsx)(C, { ...e });
}
