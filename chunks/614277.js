n.d(t, {
    C3: function () {
        return h;
    },
    O3: function () {
        return p;
    },
    ZP: function () {
        return f;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(512722),
    l = n.n(s),
    u = n(699581),
    c = n(481060),
    d = n(598),
    _ = n(130298);
function E(e) {
    let { header: t, isLargeModal: n, ...r } = e;
    return {
        header: t,
        isLargeModal: n,
        stepProps: r
    };
}
function f(e) {
    var t, n, a, s, u, f;
    let { header: h, isLargeModal: p, stepProps: m } = E(e),
        { step: I, stepConfigs: T, setBodyNode: g, setFooterNode: S, setModalOverlayNode: A, setReadySlideId: v } = (0, d.usePaymentContext)(),
        N = T.find((e) => e.key === I);
    i.useEffect(() => {
        A(null);
    }, [I, A]),
        l()(null != N, 'Unknown step for current payment flow.');
    let O = null !== (u = null == N ? void 0 : null === (t = N.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
        R = null == N ? void 0 : null === (n = N.options) || void 0 === n ? void 0 : n.bodyClassName,
        C = void 0 !== p && p ? _.sliderBodyLarge : null == N ? void 0 : null === (a = N.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null === (f = null == N ? void 0 : null === (s = N.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === f || f ? h : null,
            N.renderStep(m),
            null == I || O
                ? null
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.ModalContent, {
                              className: o()(_.body, R),
                              children: (0, r.jsx)(c.Slides, {
                                  activeSlide: I,
                                  centered: !1,
                                  onSlideReady: (e) => v(e),
                                  children: T.filter((e) => null != e.key).map((e) =>
                                      (0, r.jsx)(
                                          c.Slide,
                                          {
                                              id: e.key,
                                              children: (0, r.jsx)('form', {
                                                  className: o()(_.sliderBody, C),
                                                  ref: (e) => g(e),
                                                  onSubmit: (e) => e.preventDefault()
                                              })
                                          },
                                          e.key
                                      )
                                  )
                              })
                          }),
                          (0, r.jsx)('div', { ref: (e) => S(e) }),
                          (0, r.jsx)('div', { ref: (e) => A(e) })
                      ]
                  })
        ]
    });
}
function h(e) {
    let { children: t } = e,
        { bodyNode: n } = (0, d.usePaymentContext)();
    return null == n ? null : u.createPortal(t, n);
}
function p(e) {
    let { children: t } = e,
        { footerNode: n } = (0, d.usePaymentContext)();
    return null == n ? null : u.createPortal(t, n);
}
