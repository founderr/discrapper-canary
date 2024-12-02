n.d(r, {
    C3: function () {
        return f;
    },
    O3: function () {
        return h;
    },
    ZP: function () {
        return m;
    }
});
var l = n(200651),
    o = n(192379),
    t = n(120356),
    s = n.n(t),
    c = n(512722),
    a = n.n(c),
    i = n(995295),
    d = n(481060),
    u = n(563132),
    p = n(135970);
function m(e) {
    var r, n, t, c, i, m;
    let {
            header: f,
            isLargeModal: h,
            isDynamicModal: x,
            stepProps: N
        } = (function (e) {
            let { header: r, isLargeModal: n, isDynamicModal: l, ...o } = e;
            return {
                header: r,
                isLargeModal: n,
                isDynamicModal: l,
                stepProps: o
            };
        })(e),
        { step: _, stepConfigs: y, setBodyNode: b, setFooterNode: g, setModalOverlayNode: v, setReadySlideId: j } = (0, u.usePaymentContext)(),
        C = y.find((e) => e.key === _);
    o.useEffect(() => {
        v(null);
    }, [_, v]),
        a()(null != C, 'Unknown step for current payment flow.');
    let S = null !== (i = null == C ? void 0 : null === (r = C.options) || void 0 === r ? void 0 : r.hideSlider) && void 0 !== i && i,
        E = null == C ? void 0 : null === (n = C.options) || void 0 === n ? void 0 : n.bodyClassName,
        I = null == C ? void 0 : null === (t = C.options) || void 0 === t ? void 0 : t.sliderBodyClassName;
    return (
        void 0 !== h && h ? (I = p.sliderBodyLarge) : x && (I = p.sliderBodyDynamic),
        (0, l.jsxs)(l.Fragment, {
            children: [
                null === (m = null == C ? void 0 : null === (c = C.options) || void 0 === c ? void 0 : c.renderHeader) || void 0 === m || m ? f : null,
                C.renderStep(N),
                null == _ || S
                    ? null
                    : (0, l.jsxs)(l.Fragment, {
                          children: [
                              (0, l.jsx)(d.ModalContent, {
                                  className: s()(p.body, E),
                                  children: (0, l.jsx)(d.Slides, {
                                      activeSlide: _,
                                      centered: !1,
                                      onSlideReady: (e) => j(e),
                                      children: y
                                          .filter((e) => null != e.key)
                                          .map((e) =>
                                              (0, l.jsx)(
                                                  d.Slide,
                                                  {
                                                      id: e.key,
                                                      children: (0, l.jsx)('form', {
                                                          className: s()(p.sliderBody, I),
                                                          ref: (e) => b(e),
                                                          onSubmit: (e) => e.preventDefault()
                                                      })
                                                  },
                                                  e.key
                                              )
                                          )
                                  })
                              }),
                              (0, l.jsx)('div', { ref: (e) => g(e) }),
                              (0, l.jsx)('div', { ref: (e) => v(e) })
                          ]
                      })
            ]
        })
    );
}
function f(e) {
    let { children: r } = e,
        { bodyNode: n } = (0, u.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
function h(e) {
    let { children: r } = e,
        { footerNode: n } = (0, u.usePaymentContext)();
    return null == n ? null : i.createPortal(r, n);
}
